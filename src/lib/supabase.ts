import { createClient } from "@supabase/supabase-js";

// ─── Database types ────────────────────────────────────────────────────────────

export type Database = {
  public: {
    Tables: {
      kid_profiles: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          avatar_emoji: string;
          created_at: string;
        };
        Insert: {
          id: string;
          user_id: string;
          name: string;
          avatar_emoji?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["kid_profiles"]["Insert"]>;
      };
      profile_progress: {
        Row: {
          profile_id: string;
          completed_lessons: Record<string, true>;
          xp: number;
          streak_days: number;
          last_completed_date: string | null;
          updated_at: string;
        };
        Insert: {
          profile_id: string;
          completed_lessons?: Record<string, true>;
          xp?: number;
          streak_days?: number;
          last_completed_date?: string | null;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profile_progress"]["Insert"]>;
      };
      lesson_attempts: {
        Row: {
          id: string;
          profile_id: string;
          lesson_id: string;
          track_id: string;
          started_at: string;
          completed_at: string | null;
          success: boolean | null;
          attempts_count: number;
          time_spent_seconds: number | null;
        };
        Insert: {
          id?: string;
          profile_id: string;
          lesson_id: string;
          track_id: string;
          started_at?: string;
          completed_at?: string | null;
          success?: boolean | null;
          attempts_count?: number;
          time_spent_seconds?: number | null;
        };
        Update: Partial<Database["public"]["Tables"]["lesson_attempts"]["Insert"]>;
      };
    };
  };
};

// ─── Client ────────────────────────────────────────────────────────────────────

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/** Null when env vars are not set (local dev without .env.local or build time). */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient<Database>(supabaseUrl, supabaseAnonKey)
    : null;
