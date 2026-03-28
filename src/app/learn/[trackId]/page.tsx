import Link from "next/link";
import { notFound } from "next/navigation";
import type { TrackId } from "@/lib/curriculum";
import { getTrack, TRACKS } from "@/lib/curriculum";
import { LessonStatusPill } from "@/components/LessonStatusPill";
import { LessonDifficultyBadge } from "@/components/LessonDifficultyBadge";
import { TrackProgress } from "@/components/TrackProgress";
import { AuthGuard } from "@/components/AuthGuard";

const TRACK_FILL: Record<string, string> = {
  web:    "hud-bar-fill--blue",
  js:     "hud-bar-fill--gold",
  python: "hud-bar-fill--green",
  ki:     "hud-bar-fill--red",
  sql:    "hud-bar-fill--xp",
  react:  "hud-bar-fill--blue",
};

export function generateStaticParams() {
  return TRACKS.map((t) => ({ trackId: t.id }));
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ trackId: string }>;
}) {
  const { trackId: trackIdRaw } = await params;
  const trackId = trackIdRaw as TrackId;
  const track = TRACKS.find((t) => t.id === trackId) ? getTrack(trackId) : null;
  if (!track) return notFound();

  return (
    <AuthGuard>
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl pixel-float inline-block">{track.emoji}</span>
                <h1 className="font-pixel text-base leading-loose text-white">
                  {track.title}
                </h1>
              </div>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-300">
                {track.description}
              </p>
            </div>
            <div className="w-full max-w-xs">
              <TrackProgress trackId={track.id} fillClass={TRACK_FILL[track.id]} />
            </div>
          </div>
          <p className="text-xs text-zinc-400">Empfohlen: {track.recommendedAge}</p>
        </div>

        <p className="mt-6 font-pixel text-[9px] leading-loose text-zinc-400">
          🎒 Inventar — wähle eine Mission:
        </p>

        <div className="mt-3 grid gap-3">
          {track.lessons.map((l, idx) => (
            <Link
              key={l.id}
              href={`/learn/${track.id}/${l.id}`}
              className="inventory-slot group p-5 block"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-pixel text-[8px] leading-loose text-zinc-400">
                    Mission {idx + 1} · {l.minutes} min · {l.xp} XP
                  </div>
                  <div className="mt-1 text-base font-semibold text-white">
                    {l.title}
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">{l.summary}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <LessonDifficultyBadge lessonId={l.id} />
                  <LessonStatusPill lessonId={l.id} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 block-card block-card--wood p-6">
          <h2 className="font-pixel text-[11px] leading-loose text-white">💡 Crafting-Tipp</h2>
          <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
            Lieber 3 kurze Missionen pro Woche als einen langen Marathon. Das
            Gehirn liebt Wiederholung – genau wie ein Minecraft-Farm-Loop!
          </p>
        </div>
      </div>
    </AuthGuard>
  );
}
