-- ============================================================
-- CodeQuest Academy – Supabase Schema
-- Run this in the Supabase SQL Editor (once, in order)
-- ============================================================

-- ─── Tables ───────────────────────────────────────────────────────────────────

-- Child profiles (linked to parent's auth account)
-- We use TEXT ids to match the localStorage-generated IDs.
CREATE TABLE IF NOT EXISTS kid_profiles (
  id            TEXT        PRIMARY KEY,
  user_id       UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name          TEXT        NOT NULL,
  avatar_emoji  TEXT        NOT NULL DEFAULT '🧒',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- One progress row per child profile
CREATE TABLE IF NOT EXISTS profile_progress (
  profile_id           TEXT        PRIMARY KEY REFERENCES kid_profiles(id) ON DELETE CASCADE,
  completed_lessons    JSONB       NOT NULL DEFAULT '{}',
  xp                   INTEGER     NOT NULL DEFAULT 0,
  streak_days          INTEGER     NOT NULL DEFAULT 0,
  last_completed_date  DATE,
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Per-attempt data – used for adaptive ML (future)
CREATE TABLE IF NOT EXISTS lesson_attempts (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id          TEXT        NOT NULL REFERENCES kid_profiles(id) ON DELETE CASCADE,
  lesson_id           TEXT        NOT NULL,
  track_id            TEXT        NOT NULL,
  started_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at        TIMESTAMPTZ,
  success             BOOLEAN,
  attempts_count      INTEGER     NOT NULL DEFAULT 1,
  time_spent_seconds  INTEGER
);

-- Index for fast per-profile queries
CREATE INDEX IF NOT EXISTS idx_lesson_attempts_profile ON lesson_attempts(profile_id);
CREATE INDEX IF NOT EXISTS idx_lesson_attempts_lesson  ON lesson_attempts(lesson_id);

-- ─── Row Level Security ───────────────────────────────────────────────────────

ALTER TABLE kid_profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_progress  ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_attempts   ENABLE ROW LEVEL SECURITY;

-- Parents own their child profiles
CREATE POLICY "owner_all_kid_profiles" ON kid_profiles
  FOR ALL USING (auth.uid() = user_id);

-- Progress accessible only through own profiles
CREATE POLICY "owner_all_profile_progress" ON profile_progress
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM kid_profiles kp
      WHERE kp.id = profile_id AND kp.user_id = auth.uid()
    )
  );

-- Lesson attempts accessible only through own profiles
CREATE POLICY "owner_all_lesson_attempts" ON lesson_attempts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM kid_profiles kp
      WHERE kp.id = profile_id AND kp.user_id = auth.uid()
    )
  );

-- ─── ML View: Learning Analytics ─────────────────────────────────────────────
-- Aggregated view for adaptive learning (Phase 2)

CREATE OR REPLACE VIEW lesson_learning_stats AS
SELECT
  profile_id,
  lesson_id,
  track_id,
  COUNT(*)                                          AS total_attempts,
  ROUND(AVG(time_spent_seconds))                   AS avg_time_seconds,
  ROUND(AVG(attempts_count)::NUMERIC, 1)           AS avg_attempts_per_session,
  ROUND(100.0 * SUM(CASE WHEN success THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0), 1) AS success_rate_pct,
  MAX(completed_at)                                AS last_attempted_at
FROM lesson_attempts
WHERE completed_at IS NOT NULL
GROUP BY profile_id, lesson_id, track_id;
