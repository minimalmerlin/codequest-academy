"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { AuthModal } from "@/components/AuthModal";

const TRACKS = [
  { emoji: "🌐", title: "Web-Basics", desc: "HTML & CSS – baue deine erste Webseite", color: "from-indigo-500/20 to-indigo-500/5", border: "border-indigo-500/40", badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30", quests: 25 },
  { emoji: "⚡", title: "JavaScript", desc: "Interaktive Webseiten mit echtem Code", color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/40", badge: "bg-amber-500/20 text-amber-300 border-amber-500/30", quests: 25 },
  { emoji: "🐍", title: "Python", desc: "Spiele, Rechner und KI-Grundlagen", color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/40", badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", quests: 25 },
  { emoji: "🤖", title: "KI-Abenteuer", desc: "ChatGPT & Gemini richtig nutzen", color: "from-violet-500/20 to-violet-500/5", border: "border-violet-500/40", badge: "bg-violet-500/20 text-violet-300 border-violet-500/30", quests: 10 },
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
    <div className="min-h-screen bg-zinc-950 text-zinc-50">

      {/* ── Minimal Nav ───────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-lg shadow-lg shadow-violet-500/30">
              🚀
            </span>
            <span className="text-base font-bold text-white">
              CodeQuest <span className="text-violet-400">Academy</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-violet-500/30 hover:opacity-90 transition-opacity"
          >
            🔑 Anmelden
          </button>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-6xl px-4 py-14 space-y-20">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300 mb-6">
            🌟 Spielerisch programmieren lernen – ab 9 Jahren
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Lerne Coden{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              wie ein Profi
            </span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-zinc-300 leading-relaxed">
            Kurze Quests, echte Projekte, XP & Level-ups – von HTML bis Python.
            Kein Vorwissen nötig. Fortschritt wird in der Cloud gespeichert.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:scale-105"
            >
              🚀 Kostenlos starten
            </button>
            <a
              href="#wie-es-funktioniert"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-zinc-200 hover:bg-white/10 transition-all"
            >
              Mehr erfahren ↓
            </a>
          </div>
        </div>

        {/* ── Stats ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { emoji: "📚", zahl: "85+", text: "Quests" },
            { emoji: "🤖", zahl: "KI", text: "Übungsgenerator" },
            { emoji: "☁️", zahl: "Cloud", text: "Sync" },
            { emoji: "🏆", zahl: "∞", text: "Spaß" },
          ].map((s) => (
            <div key={s.text} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="text-2xl font-extrabold text-white">{s.zahl}</div>
              <div className="text-xs text-zinc-400 mt-1">{s.text}</div>
            </div>
          ))}
        </div>

        {/* ── Tracks ────────────────────────────────────────────────────── */}
        <div>
          <h2 className="text-2xl font-bold text-white text-center mb-8">🗺️ Deine Lernpfade</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRACKS.map((t) => (
              <div
                key={t.title}
                className={`rounded-3xl border bg-gradient-to-br ${t.color} ${t.border} p-6`}
              >
                <div className="text-4xl mb-3">{t.emoji}</div>
                <div className="font-bold text-white text-lg">{t.title}</div>
                <div className="text-sm text-zinc-300 mt-1 leading-relaxed">{t.desc}</div>
                <div className="mt-4">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${t.badge}`}>
                    {t.quests} Quests
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── How it works ──────────────────────────────────────────────── */}
        <div id="wie-es-funktioniert" className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">✨ So funktioniert CodeQuest</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { emoji: "📖", title: "Quest lesen", text: "Jede Quest erklärt kurz und verständlich ein neues Konzept." },
              { emoji: "💻", title: "Code schreiben", text: "Du schreibst deinen eigenen Code im Editor direkt im Browser." },
              { emoji: "▶️", title: "Ausführen", text: "Dein Code läuft sofort – du siehst das Ergebnis live!" },
              { emoji: "⭐", title: "XP sammeln", text: "Jede abgeschlossene Quest bringt XP, Level-ups und Abzeichen." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 border border-violet-500/30 text-xl mb-3">
                  {item.emoji}
                </div>
                <div className="font-bold text-white mb-1">{item.title}</div>
                <div className="text-sm text-zinc-400 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Bottom ────────────────────────────────────────────────── */}
        <div className="text-center rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-10">
          <h2 className="text-3xl font-extrabold text-white mb-3">Bereit loszulegen?</h2>
          <p className="text-zinc-300 mb-6 max-w-lg mx-auto">
            Erstelle jetzt kostenlos ein Konto und starte deine erste Quest. Dein Fortschritt wird automatisch gespeichert.
          </p>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-violet-500/30 hover:opacity-90 transition-all hover:scale-105"
          >
            🚀 Jetzt kostenlos registrieren
          </button>
        </div>

      </div>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-8 mt-10">
        <div className="mx-auto w-full max-w-6xl px-4 text-sm text-zinc-400 text-center">
          © CodeQuest Academy · Spielerisch programmieren lernen
        </div>
      </footer>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
