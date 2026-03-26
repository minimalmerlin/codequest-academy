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

  // ── Parse request ──────────────────────────────────────────────────────────
  let body: GenerateRequest;
  try {
    body = await req.json() as GenerateRequest;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const {
    lessonTitle,
    lessonContent,
    difficulty,
    language,
    childAgeHint = 11,
  } = body;

  // ── Gemini call ────────────────────────────────────────────────────────────
  const geminiKey = Deno.env.get("GEMINI_API_KEY");
  if (!geminiKey) {
    return new Response(JSON.stringify({ error: "Gemini not configured" }), {
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
${lessonContent.slice(0, 1500)}

Erstelle jetzt eine einfachere Alternativ-Übung.`;

  let aiResponse: Response;
  try {
    aiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: userPrompt }],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.7,
            maxOutputTokens: 1200,
          },
        }),
      },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: `Gemini request failed: ${e}` }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  if (!aiResponse.ok) {
    const errText = await aiResponse.text();
    return new Response(JSON.stringify({ error: `Gemini error: ${errText}` }), {
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
    return new Response(JSON.stringify({ error: "AI returned invalid JSON" }), {
      status: 502,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ exercise }), {
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
});
