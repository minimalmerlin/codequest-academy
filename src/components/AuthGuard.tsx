"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { PageSkeleton } from "@/components/PageSkeleton";

/**
 * Wraps protected pages. Redirects to "/" if not logged in.
 * Shows skeleton while auth state is loading to prevent white flash.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  if (loading) return <PageSkeleton />;
  if (!user) return null;

  return <>{children}</>;
}
