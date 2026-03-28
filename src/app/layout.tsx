import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SupabaseSync } from "@/components/SupabaseSync";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { OnboardingModal } from "@/components/OnboardingModal";
import { MinecraftBg } from "@/components/MinecraftBg";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "CodeQuest Academy",
    template: "%s · CodeQuest Academy",
  },
  description:
    "Spielerisch Programmieren lernen (HTML, JavaScript, Python) – für Kinder, mit Quests, Projekten und Fortschrittssystem.",
  openGraph: {
    title: "CodeQuest Academy",
    description:
      "Spielerisch Programmieren lernen – für Kinder, mit Missionen, XP und Zertifikaten.",
    type: "website",
    locale: "de_DE",
    siteName: "CodeQuest Academy",
  },
  twitter: {
    card: "summary",
    title: "CodeQuest Academy",
    description: "Spielerisch Programmieren lernen – für Kinder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        <SupabaseSync />
        <OnboardingModal />
        <MinecraftBg />
        <SiteHeader />
        <main className="flex-1">
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto w-full max-w-6xl px-4 text-sm text-zinc-300">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-pixel text-[9px] leading-loose">⛏️ CodeQuest Academy</p>
              <nav className="flex flex-wrap gap-4 text-xs text-zinc-400">
                <a href="/pricing" className="hover:text-zinc-200">⭐ Preise</a>
                <a href="/impressum" className="hover:text-zinc-200">Impressum</a>
                <a href="/datenschutz" className="hover:text-zinc-200">Datenschutz</a>
                <a href="/agb" className="hover:text-zinc-200">AGB</a>
                <a href="/billing" className="hover:text-zinc-200">Abonnement</a>
              </nav>
            </div>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
