# generate-practice Edge Function

AI-powered practice exercise generator for struggling learners.

## Deploy

```bash
# 1. Install Supabase CLI (if not already)
npm install -g supabase

# 2. Login
supabase login

# 3. Link to your project (find ref in Supabase Dashboard → Settings → General)
supabase link --project-ref YOUR_PROJECT_REF

# 4. Set your Gemini API key (stays secret, never in client code)
supabase secrets set GEMINI_API_KEY=AIza...

# 5. Deploy the function
supabase functions deploy generate-practice
```

## How it works

1. Client calls `supabase.functions.invoke("generate-practice", { body: {...} })`
2. Edge Function verifies the user's JWT (auth check)
3. Calls Google Gemini `gemini-2.0-flash` with the lesson context
4. Returns a personalized, easier exercise as JSON
5. Client renders it in the `PracticeGenerator` component

## Environment variables (set via `supabase secrets set`)

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Your Google Gemini API key — **never expose this client-side** |
| `SUPABASE_URL` | Auto-injected by Supabase |
| `SUPABASE_ANON_KEY` | Auto-injected by Supabase |
