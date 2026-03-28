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
        <span className="hidden text-[12px] font-bold sm:inline truncate max-w-[140px]" style={{ color: "#6b7280" }}>
          {user.email}
        </span>
        <button
          type="button"
          onClick={() => void signOut()}
          className="btn-pixel btn-pixel--stone px-3 py-2"
          style={{ fontSize: "12px" }}
        >
          Abmelden
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="btn-pixel btn-pixel--green px-3 py-2"
        style={{ fontSize: "13px" }}
      >
        Anmelden
      </button>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <header
      className="sticky top-0 z-20 backdrop-blur-md"
      style={{
        background: "rgba(17,24,39,0.95)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 px-1 py-1"
          >
            <span className="text-xl">🚀</span>
            <span className="font-extrabold text-[14px] text-white hidden sm:inline">
              CodeQuest <span style={{ color: "#58cc02" }}>Academy</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-0.5 sm:flex">
            <Link
              href="/dashboard"
              className="px-3 py-2 text-[13px] font-bold rounded-xl transition-colors"
              style={{ color: "#9ca3af" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f9fafb")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
            >
              🏠 HQ
            </Link>
            <Link
              href="/learn"
              className="px-3 py-2 text-[13px] font-bold rounded-xl transition-colors"
              style={{ color: "#9ca3af" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f9fafb")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
            >
              🌍 Welten
            </Link>
            <Link
              href="/projects"
              className="px-3 py-2 text-[13px] font-bold rounded-xl transition-colors"
              style={{ color: "#9ca3af" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f9fafb")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
            >
              🛠️ Bau
            </Link>
            <Link
              href="/parents"
              className="px-3 py-2 text-[13px] font-bold rounded-xl transition-colors"
              style={{ color: "#9ca3af" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f9fafb")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
            >
              👨‍👩‍👧 Eltern
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
