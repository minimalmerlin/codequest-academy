"use client";

import { useAuth } from "@/lib/auth";
import { useSubscription } from "@/lib/subscription";
import Link from "next/link";
import { AuthGuard } from "@/components/AuthGuard";

const STATUS_LABEL: Record<string, string> = {
  free:      "Kostenlos",
  active:    "✓ Aktiv",
  trialing:  "Probeabo",
  past_due:  "⚠ Zahlung ausstehend",
  canceled:  "Gekündigt",
};

function BillingContent() {
  const { session } = useAuth();
  const { status, isPremium, currentPeriodEnd, loading } = useSubscription();

  async function openPortal() {
    if (!session) return;
    const res = await fetch("/api/stripe/portal", {
      method: "POST",
      headers: { Authorization: `Bearer ${session.access_token}` },
    });
    const { url } = await res.json() as { url: string };
    if (url) window.location.href = url;
  }

  if (loading) {
    return (
      <div className="block-card block-card--stone p-8 text-center text-zinc-400 text-sm">
        <span className="pixel-blink">⚒️</span> Lade Abonnement-Details…
      </div>
    );
  }

  return (
    <div className="block-card block-card--stone p-8 max-w-lg">
      <h2 className="font-pixel text-[10px] leading-loose text-white mb-6">
        Dein Abonnement
      </h2>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-400">Status</span>
          <span className={`font-semibold ${isPremium ? "text-[#FFD700]" : "text-zinc-200"}`}>
            {STATUS_LABEL[status] ?? status}
          </span>
        </div>
        {isPremium && currentPeriodEnd && (
          <div className="flex justify-between">
            <span className="text-zinc-400">Verlängert am</span>
            <span className="text-zinc-200">
              {currentPeriodEnd.toLocaleDateString("de-DE")}
            </span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-zinc-400">Plan</span>
          <span className="text-zinc-200">
            {isPremium ? "⭐ Premium" : "Kostenlos"}
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {isPremium ? (
          <button
            type="button"
            onClick={() => void openPortal()}
            className="btn-pixel btn-pixel--stone w-full px-4 py-3 text-sm"
          >
            🔧 Abonnement verwalten (Stripe Portal)
          </button>
        ) : (
          <Link
            href="/pricing"
            className="btn-pixel btn-pixel--gold w-full text-center px-4 py-3 text-sm"
          >
            ⭐ Auf Premium upgraden
          </Link>
        )}
      </div>

      <p className="mt-6 text-xs text-zinc-500">
        Zahlungen werden sicher über Stripe verarbeitet.
        Kündigung jederzeit möglich.
      </p>
    </div>
  );
}

export default function BillingPage() {
  return (
    <AuthGuard>
      <div className="mx-auto w-full max-w-4xl px-4 py-12">
        <h1 className="font-pixel text-sm leading-loose text-white mb-8">
          💳 Abonnement &amp; Rechnungen
        </h1>
        <BillingContent />
      </div>
    </AuthGuard>
  );
}
