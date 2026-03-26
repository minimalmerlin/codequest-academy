"use client";

/**
 * Client for the generate-practice Supabase Edge Function.
 */

import { supabase } from "@/lib/supabase";
import type { Lesson } from "@/lib/curriculum";
import type { DifficultyLabel } from "@/lib/adaptive";

export type GeneratedExercise = {
  title: string;
  instructionsMd: string;
  starterCode: string;
  solutionCode: string;
  hintMd: string;
  explanation: string;
};

export async function generatePracticeExercise(
  lesson: Lesson,
  difficulty: DifficultyLabel,
): Promise<GeneratedExercise | null> {
  if (!supabase) return null;

  const { data, error } = await supabase.functions.invoke("generate-practice", {
    body: {
      lessonId: lesson.id,
      trackId: lesson.trackId,
      lessonTitle: lesson.title,
      lessonContent: lesson.contentMd.slice(0, 1500),
      difficulty,
      language: lesson.exercise.language,
      childAgeHint: 11,
    },
  });

  if (error) {
    console.error("generate-practice error:", error);
    return null;
  }

  return (data as { exercise: GeneratedExercise })?.exercise ?? null;
}
