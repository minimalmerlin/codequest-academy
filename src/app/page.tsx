import Link from "next/link";
import { TRACKS } from "@/lib/curriculum";
import { TrackProgress } from "@/components/TrackProgress";
import { StartPanel } from "@/components/StartPanel";

const TRACK_STYLES = {
  web: {
    gradient: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/40",
    badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    glow: "shadow-indigo-500/20",
    bar: "bg-indigo-500",
  },
  js: {
    gradient: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/40",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    glow: "shadow-amber-500/20",
    bar: "bg-amber-500",
  },
  python: {
    gradient: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/40",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    glow: "shadow-emerald-500/20",
    bar: "bg-emerald-500",
  },
} as const;

export default function Home() {
  return (
    <div className="hero-panel">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16 space-y-14">

        {/* Hero */}
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
            Kein Vorwissen nötig!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:scale-105 btn-pulse"
            >
              🚀 Jetzt starten!
            </Link>
            <Link
              href="/parents"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-zinc-200 hover:bg-white/10 transition-all"
            >
              👨‍👩‍👧 Infos für Eltern
            </Link>
          </div>
        </div>

        {/* Stats-Reihe */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { emoji: "📚", zahl: "30", text: "Quests" },
            { emoji: "🛠️", zahl: "6", text: "Projekte" },
            { emoji: "🌐⚡🐍", zahl: "3", text: "Sprachen" },
            { emoji: "🏆", zahl: "∞", text: "Spaß" },
          ].map((s) => (
            <div
              key={s.text}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:bg-white/8 transition-colors"
            >
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="text-2xl font-extrabold text-white">{s.zahl}</div>
              <div className="text-xs text-zinc-400 mt-1">{s.text}</div>
            </div>
          ))}
        </div>

        {/* Profil-Wahl */}
        <div>
          <StartPanel />
        </div>

        {/* Lernpfade */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">🗺️ Deine Lernpfade</h2>
            <Link href="/learn" className="text-sm text-violet-400 hover:text-violet-300 font-medium">
              Alle ansehen →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {TRACKS.map((t) => {
              const style = TRACK_STYLES[t.id];
              return (
                <Link
                  key={t.id}
                  href={`/learn/${t.id}`}
                  className={`rounded-3xl border bg-gradient-to-br ${style.gradient} ${style.border} p-6 hover:shadow-xl ${style.glow} transition-all hover:scale-[1.02] block`}
                >
                  <div className="text-4xl mb-3">{t.emoji}</div>
                  <div className="font-bold text-white text-lg">{t.title}</div>
                  <div className="text-sm text-zinc-300 mt-1 leading-relaxed">{t.description}</div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${style.badge}`}>
                      {t.lessons.length} Quests
                    </span>
                    <span className="text-xs text-zinc-400">{t.recommendedAge}</span>
                  </div>
                  <div className="mt-3">
                    <TrackProgress trackId={t.id} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* So funktioniert's */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">✨ So funktioniert CodeQuest</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: "1", emoji: "📖", title: "Quest lesen", text: "Jede Quest erklärt kurz und verständlich ein neues Konzept." },
              { step: "2", emoji: "💻", title: "Code schreiben", text: "Du schreibst deinen eigenen Code im Editor direkt im Browser." },
              { step: "3", emoji: "▶️", title: "Ausführen", text: "Dein Code läuft sofort – du siehst das Ergebnis live!" },
              { step: "4", emoji: "⭐", title: "XP sammeln", text: "Jede abgeschlossene Quest bringt XP und Level-ups." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 border border-violet-500/30 text-xl mb-3">
                  {item.emoji}
                </div>
                <div className="font-bold text-white mb-1">{item.title}</div>
                <div className="text-sm text-zinc-400 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
