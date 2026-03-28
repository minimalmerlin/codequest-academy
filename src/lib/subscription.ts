"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";

export type SubscriptionStatus = "free" | "active" | "trialing" | "past_due" | "canceled";

export interface SubscriptionState {
  status: SubscriptionStatus;
  isPremium: boolean;
  currentPeriodEnd: Date | null;
  loading: boolean;
}

const DEFAULT: SubscriptionState = {
  status: "free",
  isPremium: false,
  currentPeriodEnd: null,
  loading: true,
};

export function useSubscription(): SubscriptionState {
  const { user, loading: authLoading } = useAuth();
  const [state, setState] = useState<SubscriptionState>(DEFAULT);

  useEffect(() => {
    if (authLoading) return;
    if (!user || !supabase) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState({ ...DEFAULT, loading: false });
      return;
    }

    let cancelled = false;

    void supabase
      .from("subscriptions" as never)
      .select("status, current_period_end")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        if (!data) {
          setState({ status: "free", isPremium: false, currentPeriodEnd: null, loading: false });
          return;
        }
        const row = data as { status: string; current_period_end: string | null };
        const status = row.status as SubscriptionStatus;
        const isPremium = status === "active" || status === "trialing";
        setState({
          status,
          isPremium,
          currentPeriodEnd: row.current_period_end ? new Date(row.current_period_end) : null,
          loading: false,
        });
      });

    return () => { cancelled = true; };
  }, [user, authLoading]);

  return state;
}
