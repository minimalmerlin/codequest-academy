"use client";

/**
 * Adaptive Learning Engine
 *
 * Uses lesson_attempts data to:
 * 1. Score lesson difficulty per student (0 = easy, 1 = hard for them)
 * 2. Identify weak areas (topics where the child struggles)
 * 3. Recommend the next best lesson to work on
 * 4. Trigger AI practice generation for weak areas
 */

import { useCallback, useEffect, useState } from "react";
import { dbLoadLearningStats, type LearningStats } from "@/lib/db";
import { getActiveProfileId } from "@/lib/profiles";
import { useProgress } from "@/lib/progress";
import { TRACKS, type Lesson, type TrackId } from "@/lib/curriculum";

// ─── Difficulty Scoring ───────────────────────────────────────────────────────

export type DifficultyLabel = "leicht" | "mittel" | "schwer";

export type LessonDifficulty = {
  lessonId: string;
  trackId: string;
  score: number;           // 0–1, higher = harder for this child
  label: DifficultyLabel;
  totalAttempts: number;
  successRate: number;
  avgAttempts: number;
  avgTimeSeconds: number;
};

/**
 * Calculates how difficult a lesson was for a specific child.
 * Three signals, weighted by importance:
 *   50% success rate  → did they get it right?
 *   30% attempt count → how many tries did they need?
 *   20% time spent    → how long did it take?
 */
function calcDifficultyScore(stats: LearningStats): number {
  const successSignal = (1 - stats.successRate) * 0.5;
  // avg_attempts=1 is perfect (solved first try). Scale: 1 attempt = 0, 5+ = 1
  const attemptsSignal = Math.min((stats.avgAttempts - 1) / 4, 1) * 0.3;
  // Expected time per lesson: 5 min = 300s. Scale: ≤300s = 0, 600s+ = 1
  const timeSignal = Math.min(stats.avgTimeSeconds / 600, 1) * 0.2;
  return successSignal + attemptsSignal + timeSignal;
}

function scoreToLabel(score: number): DifficultyLabel {
  if (score < 0.3) return "leicht";
  if (score < 0.6) return "mittel";
  return "schwer";
}

function buildDifficultyMap(stats: LearningStats[]): Map<string, LessonDifficulty> {
  const map = new Map<string, LessonDifficulty>();
  for (const s of stats) {
    const score = calcDifficultyScore(s);
    map.set(s.lessonId, {
      lessonId: s.lessonId,
      trackId: s.trackId,
      score,
      label: scoreToLabel(score),
      totalAttempts: s.totalAttempts,
      successRate: s.successRate,
      avgAttempts: s.avgAttempts,
      avgTimeSeconds: s.avgTimeSeconds,
    });
  }
  return map;
}

// ─── Weak Area Detection ──────────────────────────────────────────────────────

export type WeakArea = {
  lesson: Lesson;
  difficulty: LessonDifficulty;
  /** Suggested action for the child */
  action: "wiederholen" | "vertiefe" | "durchatmen";
};

/** A lesson is a "weak area" if it was hard AND tried at least twice. */
function findWeakAreas(
  diffMap: Map<string, LessonDifficulty>,
  completedLessons: Record<string, true>,
): WeakArea[] {
  const areas: WeakArea[] = [];
  for (const track of TRACKS) {
    for (const lesson of track.lessons) {
      const diff = diffMap.get(lesson.id);
      if (!diff) continue;
      if (!completedLessons[lesson.id]) continue; // only completed lessons
      if (diff.totalAttempts < 2) continue;       // need at least 2 data points
      if (diff.score < 0.55) continue;            // not struggling enough

      const action =
        diff.score >= 0.85 ? "durchatmen"
        : diff.score >= 0.7 ? "vertiefe"
        : "wiederholen";

      areas.push({ lesson, difficulty: diff, action });
    }
  }
  // Sort by difficulty score descending (hardest first)
  return areas.sort((a, b) => b.difficulty.score - a.difficulty.score).slice(0, 5);
}

// ─── Next Lesson Recommendation ───────────────────────────────────────────────

export type Recommendation = {
  lesson: Lesson;
  trackId: TrackId;
  reason: string;
  boost: boolean; // true = "you're flying, try harder!" false = normal or remedial
};

function recommendNext(
  diffMap: Map<string, LessonDifficulty>,
  completedLessons: Record<string, true>,
): Recommendation | null {
  // Find the first uncompleted lesson in default curriculum order
  let firstUncompleted: { lesson: Lesson; trackId: TrackId } | null = null;
  for (const track of TRACKS) {
    for (const lesson of track.lessons) {
      if (!completedLessons[lesson.id]) {
        firstUncompleted = { lesson, trackId: track.id };
        break;
      }
    }
    if (firstUncompleted) break;
  }
  if (!firstUncompleted) return null; // all done!

  const { lesson, trackId } = firstUncompleted;

  // Check the lesson immediately before this one in the same track
  const track = TRACKS.find((t) => t.id === trackId)!;
  const idx = track.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = idx > 0 ? track.lessons[idx - 1] : null;

  // If the previous lesson was hard: recommend going back before proceeding
  if (prevLesson) {
    const prevDiff = diffMap.get(prevLesson.id);
    if (prevDiff && prevDiff.score >= 0.7 && prevDiff.totalAttempts >= 2) {
      return {
        lesson: prevLesson,
        trackId,
        reason: `Du hattest Probleme mit "${prevLesson.title}". Übe es nochmal bevor du weitergehst!`,
        boost: false,
      };
    }
  }

  // If the previous 2 lessons were both easy: offer a "fast track" skip
  if (idx >= 2) {
    const prev1 = track.lessons[idx - 1];
    const prev2 = track.lessons[idx - 2];
    const d1 = prev1 ? diffMap.get(prev1.id) : null;
    const d2 = prev2 ? diffMap.get(prev2.id) : null;
    const bothEasy =
      d1 && d2 &&
      d1.score < 0.25 && d1.totalAttempts >= 1 &&
      d2.score < 0.25 && d2.totalAttempts >= 1;
    if (bothEasy) {
      // Find 2 lessons ahead if it exists
      const advancedLesson = track.lessons[idx + 1];
      if (advancedLesson && !completedLessons[advancedLesson.id]) {
        return {
          lesson: advancedLesson,
          trackId,
          reason: `Du bist super schnell! 🚀 Probiere direkt diese härtere Quest!`,
          boost: true,
        };
      }
    }
  }

  // Normal: just go to the next uncompleted lesson
  return {
    lesson,
    trackId,
    reason: `Nächste Quest in ${track.title}`,
    boost: false,
  };
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export type AdaptiveLearningState = {
  loading: boolean;
  difficultyMap: Map<string, LessonDifficulty>;
  weakAreas: WeakArea[];
  recommendation: Recommendation | null;
  /** Difficulty label for a specific lesson */
  getDifficulty: (lessonId: string) => LessonDifficulty | null;
  refresh: () => void;
};

export function useAdaptiveLearning(): AdaptiveLearningState {
  const { progress } = useProgress();
  const [loading, setLoading] = useState(true);
  const [difficultyMap, setDifficultyMap] = useState<Map<string, LessonDifficulty>>(new Map());
  const [weakAreas, setWeakAreas] = useState<WeakArea[]>([]);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const load = useCallback(async () => {
    const profileId = getActiveProfileId();
    if (!profileId) { setLoading(false); return; }
    setLoading(true);
    try {
      const stats = await dbLoadLearningStats();
      const map = buildDifficultyMap(stats);
      const areas = findWeakAreas(map, progress.completedLessons);
      const rec = recommendNext(map, progress.completedLessons);
      setDifficultyMap(map);
      setWeakAreas(areas);
      setRecommendation(rec);
    } finally {
      setLoading(false);
    }
  }, [progress.completedLessons]);

  useEffect(() => { void load(); }, [load]);

  const getDifficulty = useCallback(
    (lessonId: string) => difficultyMap.get(lessonId) ?? null,
    [difficultyMap],
  );

  return { loading, difficultyMap, weakAreas, recommendation, getDifficulty, refresh: load };
}
