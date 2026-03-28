import { AuthGuard } from "@/components/AuthGuard";
import Link from "next/link";
import { TRACKS } from "@/lib/curriculum";
import { ParentsDashboardClient } from "@/components/ParentsDashboardClient";

export const metadata = {
  title: "Für Eltern",
};

export default function ParentsPage() {
  return (
    <AuthGuard>
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="font-pixel text-xs leading-loose text-white">
        👪 Eltern-Portal
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300">
        Ziel dieser Academy: Kinder sollen selbstständig die Grundlagen
        lernen – und am Ende echte Mini-Projekte bauen, die man zeigen kann.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <section className="block-card block-card--dirt p-6">
          <h2 className="text-base font-semibold text-white">
            Empfohlener Ablauf (8 Wochen)
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
            <li>Woche 1–2: HTML &amp; CSS (Web-Welt)</li>
            <li>Woche 3–5: JavaScript-Logik (Script-Mine)</li>
            <li>Woche 6–7: Python-Basics (Schlangen-Tempel)</li>
            <li>Woche 8: Capstone-Projekt + Deploy</li>
          </ol>
          <p className="mt-4 text-xs text-zinc-400">
            Rhythmus: 3× pro Woche 20–30 Minuten statt 1× 2 Stunden.
          </p>
        </section>

        <section className="block-card block-card--dirt p-6">
          <h2 className="text-base font-semibold text-white">
            Spielregeln (damit es Spaß macht)
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>Erst verstehen, dann kopieren.</li>
            <li>Fehler = Hinweise, keine Niederlagen.</li>
            <li>Kleine Ziele: &#8222;Heute nur 1 Mission&#8220;.</li>
            <li>Am Ende immer kurz zeigen &amp; erklären lassen.</li>
          </ul>
        </section>

        <section className="block-card block-card--dirt p-6">
          <h2 className="text-base font-semibold text-white">
            Eure Rolle als Eltern
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>Fragen stellen: &#8222;Was macht diese Zeile?&#8220;</li>
            <li>Mini-Code-Review: 1 Lob, 1 Frage, 1 Idee</li>
            <li>Projekte sichtbar machen (Git + Vercel)</li>
          </ul>
        </section>
      </div>

      <ParentsDashboardClient />

      <div className="block-card block-card--wood mt-10 p-6">
        <h2 className="text-base font-semibold text-white">
          Start-Check (5 Minuten)
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
          <li>Kann dein Kind 10 Minuten konzentriert tippen?</li>
          <li>Ist ein Laptop/Keyboard vorhanden?</li>
          <li>Darf es Fehler machen, ohne frustriert zu sein?</li>
          <li>Habt ihr 3× pro Woche 20 Minuten?</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/learn"
            className="btn-pixel btn-pixel--green px-4 py-2 text-sm"
          >
            🌍 Welten öffnen
          </Link>
          {TRACKS.map((t) => (
            <Link
              key={t.id}
              href={`/learn/${t.id}`}
              className="btn-pixel btn-pixel--stone px-4 py-2 text-sm"
            >
              {t.emoji} {t.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
    </AuthGuard>
  );
}
