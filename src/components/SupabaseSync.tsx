"use client";

/**
 * Invisible component that syncs Supabase cloud data into localStorage.
 * Runs on login and whenever the tab regains visibility.
 * Debounced to at most once per 60 seconds to avoid hammering the DB.
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { useAuth } from "@/lib/auth";
import { dbLoadProfiles, dbLoadProgress, dbUpsertProfile } from "@/lib/db";
import { hydrateProfilesFromCloud, getProfilesSnapshot } from "@/lib/profiles";
import { hydrateProgressFromCloud } from "@/lib/progress";

export type SyncStatus = "idle" | "syncing" | "ok" | "error";

// ── Module-level status store (shared across all component instances) ──────────
const statusListeners = new Set<(s: SyncStatus) => void>();
let currentStatus: SyncStatus = "idle";

function setStatus(s: SyncStatus) {
  currentStatus = s;
  for (const l of statusListeners) l(s);
}

/** Subscribe to the Supabase sync status from any component. */
export function useSyncStatus(): SyncStatus {
  const [status, setLocalStatus] = useState<SyncStatus>(currentStatus);
  useEffect(() => {
    const cb = (s: SyncStatus) => setLocalStatus(s);
    statusListeners.add(cb);
    return () => {
      statusListeners.delete(cb);
    };
  }, []);
  return status;
}

// ── SupabaseSync component ─────────────────────────────────────────────────────

export function SupabaseSync() {
  const { user } = useAuth();
  const lastUserId = useRef<string | null>(null);
  const lastSyncTime = useRef<number>(0);

  const runSync = useCallback(
    async (userId: string, force = false) => {
      // Debounce: skip if synced less than 60 s ago (unless forced)
      const now = Date.now();
      if (!force && now - lastSyncTime.current < 60_000) return;
      lastSyncTime.current = now;

      setStatus("syncing");
      try {
        const cloudProfiles = await dbLoadProfiles(userId);

        if (cloudProfiles.length > 0) {
          // Cloud has data – hydrate localStorage
          hydrateProfilesFromCloud(cloudProfiles);
          for (const profile of cloudProfiles) {
            const progress = await dbLoadProgress(profile.id);
            if (progress) {
              hydrateProgressFromCloud(profile.id, {
                completedLessons: progress.completedLessons,
                xp: progress.xp,
                streakDays: progress.streakDays,
                lastCompletedDate: progress.lastCompletedDate,
              });
            }
          }
        } else {
          // No cloud profiles yet – push local profiles up
          const localProfiles = getProfilesSnapshot();
          for (const profile of localProfiles) {
            await dbUpsertProfile(userId, profile);
          }
        }

        setStatus("ok");
      } catch {
        setStatus("error");
      }
    },
    [],
  );

  useEffect(() => {
    if (!user) return;

    // Force sync when user changes (first login / account switch)
    const isNewUser = user.id !== lastUserId.current;
    if (isNewUser) {
      lastUserId.current = user.id;
      lastSyncTime.current = 0;
    }

    void runSync(user.id, isNewUser);

    // Re-sync whenever the tab regains focus (covers multi-device usage)
    function onVisibility() {
      if (document.visibilityState === "visible") {
        void runSync(user!.id);
      }
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [user, runSync]);

  return null;
}
