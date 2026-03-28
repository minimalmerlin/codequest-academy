import Link from "next/link";
import { TRACKS } from "@/lib/curriculum";
import { TrackProgress } from "@/components/TrackProgress";
import { AuthGuard } from "@/components/AuthGuard";

export const metadata = {
  title: "Welten – CodeQuest Academy",
};

const TRACK_STYLES: Record<string, { blockClass: string; fillClass: string }> = {
  web:    { blockClass: "block-card--blue",    fillClass: "hud-bar-fill--blue"  },
  js:     { blockClass: "block-card--gold",    fillClass: "hud-bar-fill--gold"  },
  python: { blockClass: "block-card--grass",   fillClass: "hud-bar-fill--green" },
  ki:     { blockClass: "block-card--red",     fillClass: "hud-bar-fill--red"   },
  sql:    { blockClass: "block-card--stone",   fillClass: "hud-bar-fill--xp"    },
  react:  { blockClass: "block-card--diamond", fillClass: "hud-bar-fill--blue"  },
};

export default function LearnPage() {
  return (
    <AuthGuard>
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="mb-8">
          <h1 className="font-pixel text-base leading-loose text-white">
            🌍 Wähle deine Welt
          </h1>
          <p className="mt-3 text-base text-zinc-300">
            Wähle eine Welt und starte deine erste Mission! Jede Mission dauert 10–35 Minuten.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TRACKS.map((t) => {
            const style = TRACK_STYLES[t.id];
            return (
              <Link
                key={t.id}
                href={`/learn/${t.id}`}
                className={`block-card ${style.blockClass} p-6 block`}
              >
                <div className="text-5xl mb-4 pixel-float inline-block">{t.emoji}</div>
                <h2 className="font-pixel text-[11px] leading-relaxed text-white mt-2">{t.title}</h2>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{t.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="status-pill--done">{t.lessons.length} Missionen</span>
                  <span className="text-xs text-zinc-400">{t.recommendedAge}</span>
                </div>
                <div className="mt-4">
                  <TrackProgress trackId={t.id} fillClass={style.fillClass} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 block-card block-card--wood p-6">
          <h2 className="font-pixel text-[11px] leading-loose text-white">💡 Crafting-Tipp</h2>
          <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
            Du kannst Welten mischen – heute HTML-Blöcke, morgen Python-Schlangen! Jede abgeschlossene Mission bringt XP und bringt dich dem nächsten Level näher.
          </p>
        </div>
      </div>
    </AuthGuard>
  );
}
