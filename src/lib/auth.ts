"use client";

import { useCallback, useEffect, useState } from "react";
import type { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

export type AuthState = {
  user: User | null;
  session: Session | null;
  loading: boolean;
};

// Module-level state shared across all useAuth() hooks
const authListeners = new Set<(state: AuthState) => void>();
let currentAuthState: AuthState = { user: null, session: null, loading: true };

function notifyAuthListeners() {
  for (const l of authListeners) l({ ...currentAuthState });
}

// Initialize once on module load (client only)
if (typeof window !== "undefined" && supabase) {
  void supabase.auth.getSession().then(({ data: { session } }) => {
    currentAuthState = { user: session?.user ?? null, session, loading: false };
    notifyAuthListeners();
  });

  supabase.auth.onAuthStateChange((_event, session) => {
    currentAuthState = { user: session?.user ?? null, session, loading: false };
    notifyAuthListeners();
  });
} else if (typeof window !== "undefined") {
  // Supabase not configured – mark as not loading
  currentAuthState = { user: null, session: null, loading: false };
}

export function useAuth() {
  const [state, setState] = useState<AuthState>(currentAuthState);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(currentAuthState); // sync hydration gap: state may have changed between render and effect
    authListeners.add(setState);
    return () => { authListeners.delete(setState); };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    if (!supabase) return { data: null, error: new Error("Supabase nicht konfiguriert") };
    return supabase.auth.signInWithPassword({ email, password });
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    if (!supabase) return { data: null, error: new Error("Supabase nicht konfiguriert") };
    return supabase.auth.signUp({ email, password });
  }, []);

  const signOut = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  }, []);

  return { ...state, signIn, signUp, signOut };
}

/** Returns the current authenticated user synchronously (may be null). */
export function getAuthUser(): User | null {
  return currentAuthState.user;
}
