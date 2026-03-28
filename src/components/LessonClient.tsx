"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ExerciseCheck, Lesson } from "@/lib/curriculum";
import { Markdown } from "@/components/Markdown";
import { CodeEditor } from "@/components/CodeEditor";
import { SandboxRunner } from "@/components/SandboxRunner";
import { PythonRunner } from "@/components/PythonRunner";
import { SQLRunner } from "@/components/SQLRunner";
import { useProgress } from "@/lib/progress";
import { dbRecordAttempt } from "@/lib/db";
import { getActiveProfileId } from "@/lib/profiles";
import { useAdaptiveLearning } from "@/lib/adaptive";
import { AdaptivePanel } from "@/components/AdaptivePanel";
import { PracticeGenerator } from "@/components/PracticeGenerator";
import { ConfettiCelebration } from "@/components/ConfettiCelebration";
import { PaywallOverlay } from "@/components/PaywallOverlay";
import { useSubscription } from "@/lib/subscription";
import { playClick, playSuccess, playError } from "@/lib/sounds";

type CheckState =
  | { status: "idle" }
  | { status: "running" }
  | { status: "passed" }
  | { status: "failed"; message: string };

function normalize(str: string) {
  return str.replaceAll("\r\n", "\n");
}

function checkContains(code: string, check: Extract<ExerciseCheck, { kind: "contains" }>) {
  const hay = check.caseSensitive ? code : code.toLowerCase();
  const needles = check.caseSensitive
    ? check.needles
    : check.needles.map((n) => n.toLowerCase());
  const missing = needles.filter((n) => !hay.includes(n));
  return missing.length === 0
    ? { ok: true as const }
    : { ok: false as const, message: `Fehlt noch: ${missing.join(", ")}` };
}

export function LessonClient({ lesson, isFree = true }: { lesson: Lesson; isFree?: boolean }) {
  const { isPremium, loading: subLoading } = useSubscription();
  const { completeLesson, isLessonCompleted } = useProgress();
  const alreadyDone = isLessonCompleted(lesson.id);
  const { getDifficulty } = useAdaptiveLearning();
  const lessonDifficulty = getDifficulty(lesson.id);

  // ML: track time spent and attempt count for adaptive learning
  const startedAtRef = useRef<number>(Date.now());
  const attemptCountRef = useRef<number>(0);

  const [showConfetti, setShowConfetti] = useState(false);
  const [code, setCode] = useState(lesson.exercise.starterCode);
  const [runSignal, setRunSignal] = useState(0);
  const [lastJsLogs, setLastJsLogs] = useState<string[]>([]);
  const [lastJsErrors, setLastJsErrors] = useState<string[]>([]);
  const [lastJsDone, setLastJsDone] = useState(false);
  const [lastPyStdout, setLastPyStdout] = useState("");
  const [lastPyError, setLastPyError] = useState<string | undefined>(undefined);
  const [lastPyDone, setLastPyDone] = useState(false);
  const [lastSqlStdout, setLastSqlStdout] = useState("");
  const [lastSqlError, setLastSqlError] = useState<string | undefined>(undefined);
  const [lastSqlDone, setLastSqlDone] = useState(false);
  const [pendingCheck, setPendingCheck] = useState(false);
  const [checkState, setCheckState] = useState<CheckState>({ status: "idle" });

  const expected = useMemo(() => {
    if (lesson.exercise.check.kind === "js_console_includes") {
      return lesson.exercise.check.expected;
    }
    if (lesson.exercise.check.kind === "python_stdout_includes") {
      return lesson.exercise.check.expected;
    }
    if (lesson.exercise.check.kind === "sql_result_includes") {
      return lesson.exercise.check.expected;
    }
    return null;
  }, [lesson.exercise.check]);

  function validateFromOutputs() {
    const check = lesson.exercise.check;
    if (check.kind === "contains") {
      const res = checkContains(code, check);
      return res.ok
        ? { ok: true as const }
        : { ok: false as const, message: res.message };
    }

    if (check.kind === "js_console_includes") {
      const joined = normalize([...lastJsLogs, ...lastJsErrors].join("\n"));
      return joined.includes(check.expected)
        ? { ok: true as const }
        : {
            ok: false as const,
            message:
              "Ich finde den erwarteten Text noch nicht in der Konsole. Tipp: `console.log(...)` benutzen.",
          };
    }

    if (check.kind === "python_stdout_includes") {
      const joined = normalize(`${lastPyError ? `Fehler:\n${lastPyError}\n` : ""}${lastPyStdout}`);
      return joined.includes(check.expected)
        ? { ok: true as const }
        : {
            ok: false as const,
            message:
              "Ich finde den erwarteten Text noch nicht in der Ausgabe. Tipp: `print(...)` benutzen.",
          };
    }

    if (check.kind === "sql_result_includes") {
      const joined = normalize(`${lastSqlError ? `Fehler:\n${lastSqlError}\n` : ""}${lastSqlStdout}`);
      return joined.includes(check.expected)
        ? { ok: true as const }
        : {
            ok: false as const,
            message:
              "Das erwartete Ergebnis steht noch nicht in der Tabelle. Prüfe deine SQL-Abfrage.",
          };
    }

    return { ok: false as const, message: "Unbekannter Check." };
  }

  function run() {
    setCheckState({ status: "idle" });
    setPendingCheck(false);
    setLastJsDone(false);
    setLastPyDone(false);
    setLastSqlDone(false);
    setLastJsLogs([]);
    setLastJsErrors([]);
    setLastPyStdout("");
    setLastPyError(undefined);
    setLastSqlStdout("");
    setLastSqlError(undefined);
    setRunSignal((s) => s + 1);
  }

  function checkNow() {
    const check = lesson.exercise.check;
    if (check.kind === "contains") {
      attemptCountRef.current += 1;
      const res = validateFromOutputs();
      const timeSpent = Math.round((Date.now() - startedAtRef.current) / 1000);
      void dbRecordAttempt(getActiveProfileId(), lesson.id, lesson.trackId, res.ok, timeSpent, attemptCountRef.current);
      if (res.ok) {
        setCheckState({ status: "passed" });
        completeLesson(lesson);
        playSuccess();
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3500);
      } else {
        setCheckState({ status: "failed", message: res.message });
        playError();
      }
      return;
    }

    attemptCountRef.current += 1;
    setCheckState({ status: "running" });
    setPendingCheck(true);
    setLastJsDone(false);
    setLastPyDone(false);
    setLastSqlDone(false);
    setLastJsLogs([]);
    setLastJsErrors([]);
    setLastPyStdout("");
    setLastPyError(undefined);
    setLastSqlStdout("");
    setLastSqlError(undefined);
    setRunSignal((s) => s + 1);
  }

  useEffect(() => {
    if (!pendingCheck) return;
    const kind = lesson.exercise.check.kind;
    if (kind === "js_console_includes" && !lastJsDone) return;
    if (kind === "python_stdout_includes" && !lastPyDone) return;
    if (kind === "sql_result_includes" && !lastSqlDone) return;
    const res = validateFromOutputs();
    const timeSpent = Math.round((Date.now() - startedAtRef.current) / 1000);
    void dbRecordAttempt(getActiveProfileId(), lesson.id, lesson.trackId, res.ok, timeSpent, attemptCountRef.current);
    if (res.ok) {
      setCheckState({ status: "passed" });
      setPendingCheck(false);
      completeLesson(lesson);
      playSuccess();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3500);
    } else {
      setCheckState({ status: "failed", message: res.message });
      setPendingCheck(false);
      playError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    pendingCheck,
    lastJsLogs,
    lastJsErrors,
    lastJsDone,
    lastPyStdout,
    lastPyError,
    lastPyDone,
    lastSqlStdout,
    lastSqlError,
    lastSqlDone,
  ]);

  // Paywall: nicht-freie Lektion + kein Premium-Abo + Auth-Loading abgeschlossen
  if (!isFree && !subLoading && !isPremium) {
    return <PaywallOverlay />;
  }

  return (
    <>
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
      <div className="space-y-6">
        <section className="block-card block-card--stone p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-pixel text-[8px] leading-loose text-zinc-400">
                {lesson.minutes} min · {lesson.xp} XP
              </div>
              <h1 className="mt-2 text-xl font-semibold text-white leading-snug">
                {lesson.title}
              </h1>
              <p className="mt-2 text-sm text-zinc-300">{lesson.summary}</p>
            </div>
            {alreadyDone ? (
              <span className="status-pill--done">✓ Gemeistert!</span>
            ) : null}
          </div>
          <div className="mt-4">
            <Markdown md={lesson.contentMd} />
          </div>
        </section>

        <section className="block-card block-card--wood p-5">
          <h2 className="font-pixel text-[10px] leading-loose text-white">
            ⚒️ Aufgabe: {lesson.exercise.title}
          </h2>
          <div className="mt-3">
            <Markdown md={lesson.exercise.instructionsMd} />
          </div>
          {lesson.exercise.hintMd ? (
            <details className="mt-4 crafting-panel p-4">
              <summary className="cursor-pointer font-pixel text-[9px] leading-loose text-[#44F7E0]">
                💡 Tipp-Stein
              </summary>
              <div className="mt-3">
                <Markdown md={lesson.exercise.hintMd} />
              </div>
            </details>
          ) : null}

          {lesson.exercise.solutionCode ? (
            <details className="mt-3 crafting-panel p-4">
              <summary className="cursor-pointer font-pixel text-[9px] leading-loose text-[#FFD700]">
                📖 Rezept-Buch (für Eltern / später)
              </summary>
              <pre className="mt-3 overflow-auto rounded bg-black/40 p-3 font-mono text-sm leading-6 text-zinc-50">
                {lesson.exercise.solutionCode}
              </pre>
            </details>
          ) : null}
        </section>
      </div>

      <div className="space-y-4">
        <CodeEditor
          lessonId={lesson.id}
          language={lesson.exercise.language}
          initialCode={lesson.exercise.starterCode}
          onChange={setCode}
        />

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs text-zinc-400">
            {expected ? (
              <span>
                Erwartet: <span className="font-semibold text-zinc-200">{expected}</span>
              </span>
            ) : (
              <span>Check: Struktur prüfen</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="btn-pixel btn-pixel--stone px-4 py-2.5"
              onMouseDown={() => playClick()}
              onClick={run}
            >
              ⚒️ Bauen!
            </button>
            <button
              type="button"
              className="btn-pixel btn-pixel--gold px-4 py-2.5 disabled:opacity-40"
              onMouseDown={() => playClick()}
              onClick={checkNow}
              disabled={alreadyDone}
            >
              ⭐ Einreichen!
            </button>
          </div>
        </div>

        {checkState.status === "failed" ? (
          <div className="block-card block-card--red p-4 text-sm text-zinc-100">
            💥 Fehler im Code! {checkState.message}
          </div>
        ) : null}
        {checkState.status === "passed" ? (
          <div className="block-card block-card--grass p-4 text-sm text-zinc-100 inventory-unlock">
            🎉 Mission gemeistert! Du bekommst {lesson.xp} XP!
          </div>
        ) : null}
        {checkState.status === "passed" && lessonDifficulty && lessonDifficulty.label !== "leicht" ? (
          <PracticeGenerator lesson={lesson} difficulty={lessonDifficulty.label} />
        ) : null}
        {checkState.status === "running" ? (
          <div className="block-card block-card--stone p-4 text-sm text-zinc-200">
            <span className="pixel-blink">⚒️</span> Prüfe gerade…
          </div>
        ) : null}

        {lesson.exercise.language === "html" ? (
          <SandboxRunner mode="html" code={code} runSignal={runSignal} />
        ) : null}

        {lesson.exercise.language === "javascript" ? (
          <SandboxRunner
            key={`js_${runSignal}`}
            mode="javascript"
            code={code}
            runSignal={runSignal}
            onResult={(r) => {
              setLastJsLogs(r.logs);
              setLastJsErrors(r.errors);
              setLastJsDone(r.done);
            }}
          />
        ) : null}

        {lesson.exercise.language === "react" ? (
          <SandboxRunner
            key={`react_${runSignal}`}
            mode="react"
            code={code}
            runSignal={runSignal}
            onResult={(r) => {
              setLastJsLogs(r.logs);
              setLastJsErrors(r.errors);
              setLastJsDone(r.done);
            }}
          />
        ) : null}

        {lesson.exercise.language === "python" ? (
          <PythonRunner
            key={`py_${runSignal}`}
            code={code}
            runSignal={runSignal}
            onResult={(r) => {
              setLastPyStdout(r.stdout);
              setLastPyError(r.error);
              setLastPyDone(true);
            }}
          />
        ) : null}

        {lesson.exercise.language === "sql" ? (
          <SQLRunner
            key={`sql_${runSignal}`}
            code={code}
            runSignal={runSignal}
            onResult={(r) => {
              setLastSqlStdout(r.stdout);
              setLastSqlError(r.error);
              setLastSqlDone(r.done);
            }}
          />
        ) : null}
      </div>
    </div>
    {checkState.status === "passed" ? <AdaptivePanel /> : null}
    <ConfettiCelebration active={showConfetti} />
    </>
  );
}
