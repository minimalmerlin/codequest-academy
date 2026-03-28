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
      {/* Print-only styles */}
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
            className="btn-pixel btn-pixel--gold px-4 py-2 text-sm"
          >
            🖨️ Drucken
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-pixel btn-pixel--stone px-4 py-2 text-sm"
          >
            ✕ Schließen
          </button>
        </div>
      </div>

      {/* Certificate — rendered outside backdrop so it stays visible during print */}
      <div id="cq-certificate-root" className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div className="cq-certificate pointer-events-auto w-full max-w-2xl bg-white shadow-2xl overflow-hidden" style={{ border: "4px solid #FFD700" }}>
          {/* Top banner — Grass green */}
          <div className="px-8 py-5 text-center" style={{ background: "#5D8A34" }}>
            <div className="text-3xl mb-1">⛏️</div>
            <div className="font-pixel text-[10px] leading-relaxed text-white tracking-wide">CodeQuest Academy</div>
            <div className="text-sm text-white/80 mt-1">Zertifikat über den Abschluss einer Welt</div>
          </div>

          {/* Body */}
          <div className="px-10 py-8 text-center">
            <p className="text-sm text-zinc-400 font-semibold uppercase tracking-widest">Hiermit wird bestätigt, dass</p>
            <h2 className="mt-2 text-4xl font-extrabold text-zinc-900 tracking-tight">{profileName}</h2>
            <p className="mt-3 text-base text-zinc-600">die folgende Welt erfolgreich gemeistert hat:</p>

            <div className="mt-6 inline-flex flex-col items-center gap-2 px-8 py-5" style={{ border: "2px solid #FFD700", background: "#fefce8" }}>
              <span className="text-5xl">{track.emoji}</span>
              <span className="font-pixel text-[10px] leading-relaxed text-zinc-800">{track.title}</span>
              <span className="text-sm" style={{ color: "#5D8A34" }}>{track.lessons.length} Missionen gemeistert ✓</span>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Gemeistert am{" "}
              <span className="font-semibold text-zinc-600">{date}</span>
            </p>

            {/* Decorative divider */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex-1 border-t border-zinc-200" />
              <span className="text-[#FFD700] text-lg">★</span>
              <div className="flex-1 border-t border-zinc-200" />
            </div>

            {/* Stars row */}
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: track.lessons.length }).map((_, i) => (
                <span key={i} className="text-xs" style={{ color: "#FFD700" }}>★</span>
              ))}
            </div>

            <p className="mt-4 text-xs text-zinc-400">codequest.academy · Spielerisch Programmieren lernen</p>
          </div>

          {/* Bottom stripe */}
          <div className="px-8 py-3 flex items-center justify-between" style={{ background: "rgba(93,138,52,0.08)", borderTop: "1px solid #e7f0e0" }}>
            <span className="text-xs text-zinc-400">🏆 Welt abgeschlossen</span>
            <span className="text-xs font-semibold" style={{ color: "#5D8A34" }}>
              {track.title} · {track.lessons.reduce((a, l) => a + l.xp, 0)} XP
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
