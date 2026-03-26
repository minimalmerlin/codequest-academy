/**
 * Database operations against Supabase.
 * All functions return silently on error or when Supabase is not configured.
 */

import { supabase } from "@/lib/supabase";

type ProfileShape = { id: string; name: string; createdAt: string };

// ─── Kid Profiles ─────────────────────────────────────────────────────────────

export async function dbLoadProfiles(userId: string): Promise<ProfileShape[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("kid_profiles")
    .select("*")
    .eq("user_id", userId)
    .order("created_at");
  if (error || !data) return [];
  return data.map((p) => ({ id: p.id, name: p.name, createdAt: p.created_at }));
}

export async function dbUpsertProfile(userId: string, profile: ProfileShape): Promise<void> {
  if (!supabase) return;
  await supabase.from("kid_profiles").upsert({
    id: profile.id,
    user_id: userId,
    name: profile.name,
    avatar_emoji: "🧒",
    created_at: profile.createdAt,
  });
}

export async function dbRenameProfile(profileId: string, name: string): Promise<void> {
  if (!supabase) return;
  await supabase.from("kid_profiles").update({ name }).eq("id", profileId);
}

export async function dbDeleteProfile(profileId: string): Promise<void> {
  if (!supabase) return;
  await supabase.from("kid_profiles").delete().eq("id", profileId);
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
    .select("*")
    .eq("profile_id", profileId)
    .single();
  if (error || !data) return null;
  return {
    completedLessons: (data.completed_lessons as Record<string, true>) ?? {},
    xp: data.xp ?? 0,
    streakDays: data.streak_days ?? 0,
    lastCompletedDate: data.last_completed_date ?? undefined,
  };
}

export async function dbSaveProgress(profileId: string, progress: DbProgress): Promise<void> {
  if (!supabase) return;
  await supabase.from("profile_progress").upsert({
    profile_id: profileId,
    completed_lessons: progress.completedLessons,
    xp: progress.xp,
    streak_days: progress.streakDays,
    last_completed_date: progress.lastCompletedDate ?? null,
    updated_at: new Date().toISOString(),
  });
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
  await supabase.from("lesson_attempts").insert({
    profile_id: profileId,
    lesson_id: lessonId,
    track_id: trackId,
    started_at: new Date(Date.now() - timeSpentSeconds * 1000).toISOString(),
    completed_at: new Date().toISOString(),
    success,
    attempts_count: attemptsCount,
    time_spent_seconds: timeSpentSeconds,
  });
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

/** Loads aggregated stats per lesson for a profile – feeds the adaptive ML layer. */
export async function dbLoadLearningStats(profileId: string): Promise<LearningStats[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("lesson_attempts")
    .select("lesson_id, track_id, success, attempts_count, time_spent_seconds")
    .eq("profile_id", profileId);
  if (error || !data) return [];

  // Aggregate per lesson
  const map = new Map<string, { total: number; successes: number; time: number; attempts: number; trackId: string }>();
  for (const row of data) {
    const key = row.lesson_id;
    const existing = map.get(key) ?? { total: 0, successes: 0, time: 0, attempts: 0, trackId: row.track_id };
    existing.total++;
    if (row.success) existing.successes++;
    existing.time += row.time_spent_seconds ?? 0;
    existing.attempts += row.attempts_count ?? 1;
    map.set(key, existing);
  }

  return Array.from(map.entries()).map(([lessonId, s]) => ({
    lessonId,
    trackId: s.trackId,
    avgTimeSeconds: s.total > 0 ? Math.round(s.time / s.total) : 0,
    avgAttempts: s.total > 0 ? Math.round((s.attempts / s.total) * 10) / 10 : 0,
    successRate: s.total > 0 ? s.successes / s.total : 0,
    totalAttempts: s.total,
  }));
}
