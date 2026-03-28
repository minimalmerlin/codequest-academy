"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { addProfile } from "@/lib/profiles";

const ONBOARDING_KEY = "codequest_onboarded_v1";
const AVATAR_KEY = "codequest_avatar";

const AVATARS = ["🧑‍💻", "🧙", "🧝", "🧟", "🦊", "🐢"];

/**
 * Shown once after first login.
 * 3-Step-Wizard: Welcome → Name → Avatar
 */
export function OnboardingModal() {
  const { user } = useAuth();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]!);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!user) return;
    const done = localStorage.getItem(ONBOARDING_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!done) setShow(true);
  }, [user]);

  function finish() {
    const cleaned = name.trim() || "Abenteurer";
    addProfile(cleaned);
    localStorage.setItem(ONBOARDING_KEY, "1");
    localStorage.setItem(AVATAR_KEY, avatar);
    setShow(false);
    router.push("/learn");
  }

  if (!mounted || !show) return null;

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="block-card block-card--stone w-full max-w-md p-8 text-center">

        {/* Step dots */}
        <div className="flex justify-center gap-2 mb-6">
          {([1, 2, 3] as const).map((s) => (
            <div
              key={s}
              className={`h-3 w-3 ${s === step ? "block-card block-card--gold" : "block-card block-card--stone opacity-40"}`}
              style={{ borderRadius: 0 }}
            />
          ))}
        </div>

        {/* Step 1 — Welcome */}
        {step === 1 && (
          <div>
            <div className="text-5xl mb-4 pixel-float inline-block">⛏️</div>
            <h2 className="font-pixel text-[11px] leading-relaxed text-white mb-3">
              Willkommen in der Welt!
            </h2>
            <p className="text-zinc-300 text-sm mb-8 leading-relaxed">
              CodeQuest Academy ist deine Welt voller Code-Missionen,
              Diamanten-XP und epischer Level-Ups. Bist du bereit?
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { emoji: "🎮", text: "135+ Missionen" },
                { emoji: "💎", text: "XP & Level" },
                { emoji: "🤖", text: "KI-Festung" },
              ].map((f) => (
                <div key={f.text} className="inventory-slot flex flex-col items-center gap-1 p-3">
                  <div className="text-xl">{f.emoji}</div>
                  <div className="text-[9px] text-zinc-400 leading-relaxed">{f.text}</div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn-pixel btn-pixel--green w-full py-3"
            >
              ⚔️ Abenteuer starten!
            </button>
          </div>
        )}

        {/* Step 2 — Name */}
        {step === 2 && (
          <div>
            <div className="text-4xl mb-4">🪪</div>
            <h2 className="font-pixel text-[11px] leading-relaxed text-white mb-2">
              Wie heißt du, Held?
            </h2>
            <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
              Dein Name erscheint auf deinem Spieler-HQ und auf Zertifikaten.
            </p>
            <input
              type="text"
              placeholder="z.B. Mila, Tim, DragonSlayer42..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && name.trim()) setStep(3); }}
              maxLength={32}
              autoFocus
              className="crafting-panel w-full px-4 py-3 text-center text-lg font-semibold text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-[#44F7E0]/40 bg-transparent mb-6"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-pixel btn-pixel--stone flex-1 py-3"
              >
                ← Zurück
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={!name.trim()}
                className="btn-pixel btn-pixel--green flex-1 py-3 disabled:opacity-60"
              >
                Weiter →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Avatar */}
        {step === 3 && (
          <div>
            <div className="text-4xl mb-4">🧬</div>
            <h2 className="font-pixel text-[11px] leading-relaxed text-white mb-2">
              Wähle deinen Avatar!
            </h2>
            <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
              Wer bist du in dieser Welt, {name.trim() || "Held"}?
            </p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAvatar(a)}
                  className={`inventory-slot flex items-center justify-center text-3xl py-4 transition-all ${
                    avatar === a ? "inventory-slot--completed" : ""
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-pixel btn-pixel--stone flex-1 py-3"
              >
                ← Zurück
              </button>
              <button
                type="button"
                onClick={finish}
                className="btn-pixel btn-pixel--gold flex-1 py-3"
              >
                ⭐ Ins Abenteuer!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
