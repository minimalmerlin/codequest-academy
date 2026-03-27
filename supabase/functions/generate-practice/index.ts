/**
 * Supabase Edge Function: generate-practice
 *
 * Generates a personalized AI practice exercise for a child
 * who is struggling with a specific lesson/topic.
 *
 * Deploy:
 *   supabase functions deploy generate-practice
 *   supabase secrets set GEMINI_API_KEY=AIza...
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ── Rate limiting: max 10 requests per user per minute ────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(userId: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(userId);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(userId, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 10) return true;
  entry.count += 1;
  return false;
}

// ── Input validation ──────────────────────────────────────────────────────────

function sanitizeText(input: unknown, maxLen: number): string {
  if (typeof input !== "string") return "";
  // Strip any prompt injection attempts: remove instruction-like patterns
  return input
    .slice(0, maxLen)
    .replace(/ignore\s+(all\s+)?(previous\s+)?instructions?/gi, "")
    .replace(/system\s*:/gi, "")
    .replace(/\[INST\]|\[\/INST\]/g, "")
    .trim();
}

function validateLanguage(lang: unknown): "javascript" | "python" | "html" {
  if (lang === "javascript" || lang === "python" || lang === "html") return lang;
  return "javascript";
}

function validateDifficulty(diff: unknown): "schwer" | "mittel" {
  if (diff === "schwer" || diff === "mittel") return diff;
  return "mittel";
}

function validateChildAge(age: unknown): number {
  const n = Number(age);
  if (!Number.isFinite(n)) return 11;
  return Math.min(18, Math.max(6, Math.round(n)));
}

type GenerateRequest = {
  lessonId: string;
  trackId: string;
  lessonTitle: string;
  lessonContent: string;
  difficulty: "schwer" | "mittel";
  language: "javascript" | "python" | "html";
  childAgeHint?: number;
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  // ── Auth check ─────────────────────────────────────────────────────────────
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    { global: { headers: { Authorization: authHeader } } },
  );

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  // ── Rate limiting ──────────────────────────────────────────────────────────
  if (isRateLimited(user.id)) {
    return new Response(JSON.stringify({ error: "Zu viele Anfragen. Bitte warte eine Minute." }), {
      status: 429,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  // ── Parse + validate request ───────────────────────────────────────────────
  let raw: GenerateRequest;
  try {
    raw = await req.json() as GenerateRequest;
  } catch {
    return new Response(JSON.stringify({ error: "Ungültige Anfrage" }), {
      status: 400,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  // Sanitize all user-controlled fields before they enter the prompt
  const lessonTitle = sanitizeText(raw.lessonTitle, 120);
  const lessonContent = sanitizeText(raw.lessonContent, 1500);
  const language = validateLanguage(raw.language);
  const difficulty = validateDifficulty(raw.difficulty);
  const childAgeHint = validateChildAge(raw.childAgeHint);

  // ── Gemini call ────────────────────────────────────────────────────────────
  const geminiKey = Deno.env.get("GEMINI_API_KEY");
  if (!geminiKey) {
    return new Response(JSON.stringify({ error: "KI nicht konfiguriert" }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const systemPrompt = `Du bist ein einfühlsamer Programmierlehrer für Kinder (${childAgeHint} Jahre alt).
Ein Kind hat Schwierigkeiten mit einer Aufgabe. Erstelle eine NEUE, einfachere Übung zum gleichen Thema.

REGELN:
- Verwende dieselbe Programmiersprache (${language})
- Die Aufgabe soll deutlich einfacher und verständlicher sein als die originale
- Nutze andere Beispiele und einen anderen Kontext (z.B. Tiere, Essen, Spiele)
- Erkläre das Konzept nochmal ganz kurz auf Deutsch
- Code-Kommentare auf Deutsch
- Der Starter-Code soll dem Kind den Einstieg erleichtern (mehr Vorstruktur)

Antworte NUR mit validem JSON (kein Markdown, keine Erklärung drumherum):
{
  "title": "...",
  "instructionsMd": "Kurze Aufgabenbeschreibung in Markdown (2-3 Sätze)",
  "starterCode": "...",
  "solutionCode": "...",
  "hintMd": "Ein konkreter Hinweis in Markdown",
  "explanation": "1-2 Sätze warum dieses Konzept wichtig ist, für das Kind"
}`;

  const userPrompt = `Original-Lektion: "${lessonTitle}"
Schwierigkeitsgrad für dieses Kind: ${difficulty}
Sprache: ${language}

Kontext der Lektion:
${lessonContent}

Erstelle jetzt eine einfachere Alternativ-Übung.`;

  let aiResponse: Response;
  try {
    aiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: userPrompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.7,
            maxOutputTokens: 1200,
          },
        }),
      },
    );
  } catch {
    // Leake keine internen Fehlermeldungen an den Client
    return new Response(JSON.stringify({ error: "KI-Anfrage fehlgeschlagen. Bitte versuche es später." }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  if (!aiResponse.ok) {
    // Log intern, aber zeige keinen API-Fehlertext nach außen
    console.error("Gemini error status:", aiResponse.status);
    return new Response(JSON.stringify({ error: "KI nicht verfügbar. Bitte versuche es später." }), {
      status: 502,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const aiJson = await aiResponse.json() as {
    candidates: Array<{ content: { parts: Array<{ text: string }> } }>;
  };
  const content = aiJson.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";

  let exercise: Record<string, string>;
  try {
    exercise = JSON.parse(content) as Record<string, string>;
  } catch {
    return new Response(JSON.stringify({ error: "KI hat ungültiges Format zurückgegeben." }), {
      status: 502,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ exercise }), {
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
});
