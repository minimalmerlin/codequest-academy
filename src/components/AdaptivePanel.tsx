"use client";

/**
 * Adaptive learning panel – shown after a lesson is completed.
 * Shows weak areas, difficulty feedback, and personalized next-lesson recommendation.
 */

import Link from "next/link";
import { useAdaptiveLearning } from "@/lib/adaptive";

const ACTION_CONFIG = {
  wiederholen: { icon: "🔄", label: "Nochmal üben",    color: "amber" },
  vertiefe:    { icon: "🧩", label: "Vertiefen",        color: "orange" },
  durchatmen:  { icon: "😤", label: "Kurze Pause",      color: "rose" },
} as const;

const DIFFICULTY_BADGE = {
  leicht: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  mittel: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  schwer: "bg-rose-500/15 text-rose-300 border-rose-500/30",
};

export function AdaptivePanel() {
  const { loading, weakAreas, recommendation } = useAdaptiveLearning();

  if (loading) return null;

  // Only render if there's something meaningful to show
  const hasWeakAreas = weakAreas.length > 0;
  const hasRecommendation = recommendation !== null;
  if (!hasWeakAreas && !hasRecommendation) return null;

  return (
    <div className="mt-6 space-y-4">
      {/* Adaptive recommendation */}
      {recommendation && (
        <div className={`rounded-3xl border p-5 ${
          recommendation.boost
            ? "border-violet-500/40 bg-gradient-to-br from-violet-500/15 to-violet-500/5"
            : "border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-indigo-500/5"
        }`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1">
                {recommendation.boost ? "🚀 Boost-Quest" : "⭐ Empfehlung"}
              </div>
              <div className="text-sm text-zinc-300 mb-2">{recommendation.reason}</div>
              <div className="text-base font-bold text-white">{recommendation.lesson.title}</div>
              <div className="mt-1 flex gap-3 text-xs text-zinc-400">
                <span>⏱️ {recommendation.lesson.minutes} Min</span>
                <span>💎 +{recommendation.lesson.xp} XP</span>
              </div>
            </div>
            <Link
              href={`/learn/${recommendation.trackId}/${recommendation.lesson.id}`}
              className="shrink-0 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-bold text-white hover:opacity-90 transition-opacity"
            >
              Los →
            </Link>
          </div>
        </div>
      )}

      {/* Weak areas */}
      {hasWeakAreas && (
        <details className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <summary className="cursor-pointer text-sm font-semibold text-white">
            🧠 Deine Lern-Analyse ({weakAreas.length} Bereich{weakAreas.length > 1 ? "e" : ""} zum Verbessern)
          </summary>
          <div className="mt-4 space-y-3">
            {weakAreas.map(({ lesson, difficulty, action }) => {
              const cfg = ACTION_CONFIG[action];
              return (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-bold ${DIFFICULTY_BADGE[difficulty.label]}`}>
                      {difficulty.label}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-white">{lesson.title}</div>
                      <div className="text-xs text-zinc-400">
                        {Math.round(difficulty.successRate * 100)}% Erfolg · ⌀ {difficulty.avgAttempts.toFixed(1)} Versuche
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/learn/${lesson.trackId}/${lesson.id}`}
                    className="shrink-0 flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:bg-white/10"
                  >
                    {cfg.icon} {cfg.label}
                  </Link>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Diese Quests haben dir mehr Mühe gemacht als andere. Nochmals üben festigt das Wissen!
          </p>
        </details>
      )}
    </div>
  );
}
