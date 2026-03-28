"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";

export function ProgressPill() {
  const { progress, level } = useProgress();

  return (
    <Link
      href="/dashboard"
      className="inventory-slot inline-flex items-center gap-2 px-3 py-2 hover:border-[#FFD700] transition-colors"
      aria-label="Fortschritt anzeigen"
    >
      <span className="text-sm">🔷</span>
      <span className="font-pixel text-[8px] leading-relaxed text-white">Lvl {level}</span>
      <span className="text-zinc-500 hidden sm:inline">·</span>
      <span className="font-pixel text-[8px] leading-relaxed tabular-nums text-[#FFD700] hidden sm:inline">{progress.xp} XP</span>
      {progress.streakDays > 0 && (
        <>
          <span className="text-zinc-500 hidden sm:inline">·</span>
          <span className="hidden sm:inline text-xs">🔥 {progress.streakDays}</span>
        </>
      )}
    </Link>
  );
}
