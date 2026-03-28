export type {
  TrackId,
  ExerciseLanguage,
  ExerciseCheck,
  Exercise,
  Lesson,
  Track,
  Project,
} from "./types";

import type { Track, TrackId, Lesson } from "./types";
import { webTrack } from "./web";
import { jsTrack } from "./js";
import { pythonTrack } from "./python";
import { kiTrack } from "./ki";
import { sqlTrack } from "./sql";
import { reactTrack } from "./react";

export { PROJECTS } from "./projects";

export const TRACKS: Track[] = [
  webTrack,
  jsTrack,
  pythonTrack,
  kiTrack,
  sqlTrack,
  reactTrack,
];

export function getTrack(trackId: TrackId): Track {
  const track = TRACKS.find((t) => t.id === trackId);
  if (!track) {
    throw new Error(`Unknown trackId: ${trackId}`);
  }
  return track;
}

export function getLesson(trackId: TrackId, lessonId: string): Lesson {
  const track = getTrack(trackId);
  const lesson = track.lessons.find((l) => l.id === lessonId);
  if (!lesson) {
    throw new Error(`Unknown lessonId: ${lessonId} (trackId: ${trackId})`);
  }
  return lesson;
}
