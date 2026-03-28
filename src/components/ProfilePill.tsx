"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  addProfile,
  attachProfilesStorageListener,
  DEFAULT_PROFILE,
  deleteProfile,
  getActiveProfileId,
  getProfilesSnapshot,
  initializeProfiles,
  renameProfile,
  setActiveProfileId,
  subscribeProfiles,
} from "@/lib/profiles";

const AVATAR_KEY = "codequest_avatar";

function useProfiles() {
  const profiles = useSyncExternalStore(
    subscribeProfiles,
    getProfilesSnapshot,
    () => [DEFAULT_PROFILE],
  );
  const activeId = typeof window === "undefined" ? DEFAULT_PROFILE.id : getActiveProfileId();

  useEffect(() => attachProfilesStorageListener(), []);
  useEffect(() => initializeProfiles(), []);

  return { profiles, activeId };
}

export function ProfilePill() {
  const { profiles, activeId } = useProfiles();
  const [avatar, setAvatar] = useState("🧑‍💻");

  useEffect(() => {
    const saved = localStorage.getItem(AVATAR_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setAvatar(saved);
  }, []);

  const active = profiles.find((p) => p.id === activeId);

  return (
    <div className="relative">
      <details className="group">
        <summary className="list-none">
          <span className="block-card block-card--stone inline-flex cursor-pointer items-center gap-2 px-3 py-2 text-xs text-zinc-200">
            <span className="text-base leading-none">{avatar}</span>
            <span className="hidden sm:inline text-zinc-400">Profil</span>
            <span className="font-semibold text-white">
              {active?.name ?? "—"}
            </span>
          </span>
        </summary>

        <div className="absolute right-0 mt-2 w-72 overflow-hidden block-card block-card--stone shadow-xl z-50">
          <div className="border-b border-white/10 px-4 py-3 font-pixel text-[9px] leading-relaxed text-zinc-300">
            Spieler-Profile
          </div>
          <div className="max-h-72 overflow-auto p-2">
            {profiles.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveProfileId(p.id)}
                className={`inventory-slot flex w-full items-center justify-between gap-2 p-3 text-left text-sm text-zinc-200 mb-1 ${
                  p.id === activeId ? "inventory-slot--completed" : ""
                }`}
              >
                <span className="truncate">
                  {p.name}
                  {p.id === activeId ? (
                    <span className="ml-2 status-pill--done text-[8px]">aktiv</span>
                  ) : null}
                </span>
                <span className="text-xs text-zinc-500 shrink-0">{p.id}</span>
              </button>
            ))}
          </div>

          <div className="border-t border-white/10 p-2 space-y-2">
            <Link
              href="/profile"
              className="btn-pixel btn-pixel--blue flex w-full items-center gap-2 px-3 py-2 text-xs"
            >
              👤 Spieler-Akte &amp; Fortschritt
            </Link>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className="btn-pixel btn-pixel--stone px-3 py-2 text-xs"
                onClick={() => {
                  const name = window.prompt("Name für neues Profil (z.B. Mila)");
                  if (name) addProfile(name);
                }}
              >
                + Neu
              </button>
              <button
                type="button"
                className="btn-pixel btn-pixel--stone px-3 py-2 text-xs disabled:opacity-60"
                onClick={() => {
                  const name = window.prompt("Neuer Name", active?.name ?? "");
                  if (name) renameProfile(activeId, name);
                }}
                disabled={!active}
              >
                Umben.
              </button>
              <button
                type="button"
                className="btn-pixel btn-pixel--red px-3 py-2 text-xs disabled:opacity-60"
                onClick={() => {
                  if (profiles.length <= 1) return;
                  const ok = window.confirm(
                    `Profil "${active?.name ?? ""}" löschen?`,
                  );
                  if (ok) deleteProfile(activeId);
                }}
                disabled={!active || profiles.length <= 1}
              >
                Löschen
              </button>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
