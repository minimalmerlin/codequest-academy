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

const TRACK_STYLES: Record<string, { blockClass: string; fillClass: string }> = {
  web:    { blockClass: "block-card--blue",    fillClass: "hud-bar-fill--blue"  },
  js:     { blockClass: "block-card--gold",    fillClass: "hud-bar-fill--gold"  },
  python: { blockClass: "block-card--grass",   fillClass: "hud-bar-fill--green" },
  ki:     { blockClass: "block-card--red",     fillClass: "hud-bar-fill--red"   },
  sql:    { blockClass: "block-card--stone",   fillClass: "hud-bar-fill--xp"    },
  react:  { blockClass: "block-card--diamond", fillClass: "hud-bar-fill--blue"  },
};

const LEVEL_TITLES = [
  "Holz-Axt", "Stein-Schwert", "Eisen-Rüstung", "Gold-Helm", "Diamant-Pick",
  "Nether-Ritter", "Redstone-Meister", "Obsidian-Lord", "End-Drachen", "Code-Legende",
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
        <h1 className="font-pixel text-lg leading-loose text-white">
          🏠 Spieler-HQ
        </h1>
        <p className="mt-3 text-base text-zinc-300">
          Schau dir deinen Fortschritt an und starte die nächste Mission!
        </p>
      </div>

      {/* Stats-Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Level */}
        <div className="block-card block-card--diamond p-5">
          <div className="text-3xl mb-2">⭐</div>
          <div className="font-pixel text-[8px] leading-loose text-[#44F7E0] uppercase">Level</div>
          <div className="mt-1 font-pixel text-3xl leading-loose text-white">{level}</div>
          <div className="mt-1 text-sm text-[#44F7E0] font-medium">{levelTitle}</div>
          <div className="mt-3 hud-bar-track">
            <div
              className="hud-bar-fill hud-bar-fill--xp"
              style={{ width: `${xpInLevel / 2}%` }}
            />
          </div>
          <div className="mt-1 text-xs text-zinc-400">{xpInLevel}/200 XP zum nächsten Level</div>
        </div>

        {/* XP */}
        <div className="block-card block-card--gold p-5">
          <div className="text-3xl mb-2">💎</div>
          <div className="font-pixel text-[8px] leading-loose text-[#FFD700] uppercase">Gesamt XP</div>
          <div className="mt-1 font-pixel text-3xl leading-loose text-white">{progress.xp}</div>
          <div className="mt-1 text-sm text-[#FFD700]">Erfahrungspunkte</div>
        </div>

        {/* Streak */}
        <div className="block-card block-card--red p-5">
          <div className="text-3xl mb-2">🔥</div>
          <div className="font-pixel text-[8px] leading-loose text-[#FF3E3E] uppercase">Tages-Serie</div>
          <div className="mt-1 font-pixel text-3xl leading-loose text-white">{progress.streakDays}</div>
          <div className="mt-1 text-sm text-[#FF3E3E]">
            {progress.streakDays === 0 ? "Los geht's!" : progress.streakDays === 1 ? "Tag in Folge" : "Tage in Folge"}
          </div>
        </div>

        {/* Missionen */}
        <div className="block-card block-card--grass p-5">
          <div className="text-3xl mb-2">✅</div>
          <div className="font-pixel text-[8px] leading-loose text-[#5D8A34] uppercase">Missionen</div>
          <div className="mt-1 font-pixel text-2xl leading-loose text-white">{completedLessons}/{totalLessons}</div>
          <div className="mt-3 hud-bar-track">
            <div
              className="hud-bar-fill hud-bar-fill--green"
              style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
            />
          </div>
          <div className="mt-1 text-xs text-zinc-400">{Math.round((completedLessons / totalLessons) * 100)}% gemeistert</div>
        </div>
      </div>

      {/* Nächste Mission */}
      <div className="block-card block-card--dirt p-6">
        <h2 className="font-pixel text-[11px] leading-loose text-white">
          {next ? "▶️ Nächste Mission" : "🎉 Alle Missionen gemeistert!"}
        </h2>

        {next ? (
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="text-4xl pixel-float inline-block">{next.track.emoji}</div>
              <div>
                <div className="font-pixel text-[8px] leading-loose text-[#FFD700] uppercase">
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
              className="btn-pixel btn-pixel--green px-6 py-3 text-sm shrink-0 text-center"
            >
              Starten ⚒️
            </Link>
          </div>
        ) : (
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/projects" className="btn-pixel btn-pixel--gold px-5 py-3">
              🛠️ Bauprojekte ansehen
            </Link>
            <Link href="/learn" className="btn-pixel btn-pixel--stone px-5 py-3">
              🌍 Alle Welten
            </Link>
          </div>
        )}
      </div>

      {/* Welten + Trophäen */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Welten */}
        <section className="lg:col-span-2 space-y-4">
          <h2 className="font-pixel text-[11px] leading-loose text-white">🗺️ Welten</h2>
          <div className="grid gap-4">
            {TRACKS.map((t) => {
              const style = TRACK_STYLES[t.id];
              return (
                <Link
                  key={t.id}
                  href={`/learn/${t.id}`}
                  className={`block-card ${style.blockClass} p-5 block`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{t.emoji}</span>
                      <div>
                        <div className="font-pixel text-[9px] leading-loose text-white">{t.title}</div>
                        <div className="text-xs text-zinc-400 mt-0.5">{t.recommendedAge}</div>
                      </div>
                    </div>
                    <span className="font-pixel text-[8px] leading-loose text-zinc-300">
                      {t.lessons.length} Miss.
                    </span>
                  </div>
                  <div className="mt-4">
                    <TrackProgress trackId={t.id} fillClass={style.fillClass} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Trophäen */}
        <section>
          <h2 className="font-pixel text-[11px] leading-loose text-white mb-4">🏅 Trophäen</h2>
          <div className="space-y-3">
            {TRACKS.map((t) => {
              const earned = badges[t.id];
              return (
                <div
                  key={t.id}
                  className={`inventory-slot flex items-center justify-between p-4 transition-all ${
                    earned ? "inventory-slot--completed" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl ${earned ? "badge-glow pixel-bounce" : "opacity-30 grayscale"}`}>
                      {t.emoji}
                    </span>
                    <div>
                      <div className="font-pixel text-[8px] leading-loose text-white">{t.title}</div>
                      <div className="text-xs text-zinc-400">Alle Missionen abschließen</div>
                    </div>
                  </div>
                  {earned ? (
                    <span className="text-lg badge-glow">🏆</span>
                  ) : (
                    <span className="status-pill--open">offen</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <h2 className="font-pixel text-[11px] leading-loose text-white mb-4">💡 Bauprojekte</h2>
            <div className="space-y-3">
              {PROJECTS.slice(0, 3).map((p) => (
                <div key={p.id} className="inventory-slot p-4">
                  <div className="text-sm font-bold text-white">{p.title}</div>
                  <div className="mt-1 text-xs text-zinc-400">{p.description}</div>
                  <span className={`mt-2 inline-block ${
                    p.difficulty === "leicht" ? "status-pill--done" : "status-pill--open"
                  }`}>
                    {p.difficulty}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/projects"
              className="mt-4 btn-pixel btn-pixel--stone w-full text-center block py-3"
            >
              Alle Bauprojekte →
            </Link>
          </div>
        </section>
      </div>

    </div>
  );
}
