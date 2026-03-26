"use client";

/**
 * AI-powered practice generator.
 * Shown in the lesson page when the child is struggling.
 * Calls the Supabase Edge Function to generate a custom exercise via OpenAI.
 */

import { useState } from "react";
import type { Lesson } from "@/lib/curriculum";
import type { DifficultyLabel } from "@/lib/adaptive";
import { generatePracticeExercise, type GeneratedExercise } from "@/lib/practice";
import { Markdown } from "@/components/Markdown";
import { useAuth } from "@/lib/auth";

type Props = {
  lesson: Lesson;
  difficulty: DifficultyLabel;
};

export function PracticeGenerator({ lesson, difficulty }: Props) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [exercise, setExercise] = useState<GeneratedExercise | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  // Only show if logged in and the lesson was difficult
  if (!user || difficulty === "leicht") return null;

  async function generate() {
    setLoading(true);
    setError(null);
    setExercise(null);
    setShowSolution(false);
    const result = await generatePracticeExercise(lesson, difficulty);
    if (!result) {
      setError("KI konnte keine Übung erstellen. Stelle sicher dass die Edge Function deployed ist.");
    } else {
      setExercise(result);
    }
    setLoading(false);
  }

  return (
    <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-violet-500/5 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold text-violet-300 uppercase tracking-wide mb-1">
            🤖 KI-Trainingsübung
          </div>
          <p className="text-sm text-zinc-300">
            Diese Quest scheint schwierig für dich zu sein. Lass dir eine einfachere Übung zum gleichen Thema erstellen!
          </p>
        </div>
        {!exercise && (
          <button
            type="button"
            onClick={() => void generate()}
            disabled={loading}
            className="shrink-0 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-bold text-white hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
          >
            {loading ? "⏳ Erstelle…" : "✨ Übung erstellen"}
          </button>
        )}
      </div>

      {error && (
        <div className="mt-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-300">
          {error}
        </div>
      )}

      {exercise && (
        <div className="mt-4 space-y-4">
          {/* Explanation */}
          {exercise.explanation && (
            <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 px-4 py-3 text-sm text-violet-200">
              💡 {exercise.explanation}
            </div>
          )}

          {/* Instructions */}
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <div className="text-sm font-bold text-white mb-2">{exercise.title}</div>
            <Markdown md={exercise.instructionsMd} />
          </div>

          {/* Starter code */}
          <div>
            <div className="text-xs font-semibold text-zinc-400 mb-1">Starter-Code:</div>
            <pre className="overflow-auto rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-sm leading-6 text-zinc-50">
              {exercise.starterCode}
            </pre>
          </div>

          {/* Hint */}
          {exercise.hintMd && (
            <details className="rounded-xl border border-white/10 bg-black/20 p-3">
              <summary className="cursor-pointer text-sm font-semibold text-zinc-200">💡 Hinweis</summary>
              <div className="mt-2">
                <Markdown md={exercise.hintMd} />
              </div>
            </details>
          )}

          {/* Solution */}
          <details
            open={showSolution}
            onToggle={(e) => setShowSolution((e.target as HTMLDetailsElement).open)}
            className="rounded-xl border border-white/10 bg-black/20 p-3"
          >
            <summary className="cursor-pointer text-sm font-semibold text-zinc-200">
              🔍 Lösung anzeigen
            </summary>
            <pre className="mt-2 overflow-auto rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-sm leading-6 text-zinc-50">
              {exercise.solutionCode}
            </pre>
          </details>

          {/* Generate another */}
          <button
            type="button"
            onClick={() => void generate()}
            disabled={loading}
            className="text-xs text-zinc-400 hover:text-zinc-200 underline"
          >
            {loading ? "⏳" : "🔄 Andere Übung generieren"}
          </button>
        </div>
      )}
    </div>
  );
}
