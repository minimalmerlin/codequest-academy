"use client";

import { useEffect, useRef } from "react";
import type { Track } from "@/lib/curriculum";

interface Props {
  track: Track;
  profileName: string;
  completedAt?: string; // ISO date string
  onClose: () => void;
}

export function CertificateModal({ track, profileName, completedAt, onClose }: Props) {
  const date = completedAt
    ? new Date(completedAt).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })
    : new Date().toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });

  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function print() {
    window.print();
  }

  return (
    <>
      {/* Print-only styles — injected into <head> via a style tag */}
      <style>{`
        @media print {
          body > *:not(#cq-certificate-root) { display: none !important; }
          #cq-certificate-root { position: fixed; inset: 0; z-index: 9999; }
          .cq-no-print { display: none !important; }
          .cq-certificate { box-shadow: none !important; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        ref={overlayRef}
        className="cq-no-print fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      >
        {/* Buttons above certificate */}
        <div className="cq-no-print absolute top-4 right-4 flex gap-2 z-10">
          <button
            type="button"
            onClick={print}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-bold text-white shadow hover:opacity-90"
          >
            📄 Als PDF speichern
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            ✕ Schließen
          </button>
        </div>
      </div>

      {/* Certificate — rendered outside backdrop so it stays visible during print */}
      <div id="cq-certificate-root" className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div className="cq-certificate pointer-events-auto w-full max-w-2xl rounded-3xl border-4 border-violet-500/60 bg-white shadow-2xl shadow-violet-500/30 overflow-hidden">
          {/* Top banner */}
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-5 text-center">
            <div className="text-3xl mb-1">🚀</div>
            <div className="text-lg font-extrabold text-white tracking-wide">CodeQuest Academy</div>
            <div className="text-sm text-violet-200 mt-0.5">Zertifikat über den Abschluss eines Lernpfads</div>
          </div>

          {/* Body */}
          <div className="px-10 py-8 text-center">
            <p className="text-sm text-zinc-400 font-semibold uppercase tracking-widest">Hiermit wird bestätigt, dass</p>
            <h2 className="mt-2 text-4xl font-extrabold text-zinc-900 tracking-tight">{profileName}</h2>
            <p className="mt-3 text-base text-zinc-600">den folgenden Lernpfad erfolgreich abgeschlossen hat:</p>

            <div className="mt-6 inline-flex flex-col items-center gap-2 rounded-2xl border-2 border-violet-200 bg-violet-50 px-8 py-5">
              <span className="text-5xl">{track.emoji}</span>
              <span className="text-2xl font-extrabold text-violet-700">{track.title}</span>
              <span className="text-sm text-violet-500">{track.lessons.length} Quests gemeistert</span>
            </div>

            <p className="mt-6 text-sm text-zinc-400">Abgeschlossen am <span className="font-semibold text-zinc-600">{date}</span></p>

            {/* Decorative divider */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex-1 border-t border-zinc-200" />
              <span className="text-zinc-300 text-lg">✦</span>
              <div className="flex-1 border-t border-zinc-200" />
            </div>

            {/* Stars row */}
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: track.lessons.length }).map((_, i) => (
                <span key={i} className="text-amber-400 text-xs">★</span>
              ))}
            </div>

            <p className="mt-4 text-xs text-zinc-400">codequest.academy · Spielerisch Programmieren lernen</p>
          </div>

          {/* Bottom stripe */}
          <div className="bg-gradient-to-r from-violet-600/10 to-indigo-600/10 border-t border-violet-100 px-8 py-3 flex items-center justify-between">
            <span className="text-xs text-zinc-400">🏆 Track abgeschlossen</span>
            <span className="text-xs text-violet-500 font-semibold">{track.title} · {track.lessons.reduce((a, l) => a + l.xp, 0)} XP</span>
          </div>
        </div>
      </div>
    </>
  );
}
