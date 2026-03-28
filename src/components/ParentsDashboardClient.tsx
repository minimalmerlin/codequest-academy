"use client";

import { useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { TRACKS } from "@/lib/curriculum";
import { getProfilesSnapshot, subscribeProfiles } from "@/lib/profiles";
import { safeStorage } from "@/lib/storage";

type StoredProgress = {
  completedLessons: Record<string, true>;
  xp: number;
  streakDays: number;
  lastCompletedDate?: string;
};

const PROGRESS_KEY = "codequest_progress_v1";

function readProgress(profileId: string): StoredProgress {
  const raw = safeStorage.getItem(`${PROGRESS_KEY}:${profileId}`);
  if (!raw) return { completedLessons: {}, xp: 0, streakDays: 0 };
  try {
    const d = JSON.parse(raw) as Partial<StoredProgress>;
    return {
      completedLessons: d.completedLessons ?? {},
      xp: typeof d.xp === "number" ? d.xp : 0,
      streakDays: typeof d.streakDays === "number" ? d.streakDays : 0,
      lastCompletedDate: typeof d.lastCompletedDate === "string" ? d.lastCompletedDate : undefined,
    };
  } catch {
    return { completedLessons: {}, xp: 0, streakDays: 0 };
  }
}

// Minecraft-Farben pro Track
const TRACK_COLORS: Record<string, { fillClass: string; text: string }> = {
  web:    { fillClass: "hud-bar-fill--green",   text: "text-[#5D8A34]" },
  js:     { fillClass: "hud-bar-fill--gold",    text: "text-[#FFD700]" },
  python: { fillClass: "hud-bar-fill--gold",    text: "text-[#A0522D]" },
  ki:     { fillClass: "hud-bar-fill--blue",    text: "text-[#00A2FF]" },
  sql:    { fillClass: "hud-bar-fill",          text: "text-[#7F7F7F]" },
  react:  { fillClass: "hud-bar-fill--blue",    text: "text-[#44F7E0]" },
};

export function ParentsDashboardClient() {
  const profiles = useSyncExternalStore(
    subscribeProfiles,
    getProfilesSnapshot,
    () => [],
  );

  const profileData = useMemo(() => {
    return profiles.map((p) => {
      const progress = readProgress(p.id);
      const level = Math.floor(progress.xp / 200) + 1;
      const totalCompleted = Object.keys(progress.completedLessons).length;
      const totalLessons = TRACKS.reduce((a, t) => a + t.lessons.length, 0);
      const pct = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

      const trackStats = TRACKS.map((t) => {
        const done = t.lessons.filter((l) => progress.completedLessons[l.id]).length;
        return { track: t, done, total: t.lessons.length, pct: t.lessons.length > 0 ? Math.round((done / t.lessons.length) * 100) : 0 };
      });

      return { profile: p, progress, level, totalCompleted, totalLessons, pct, trackStats };
    });
  }, [profiles]);

  if (profiles.length === 0) {
    return (
      <div className="block-card block-card--stone mt-10 p-8 text-center">
        <div className="text-4xl mb-3">👤</div>
        <h2 className="font-pixel text-[10px] leading-relaxed text-white">Noch keine Spieler</h2>
        <p className="mt-2 text-sm text-zinc-400">Dein Kind legt beim ersten Login automatisch ein Profil an.</p>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-6">
      <h2 className="font-pixel text-xs leading-loose text-white">📊 Fortschritt aller Spieler</h2>

      {profileData.map(({ profile, progress, level, totalCompleted, totalLessons, pct, trackStats }) => (
        <div key={profile.id} className="block-card block-card--dirt p-6 space-y-5">

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="block-card block-card--grass flex h-12 w-12 shrink-0 items-center justify-center text-xl font-bold text-white">
                {profile.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="text-lg font-bold text-white">{profile.name}</div>
                <div className="text-sm text-zinc-400">
                  Level {level} · {progress.xp} XP · 🔥 {progress.streakDays} Tage Streak
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="font-pixel text-lg leading-loose text-white">
                  {totalCompleted}<span className="text-sm font-normal text-zinc-400">/{totalLessons}</span>
                </div>
                <div className="text-xs text-zinc-400">Missionen</div>
              </div>
              {/* Circular progress — Gold statt Violet */}
              <div className="h-14 w-14 relative">
                <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#27272a" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r="15.9" fill="none"
                    stroke="#FFD700" strokeWidth="3"
                    strokeDasharray={`${pct} ${100 - pct}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-pixel text-[9px] leading-relaxed text-white">{pct}%</div>
              </div>
            </div>
          </div>

          {/* Track-Fortschrittsbars (HUD-Stil) */}
          <div className="space-y-2">
            {trackStats.filter((t) => t.total > 0).map(({ track, done, total, pct: tPct }) => {
              const colors = TRACK_COLORS[track.id] ?? { fillClass: "hud-bar-fill", text: "text-zinc-300" };
              return (
                <div key={track.id} className="flex items-center gap-3">
                  <span className="text-sm w-5 text-center">{track.emoji}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className={`text-xs font-semibold ${colors.text}`}>{track.title}</span>
                      <span className="text-xs text-zinc-500">{done}/{total}</span>
                    </div>
                    <div className="hud-bar-track" style={{ height: "6px" }}>
                      <div
                        className={`hud-bar-fill ${colors.fillClass}`}
                        style={{ width: `${tPct}%`, height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Letzte Aktivität + Link */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="text-xs text-zinc-500">
              {progress.lastCompletedDate
                ? `Zuletzt aktiv: ${new Date(progress.lastCompletedDate).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })}`
                : "Noch keine Mission abgeschlossen"}
            </div>
            <Link
              href="/profile"
              className="btn-pixel btn-pixel--blue px-3 py-1.5 text-xs"
            >
              Vollständiges Profil →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
