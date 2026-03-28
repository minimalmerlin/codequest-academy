import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Lazy initialisiert — ENV-Variablen werden erst zur Laufzeit gelesen
let _admin: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!_admin) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error("Supabase Admin ENV-Variablen fehlen (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)");
    }
    _admin = createClient(url, key, { auth: { persistSession: false } });
  }
  return _admin;
}
