import { AuthGuard } from "@/components/AuthGuard";
import Link from "next/link";
import { PROJECTS, TRACKS } from "@/lib/curriculum";

export const metadata = {
  title: "Bauprojekte",
};

const DIFFICULTY_CARD: Record<string, string> = {
  "Einfach":  "block-card--grass",
  "Mittel":   "block-card--gold",
  "Schwer":   "block-card--diamond",
};

export default function ProjectsPage() {
  return (
    <AuthGuard>
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="font-pixel text-sm leading-relaxed text-white">
        🛠️ Bauprojekte
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300">
        Projekte sind der Turbo: Du merkst, dass Code echte Dinge bauen kann.
        Wähle ein Projekt und setz es in kleinen Etappen um.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {PROJECTS.map((p) => {
          const cardClass = DIFFICULTY_CARD[p.difficulty] ?? "block-card--stone";
          return (
            <section
              key={p.id}
              className={`block-card ${cardClass} p-6`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-semibold text-white">{p.title}</h2>
                  <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
                </div>
                <span className="status-pill--open">{p.difficulty}</span>
              </div>
              <div className="mt-4">
                <div className="font-pixel text-[9px] leading-relaxed text-zinc-200">Skills</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                  {p.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-sm text-zinc-300">
                <span className="font-semibold text-zinc-200">Abgabe:</span>{" "}
                {p.deliverable}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.trackIds.map((t) => {
                  const track = TRACKS.find((tr) => tr.id === t);
                  return (
                    <Link
                      key={t}
                      href={`/learn/${t}`}
                      className="inventory-slot px-3 py-2 text-xs text-zinc-200"
                    >
                      {track?.emoji ?? "🎮"} {track?.title ?? t}
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <div className="block-card block-card--wood mt-10 p-6">
        <h2 className="font-pixel text-[10px] leading-relaxed text-white">⚒️ Projekt-Ritual</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
          <li>Klein starten (eine Funktion / ein Abschnitt)</li>
          <li>Jedes Mal kurz zeigen, was schon klappt</li>
          <li>Fehler feiern: &#8222;Cool, wir haben was gelernt!&#8220;</li>
          <li>Am Ende veröffentlichen (Git + Vercel)</li>
        </ol>
      </div>
    </div>
    </AuthGuard>
  );
}
