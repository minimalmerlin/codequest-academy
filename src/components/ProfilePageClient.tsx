"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { TRACKS } from "@/lib/curriculum";
import {
  getActiveProfileId,
  getProfilesSnapshot,
  renameProfile,
  subscribeProfiles,
} from "@/lib/profiles";
import { useProgress } from "@/lib/progress";
import { useAdaptiveLearning } from "@/lib/adaptive";

// Captured at module load — used as fallback for profiles with "init" createdAt
const MODULE_LOAD_TIME = Date.now();

const TRACK_COLORS: Record<string, { bar: string; badge: string; text: string }> = {
  web:    { bar: "bg-indigo-500",  badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",  text: "text-indigo-300" },
  js:     { bar: "bg-amber-500",   badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",    text: "text-amber-300" },
  python: { bar: "bg-emerald-500", badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300", text: "text-emerald-300" },
  ki:     { bar: "bg-violet-500",  badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",  text: "text-violet-300" },
};

export function ProfilePageClient() {
  // ── Reactive profile list ───────────────────────────────────────────────────
  const profiles = useSyncExternalStore(
    subscribeProfiles,
    getProfilesSnapshot,
    getProfilesSnapshot,
  );
  const profileId = useSyncExternalStore(
    subscribeProfiles,
    getActiveProfileId,
    getActiveProfileId,
  );

  const profile = profiles.find((p) => p.id === profileId);

  // ── Progress + Adaptive data ────────────────────────────────────────────────
  const { progress, level, trackStats, badges } = useProgress();
  const { loading: adaptiveLoading, weakAreas } = useAdaptiveLearning();

  // ── Name editing ────────────────────────────────────────────────────────────
  const [editing, setEditing] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function startEdit() {
    setNameInput(profile?.name ?? "");
    setEditing(true);
  }

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  function saveName() {
    const cleaned = nameInput.trim();
    if (cleaned && cleaned !== profile?.name) {
      renameProfile(profileId, cleaned);
    }
    setEditing(false);
  }

  const memberSinceDate = useMemo(
    () => new Date(profile?.createdAt === "init" || !profile ? MODULE_LOAD_TIME : profile.createdAt),
    [profile],
  );

  if (!profile) {
    return (
      <div className="mx-auto w-full max-w-lg px-4 py-20 text-center">
        <p className="text-zinc-400">Profil nicht gefunden.</p>
        <Link href="/dashboard" className="mt-4 inline-block text-sm text-violet-400 underline">
          ← Zum Dashboard
        </Link>
      </div>
    );
  }

  const xpToNextLevel = 200 - (progress.xp % 200);
  const xpProgress = ((progress.xp % 200) / 200) * 100;
  const totalCompleted = Object.keys(progress.completedLessons).length;
  const totalLessons = TRACKS.reduce((acc, t) => acc + t.lessons.length, 0);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 space-y-6">

      {/* ── Back ──────────────────────────────────────────────────────────── */}
      <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white">
        ← Dashboard
      </Link>

      {/* ── Profile Header ────────────────────────────────────────────────── */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-3xl shadow-lg shadow-violet-500/30">
            🧒
          </div>
          <div className="flex-1 min-w-0">
            {editing ? (
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveName();
                    if (e.key === "Escape") setEditing(false);
                  }}
                  maxLength={32}
                  className="rounded-xl border border-violet-500/50 bg-black/30 px-3 py-1.5 text-xl font-bold text-white outline-none focus:ring-2 focus:ring-violet-500/50 w-full max-w-xs"
                />
                <button
                  type="button"
                  onClick={saveName}
                  className="rounded-xl bg-violet-600 px-3 py-1.5 text-sm font-bold text-white hover:bg-violet-500"
                >
                  Speichern
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="rounded-xl border border-white/10 px-3 py-1.5 text-sm text-zinc-400 hover:text-white"
                >
                  Abbrechen
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-white truncate">{profile.name}</h1>
                <button
                  type="button"
                  onClick={startEdit}
                  className="rounded-lg p-1 text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
                  title="Name ändern"
                >
                  ✏️
                </button>
              </div>
            )}
            <p className="mt-0.5 text-sm text-zinc-400">
              Mitglied seit {memberSinceDate.toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        {/* XP Level Bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-violet-300">Level {level}</span>
            <span className="text-xs text-zinc-400">{xpToNextLevel} XP bis Level {level + 1}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Stats Row ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: "Gesamt XP", value: progress.xp.toLocaleString("de-DE"), icon: "⭐" },
          { label: "Streak", value: `${progress.streakDays} Tage`, icon: "🔥" },
          { label: "Quests", value: `${totalCompleted}/${totalLessons}`, icon: "✅" },
        ].map(({ label, value, icon }) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl mb-1">{icon}</div>
            <div className="text-lg font-bold text-white">{value}</div>
            <div className="text-xs text-zinc-400 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* ── Track Progress ────────────────────────────────────────────────── */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-base font-bold text-white mb-4">📚 Fortschritt pro Track</h2>
        <div className="space-y-4">
          {TRACKS.map((track) => {
            const { completed, total } = trackStats(track.id);
            const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
            const colors = TRACK_COLORS[track.id] ?? TRACK_COLORS.web!;
            const hasBadge = badges[track.id];
            return (
              <div key={track.id}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span>{track.emoji}</span>
                    <span className={`text-sm font-semibold ${colors.text}`}>{track.title}</span>
                    {hasBadge && (
                      <span className={`rounded-full border px-1.5 py-0.5 text-xs font-bold ${colors.badge}`}>
                        🏆 Abgeschlossen
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-400">{completed}/{total} Quests</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${colors.bar} transition-all duration-500`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Difficulty Stats ──────────────────────────────────────────────── */}
      {!adaptiveLoading && (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-base font-bold text-white mb-4">🧠 Lern-Analyse</h2>
          {weakAreas.length === 0 ? (
            <p className="text-sm text-zinc-400">
              Noch nicht genug Daten. Schließe mindestens 2 Quests ab um deine persönliche Analyse zu sehen.
            </p>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-zinc-400 mb-3">
                Quests wo du noch Übungsbedarf hast:
              </p>
              {weakAreas.slice(0, 5).map((area) => {
                const diff = area.difficulty;
                return (
                  <div key={area.lesson.id} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold text-white">{area.lesson.title}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {`${Math.round(diff.successRate * 100)}% Erfolgsrate · ${diff.totalAttempts} Versuche`}
                      </div>
                    </div>
                    <Link
                      href={`/learn/${diff.trackId}/${area.lesson.id}`}
                      className="shrink-0 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15"
                    >
                      Wiederholen →
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Badges ────────────────────────────────────────────────────────── */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-base font-bold text-white mb-4">🏆 Abzeichen</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {TRACKS.map((track) => {
            const earned = badges[track.id];
            const colors = TRACK_COLORS[track.id] ?? TRACK_COLORS.web!;
            return (
              <div
                key={track.id}
                className={`rounded-2xl border p-4 text-center transition-all ${
                  earned
                    ? `${colors.badge} shadow-lg`
                    : "border-white/5 bg-white/3 opacity-40"
                }`}
              >
                <div className="text-3xl mb-2">{track.emoji}</div>
                <div className={`text-xs font-bold ${earned ? "" : "text-zinc-500"}`}>
                  {track.title}
                </div>
                <div className="text-xs mt-0.5 opacity-70">
                  {earned ? "✓ Verdient" : "Noch nicht"}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
