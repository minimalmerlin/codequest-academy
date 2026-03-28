export type TrackId = "web" | "js" | "python" | "ki" | "sql" | "react";
export type ExerciseLanguage = "html" | "javascript" | "python" | "sql" | "react";

export type ExerciseCheck =
  | {
      kind: "contains";
      needles: string[];
      caseSensitive?: boolean;
    }
  | {
      kind: "js_console_includes";
      expected: string;
    }
  | {
      kind: "python_stdout_includes";
      expected: string;
    }
  | {
      kind: "sql_result_includes";
      expected: string;
    };

export type Exercise = {
  language: ExerciseLanguage;
  title: string;
  instructionsMd: string;
  starterCode: string;
  check: ExerciseCheck;
  hintMd?: string;
  solutionCode?: string;
};

export type Lesson = {
  id: string;
  trackId: TrackId;
  title: string;
  summary: string;
  minutes: number;
  xp: number;
  contentMd: string;
  exercise: Exercise;
};

export type Track = {
  id: TrackId;
  title: string;
  emoji: string;
  description: string;
  color: "indigo" | "emerald" | "amber" | "violet" | "sky" | "rose";
  recommendedAge: string;
  lessons: Lesson[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  trackIds: TrackId[];
  difficulty: "leicht" | "mittel" | "knifflig";
  deliverable: string;
};

