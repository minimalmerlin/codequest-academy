"use client";

import { useRouter } from "next/navigation";

export function PaywallOverlay() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="block-card block-card--gold w-full max-w-md p-8 text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h2 className="font-pixel text-[10px] leading-loose text-white mb-2">
          Premium-Mission
        </h2>
        <p className="text-sm text-zinc-300 leading-6 mb-6">
          Diese Mission ist Teil des Premium-Abonnements.<br />
          Schalte alle <strong className="text-[#FFD700]">135+ Missionen</strong> frei –
          für die ganze Familie.
        </p>
        <ul className="text-left text-sm text-zinc-300 space-y-2 mb-8 mx-auto max-w-xs">
          <li>✓ Alle Welten & Missionen</li>
          <li>✓ Zertifikate zum Ausdrucken</li>
          <li>✓ KI-Tipp-Stein (unbegrenzt)</li>
          <li>✓ Fortschritt in der Cloud</li>
          <li>✓ Unbegrenzte Kinder-Profile</li>
        </ul>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => router.push("/pricing")}
            className="btn-pixel btn-pixel--gold w-full px-4 py-3"
          >
            ⭐ Jetzt freischalten — ab 9,99 €/Monat
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="btn-pixel btn-pixel--stone w-full px-4 py-3"
          >
            ← Zurück
          </button>
        </div>
      </div>
    </div>
  );
}
