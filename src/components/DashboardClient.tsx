"use client";

import Link from "next/link";
import type { TrackId } from "@/lib/curriculum";
import { getTrack, PROJECTS, TRACKS } from "@/lib/curriculum";
import { useProgress } from "@/lib/progress";
import { TrackProgress } from "@/components/TrackProgress";

function nextLessonLink(isLessonCompleted: (id: string) => boolean) {
  const order: TrackId[] = ["web", "js", "python"];
  for (const trackId of order) {
    const track = getTrack(trackId);
    for (const lesson of track.lessons) {
      if (!isLessonCompleted(lesson.id)) {
        return { track, lesson, href: `/learn/${trackId}/${lesson.id}` };
      }
    }
  }
  return null;
}

const TRACK_STYLES: Record<string, { gradient: string; border: string; badge: string; bar: string }> = {
  web:    { gradient: "from-indigo-500/20 to-indigo-500/5",  border: "border-indigo-500/40",  badge: "text-indigo-300",  bar: "bg-indigo-500" },
  js:     { gradient: "from-amber-500/20 to-amber-500/5",    border: "border-amber-500/40",    badge: "text-amber-300",   bar: "bg-amber-500"  },
  python: { gradient: "from-emerald-500/20 to-emerald-500/5",border: "border-emerald-500/40",  badge: "text-emerald-300", bar: "bg-emerald-500"},
  ki:     { gradient: "from-violet-500/20 to-violet-500/5",  border: "border-violet-500/40",   badge: "text-violet-300",  bar: "bg-violet-500" },
};

const LEVEL_TITLES = [
  "Code-Neuling", "Quest-Starter", "HTML-Held", "Script-Kid", "Loop-Lord",
  "Funktion-Fürst", "Array-Adler", "DOM-Drache", "Python-Profi", "Code-Legende",
];

export function DashboardClient() {
  const { progress, level, isLessonCompleted, badges } = useProgress();
  const next = nextLessonLink(isLessonCompleted);

  const totalLessons = TRACKS.reduce((acc, t) => acc + t.lessons.length, 0);
  const completedLessons = Object.keys(progress.completedLessons).length;
  const xpInLevel = progress.xp % 200;
  const levelTitle = LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          🏠 Dashboard
        </h1>
        <p className="mt-2 text-base text-zinc-300">
          Schau dir deinen Fortschritt an und mach die nächste Quest!
        </p>
      </div>

      {/* Stats-Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Level */}
        <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/15 to-violet-500/5 p-5">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-xs font-semibold text-violet-300 uppercase tracking-wide">Level</div>
          <div className="mt-1 text-4xl font-extrabold text-white">{level}</div>
          <div className="mt-1 text-sm text-violet-300 font-medium">{levelTitle}</div>
          <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-violet-500 xp-bar"
              style={{ width: `${xpInLevel / 2}%` }}
            />
          </div>
          <div className="mt-1 text-xs text-zinc-400">{xpInLevel}/200 XP zum nächsten Level</div>
        </div>

        {/* XP */}
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 to-amber-500/5 p-5">
          <div className="text-3xl mb-2">💎</div>
          <div className="text-xs font-semibold text-amber-300 uppercase tracking-wide">Gesamt XP</div>
          <div className="mt-1 text-4xl font-extrabold text-white">{progress.xp}</div>
          <div className="mt-1 text-sm text-amber-300">Erfahrungspunkte</div>
        </div>

        {/* Streak */}
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/15 to-orange-500/5 p-5">
          <div className="text-3xl mb-2">🔥</div>
          <div className="text-xs font-semibold text-orange-300 uppercase tracking-wide">Streak</div>
          <div className="mt-1 text-4xl font-extrabold text-white">{progress.streakDays}</div>
          <div className="mt-1 text-sm text-orange-300">
            {progress.streakDays === 0 ? "Los geht's!" : progress.streakDays === 1 ? "Tag in Folge" : "Tage in Folge"}
          </div>
        </div>

        {/* Quests */}
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 p-5">
          <div className="text-3xl mb-2">✅</div>
          <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Quests</div>
          <div className="mt-1 text-4xl font-extrabold text-white">{completedLessons}/{totalLessons}</div>
          <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-emerald-500 xp-bar"
              style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
            />
          </div>
          <div className="mt-1 text-xs text-zinc-400">{Math.round((completedLessons / totalLessons) * 100)}% geschafft</div>
        </div>
      </div>

      {/* Nächste Quest */}
      <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/15 to-violet-500/5 p-6">
        <h2 className="text-xl font-bold text-white">
          {next ? "▶️ Nächste Quest" : "🎉 Alle Quests geschafft!"}
        </h2>

        {next ? (
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{next.track.emoji}</div>
              <div>
                <div className="text-xs font-semibold text-violet-300 uppercase tracking-wide">
                  {next.track.title}
                </div>
                <div className="mt-1 text-xl font-bold text-white">{next.lesson.title}</div>
                <div className="mt-1 text-sm text-zinc-300">{next.lesson.summary}</div>
                <div className="mt-2 flex items-center gap-3 text-xs text-zinc-400">
                  <span>⏱️ {next.lesson.minutes} Min</span>
                  <span>💎 +{next.lesson.xp} XP</span>
                </div>
              </div>
            </div>
            <Link
              href={next.href}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:scale-105 shrink-0"
            >
              Starten 🚀
            </Link>
          </div>
        ) : (
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-5 py-3 font-bold text-white hover:opacity-90"
            >
              🛠️ Projekte ansehen
            </Link>
            <Link
              href="/learn"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-zinc-200 hover:bg-white/10"
            >
              📚 Alle Tracks
            </Link>
          </div>
        )}
      </div>

      {/* Tracks + Badges */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Tracks */}
        <section className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-white">🗺️ Lernpfade</h2>
          <div className="grid gap-4 sm:grid-cols-1">
            {TRACKS.map((t) => {
              const style = TRACK_STYLES[t.id];
              return (
                <Link
                  key={t.id}
                  href={`/learn/${t.id}`}
                  className={`rounded-3xl border bg-gradient-to-br ${style.gradient} ${style.border} p-5 hover:scale-[1.01] transition-all block`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{t.emoji}</span>
                      <div>
                        <div className={`text-base font-bold text-white`}>{t.title}</div>
                        <div className="text-xs text-zinc-400 mt-0.5">{t.recommendedAge}</div>
                      </div>
                    </div>
                    <span className={`text-sm font-bold ${style.badge}`}>
                      {t.lessons.length} Quests
                    </span>
                  </div>
                  <div className="mt-4">
                    <TrackProgress trackId={t.id} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">🏅 Badges</h2>
          <div className="space-y-3">
            {TRACKS.map((t) => {
              const earned = badges[t.id];
              return (
                <div
                  key={t.id}
                  className={`flex items-center justify-between rounded-2xl border p-4 transition-all ${
                    earned
                      ? "border-amber-500/40 bg-gradient-to-r from-amber-500/15 to-amber-500/5"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl ${earned ? "badge-glow" : "opacity-40 grayscale"}`}>
                      {t.emoji}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.title}</div>
                      <div className="text-xs text-zinc-400">Alle Quests abschließen</div>
                    </div>
                  </div>
                  {earned ? (
                    <span className="text-lg">🏆</span>
                  ) : (
                    <span className="text-xs text-zinc-500 border border-white/10 rounded-full px-2 py-1">offen</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-white mb-4">💡 Projekt-Ideen</h2>
            <div className="space-y-3">
              {PROJECTS.slice(0, 3).map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm font-bold text-white">{p.title}</div>
                  <div className="mt-1 text-xs text-zinc-400">{p.description}</div>
                  <span className={`mt-2 inline-block text-xs rounded-full px-2 py-0.5 border ${
                    p.difficulty === "leicht" ? "border-emerald-500/30 text-emerald-400" :
                    p.difficulty === "mittel" ? "border-amber-500/30 text-amber-400" :
                    "border-rose-500/30 text-rose-400"
                  }`}>
                    {p.difficulty}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/projects"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/10 transition-colors"
            >
              Alle Projekte →
            </Link>
          </div>
        </section>
      </div>

    </div>
  );
}
