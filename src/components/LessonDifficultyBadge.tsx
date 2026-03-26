"use client";

import { useAdaptiveLearning } from "@/lib/adaptive";

const STYLES = {
  leicht: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  mittel: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  schwer: "border-rose-500/30 bg-rose-500/10 text-rose-300",
};

const ICONS = {
  leicht: "⚡",
  mittel: "🔥",
  schwer: "💪",
};

export function LessonDifficultyBadge({ lessonId }: { lessonId: string }) {
  const { getDifficulty } = useAdaptiveLearning();
  const diff = getDifficulty(lessonId);

  // Only show if we have enough data (at least 2 attempts)
  if (!diff || diff.totalAttempts < 2) return null;

  return (
    <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${STYLES[diff.label]}`}>
      {ICONS[diff.label]} {diff.label}
    </span>
  );
}
