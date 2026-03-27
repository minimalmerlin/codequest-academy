/**
 * Database operations against Supabase.
 * Errors are logged but never crash the app — Supabase is an async sync layer,
 * localStorage is the source of truth.
 */

import { supabase } from "@/lib/supabase";

type ProfileShape = { id: string; name: string; createdAt: string };

// ─── Kid Profiles ─────────────────────────────────────────────────────────────

export async function dbLoadProfiles(userId: string): Promise<ProfileShape[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("kid_profiles")
    .select("id, name, created_at")
    .eq("user_id", userId)
    .order("created_at");
  if (error) { console.warn("[db] dbLoadProfiles failed:", error.message); return []; }
  if (!data) return [];
  return (data as Array<{ id: string; name: string; created_at: string }>)
    .map((p) => ({ id: p.id, name: p.name, createdAt: p.created_at }));
}

export async function dbUpsertProfile(userId: string, profile: ProfileShape): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase.from("kid_profiles").upsert({
    id: profile.id,
    user_id: userId,
    name: profile.name,
    avatar_emoji: "🧒",
    created_at: profile.createdAt,
  });
  if (error) console.warn("[db] dbUpsertProfile failed:", error.message);
}

export async function dbRenameProfile(profileId: string, name: string): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase.from("kid_profiles").update({ name }).eq("id", profileId);
  if (error) console.warn("[db] dbRenameProfile failed:", error.message);
}

export async function dbDeleteProfile(profileId: string): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase.from("kid_profiles").delete().eq("id", profileId);
  if (error) console.warn("[db] dbDeleteProfile failed:", error.message);
}

// ─── Progress ─────────────────────────────────────────────────────────────────

export type DbProgress = {
  completedLessons: Record<string, true>;
  xp: number;
  streakDays: number;
  lastCompletedDate?: string;
};

export async function dbLoadProgress(profileId: string): Promise<DbProgress | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("profile_progress")
    .select("completed_lessons, xp, streak_days, last_completed_date")
    .eq("profile_id", profileId)
    .single();
  if (error) { console.warn("[db] dbLoadProgress failed:", error.message); return null; }
  if (!data) return null;
  const row = data as { completed_lessons: Record<string, true> | null; xp: number; streak_days: number; last_completed_date: string | null };
  return {
    completedLessons: row.completed_lessons ?? {},
    xp: row.xp ?? 0,
    streakDays: row.streak_days ?? 0,
    lastCompletedDate: row.last_completed_date ?? undefined,
  };
}

export async function dbSaveProgress(profileId: string, progress: DbProgress): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase.from("profile_progress").upsert({
    profile_id: profileId,
    completed_lessons: progress.completedLessons,
    xp: progress.xp,
    streak_days: progress.streakDays,
    last_completed_date: progress.lastCompletedDate ?? null,
    updated_at: new Date().toISOString(),
  });
  if (error) console.warn("[db] dbSaveProgress failed:", error.message);
}

// ─── ML Data: Lesson Attempts ─────────────────────────────────────────────────

export async function dbRecordAttempt(
  profileId: string,
  lessonId: string,
  trackId: string,
  success: boolean,
  timeSpentSeconds: number,
  attemptsCount: number,
): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase.from("lesson_attempts").insert({
    profile_id: profileId,
    lesson_id: lessonId,
    track_id: trackId,
    started_at: new Date(Date.now() - timeSpentSeconds * 1000).toISOString(),
    completed_at: new Date().toISOString(),
    success,
    attempts_count: attemptsCount,
    time_spent_seconds: timeSpentSeconds,
  });
  if (error) console.warn("[db] dbRecordAttempt failed:", error.message);
}

// ─── ML: Adaptive Learning Data ───────────────────────────────────────────────

export type LearningStats = {
  lessonId: string;
  trackId: string;
  avgTimeSeconds: number;
  avgAttempts: number;
  successRate: number;
  totalAttempts: number;
};

/**
 * Loads aggregated learning stats for the current user via a secure RPC function.
 * Uses get_my_learning_stats() which is SECURITY INVOKER and respects RLS –
 * never queries the view directly from the client.
 */
export async function dbLoadLearningStats(): Promise<LearningStats[]> {
  if (!supabase) return [];
  const { data, error } = await supabase.rpc("get_my_learning_stats");
  if (error) { console.warn("[db] dbLoadLearningStats failed:", error.message); return []; }
  if (!data) return [];
  return (data as Array<{
    lesson_id: string;
    track_id: string;
    total_attempts: number;
    avg_time_seconds: number;
    avg_attempts_session: number;
    success_rate_pct: number;
  }>).map((row) => ({
    lessonId: row.lesson_id,
    trackId: row.track_id,
    avgTimeSeconds: row.avg_time_seconds ?? 0,
    avgAttempts: row.avg_attempts_session ?? 0,
    successRate: row.success_rate_pct != null ? row.success_rate_pct / 100 : 0,
    totalAttempts: row.total_attempts ?? 0,
  }));
}
