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
    <section className="rounded-3xl border border-white/10 bg-black/20 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold text-zinc-300">Startscreen</p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            Wer lernt heute?
          </h2>
          <p className="mt-2 text-sm text-zinc-300">
            Wähle ein Profil oder lege ein neues an. Fortschritt wird pro Kind
            gespeichert.
          </p>
        </div>

        <button
          type="button"
          className="mt-3 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 sm:mt-0"
          onClick={() => router.push("/dashboard")}
          disabled={!active}
        >
          Weiter zu Dashboard
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
              className="text-left rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold text-white">
                  {niceName(p)}
                </div>
                {isActive ? (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                    aktiv
                  </span>
                ) : (
                  <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
                    wählen
                  </span>
                )}
              </div>
              <div className="mt-1 text-xs text-zinc-400">{p.id}</div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-semibold text-white">Neues Profil</div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (z.B. Mila)"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
          <button
            type="button"
            className="rounded-xl border border-white/10 bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 disabled:opacity-60"
            disabled={!name.trim()}
            onClick={() => {
              const trimmed = name.trim();
              if (!trimmed) return;
              addProfile(trimmed);
              setName("");
              router.push("/dashboard");
            }}
          >
            Anlegen
          </button>
        </div>
        <p className="mt-2 text-xs text-zinc-400">
          Tipp: Profile kannst du auch oben rechts über „Profil“ umbenennen oder
          löschen.
        </p>
      </div>
    </section>
  );
}

