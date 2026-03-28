"use client";

import { useAuth } from "@/lib/auth";
import { useSubscription } from "@/lib/subscription";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PRICE_MONTHLY = process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY ?? "";

export default function PricingPage() {
  const { user, session } = useAuth();
  const { isPremium } = useSubscription();
  const router = useRouter();

  async function startCheckout(priceId: string) {
    if (!user || !session) {
      router.push("/");
      return;
    }
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ priceId }),
    });
    const { url } = await res.json() as { url: string };
    if (url) window.location.href = url;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <h1 className="font-pixel text-sm leading-loose text-white text-center mb-2">
        ⭐ CodeQuest Academy
      </h1>
      <p className="text-center text-sm text-zinc-400 mb-10">
        Wähle deinen Abenteuer-Pass
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Kostenlos */}
        <section className="block-card block-card--stone p-8 flex flex-col">
          <div className="font-pixel text-[9px] leading-loose text-zinc-400 mb-1">Kostenlos</div>
          <div className="text-3xl font-bold text-white mb-1">0 €</div>
          <div className="text-xs text-zinc-400 mb-6">für immer</div>
          <ul className="space-y-3 text-sm text-zinc-300 flex-1 mb-8">
            <li>✓ 12 Einsteiger-Missionen (2 pro Welt)</li>
            <li>✓ Alle 6 Welten erkunden</li>
            <li>✓ XP &amp; Level-System</li>
            <li>✓ Kinder-Profile (lokal)</li>
            <li className="text-zinc-500">✗ Premium-Missionen gesperrt</li>
            <li className="text-zinc-500">✗ Zertifikate</li>
            <li className="text-zinc-500">✗ Cloud-Fortschritt</li>
          </ul>
          <Link
            href="/learn"
            className="btn-pixel btn-pixel--stone w-full text-center px-4 py-3 text-sm"
          >
            Kostenlos starten
          </Link>
        </section>

        {/* Premium */}
        <section className="block-card block-card--gold p-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <span className="font-pixel text-[8px] leading-loose bg-[#FFD700] text-black px-2 py-1">
              BELIEBT
            </span>
          </div>
          <div className="font-pixel text-[9px] leading-loose text-[#FFD700] mb-1">Premium</div>
          <div className="flex items-end gap-2 mb-1">
            <span className="text-3xl font-bold text-white">9,99 €</span>
            <span className="text-zinc-400 text-sm mb-1">/Monat</span>
          </div>
          <div className="text-xs text-zinc-400 mb-6">
            jederzeit kündbar · keine Mindestlaufzeit
          </div>
          <ul className="space-y-3 text-sm text-zinc-200 flex-1 mb-8">
            <li>✓ <strong>Alle 135+ Missionen</strong> (alle 6 Welten)</li>
            <li>✓ Zertifikate zum Ausdrucken</li>
            <li>✓ KI-Tipp-Stein (unbegrenzt)</li>
            <li>✓ Fortschritt in der Cloud</li>
            <li>✓ Unbegrenzte Kinder-Profile</li>
            <li>✓ Alle zukünftigen Inhalte inklusive</li>
          </ul>

          {isPremium ? (
            <div className="btn-pixel btn-pixel--stone w-full text-center px-4 py-3 text-sm opacity-60 cursor-default">
              ✓ Du hast Premium
            </div>
          ) : (
            <button
              type="button"
              onClick={() => void startCheckout(PRICE_MONTHLY)}
              className="btn-pixel btn-pixel--gold w-full px-4 py-3 text-sm"
            >
              ⭐ Premium starten — 9,99 €/Monat
            </button>
          )}
        </section>
      </div>

      <div className="block-card block-card--wood mt-10 p-6 text-sm text-zinc-300">
        <h2 className="font-pixel text-[9px] leading-loose text-white mb-3">
          ❓ Häufige Fragen
        </h2>
        <div className="space-y-4">
          <div>
            <strong className="text-zinc-200">Für wie viele Kinder gilt das Abo?</strong>
            <p className="mt-1 text-zinc-400">Für die ganze Familie — unbegrenzt viele Kinder-Profile inklusive.</p>
          </div>
          <div>
            <strong className="text-zinc-200">Kann ich kündigen?</strong>
            <p className="mt-1 text-zinc-400">Jederzeit, ohne Fristen. Das Abo endet zum nächsten Abrechnungszeitraum.</p>
          </div>
          <div>
            <strong className="text-zinc-200">Welche Zahlungsmittel werden akzeptiert?</strong>
            <p className="mt-1 text-zinc-400">Kreditkarte und SEPA-Lastschrift — sicher über Stripe abgewickelt.</p>
          </div>
          <div>
            <strong className="text-zinc-200">Gibt es eine Probezeit?</strong>
            <p className="mt-1 text-zinc-400">Die kostenlosen 12 Lektionen sind deine Probezeit — kein Risiko.</p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-zinc-500">
        Preise inkl. MwSt. · Abrechnung über{" "}
        <span className="text-zinc-400">Stripe</span> ·{" "}
        <Link href="/agb" className="underline hover:text-zinc-300">AGB</Link>
        {" · "}
        <Link href="/datenschutz" className="underline hover:text-zinc-300">Datenschutz</Link>
      </p>
    </div>
  );
}
