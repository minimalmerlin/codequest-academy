"use client";

/**
 * Invisible component that syncs Supabase cloud data into localStorage on login.
 * Mount this once at the top of the app (layout).
 */

import { useEffect, useRef } from "react";
import { useAuth } from "@/lib/auth";
import { dbLoadProfiles, dbLoadProgress, dbUpsertProfile } from "@/lib/db";
import { hydrateProfilesFromCloud, getProfilesSnapshot } from "@/lib/profiles";
import { hydrateProgressFromCloud } from "@/lib/progress";

export function SupabaseSync() {
  const { user } = useAuth();
  const lastUserId = useRef<string | null>(null);

  useEffect(() => {
    if (!user || user.id === lastUserId.current) return;
    lastUserId.current = user.id;

    void (async () => {
      // 1. Load cloud profiles
      const cloudProfiles = await dbLoadProfiles(user.id);

      if (cloudProfiles.length > 0) {
        // Cloud has profiles – use them
        hydrateProfilesFromCloud(cloudProfiles);

        // 2. Sync progress for each profile
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
        // No cloud profiles yet – push local profiles to Supabase
        const localProfiles = getProfilesSnapshot();
        for (const profile of localProfiles) {
          await dbUpsertProfile(user.id, profile);
        }
      }
    })();
  }, [user]);

  return null;
}
