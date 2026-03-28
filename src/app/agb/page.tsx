import type { Metadata } from "next";

export const metadata: Metadata = { title: "AGB" };

export default function AgbPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="font-pixel text-sm leading-loose text-white mb-8">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <div className="space-y-8 text-sm text-zinc-300 leading-7">
        <section>
          <h2 className="font-semibold text-white mb-2">§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
            Merlin Mechler, Hirzerweg 8, 12107 Berlin (nachfolgend &#8222;Anbieter&#8220;) und
            den Nutzern der Plattform CodeQuest Academy (codequest.academy).
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 2 Leistungsbeschreibung</h2>
          <p>
            CodeQuest Academy ist eine Lernplattform für Kinder, die spielerisch Grundlagen
            der Programmierung (HTML, CSS, JavaScript, Python, SQL, React) vermittelt.
            Die Plattform wird als Software-as-a-Service (SaaS) bereitgestellt.
          </p>
          <p className="mt-2">
            <strong className="text-zinc-200">Kostenloser Plan:</strong> Zugang zu je 2 Einsteiger-Missionen
            pro Lernwelt (insgesamt 12 Missionen) ohne zeitliche Begrenzung.
          </p>
          <p className="mt-2">
            <strong className="text-zinc-200">Premium-Plan:</strong> Zugang zu allen verfügbaren Missionen,
            Zertifikaten und weiteren Funktionen gegen Zahlung einer monatlichen oder jährlichen
            Abonnementgebühr.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 3 Vertragsschluss</h2>
          <p>
            Mit der Registrierung eines Benutzerkontos oder der Nutzung der kostenlosen
            Inhalte kommt ein Vertrag über die Nutzung des kostenlosen Plans zustande.
            Der Premium-Vertrag kommt mit Abschluss des Bezahlvorgangs über Stripe zustande.
            Der Anbieter bestätigt den Vertragsschluss per E-Mail.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 4 Preise und Zahlungsbedingungen</h2>
          <p>
            Der Premium-Plan ist erhältlich für:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><strong className="text-zinc-200">9,99 € / Monat</strong> (monatlich kündbar, keine Mindestlaufzeit)</li>
          </ul>
          <p className="mt-2">
            Alle Preise sind Endpreise. Der Anbieter ist Kleinunternehmer gem. § 19 UStG;
            es wird keine Mehrwertsteuer ausgewiesen.
          </p>
          <p className="mt-2">
            Die Zahlung erfolgt über Stripe. Verfügbare Zahlungsmittel: Kreditkarte,
            SEPA-Lastschrift, weitere Methoden je nach Region. Die Zahlung wird jeweils
            zu Beginn eines Abrechnungszeitraums fällig.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 5 Laufzeit und Kündigung</h2>
          <p>
            Das Abonnement läuft für die gewählte Laufzeit (monatlich oder jährlich)
            und verlängert sich automatisch, sofern es nicht rechtzeitig gekündigt wird.
          </p>
          <p className="mt-2">
            <strong className="text-zinc-200">Kündigung:</strong> Jederzeit über das Stripe
            Customer Portal (erreichbar unter{" "}
            <strong className="text-zinc-200">codequest.academy/billing</strong>).
            Die Kündigung wird zum Ende des laufenden Abrechnungszeitraums wirksam.
          </p>
          <p className="mt-2">
            Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 6 Widerrufsbelehrung</h2>
          <p>
            <strong className="text-zinc-200">Widerrufsrecht für Verbraucher (§ 355 BGB):</strong>
          </p>
          <p className="mt-2">
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
            Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag
            des Vertragsschlusses.
          </p>
          <p className="mt-2">
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Merlin Mechler,
            Hirzerweg 8, 12107 Berlin, merlin@merlinmechler.de) mittels einer eindeutigen
            Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über
            Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
          </p>
          <p className="mt-2">
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über
            die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
          </p>
          <p className="mt-3">
            <strong className="text-zinc-200">
              Erlöschen des Widerrufsrechts bei digitalen Inhalten (§ 356 Abs. 5 BGB):
            </strong>
          </p>
          <p className="mt-2">
            Das Widerrufsrecht erlischt bei einem Vertrag über die Lieferung von digitalen
            Inhalten, die nicht auf einem körperlichen Datenträger geliefert werden, wenn
            der Anbieter mit der Ausführung des Vertrages begonnen hat, nachdem der
            Verbraucher (a) ausdrücklich zugestimmt hat, dass der Anbieter vor Ablauf der
            Widerrufsfrist mit der Ausführung des Vertrages beginnt, und (b) seine Kenntnis
            davon bestätigt hat, dass er durch seine Zustimmung mit Beginn der Ausführung
            des Vertrages sein Widerrufsrecht verliert.
          </p>
          <p className="mt-2">
            Durch Abschluss des Bestellvorgangs und Aktivierung des Premium-Zugangs
            stimmen Sie ausdrücklich zu, dass wir sofort mit der Vertragserfüllung beginnen,
            und bestätigen, dass Ihr Widerrufsrecht damit erlischt.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 7 Nutzungsrecht</h2>
          <p>
            Der Anbieter räumt dem Nutzer ein einfaches, nicht übertragbares Recht zur
            Nutzung der Plattform für private, nicht-kommerzielle Zwecke ein.
            Die Weitergabe von Zugangsdaten an Dritte außerhalb des Familienhaushalts
            ist nicht gestattet.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 8 Nutzung durch Minderjährige</h2>
          <p>
            Die Plattform richtet sich an Kinder ab 8 Jahren. Kinder unter 16 Jahren
            dürfen ein Benutzerkonto nur mit ausdrücklicher Zustimmung eines
            Erziehungsberechtigten erstellen. Mit der Registrierung bestätigen
            Erziehungsberechtigte, dass sie diese Zustimmung erteilen.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 9 Haftungsbeschränkung</h2>
          <p>
            Der Anbieter haftet nur für Schäden, die auf einer vorsätzlichen oder grob
            fahrlässigen Pflichtverletzung des Anbieters, seiner gesetzlichen Vertreter
            oder Erfüllungsgehilfen beruhen. Bei der Verletzung wesentlicher
            Vertragspflichten (Kardinalpflichten) haftet der Anbieter auch für leichte
            Fahrlässigkeit, jedoch begrenzt auf den vorhersehbaren, vertragstypischen
            Schaden. Die Haftung für mittelbare Schäden und entgangenen Gewinn ist
            ausgeschlossen, soweit gesetzlich zulässig.
          </p>
          <p className="mt-2">
            Die Verfügbarkeit der Plattform wird mit angemessener Sorgfalt angestrebt,
            jedoch nicht garantiert. Der Anbieter haftet nicht für Unterbrechungen
            durch Drittanbieter (Supabase, Vercel, Stripe).
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 10 Datenschutz</h2>
          <p>
            Informationen zur Verarbeitung personenbezogener Daten finden sich in unserer{" "}
            <a href="/datenschutz" className="text-[#44F7E0] hover:underline">
              Datenschutzerklärung
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 11 Änderungen der AGB</h2>
          <p>
            Der Anbieter behält sich vor, diese AGB zu ändern. Änderungen werden dem Nutzer
            per E-Mail mitgeteilt. Der Nutzer hat das Recht, innerhalb von 4 Wochen zu
            widersprechen. Bei Widerspruch steht dem Anbieter das Recht zur ordentlichen
            Kündigung zu. Ohne Widerspruch gelten die geänderten AGB als akzeptiert.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-white mb-2">§ 12 Schlussbestimmungen</h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
            UN-Kaufrechts (CISG). Gerichtsstand für Kaufleute ist Berlin. Die Unwirksamkeit
            einzelner Bestimmungen berührt die Wirksamkeit der übrigen AGB nicht.
          </p>
        </section>

        <p className="text-xs text-zinc-500 pt-4 border-t border-white/10">
          Stand: März 2026 · Merlin Mechler, Berlin
        </p>
      </div>
    </div>
  );
}
