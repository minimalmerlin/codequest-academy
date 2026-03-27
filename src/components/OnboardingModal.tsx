"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { addProfile } from "@/lib/profiles";

const ONBOARDING_KEY = "codequest_onboarded_v1";

/**
 * Shown once after first login.
 * Asks for the child's name, creates their first profile, then sends them to /learn.
 */
export function OnboardingModal() {
  const { user } = useAuth();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!user) return;
    const done = localStorage.getItem(ONBOARDING_KEY);
    if (!done) setShow(true);
  }, [user]);

  function finish() {
    const cleaned = name.trim() || "Lernender";
    addProfile(cleaned);
    localStorage.setItem(ONBOARDING_KEY, "1");
    setShow(false);
    router.push("/learn");
  }

  if (!mounted || !show) return null;

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-3xl border border-violet-500/30 bg-zinc-950 shadow-2xl p-8 text-center">

        <div className="text-5xl mb-4">🚀</div>
        <h2 className="text-2xl font-extrabold text-white mb-2">
          Willkommen bei CodeQuest!
        </h2>
        <p className="text-zinc-300 text-sm mb-8 leading-relaxed">
          Hier lernst du Programmieren mit Quests, XP und Level-ups.
          Wie heißt du?
        </p>

        <input
          type="text"
          placeholder="Dein Name (z.B. Mila, Tim, ...)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") finish(); }}
          maxLength={32}
          autoFocus
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-center text-lg font-semibold text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-500/50 mb-4"
        />

        <button
          type="button"
          onClick={finish}
          className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-base font-bold text-white shadow-lg shadow-violet-500/30 hover:opacity-90 transition-opacity"
        >
          ✨ Los geht's!
        </button>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            { emoji: "📚", text: "85+ Quests" },
            { emoji: "🏆", text: "XP & Level" },
            { emoji: "🤖", text: "KI-Hilfe" },
          ].map((f) => (
            <div key={f.text} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="text-xl mb-1">{f.emoji}</div>
              <div className="text-xs text-zinc-400">{f.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
