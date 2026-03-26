"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";

export function ProgressPill() {
  const { progress, level } = useProgress();

  return (
    <Link
      href="/dashboard"
      className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-xs text-violet-200 hover:bg-violet-500/20 transition-colors"
      aria-label="Fortschritt anzeigen"
    >
      <span className="text-base">⭐</span>
      <span className="font-bold text-white">Lvl {level}</span>
      <span className="text-violet-300 hidden sm:inline">·</span>
      <span className="tabular-nums hidden sm:inline">{progress.xp} XP</span>
      {progress.streakDays > 0 && (
        <>
          <span className="text-violet-300 hidden sm:inline">·</span>
          <span className="hidden sm:inline">🔥 {progress.streakDays}</span>
        </>
      )}
    </Link>
  );
}
