"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { AuthModal } from "@/components/AuthModal";

const TRACKS = [
  { emoji: "🌐", title: "Web-Welt",         desc: "HTML & CSS – bau deine erste Seite wie ein Haus in Minecraft",  blockClass: "block-card--blue",    quests: 25 },
  { emoji: "⚡", title: "Script-Mine",       desc: "JavaScript – schreibe Redstone-Code der alles steuert",         blockClass: "block-card--gold",    quests: 25 },
  { emoji: "🐍", title: "Schlangen-Tempel", desc: "Python – die mächtigste Schlange in der Code-Welt",              blockClass: "block-card--grass",   quests: 25 },
  { emoji: "🤖", title: "KI-Festung",       desc: "KI-Abenteuer – entdecke die geheimnisvollste Festung",           blockClass: "block-card--red",     quests: 20 },
  { emoji: "🗄️", title: "Daten-Schacht",    desc: "SQL – baue Minen und grabe Daten aus",                           blockClass: "block-card--stone",   quests: 20 },
  { emoji: "⚛️", title: "Reaktor-Turm",     desc: "React – baue den mächtigsten Turm aus Komponenten-Blöcken",     blockClass: "block-card--diamond", quests: 20 },
];

export default function LandingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  // Already logged in → go to dashboard
  useEffect(() => {
    if (!loading && user) router.replace("/dashboard");
  }, [loading, user, router]);

  if (loading || user) return null;

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-zinc-50">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-20 border-b-2 border-[#5D8A34]/50 bg-[#0d0d1a]/95">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center block-card block-card--grass text-lg">
              ⛏️
            </span>
            <span className="font-pixel text-[10px] leading-relaxed text-white">
              CodeQuest <span className="text-[#44F7E0]">Academy</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="btn-pixel btn-pixel--green px-4 py-2"
          >
            🔑 Anmelden
          </button>
        </div>
      </nav>

      <div className="world-map-bg">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 space-y-20">

          {/* ── Hero ────────────────────────────────────────────────────── */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 block-card block-card--grass px-4 py-2 mb-8">
              <span className="font-pixel text-[8px] leading-relaxed text-white">
                🌟 Spielerisch programmieren lernen – ab 9 Jahren
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Lerne Coden{" "}
              <span className="block mt-2">
                <span className="font-pixel text-xl sm:text-2xl leading-loose text-[#FFD700]">
                  wie ein Profi
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base text-zinc-300 leading-relaxed">
              Kurze Missionen, echte Projekte, XP &amp; Level-ups – von HTML bis Python.
              Kein Vorwissen nötig. Fortschritt wird in der Cloud gespeichert.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn-pixel btn-pixel--green btn-pulse px-8 py-4 text-sm"
              >
                ⛏️ Kostenlos starten
              </button>
              <a
                href="#wie-es-funktioniert"
                className="btn-pixel btn-pixel--stone px-8 py-4 text-sm"
              >
                Mehr erfahren ↓
              </a>
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { emoji: "⛏️", blockClass: "block-card--diamond", zahl: "135+", text: "Missionen" },
              { emoji: "🤖", blockClass: "block-card--blue",    zahl: "KI",   text: "Übungsgenerator" },
              { emoji: "☁️", blockClass: "block-card--stone",   zahl: "Cloud",text: "Sync" },
              { emoji: "🏆", blockClass: "block-card--gold",    zahl: "∞",    text: "Spaß" },
            ].map((s) => (
              <div key={s.text} className={`block-card ${s.blockClass} p-5 text-center`}>
                <div className="text-3xl mb-2 pixel-float inline-block">{s.emoji}</div>
                <div className="font-pixel text-base leading-loose text-white">{s.zahl}</div>
                <div className="text-xs text-zinc-400 mt-1">{s.text}</div>
              </div>
            ))}
          </div>

          {/* ── Welten ──────────────────────────────────────────────────── */}
          <div>
            <h2 className="font-pixel text-sm leading-loose text-white text-center mb-8">
              🗺️ Deine Welten
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TRACKS.map((t) => (
                <div key={t.title} className={`block-card ${t.blockClass} p-6`}>
                  <div className="text-4xl mb-3 pixel-float inline-block">{t.emoji}</div>
                  <div className="font-pixel text-[11px] leading-relaxed text-white mt-2">{t.title}</div>
                  <div className="text-sm text-zinc-300 mt-2 leading-relaxed">{t.desc}</div>
                  <div className="mt-4">
                    <span className="status-pill--done">{t.quests} Missionen</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── So funktioniert es ──────────────────────────────────────── */}
          <div id="wie-es-funktioniert" className="block-card block-card--stone p-8">
            <h2 className="font-pixel text-sm leading-loose text-white text-center mb-8">
              ✨ So funktioniert CodeQuest
            </h2>
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                { emoji: "📖", title: "Mission lesen",  text: "Jede Mission erklärt kurz ein neues Konzept – mit Minecraft-Beispielen!" },
                { emoji: "💻", title: "Code schreiben", text: "Du tippst deinen Code im Crafting-Tisch direkt im Browser." },
                { emoji: "⚒️", title: "Bauen!",         text: "Dein Code läuft sofort – du siehst das Ergebnis live!" },
                { emoji: "⭐", title: "XP sammeln",     text: "Jede abgeschlossene Mission bringt XP, Level-ups und Trophäen." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="inventory-slot inline-flex h-14 w-14 items-center justify-center text-2xl mb-3">
                    {item.emoji}
                  </div>
                  <div className="font-pixel text-[9px] leading-loose text-white mb-2">{item.title}</div>
                  <div className="text-sm text-zinc-400 leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA Bottom ──────────────────────────────────────────────── */}
          <div className="text-center block-card block-card--grass p-10">
            <h2 className="font-pixel text-base leading-loose text-white mb-4">Bereit loszulegen?</h2>
            <p className="text-zinc-300 mb-6 max-w-lg mx-auto leading-relaxed">
              Erstelle jetzt kostenlos ein Konto und starte deine erste Mission. Dein Fortschritt wird automatisch gespeichert.
            </p>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="btn-pixel btn-pixel--gold px-8 py-4 text-sm"
            >
              ⛏️ Jetzt kostenlos registrieren
            </button>
          </div>

        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="border-t-2 border-[#5D8A34]/30 py-8 mt-10">
        <div className="mx-auto w-full max-w-6xl px-4 text-xs text-zinc-500 text-center font-pixel leading-loose">
          © CodeQuest Academy · Spielerisch programmieren lernen
        </div>
      </footer>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
