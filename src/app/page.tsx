"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { AuthModal } from "@/components/AuthModal";

const TRACKS = [
  {
    emoji: "🌐",
    title: "HTML & CSS",
    subtitle: "Deine erste Webseite",
    desc: "Lerne die Sprache des Internets und bau deine erste eigene Seite.",
    blockClass: "block-card--blue",
    quests: 25,
    color: "#60a5fa",
    bgDot: "rgba(59,130,246,0.15)",
  },
  {
    emoji: "⚡",
    title: "JavaScript",
    subtitle: "Seiten zum Leben erwecken",
    desc: "Animationen, Spiele, Interaktivität — alles mit einer Sprache.",
    blockClass: "block-card--gold",
    quests: 25,
    color: "#fbbf24",
    bgDot: "rgba(245,158,11,0.15)",
  },
  {
    emoji: "🐍",
    title: "Python",
    subtitle: "Die Sprache der KI",
    desc: "Von Schule bis Silicon Valley — einsteigerfreundlich und mächtig.",
    blockClass: "block-card--grass",
    quests: 25,
    color: "#4ade80",
    bgDot: "rgba(34,197,94,0.15)",
  },
  {
    emoji: "🤖",
    title: "KI & Prompts",
    subtitle: "Verstehen wie AI denkt",
    desc: "Kinder lernen, KI gezielt einzusetzen — der Skill der Zukunft.",
    blockClass: "block-card--red",
    quests: 20,
    color: "#fb923c",
    bgDot: "rgba(249,115,22,0.15)",
  },
  {
    emoji: "🗄️",
    title: "SQL",
    subtitle: "Daten verstehen",
    desc: "Datenbanken sind überall — hier lernst du strukturiert zu denken.",
    blockClass: "block-card--wood",
    quests: 20,
    color: "#c084fc",
    bgDot: "rgba(168,85,247,0.15)",
  },
  {
    emoji: "⚛️",
    title: "React",
    subtitle: "Moderne Web-Apps",
    desc: "Der Standard für professionelle Web-Apps — Komponenten-Denken.",
    blockClass: "block-card--diamond",
    quests: 20,
    color: "#22d3ee",
    bgDot: "rgba(6,182,212,0.15)",
  },
];

const HOW_IT_WORKS = [
  {
    emoji: "📖",
    title: "Mission lesen",
    text: "Jede Mission erklärt ein neues Konzept — klar, kurz, verständlich.",
    color: "#60a5fa",
  },
  {
    emoji: "💻",
    title: "Code schreiben",
    text: "Der Editor läuft im Browser — keine Installation, kein Setup.",
    color: "#4ade80",
  },
  {
    emoji: "▶️",
    title: "Sofort testen",
    text: "Ein Klick und der Code läuft. Fehler werden direkt erklärt.",
    color: "#fbbf24",
  },
  {
    emoji: "⭐",
    title: "XP sammeln",
    text: "Jede Mission gibt XP und Level — Motivation durch echten Fortschritt.",
    color: "#c084fc",
  },
];

const FEATURES = [
  { emoji: "🚀", title: "Kein Setup", text: "Einfach öffnen und loslegen — im Browser, auf jedem Gerät." },
  { emoji: "🧠", title: "KI-Tipp-Stein", text: "Smarte Hinweise die sich anpassen — kein einfaches Copy-Paste." },
  { emoji: "📊", title: "Cloud-Fortschritt", text: "Lernstand automatisch gespeichert — egal von welchem Gerät." },
  { emoji: "👨‍👩‍👧", title: "Für Familien", text: "Kinder-Profile, Eltern-Dashboard, klare Fortschrittsübersicht." },
];

export default function LandingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!loading && user) router.replace("/dashboard");
  }, [loading, user, router]);

  if (loading || user) return null;

  return (
    <div className="min-h-screen text-[#f9fafb]" style={{ background: "#111827" }}>

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-20 backdrop-blur-md"
        style={{
          background: "rgba(17,24,39,0.92)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🚀</span>
            <span className="font-extrabold text-[16px] tracking-tight text-white">
              CodeQuest <span style={{ color: "#58cc02" }}>Academy</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="btn-pixel btn-pixel--green px-5 py-2"
          >
            Kostenlos starten
          </button>
        </div>
      </nav>

      <div className="world-map-bg">
        <div className="mx-auto w-full max-w-5xl px-5">

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section className="pt-20 pb-16 text-center">

            {/* Mascot */}
            <div
              className="mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full text-5xl"
              style={{
                background: "linear-gradient(135deg, rgba(88,204,2,0.2), rgba(59,130,246,0.15))",
                border: "3px solid rgba(88,204,2,0.3)",
                boxShadow: "0 0 40px rgba(88,204,2,0.15)",
              }}
            >
              🚀
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-[13px] font-bold"
              style={{
                background: "rgba(88,204,2,0.12)",
                border: "1.5px solid rgba(88,204,2,0.3)",
                color: "#86efac",
              }}
            >
              <span
                className="h-2 w-2 rounded-full inline-block"
                style={{ background: "#58cc02" }}
              />
              Für Kinder ab 8 Jahren · 100% kostenlos starten
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-2xl mx-auto"
              style={{ color: "#f9fafb" }}
            >
              Programmieren lernen —{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #58cc02, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                wie in einem Spiel.
              </span>
            </h1>

            {/* Subline */}
            <p
              className="mt-5 max-w-lg mx-auto text-[17px] leading-relaxed font-semibold"
              style={{ color: "#9ca3af" }}
            >
              Kurze Missionen. Echter Code. Sofortiges Feedback.
              Von HTML bis KI — strukturiert und spielerisch.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn-pixel btn-pixel--green px-10 py-3.5 text-[15px]"
              >
                ⚡ Jetzt kostenlos starten
              </button>
              <a
                href="#wie-es-funktioniert"
                className="btn-pixel btn-pixel--stone px-10 py-3.5 text-[15px]"
              >
                Mehr erfahren ↓
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[13px] font-bold" style={{ color: "#6b7280" }}>
              <span>✓ 135+ Missionen</span>
              <span>✓ 6 Welten</span>
              <span>✓ Kein Setup</span>
              <span>✓ KI-Assistent</span>
              <span>✓ Cloud-Sync</span>
            </div>
          </section>

          {/* ── Track Cards ──────────────────────────────────────────────── */}
          <section className="pb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                6 Welten. Ein Ziel: Programmieren.
              </h2>
              <p className="mt-2 text-[15px] font-semibold" style={{ color: "#6b7280" }}>
                Jede Welt baut auf der vorherigen auf — vom ersten Tag bis zum Profi.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TRACKS.map((t) => (
                <div
                  key={t.title}
                  className={`block-card ${t.blockClass} p-6 group cursor-default`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{t.emoji}</span>
                    <span
                      className="text-[11px] font-extrabold px-3 py-1 rounded-full"
                      style={{
                        background: t.bgDot,
                        color: t.color,
                        border: `1.5px solid ${t.color}40`,
                      }}
                    >
                      {t.quests} Missionen
                    </span>
                  </div>
                  <div className="font-extrabold text-[15px] text-white leading-snug">
                    {t.title}
                  </div>
                  <div
                    className="text-[12px] font-bold mt-0.5 mb-3"
                    style={{ color: t.color }}
                  >
                    {t.subtitle}
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#9ca3af" }}>
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── How it works ─────────────────────────────────────────────── */}
          <section id="wie-es-funktioniert" className="pb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                So einfach funktioniert es
              </h2>
              <p className="mt-2 text-[15px] font-semibold" style={{ color: "#6b7280" }}>
                Kein Download. Kein Frust. Einfach öffnen und loslegen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {HOW_IT_WORKS.map((item, i) => (
                <div key={item.title} className="block-card block-card--stone p-6 text-center">
                  <div
                    className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                    style={{
                      background: `${item.color}18`,
                      border: `2px solid ${item.color}35`,
                    }}
                  >
                    {item.emoji}
                  </div>
                  <div
                    className="text-[11px] font-extrabold mb-1"
                    style={{ color: item.color }}
                  >
                    Schritt {i + 1}
                  </div>
                  <div className="font-extrabold text-[14px] text-white mb-2">
                    {item.title}
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "#9ca3af" }}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Features ─────────────────────────────────────────────────── */}
          <section className="pb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Alles was Kinder brauchen
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="block-card block-card--stone p-5 flex items-start gap-4">
                  <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    {f.emoji}
                  </span>
                  <div>
                    <div className="font-extrabold text-[14px] text-white mb-1">{f.title}</div>
                    <div className="text-[13px] leading-relaxed" style={{ color: "#9ca3af" }}>{f.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA Bottom ───────────────────────────────────────────────── */}
          <section className="pb-24">
            <div
              className="rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(88,204,2,0.15) 0%, rgba(34,211,238,0.08) 100%)",
                border: "2px solid rgba(88,204,2,0.25)",
                borderBottom: "4px solid rgba(88,204,2,0.35)",
              }}
            >
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(88,204,2,0.08), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="text-5xl mb-4">🎮</div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                  Bereit für die erste Mission?
                </h2>
                <p
                  className="text-[16px] font-semibold mb-8 max-w-md mx-auto leading-relaxed"
                  style={{ color: "#9ca3af" }}
                >
                  Kostenlos registrieren und sofort loslegen.
                  Kein Download, keine Kreditkarte.
                </p>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="btn-pixel btn-pixel--green px-12 py-4 text-[15px]"
                >
                  ⚡ Jetzt kostenlos starten
                </button>
                <p className="mt-4 text-[12px] font-bold" style={{ color: "#6b7280" }}>
                  Keine Kreditkarte. Kein Abo. Wirklich kostenlos.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="py-8">
        <div
          className="mx-auto w-full max-w-5xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-bold"
          style={{ color: "#6b7280" }}
        >
          <span>© 2026 CodeQuest Academy — Spielerisch programmieren lernen</span>
          <div className="flex items-center gap-5">
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/agb" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </footer>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
