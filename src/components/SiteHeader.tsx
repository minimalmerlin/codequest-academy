"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ProgressPill } from "@/components/ProgressPill";
import { ProfilePill } from "@/components/ProfilePill";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/lib/auth";
import { useSubscription } from "@/lib/subscription";
import { useSyncStatus } from "@/components/SupabaseSync";

function SyncIndicator() {
  const status = useSyncStatus();
  const { user } = useAuth();
  if (!user) return null;
  if (status === "syncing") return (
    <span title="Synchronisiere…" className="pixel-blink text-xs text-zinc-500 select-none">☁</span>
  );
  if (status === "error") return (
    <span title="Sync fehlgeschlagen – Daten werden lokal gespeichert" className="pixel-shake text-xs text-amber-500 select-none cursor-default">⚠</span>
  );
  return null;
}

function AuthButton() {
  const { user, loading, signOut } = useAuth();
  const { isPremium } = useSubscription();
  const [showModal, setShowModal] = useState(false);

  if (loading) return null;

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span className="hidden text-xs text-zinc-400 sm:inline truncate max-w-[140px]">
          {user.email}
        </span>
        {isPremium ? (
          <span className="font-pixel text-[7px] leading-none bg-[#FFD700] text-black px-2 py-1 hidden sm:inline">
            ⭐ PREMIUM
          </span>
        ) : (
          <Link
            href="/pricing"
            className="btn-pixel btn-pixel--gold px-3 py-2 hidden sm:inline-flex items-center gap-1"
          >
            ⭐ Upgrade
          </Link>
        )}
        <button
          type="button"
          onClick={() => void signOut()}
          className="btn-pixel btn-pixel--stone px-3 py-2"
        >
          Abmelden
        </button>
      </div>
    );
  }

  return (
    <>
      <Link
        href="/pricing"
        className="btn-pixel btn-pixel--gold px-3 py-2 hidden sm:inline-flex items-center gap-1"
      >
        ⭐ Preise
      </Link>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="btn-pixel btn-pixel--green px-3 py-2"
      >
        🔑 Anmelden
      </button>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <header className="sticky top-0 z-20 border-b-2 border-[#5D8A34]/50 bg-[#0d0d1a]/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 px-2 py-1"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center block-card block-card--grass text-lg">
              ⛏️
            </span>
            <span className="font-pixel text-[10px] leading-relaxed text-white hidden sm:inline">
              CodeQuest <span className="text-[#44F7E0]">Academy</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 sm:flex">
            <Link
              href="/dashboard"
              className="px-3 py-2 text-xs text-zinc-300 hover:text-[#FFD700] border-b-2 border-transparent hover:border-[#FFD700] transition-colors font-semibold"
            >
              🏠 HQ
            </Link>
            <Link
              href="/learn"
              className="px-3 py-2 text-xs text-zinc-300 hover:text-[#FFD700] border-b-2 border-transparent hover:border-[#FFD700] transition-colors font-semibold"
            >
              🌍 Welten
            </Link>
            <Link
              href="/projects"
              className="px-3 py-2 text-xs text-zinc-300 hover:text-[#FFD700] border-b-2 border-transparent hover:border-[#FFD700] transition-colors font-semibold"
            >
              🛠️ Bau
            </Link>
            <Link
              href="/parents"
              className="px-3 py-2 text-xs text-zinc-300 hover:text-[#FFD700] border-b-2 border-transparent hover:border-[#FFD700] transition-colors font-semibold"
            >
              👨‍👩‍👧 Eltern
            </Link>
            <Link
              href="/pricing"
              className="px-3 py-2 text-xs text-[#FFD700] hover:text-[#FFD700] border-b-2 border-transparent hover:border-[#FFD700] transition-colors font-semibold"
            >
              ⭐ Preise
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <SyncIndicator />
          <AuthButton />
          <ProfilePill />
          <ProgressPill />
        </div>
      </div>
    </header>
  );
}
