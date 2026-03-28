"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { TRACKS } from "@/lib/curriculum";
import type { Track } from "@/lib/curriculum";
import { CertificateModal } from "@/components/CertificateModal";
import {
  getActiveProfileId,
  getProfilesSnapshot,
  renameProfile,
  subscribeProfiles,
} from "@/lib/profiles";
import { useProgress } from "@/lib/progress";
import { useAdaptiveLearning } from "@/lib/adaptive";

const MODULE_LOAD_TIME = Date.now();

// Minecraft-Farben pro Track
const TRACK_COLORS: Record<string, { bar: string; fillClass: string; badge: string; text: string }> = {
  web:    { bar: "#5D8A34", fillClass: "hud-bar-fill--green",   badge: "block-card--grass",   text: "text-[#5D8A34]" },
  js:     { bar: "#FFD700", fillClass: "hud-bar-fill--gold",    badge: "block-card--gold",    text: "text-[#FFD700]" },
  python: { bar: "#A0522D", fillClass: "hud-bar-fill--gold",    badge: "block-card--wood",    text: "text-[#A0522D]" },
  ki:     { bar: "#00A2FF", fillClass: "hud-bar-fill--blue",    badge: "block-card--blue",    text: "text-[#00A2FF]" },
  sql:    { bar: "#7F7F7F", fillClass: "hud-bar-fill",          badge: "block-card--stone",   text: "text-[#7F7F7F]" },
  react:  { bar: "#44F7E0", fillClass: "hud-bar-fill--blue",    badge: "block-card--diamond", text: "text-[#44F7E0]" },
};

export function ProfilePageClient() {
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
  const { progress, level, trackStats, badges } = useProgress();
  const { loading: adaptiveLoading, weakAreas } = useAdaptiveLearning();
  const [certTrack, setCertTrack] = useState<Track | null>(null);
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
        <Link href="/dashboard" className="mt-4 inline-block text-sm text-[#44F7E0] underline">
          ← Zum Spieler-HQ
        </Link>
      </div>
    );
  }

  const xpToNextLevel = 200 - (progress.xp % 200);
  const xpProgress = ((progress.xp % 200) / 200) * 100;
  const totalCompleted = Object.keys(progress.completedLessons).length;
  const totalLessons = TRACKS.reduce((acc, t) => acc + t.lessons.length, 0);

  return (
    <>
    <div className="mx-auto w-full max-w-2xl px-4 py-10 space-y-6">

      <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white">
        ← Spieler-HQ
      </Link>

      {/* ── Profil-Header ─────────────────────────────────────────────────── */}
      <div className="block-card block-card--stone p-6">
        <div className="flex items-center gap-4">
          <div className="block-card block-card--grass flex h-16 w-16 items-center justify-center text-3xl shadow-lg">
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
                  className="crafting-panel bg-transparent px-3 py-1.5 text-xl font-bold text-white outline-none focus:ring-2 focus:ring-[#44F7E0]/40 w-full max-w-xs"
                />
                <button type="button" onClick={saveName} className="btn-pixel btn-pixel--green px-3 py-1.5 text-sm">
                  Speichern
                </button>
                <button type="button" onClick={() => setEditing(false)} className="btn-pixel btn-pixel--stone px-3 py-1.5 text-sm">
                  Abbrechen
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-white truncate">{profile.name}</h1>
                <button type="button" onClick={startEdit} className="text-zinc-500 hover:text-white transition-colors" title="Name ändern">
                  ✏️
                </button>
              </div>
            )}
            <p className="mt-0.5 text-sm text-zinc-400">
              Mitglied seit {memberSinceDate.toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        {/* XP HUD-Bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-pixel text-[9px] leading-relaxed text-[#FFD700]">Level {level}</span>
            <span className="text-xs text-zinc-400">{xpToNextLevel} XP bis Level {level + 1}</span>
          </div>
          <div className="hud-bar-track">
            <div className="hud-bar-fill hud-bar-fill--xp" style={{ width: `${xpProgress}%` }} />
          </div>
        </div>
      </div>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: "Gesamt XP", value: progress.xp.toLocaleString("de-DE"), icon: "💎", card: "block-card--gold" },
          { label: "Streak", value: `${progress.streakDays} Tage`, icon: "🔥", card: "block-card--red" },
          { label: "Missionen", value: `${totalCompleted}/${totalLessons}`, icon: "✅", card: "block-card--grass" },
        ].map(({ label, value, icon, card }) => (
          <div key={label} className={`block-card ${card} p-4 text-center`}>
            <div className="text-2xl mb-1">{icon}</div>
            <div className="font-pixel text-lg leading-loose text-white">{value}</div>
            <div className="text-xs text-zinc-400 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* ── Track-Fortschritt ─────────────────────────────────────────────── */}
      <div className="block-card block-card--stone p-6">
        <h2 className="font-pixel text-[10px] leading-relaxed text-white mb-4">📚 Fortschritt pro Welt</h2>
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
                      <span className="status-pill--done text-[9px]">🏆 Gemeistert</span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-400">{completed}/{total}</span>
                </div>
                <div className="hud-bar-track">
                  <div
                    className={`hud-bar-fill ${colors.fillClass}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Lern-Analyse ──────────────────────────────────────────────────── */}
      {!adaptiveLoading && (
        <div className="block-card block-card--stone p-6">
          <h2 className="font-pixel text-[10px] leading-relaxed text-white mb-4">🧠 Lern-Analyse</h2>
          {weakAreas.length === 0 ? (
            <p className="text-sm text-zinc-400">
              Noch nicht genug Daten. Schließe mindestens 2 Missionen ab um deine persönliche Analyse zu sehen.
            </p>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-zinc-400 mb-3">Missionen wo du noch Übungsbedarf hast:</p>
              {weakAreas.slice(0, 5).map((area) => {
                const diff = area.difficulty;
                return (
                  <div key={area.lesson.id} className="block-card block-card--dirt flex items-center justify-between gap-3 px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold text-white">{area.lesson.title}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {`${Math.round(diff.successRate * 100)}% Erfolgsrate · ${diff.totalAttempts} Versuche`}
                      </div>
                    </div>
                    <Link
                      href={`/learn/${diff.trackId}/${area.lesson.id}`}
                      className="btn-pixel btn-pixel--stone shrink-0 px-3 py-1.5 text-xs"
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

      {/* ── Abzeichen ─────────────────────────────────────────────────────── */}
      <div className="block-card block-card--stone p-6">
        <h2 className="font-pixel text-[10px] leading-relaxed text-white mb-4">🏆 Abzeichen</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {TRACKS.map((track) => {
            const earned = badges[track.id];
            const colors = TRACK_COLORS[track.id] ?? TRACK_COLORS.web!;
            return (
              <div
                key={track.id}
                className={`inventory-slot text-center p-4 transition-all ${earned ? `inventory-slot--completed ${colors.badge}` : "opacity-40"}`}
              >
                <div className="text-3xl mb-2">{track.emoji}</div>
                <div className={`text-xs font-bold ${earned ? "text-white" : "text-zinc-500"}`}>
                  {track.title}
                </div>
                <div className="text-xs mt-0.5 opacity-70">
                  {earned ? "✓ Verdient" : "Noch nicht"}
                </div>
                {earned ? (
                  <button
                    type="button"
                    onClick={() => setCertTrack(track)}
                    className="mt-2 text-[9px] font-semibold underline underline-offset-2 opacity-80 hover:opacity-100 text-[#FFD700]"
                  >
                    📄 Zertifikat
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

    </div>

      {certTrack && profile ? (
        <CertificateModal
          track={certTrack}
          profileName={profile.name}
          onClose={() => setCertTrack(null)}
        />
      ) : null}
    </>
  );
}
