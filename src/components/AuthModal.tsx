"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

type Tab = "signin" | "signup";

export function AuthModal({ onClose }: { onClose: () => void }) {
  const { signIn, signUp } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("signin");
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handle = useCallback(async () => {
    setError(null);
    setSuccess(null);
    if (!email.trim() || !password.trim()) {
      setError("Bitte E-Mail und Passwort eingeben.");
      return;
    }
    setLoading(true);
    try {
      if (tab === "signin") {
        const { error: e } = await signIn(email, password);
        if (e) { setError(e.message); return; }
        onClose();
        router.push("/dashboard");
      } else {
        const { error: e } = await signUp(email, password);
        if (e) { setError(e.message); return; }
        setSuccess("Konto erstellt! Bitte prüfe deine E-Mails zur Bestätigung.");
      }
    } finally {
      setLoading(false);
    }
  }, [tab, email, password, signIn, signUp, onClose, router]);

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="block-card block-card--stone w-full max-w-sm p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-pixel text-[11px] leading-relaxed text-white">
            {tab === "signin" ? "🔑 Anmelden" : "🚀 Konto erstellen"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="btn-pixel btn-pixel--stone px-2 py-1 text-xs"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-5">
          {(["signin", "signup"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => { setTab(t); setError(null); setSuccess(null); }}
              className={`inventory-slot flex-1 text-xs font-semibold transition-all ${
                tab === t ? "inventory-slot--completed" : ""
              }`}
            >
              {t === "signin" ? "Anmelden" : "Registrieren"}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="space-y-3">
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="crafting-panel w-full px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-[#44F7E0]/40 bg-transparent"
            onKeyDown={(e) => { if (e.key === "Enter") void handle(); }}
          />
          <input
            type="password"
            placeholder="Passwort (min. 6 Zeichen)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="crafting-panel w-full px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-[#44F7E0]/40 bg-transparent"
            onKeyDown={(e) => { if (e.key === "Enter") void handle(); }}
          />
        </div>

        {/* Error / Success */}
        {error && (
          <div className="block-card block-card--red mt-3 px-4 py-2 text-sm text-[#FF3E3E]">
            ⚠️ {error}
          </div>
        )}
        {success && (
          <div className="block-card block-card--grass mt-3 px-4 py-2 text-sm text-[#5D8A34]">
            ✓ {success}
          </div>
        )}

        {/* Submit */}
        <button
          type="button"
          onClick={() => void handle()}
          disabled={loading}
          className={`btn-pixel mt-5 w-full py-3 text-sm disabled:opacity-60 ${
            tab === "signin" ? "btn-pixel--green" : "btn-pixel--blue"
          }`}
        >
          {loading ? "⏳ Bitte warten..." : tab === "signin" ? "⚒️ Einloggen" : "🚀 Registrieren"}
        </button>

        <p className="mt-4 text-center text-xs text-zinc-500">
          Dein Lernfortschritt wird in der Cloud gespeichert und ist auf allen Geräten verfügbar.
        </p>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(modal, document.body);
}
