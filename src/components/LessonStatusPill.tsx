"use client";

import { useProgress } from "@/lib/progress";

export function LessonStatusPill({ lessonId }: { lessonId: string }) {
  const { isLessonCompleted } = useProgress();
  const done = isLessonCompleted(lessonId);

  return done ? (
    <span className="status-pill--done">✓ gemeistert</span>
  ) : (
    <span className="status-pill--open">unentdeckt</span>
  );
}

