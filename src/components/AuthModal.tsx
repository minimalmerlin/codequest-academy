"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "@/lib/auth";

type Tab = "signin" | "signup";

export function AuthModal({ onClose }: { onClose: () => void }) {
  const { signIn, signUp } = useAuth();
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
      } else {
        const { error: e } = await signUp(email, password);
        if (e) { setError(e.message); return; }
        setSuccess("Konto erstellt! Bitte prüfe deine E-Mails zur Bestätigung.");
      }
    } finally {
      setLoading(false);
    }
  }, [tab, email, password, signIn, signUp, onClose]);

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            {tab === "signin" ? "🔑 Anmelden" : "🚀 Konto erstellen"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl border border-white/10 bg-white/5 p-1 mb-5">
          {(["signin", "signup"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => { setTab(t); setError(null); setSuccess(null); }}
              className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all ${
                tab === t
                  ? "bg-violet-600 text-white shadow"
                  : "text-zinc-400 hover:text-white"
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
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-500/50"
            onKeyDown={(e) => { if (e.key === "Enter") void handle(); }}
          />
          <input
            type="password"
            placeholder="Passwort (min. 6 Zeichen)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-500/50"
            onKeyDown={(e) => { if (e.key === "Enter") void handle(); }}
          />
        </div>

        {/* Error / Success */}
        {error && (
          <div className="mt-3 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm text-rose-300">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            {success}
          </div>
        )}

        {/* Submit */}
        <button
          type="button"
          onClick={() => void handle()}
          disabled={loading}
          className="mt-5 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/30 hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {loading ? "⏳ Bitte warten..." : tab === "signin" ? "Anmelden" : "Konto erstellen"}
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
