import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="font-pixel text-sm leading-loose text-white mb-8">Impressum</h1>

      <div className="space-y-8 text-sm text-zinc-300 leading-7">
        <section>
          <h2 className="font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Merlin Mechler<br />
            Hirzerweg 8<br />
            12107 Berlin<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">Kontakt</h2>
          <p>
            Telefon: +49 177 8197928<br />
            E-Mail:{" "}
            <a href="mailto:merlin@merlinmechler.de" className="text-[#44F7E0] hover:underline">
              merlin@merlinmechler.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">Umsatzsteuer-Identifikationsnummer</h2>
          <p>
            Gemäß § 27a Umsatzsteuergesetz:<br />
            USt-IdNr.: bitte ergänzen (z.&nbsp;B. DE123456789)
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p>
            Merlin Mechler<br />
            Hirzerweg 8<br />
            12107 Berlin
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">
            EU-Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#44F7E0] hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="mt-2">
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
            keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
            für eigene Inhalte auf dieser Website nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
        </section>
      </div>
    </div>
  );
}
