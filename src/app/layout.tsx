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
      <body className="min-h-full flex flex-col text-[#f9fafb]" style={{ background: "#111827" }}>
        <SupabaseSync />
        <OnboardingModal />
        <MinecraftBg />
        <SiteHeader />
        <main className="flex-1">
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>
        <footer className="py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[12px] font-bold" style={{ color: "#6b7280" }}>
              <p>🚀 CodeQuest Academy</p>
              <nav className="flex flex-wrap gap-5">
                <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
                <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
                <a href="/agb" className="hover:text-white transition-colors">AGB</a>
                <a href="/billing" className="hover:text-white transition-colors">Abonnement</a>
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
