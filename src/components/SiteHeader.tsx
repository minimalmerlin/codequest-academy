import Link from "next/link";
import { ProgressPill } from "@/components/ProgressPill";
import { ProfilePill } from "@/components/ProfilePill";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0d0d1a]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-2xl px-2 py-1 hover:bg-white/5"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-lg shadow-lg shadow-violet-500/30">
              🚀
            </span>
            <span className="text-base font-bold text-white hidden sm:inline">
              CodeQuest <span className="text-violet-400">Academy</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 text-sm sm:flex">
            <Link
              href="/dashboard"
              className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5 hover:text-white font-medium"
            >
              🏠 Dashboard
            </Link>
            <Link
              href="/learn"
              className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5 hover:text-white font-medium"
            >
              📚 Lernen
            </Link>
            <Link
              href="/projects"
              className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5 hover:text-white font-medium"
            >
              🛠️ Projekte
            </Link>
            <Link
              href="/parents"
              className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5 hover:text-white font-medium"
            >
              👨‍👩‍👧 Eltern
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ProfilePill />
          <ProgressPill />
        </div>
      </div>
    </header>
  );
}
