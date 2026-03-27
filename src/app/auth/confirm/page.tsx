"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

/**
 * Landing page for Supabase email confirmation links.
 * Supabase redirects here after the user clicks the confirmation email.
 * Configure in Supabase Dashboard → Auth → URL Configuration → Redirect URLs:
 *   https://yourdomain.com/auth/confirm
 */
export default function AuthConfirmPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!loading && user) {
      const t = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            clearInterval(t);
            router.replace("/dashboard");
          }
          return c - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-pulse">⏳</div>
          <p className="text-zinc-300">Bestätigung wird geprüft…</p>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center max-w-sm">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-white mb-2">E-Mail bestätigt!</h1>
          <p className="text-zinc-300 text-sm mb-4">
            Dein Konto ist jetzt aktiv. Du wirst in {countdown} Sekunden weitergeleitet…
          </p>
          <button
            type="button"
            onClick={() => router.replace("/dashboard")}
            className="rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white hover:opacity-90"
          >
            Jetzt starten →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center max-w-sm">
        <div className="text-5xl mb-4">🔗</div>
        <h1 className="text-2xl font-bold text-white mb-2">Link abgelaufen</h1>
        <p className="text-zinc-300 text-sm mb-4">
          Dieser Bestätigungslink ist nicht mehr gültig. Bitte melde dich an und fordere einen neuen an.
        </p>
        <button
          type="button"
          onClick={() => router.replace("/")}
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          Zur Startseite
        </button>
      </div>
    </div>
  );
}
