import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

export default function DatenschutzPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="font-pixel text-sm leading-loose text-white mb-8">
        Datenschutzerklärung
      </h1>

      <div className="space-y-8 text-sm text-zinc-300 leading-7">
        <section>
          <h2 className="font-semibold text-white mb-2">1. Verantwortlicher (Art. 13 DSGVO)</h2>
          <p>
            Merlin Mechler<br />
            Hirzerweg 8, 12107 Berlin<br />
            Telefon: +49 177 8197928<br />
            E-Mail:{" "}
            <a href="mailto:merlin@merlinmechler.de" className="text-[#44F7E0] hover:underline">
              merlin@merlinmechler.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">2. Allgemeines zur Datenverarbeitung</h2>
          <p>
            Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung
            einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
            Die Verarbeitung erfolgt nur mit Einwilligung oder auf gesetzlicher Grundlage.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">3. Authentifizierung &amp; Datenbank (Supabase)</h2>
          <p>
            Für Benutzerkonten und den Cloud-Fortschritt nutzen wir{" "}
            <strong className="text-zinc-200">Supabase</strong> (Supabase Inc., 970 Toa Payoh North,
            Singapur). Die Datenspeicherung erfolgt wahlweise auf Servern in{" "}
            <strong className="text-zinc-200">Frankfurt am Main (EU-West)</strong>, womit ein
            angemessenes Datenschutzniveau sichergestellt wird.
          </p>
          <p className="mt-2">
            Verarbeitete Daten: E-Mail-Adresse, verschlüsseltes Passwort (bcrypt), Lernfortschritt
            (abgeschlossene Lektionen, XP, Streak), Kinder-Profilnamen.
          </p>
          <p className="mt-2">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen).
          </p>
          <p className="mt-2">
            Datenschutzerklärung Supabase:{" "}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer"
              className="text-[#44F7E0] hover:underline">
              supabase.com/privacy
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">4. Zahlungsabwicklung (Stripe)</h2>
          <p>
            Premium-Abonnements werden über{" "}
            <strong className="text-zinc-200">Stripe Payments Europe, Ltd.</strong>{" "}
            (1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland) abgewickelt.
          </p>
          <p className="mt-2">
            Stripe verarbeitet Zahlungsdaten (Kreditkartennummer, IBAN, etc.) direkt. Wir erhalten
            lediglich eine Kunden-ID und den Abonnement-Status. Die Datenübermittlung in Drittstaaten
            erfolgt auf Basis von EU-Standardvertragsklauseln (Art. 46 DSGVO).
          </p>
          <p className="mt-2">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
          </p>
          <p className="mt-2">
            Datenschutzerklärung Stripe:{" "}
            <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer"
              className="text-[#44F7E0] hover:underline">
              stripe.com/de/privacy
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">5. Hosting &amp; Analytics (Vercel)</h2>
          <p>
            Die Website wird auf Infrastruktur von{" "}
            <strong className="text-zinc-200">Vercel Inc.</strong> (440 N Barranca Ave #4133,
            Covina, CA 91723, USA) gehostet. Beim Aufruf der Website werden serverseitig
            IP-Adressen und Request-Metadaten verarbeitet.
          </p>
          <p className="mt-2">
            Wir nutzen{" "}
            <strong className="text-zinc-200">Vercel Analytics</strong> in anonymisierter Form
            (keine Cookies, keine personenbezogenen Daten, kein Cross-Site-Tracking).
          </p>
          <p className="mt-2">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an stabiler
            Bereitstellung und Weiterentwicklung des Dienstes).
          </p>
          <p className="mt-2">
            Datenschutzerklärung Vercel:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
              className="text-[#44F7E0] hover:underline">
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">6. Lokaler Speicher (localStorage)</h2>
          <p>
            Kinder-Profile (Name, Avatar), Lernfortschritt und Einstellungen werden optional lokal
            im Browser gespeichert (<strong className="text-zinc-200">localStorage</strong>).
            Diese Daten verlassen das Gerät nicht und werden nicht an Server übertragen,
            solange kein Account erstellt wird.
          </p>
          <p className="mt-2">
            Es werden keine Tracking-Cookies gesetzt.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">7. Besonderer Hinweis: Kinder unter 16 Jahren</h2>
          <p>
            CodeQuest Academy richtet sich an Kinder ab 8 Jahren, die von Erziehungsberechtigten
            begleitet werden. Die Nutzung durch Kinder unter 16 Jahren erfordert die
            Einwilligung und Zustimmung der Erziehungsberechtigten zur Erstellung eines Benutzerkontos
            (Art. 8 DSGVO). Eltern können die Löschung aller gespeicherten Daten ihres Kindes
            jederzeit per E-Mail anfordern.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">8. Betroffenenrechte (Art. 15–22 DSGVO)</h2>
          <p>Sie haben das Recht auf:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><strong className="text-zinc-200">Auskunft</strong> (Art. 15 DSGVO) über die Sie betreffenden Daten</li>
            <li><strong className="text-zinc-200">Berichtigung</strong> (Art. 16 DSGVO) unrichtiger Daten</li>
            <li><strong className="text-zinc-200">Löschung</strong> (Art. 17 DSGVO) Ihrer Daten</li>
            <li><strong className="text-zinc-200">Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
            <li><strong className="text-zinc-200">Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li><strong className="text-zinc-200">Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-2">
            Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
            <a href="mailto:merlin@merlinmechler.de" className="text-[#44F7E0] hover:underline">
              merlin@merlinmechler.de
            </a>
          </p>
          <p className="mt-2">
            Sie haben zudem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
            Zuständig für Berlin:{" "}
            <strong className="text-zinc-200">Berliner Beauftragte für Datenschutz und
            Informationsfreiheit</strong>, Friedrichstr. 219, 10969 Berlin.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">9. Aktualität dieser Erklärung</h2>
          <p>
            Stand: März 2026. Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen
            des Dienstes oder der Rechtslage anzupassen.
          </p>
        </section>
      </div>
    </div>
  );
}
