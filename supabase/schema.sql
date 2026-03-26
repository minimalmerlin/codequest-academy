-- ============================================================
-- CodeQuest Academy – Supabase Schema
-- Run this in the Supabase SQL Editor (once, in order)
-- ============================================================

-- ─── Tables ───────────────────────────────────────────────────────────────────

-- Child profiles (linked to parent's auth account)
-- TEXT pk to match localStorage-generated IDs.
CREATE TABLE IF NOT EXISTS kid_profiles (
  id            TEXT        PRIMARY KEY                   CHECK (length(id) BETWEEN 3 AND 80),
  user_id       UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name          TEXT        NOT NULL                      CHECK (length(name) BETWEEN 1 AND 32),
  avatar_emoji  TEXT        NOT NULL DEFAULT '🧒'         CHECK (length(avatar_emoji) <= 10),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- One progress row per child profile
CREATE TABLE IF NOT EXISTS profile_progress (
  profile_id           TEXT        PRIMARY KEY REFERENCES kid_profiles(id) ON DELETE CASCADE,
  completed_lessons    JSONB       NOT NULL DEFAULT '{}',
  xp                   INTEGER     NOT NULL DEFAULT 0    CHECK (xp >= 0),
  streak_days          INTEGER     NOT NULL DEFAULT 0    CHECK (streak_days >= 0),
  last_completed_date  DATE,
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Per-attempt data – used for adaptive ML
CREATE TABLE IF NOT EXISTS lesson_attempts (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id          TEXT        NOT NULL REFERENCES kid_profiles(id) ON DELETE CASCADE,
  lesson_id           TEXT        NOT NULL               CHECK (length(lesson_id) BETWEEN 1 AND 40),
  track_id            TEXT        NOT NULL               CHECK (track_id IN ('web', 'js', 'python', 'ki')),
  started_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at        TIMESTAMPTZ,
  success             BOOLEAN,
  attempts_count      INTEGER     NOT NULL DEFAULT 1     CHECK (attempts_count >= 1),
  time_spent_seconds  INTEGER                            CHECK (time_spent_seconds >= 0)
);

-- Fast per-profile queries
CREATE INDEX IF NOT EXISTS idx_lesson_attempts_profile ON lesson_attempts(profile_id);
CREATE INDEX IF NOT EXISTS idx_lesson_attempts_lesson  ON lesson_attempts(lesson_id);
CREATE INDEX IF NOT EXISTS idx_kid_profiles_user       ON kid_profiles(user_id);

-- ─── Row Level Security ───────────────────────────────────────────────────────

ALTER TABLE kid_profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_progress  ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_attempts   ENABLE ROW LEVEL SECURITY;

-- ── kid_profiles ──────────────────────────────────────────────────────────────
-- USING:      which rows are visible / modifiable (SELECT, UPDATE, DELETE)
-- WITH CHECK: what the row must look like after INSERT / UPDATE
-- Both needed together to prevent writing data under another user's id.

DROP POLICY IF EXISTS "owner_all_kid_profiles" ON kid_profiles;
CREATE POLICY "owner_all_kid_profiles" ON kid_profiles
  FOR ALL
  USING     (auth.uid() = user_id)
  WITH CHECK(auth.uid() = user_id);

-- ── profile_progress ──────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "owner_all_profile_progress" ON profile_progress;
CREATE POLICY "owner_all_profile_progress" ON profile_progress
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM kid_profiles kp
      WHERE kp.id = profile_id AND kp.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM kid_profiles kp
      WHERE kp.id = profile_id AND kp.user_id = auth.uid()
    )
  );

-- ── lesson_attempts ───────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "owner_all_lesson_attempts" ON lesson_attempts;
CREATE POLICY "owner_all_lesson_attempts" ON lesson_attempts
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM kid_profiles kp
      WHERE kp.id = profile_id AND kp.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM kid_profiles kp
      WHERE kp.id = profile_id AND kp.user_id = auth.uid()
    )
  );

-- ─── ML View: Learning Analytics ─────────────────────────────────────────────
-- SECURITY INVOKER = view runs with the querying user's permissions,
-- so RLS on lesson_attempts is respected. Without this, any logged-in
-- user could read data from ALL other users via this view.

DROP VIEW IF EXISTS lesson_learning_stats;
CREATE VIEW lesson_learning_stats
  WITH (security_invoker = true)
AS
SELECT
  profile_id,
  lesson_id,
  track_id,
  COUNT(*)                                                                      AS total_attempts,
  ROUND(AVG(time_spent_seconds))                                               AS avg_time_seconds,
  ROUND(AVG(attempts_count)::NUMERIC, 1)                                       AS avg_attempts_per_session,
  ROUND(
    100.0 * SUM(CASE WHEN success THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0),
    1
  )                                                                             AS success_rate_pct,
  MAX(completed_at)                                                            AS last_attempted_at
FROM lesson_attempts
WHERE completed_at IS NOT NULL
GROUP BY profile_id, lesson_id, track_id;

-- ─── Helper: get_my_stats() ───────────────────────────────────────────────────
-- Safe RPC function – returns only data for the calling user's profiles.
-- Use this from the client instead of querying the view directly.

CREATE OR REPLACE FUNCTION get_my_learning_stats()
RETURNS TABLE (
  profile_id            TEXT,
  lesson_id             TEXT,
  track_id              TEXT,
  total_attempts        BIGINT,
  avg_time_seconds      NUMERIC,
  avg_attempts_session  NUMERIC,
  success_rate_pct      NUMERIC,
  last_attempted_at     TIMESTAMPTZ
)
LANGUAGE sql
SECURITY INVOKER
STABLE
AS $$
  SELECT
    la.profile_id,
    la.lesson_id,
    la.track_id,
    COUNT(*)                                                                    AS total_attempts,
    ROUND(AVG(la.time_spent_seconds))                                          AS avg_time_seconds,
    ROUND(AVG(la.attempts_count)::NUMERIC, 1)                                  AS avg_attempts_session,
    ROUND(
      100.0 * SUM(CASE WHEN la.success THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0),
      1
    )                                                                           AS success_rate_pct,
    MAX(la.completed_at)                                                       AS last_attempted_at
  FROM lesson_attempts la
  JOIN kid_profiles kp ON kp.id = la.profile_id
  WHERE kp.user_id = auth.uid()
    AND la.completed_at IS NOT NULL
  GROUP BY la.profile_id, la.lesson_id, la.track_id;
$$;
