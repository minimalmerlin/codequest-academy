# 🚀 CodeQuest Academy

> Spielerisch Programmieren lernen – für Kinder ab 9 Jahren.
> Kurze Quests, echte Projekte, XP & Level-ups. Von HTML bis Python bis KI.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/minimalmerlin/codequest-academy&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=Supabase%20project%20URL%20and%20anon%20key&envLink=https://supabase.com/dashboard)
[![License: MIT](https://img.shields.io/badge/License-MIT-violet.svg)](./LICENSE)
[![Built with Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![Powered by Supabase](https://img.shields.io/badge/Supabase-cloud-green)](https://supabase.com)

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 📚 **85+ Quests** | Web (HTML/CSS), JavaScript, Python, KI-Abenteuer |
| 🤖 **Adaptive ML Engine** | Erkennt schwache Bereiche, empfiehlt nächste Lektion |
| ✨ **KI-Übungsgenerator** | Gemini generiert personalisierte Übungen bei Schwierigkeiten |
| ☁️ **Cloud Sync** | Fortschritt per Supabase auf allen Geräten |
| 🔒 **Sicher** | RLS, JWT-Auth, kein API-Key im Client |
| 👤 **Multi-Profil** | Mehrere Kinder-Profile pro Account |
| 🏆 **Gamification** | XP, Level, Streak, Abzeichen |
| 📊 **Profil-Seite** | Fortschritt, Lern-Analyse, Name ändern |

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (static export), React 19, Tailwind CSS 4
- **Backend**: Supabase (Auth, PostgreSQL, RLS, Edge Functions)
- **KI**: Google Gemini 2.0 Flash via Supabase Edge Function
- **Hosting**: Vercel

---

## 🚀 Quick Start (Lokal)

```bash
# 1. Repo klonen
git clone https://github.com/minimalmerlin/codequest-academy.git
cd codequest-academy

# 2. Dependencies installieren
npm install

# 3. Env-Datei anlegen
cp .env.local.example .env.local
# → .env.local mit deinen Werten befüllen (siehe unten)

# 4. Dev-Server starten
npm run dev
```

> **Ohne Supabase**: Die App läuft auch ohne Supabase — Fortschritt wird dann nur lokal im Browser gespeichert (kein Login, kein Cloud-Sync).

---

## ⚙️ Environment Variables

Kopiere `.env.local.example` → `.env.local` und fülle folgende Werte aus:

| Variable | Woher | Pflicht |
|----------|-------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Dashboard → Project Settings → API | Für Auth/Sync |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Project Settings → API | Für Auth/Sync |
| `SUPABASE_PROJECT_REF` | Supabase Dashboard → Settings → General | Für Edge Function Deploy |
| `GEMINI_API_KEY` | [aistudio.google.com](https://aistudio.google.com) (kostenlos) | Für KI-Übungen |

---

## 🗄️ Supabase Setup

```bash
# 1. Supabase CLI installieren
brew install supabase/tap/supabase

# 2. Einloggen + Projekt verknüpfen
supabase login
supabase link --project-ref DEIN_PROJECT_REF

# 3. Schema ausführen
# → Supabase Dashboard → SQL Editor → supabase/schema.sql einfügen & ausführen

# 4. KI Edge Function deployen
supabase secrets set GEMINI_API_KEY=AIza...
supabase functions deploy generate-practice
```

---

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router (Seiten)
│   ├── page.tsx            # Landing Page (öffentlich)
│   ├── dashboard/          # Dashboard (geschützt)
│   ├── learn/              # Lernpfade + Quests (geschützt)
│   └── profile/            # Profil-Seite (geschützt)
├── components/             # React Komponenten
│   ├── AuthGuard.tsx       # Schützt Routen vor unangemeldeten Usern
│   ├── LessonClient.tsx    # Quest-Editor mit Code-Runner
│   ├── AdaptivePanel.tsx   # ML-Empfehlungen nach Quest
│   └── PracticeGenerator.tsx # KI-Übungsgenerator
└── lib/
    ├── curriculum.ts       # Alle 85+ Lektionen (Inhalt + Exercises)
    ├── adaptive.ts         # ML-Engine: Difficulty Scoring + Empfehlungen
    ├── auth.ts             # Supabase Auth (module-level state)
    ├── db.ts               # Supabase DB Operationen
    ├── profiles.ts         # Kinder-Profile (localStorage + Cloud)
    └── progress.ts         # XP, Streak, abgeschlossene Lektionen

supabase/
├── schema.sql              # Datenbankschema mit RLS Policies
└── functions/
    └── generate-practice/  # Deno Edge Function (Gemini KI)
```

---

## ➕ Neue Lektion hinzufügen

Alle Lektionen sind in `src/lib/curriculum.ts` als TypeScript-Objekte definiert. Ein neues Objekt zum `lessons`-Array des entsprechenden Tracks hinzufügen:

```typescript
{
  id: "js-26",            // Eindeutige ID (track-nummer)
  trackId: "js",          // "web" | "js" | "python" | "ki"
  title: "Dein Titel",
  summary: "Kurze Beschreibung (1 Satz)",
  minutes: 15,
  xp: 60,
  contentMd: `# Inhalt in Markdown`,
  exercise: {
    language: "javascript",  // "javascript" | "python" | "html"
    title: "Übungsaufgabe",
    instructionsMd: "Was soll der Lernende tun?",
    starterCode: "// Code hier",
    check: {
      kind: "contains",
      needles: ["alert"],
    },
    hintMd: "Tipp für Lernende",
  },
}
```

---

## 🤝 Contributing

Pull Requests sind willkommen! Für größere Änderungen bitte erst ein Issue öffnen.

```bash
# Fork + Clone
git checkout -b feat/mein-feature

# Änderungen machen
npm run build   # TypeScript + Build prüfen
npm run lint    # ESLint prüfen

# PR erstellen
git push origin feat/mein-feature
```

**Ideen für Contributions:**
- 🌐 Neue Tracks (React, TypeScript, SQL...)
- 🌍 Übersetzungen (Englisch, Türkisch, Arabisch...)
- 🎨 UI-Verbesserungen
- 🧪 Tests (Jest, Playwright)
- 📱 Mobile UX Fixes

---

## 📄 Lizenz

MIT — siehe [LICENSE](./LICENSE)

---

<p align="center">Gebaut mit ❤️ für neugierige Kinder</p>
