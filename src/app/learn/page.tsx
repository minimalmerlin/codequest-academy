import Link from "next/link";
import { TRACKS } from "@/lib/curriculum";
import { TrackProgress } from "@/components/TrackProgress";
import { AuthGuard } from "@/components/AuthGuard";

export const metadata = {
  title: "Lernen – CodeQuest Academy",
};

const TRACK_STYLES: Record<string, { gradient: string; border: string; badge: string }> = {
  web:    { gradient: "from-indigo-500/20 to-indigo-500/5", border: "border-indigo-500/40", badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" },
  js:     { gradient: "from-amber-500/20 to-amber-500/5",   border: "border-amber-500/40",  badge: "bg-amber-500/20 text-amber-300 border-amber-500/30"   },
  python: { gradient: "from-emerald-500/20 to-emerald-500/5",border: "border-emerald-500/40",badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"},
  ki:     { gradient: "from-violet-500/20 to-violet-500/5",  border: "border-violet-500/40", badge: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
};

export default function LearnPage() {
  return (
    <AuthGuard>
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          📚 Lernpfade
        </h1>
        <p className="mt-2 text-base text-zinc-300">
          Wähle einen Track und starte deine erste Quest! Jede Quest dauert 10–35 Minuten.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {TRACKS.map((t) => {
          const style = TRACK_STYLES[t.id];
          return (
            <Link
              key={t.id}
              href={`/learn/${t.id}`}
              className={`rounded-3xl border bg-gradient-to-br ${style.gradient} ${style.border} p-6 hover:scale-[1.02] transition-all block`}
            >
              <div className="text-5xl mb-4">{t.emoji}</div>
              <h2 className="text-xl font-bold text-white">{t.title}</h2>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{t.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className={`rounded-full border px-3 py-1 text-xs font-bold ${style.badge}`}>
                  {t.lessons.length} Quests
                </span>
                <span className="text-xs text-zinc-400">{t.recommendedAge}</span>
              </div>
              <div className="mt-4">
                <TrackProgress trackId={t.id} />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-bold text-white">💡 Tipp</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Du kannst Tracks mischen – heute HTML, morgen Python! Jede abgeschlossene Quest bringt XP und bringt dich dem nächsten Level näher.
        </p>
      </div>
    </div>
    </AuthGuard>
  );
}
