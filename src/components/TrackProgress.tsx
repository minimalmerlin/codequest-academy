"use client";

import type { TrackId } from "@/lib/curriculum";
import { useProgress } from "@/lib/progress";

export function TrackProgress({ trackId, fillClass }: { trackId: TrackId; fillClass?: string }) {
  const { trackStats } = useProgress();
  const stats = trackStats(trackId);
  const pct = stats.total === 0 ? 0 : Math.round((stats.completed / stats.total) * 100);

  const defaultFill =
    trackId === "js"     ? "hud-bar-fill--gold"  :
    trackId === "python" ? "hud-bar-fill--green" :
    trackId === "ki"     ? "hud-bar-fill--red"   :
    trackId === "sql"    ? "hud-bar-fill--xp"    :
    trackId === "react"  ? "hud-bar-fill--blue"  :
                           "hud-bar-fill--blue";

  const usedFill = fillClass ?? defaultFill;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-zinc-300 mb-2">
        <span>{stats.completed}/{stats.total} Missionen</span>
        <span className="font-pixel text-[8px] leading-loose tabular-nums">{pct}%</span>
      </div>
      <div className="hud-bar-track">
        <div
          className={`hud-bar-fill ${usedFill}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
