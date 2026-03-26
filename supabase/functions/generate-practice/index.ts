/**
 * Supabase Edge Function: generate-practice
 *
 * Generates a personalized AI practice exercise for a child
 * who is struggling with a specific lesson/topic.
 *
 * Deploy:
 *   supabase functions deploy generate-practice
 *   supabase secrets set OPENAI_API_KEY=sk-...
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
  lessonContent: string;  // the contentMd of the lesson (trimmed)
  difficulty: "schwer" | "mittel";
  language: "javascript" | "python" | "html";
  childAgeHint?: number;  // default: 11
};

serve(async (req) => {
  // Handle CORS preflight
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

  // ── OpenAI call ────────────────────────────────────────────────────────────
  const openaiKey = Deno.env.get("OPENAI_API_KEY");
  if (!openaiKey) {
    return new Response(JSON.stringify({ error: "OpenAI not configured" }), {
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

Antworte NUR mit diesem JSON-Format (kein Markdown, keine Erklärung drumherum):
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
    aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openaiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 1200,
        response_format: { type: "json_object" },
      }),
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: `OpenAI request failed: ${e}` }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  if (!aiResponse.ok) {
    const errText = await aiResponse.text();
    return new Response(JSON.stringify({ error: `OpenAI error: ${errText}` }), {
      status: 502,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const aiJson = await aiResponse.json() as {
    choices: Array<{ message: { content: string } }>;
  };
  const content = aiJson.choices?.[0]?.message?.content ?? "{}";

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
