"use client";

/**
 * Adaptive learning panel – shown after a lesson is completed.
 * Shows weak areas, difficulty feedback, and personalized next-lesson recommendation.
 */

import Link from "next/link";
import { useAdaptiveLearning } from "@/lib/adaptive";

const ACTION_CONFIG = {
  wiederholen: { icon: "🔄", label: "Nochmal üben",    blockClass: "block-card--gold"  },
  vertiefe:    { icon: "🧩", label: "Vertiefen",        blockClass: "block-card--blue"  },
  durchatmen:  { icon: "😤", label: "Kurze Pause",      blockClass: "block-card--stone" },
} as const;

const DIFFICULTY_BADGE = {
  leicht: "status-pill--done",
  mittel: "status-pill--open",
  schwer: "status-pill--open",
};

export function AdaptivePanel() {
  const { loading, weakAreas, recommendation } = useAdaptiveLearning();

  if (loading) return null;

  const hasWeakAreas = weakAreas.length > 0;
  const hasRecommendation = recommendation !== null;
  if (!hasWeakAreas && !hasRecommendation) return null;

  return (
    <div className="mt-6 space-y-4">
      {/* Empfehlung */}
      {recommendation && (
        <div className={`block-card ${recommendation.boost ? "block-card--diamond" : "block-card--blue"} p-5`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-pixel text-[8px] leading-loose text-zinc-300 mb-1">
                {recommendation.boost ? "🚀 Boost-Mission" : "⭐ Empfehlung"}
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
              className="shrink-0 btn-pixel btn-pixel--green px-4 py-2"
            >
              Los →
            </Link>
          </div>
        </div>
      )}

      {/* Schwächen-Analyse */}
      {hasWeakAreas && (
        <details className="block-card block-card--dirt p-5">
          <summary className="cursor-pointer font-pixel text-[9px] leading-loose text-white">
            🧠 Lern-Analyse ({weakAreas.length} Bereich{weakAreas.length > 1 ? "e" : ""} zum Verbessern)
          </summary>
          <div className="mt-4 space-y-3">
            {weakAreas.map(({ lesson, difficulty, action }) => {
              const cfg = ACTION_CONFIG[action];
              return (
                <div
                  key={lesson.id}
                  className={`inventory-slot flex items-center justify-between gap-3 p-3`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`shrink-0 ${DIFFICULTY_BADGE[difficulty.label]}`}>
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
                    className={`shrink-0 btn-pixel ${cfg.blockClass.replace("block-card", "btn-pixel")} px-3 py-1.5`}
                  >
                    {cfg.icon} {cfg.label}
                  </Link>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Diese Missionen haben dir mehr Mühe gemacht. Nochmals üben festigt das Wissen!
          </p>
        </details>
      )}
    </div>
  );
}
