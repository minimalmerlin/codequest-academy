"use client";

import { safeStorage } from "@/lib/storage";
import { getAuthUser } from "@/lib/auth";
import { dbUpsertProfile, dbRenameProfile, dbDeleteProfile } from "@/lib/db";

export type KidProfile = {
  id: string;
  name: string;
  createdAt: string;
};

const PROFILES_KEY = "codequest_profiles_v1";
const ACTIVE_PROFILE_KEY = "codequest_active_profile_v1";

const listeners = new Set<() => void>();

export const DEFAULT_PROFILE: KidProfile = {
  id: "kid-1",
  name: "Kind 1",
  createdAt: "init",
};

let profilesCache: KidProfile[] | null = null;

function emit() {
  profilesCache = null;
  for (const l of listeners) l();
}

function safeParseProfiles(raw: string | null): KidProfile[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw) as unknown;
    if (!Array.isArray(data)) return [];
    return data
      .map((p) => p as Partial<KidProfile>)
      .filter((p) => typeof p.id === "string" && typeof p.name === "string")
      .map((p) => ({
        id: p.id!,
        name: p.name!,
        createdAt:
          typeof p.createdAt === "string" ? p.createdAt : new Date().toISOString(),
      }));
  } catch {
    return [];
  }
}

function writeProfiles(profiles: KidProfile[]) {
  safeStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  emit();
}

function readProfiles(): KidProfile[] {
  const existing = safeParseProfiles(safeStorage.getItem(PROFILES_KEY));
  // Garantiert niemals leeres Array — DEFAULT_PROFILE ist immer Fallback
  return existing.length > 0 ? existing : [DEFAULT_PROFILE];
}

function safeFirstProfile(profiles: KidProfile[]): KidProfile {
  // Null-safe alternative zu profiles[0]! — verhindert crashes bei leerem Array
  return profiles[0] ?? DEFAULT_PROFILE;
}

export function initializeProfiles() {
  if (typeof window === "undefined") return;
  const existing = safeParseProfiles(safeStorage.getItem(PROFILES_KEY));
  if (existing.length === 0) {
    safeStorage.setItem(PROFILES_KEY, JSON.stringify([DEFAULT_PROFILE]));
  }
  const profiles = readProfiles();
  const active = safeStorage.getItem(ACTIVE_PROFILE_KEY);
  if (!active || !profiles.some((p) => p.id === active)) {
    safeStorage.setItem(ACTIVE_PROFILE_KEY, safeFirstProfile(profiles).id);
  }
  emit();
}

export function subscribeProfiles(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function getProfilesSnapshot() {
  if (typeof window === "undefined") return [DEFAULT_PROFILE] as KidProfile[];
  if (profilesCache === null) profilesCache = readProfiles();
  return profilesCache;
}

export function getActiveProfileId() {
  if (typeof window === "undefined") return "kid-1";
  const active = safeStorage.getItem(ACTIVE_PROFILE_KEY);
  const profiles = readProfiles();
  return active && profiles.some((p) => p.id === active) ? active : safeFirstProfile(profiles).id;
}

export function setActiveProfileId(profileId: string) {
  initializeProfiles();
  const profiles = readProfiles();
  if (!profiles.some((p) => p.id === profileId)) return;
  safeStorage.setItem(ACTIVE_PROFILE_KEY, profileId);
  emit();
}

export function addProfile(name: string) {
  initializeProfiles();
  const profiles = readProfiles();
  const cleaned = name.trim().slice(0, 32);
  if (!cleaned) return;
  // Kryptografisch sichere ID — Math.random() ist vorhersagbar
  const random = Array.from(crypto.getRandomValues(new Uint8Array(8)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const id = `kid-${random}`;
  const next: KidProfile = { id, name: cleaned, createdAt: new Date().toISOString() };
  writeProfiles([...profiles, next]);
  setActiveProfileId(id);
  // Sync to Supabase if logged in
  const user = getAuthUser();
  if (user) void dbUpsertProfile(user.id, next);
}

export function renameProfile(profileId: string, name: string) {
  initializeProfiles();
  const profiles = readProfiles();
  const cleaned = name.trim().slice(0, 32);
  if (!cleaned) return;
  writeProfiles(
    profiles.map((p) => (p.id === profileId ? { ...p, name: cleaned } : p)),
  );
  // Sync to Supabase if logged in
  if (getAuthUser()) void dbRenameProfile(profileId, cleaned);
}

export function deleteProfile(profileId: string) {
  initializeProfiles();
  const profiles = readProfiles();
  const next = profiles.filter((p) => p.id !== profileId);
  if (next.length === 0) return;
  writeProfiles(next);
  const active = safeStorage.getItem(ACTIVE_PROFILE_KEY);
  if (active === profileId) {
    safeStorage.setItem(ACTIVE_PROFILE_KEY, safeFirstProfile(next).id);
  }
  emit();
  // Sync to Supabase if logged in
  if (getAuthUser()) void dbDeleteProfile(profileId);
}

/**
 * Called by SupabaseSync after login to replace local profiles with cloud data.
 */
export function hydrateProfilesFromCloud(profiles: KidProfile[]) {
  if (profiles.length === 0) return;
  safeStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  const active = safeStorage.getItem(ACTIVE_PROFILE_KEY);
  if (!active || !profiles.some((p) => p.id === active)) {
    safeStorage.setItem(ACTIVE_PROFILE_KEY, safeFirstProfile(profiles).id);
  }
  emit();
}

export function attachProfilesStorageListener() {
  function onStorage(e: StorageEvent) {
    if (e.key === PROFILES_KEY || e.key === ACTIVE_PROFILE_KEY) emit();
  }
  window.addEventListener("storage", onStorage);
  return () => window.removeEventListener("storage", onStorage);
}

export function notifyProfilesChanged() {
  emit();
}
