"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import {
  addProfile,
  DEFAULT_PROFILE,
  getActiveProfileId,
  getProfilesSnapshot,
  initializeProfiles,
  setActiveProfileId,
  subscribeProfiles,
  type KidProfile,
} from "@/lib/profiles";

function useProfilesStore() {
  const profiles = useSyncExternalStore(
    subscribeProfiles,
    getProfilesSnapshot,
    () => [DEFAULT_PROFILE],
  );

  const activeId = typeof window === "undefined" ? DEFAULT_PROFILE.id : getActiveProfileId();

  useEffect(() => initializeProfiles(), []);

  return { profiles, activeId };
}

function niceName(p: KidProfile) {
  return p.name?.trim() ? p.name : p.id;
}

export function StartPanel() {
  const router = useRouter();
  const { profiles, activeId } = useProfilesStore();
  const [name, setName] = useState("");

  const active = useMemo(
    () => profiles.find((p) => p.id === activeId),
    [profiles, activeId],
  );

  return (
    <section className="block-card block-card--stone p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-pixel text-[9px] leading-relaxed text-[#44F7E0]">Spieler-Auswahl</p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            Wer lernt heute?
          </h2>
          <p className="mt-2 text-sm text-zinc-300">
            Wähle ein Profil oder lege ein neues an. Fortschritt wird pro Spieler gespeichert.
          </p>
        </div>

        <button
          type="button"
          className="btn-pixel btn-pixel--green mt-3 sm:mt-0 px-4 py-2 text-sm"
          onClick={() => router.push("/dashboard")}
          disabled={!active}
        >
          🏠 Zum Spieler-HQ
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setActiveProfileId(p.id);
                router.push("/dashboard");
              }}
              className={`inventory-slot text-left p-4 w-full transition-all ${isActive ? "inventory-slot--completed" : ""}`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold text-white">
                  {niceName(p)}
                </div>
                {isActive ? (
                  <span className="status-pill--done">✓ Aktiv</span>
                ) : (
                  <span className="status-pill--open">wählen</span>
                )}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{p.id}</div>
            </button>
          );
        })}
      </div>

      <div className="crafting-panel mt-6 p-4">
        <div className="font-pixel text-[9px] leading-relaxed text-white">⚒️ Neuer Spieler</div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (z.B. Mila)"
            className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-[#44F7E0]/40"
          />
          <button
            type="button"
            className="btn-pixel btn-pixel--green px-4 py-2 text-sm disabled:opacity-60 shrink-0"
            disabled={!name.trim()}
            onClick={() => {
              const trimmed = name.trim();
              if (!trimmed) return;
              addProfile(trimmed);
              setName("");
              router.push("/dashboard");
            }}
          >
            + Anlegen
          </button>
        </div>
        <p className="mt-2 text-xs text-zinc-400">
          Tipp: Profile kannst du oben rechts über &quot;Profil&quot; umbenennen oder löschen.
        </p>
      </div>
    </section>
  );
}
