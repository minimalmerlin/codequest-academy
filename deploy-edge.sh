#!/usr/bin/env bash
# deploy-edge.sh — deploys the generate-practice Edge Function to Supabase
# Usage: ./deploy-edge.sh

set -e

# Load .env.local
if [ ! -f .env.local ]; then
  echo "❌ .env.local nicht gefunden. Kopiere .env.local.example → .env.local und fülle die Werte aus."
  exit 1
fi

# shellcheck disable=SC2046
export $(grep -v '^#' .env.local | xargs)

if [ -z "$SUPABASE_PROJECT_REF" ]; then
  echo "❌ SUPABASE_PROJECT_REF fehlt in .env.local"
  exit 1
fi

if [ -z "$GEMINI_API_KEY" ]; then
  echo "❌ GEMINI_API_KEY fehlt in .env.local"
  exit 1
fi

echo "🔗 Linking to Supabase project: $SUPABASE_PROJECT_REF"
supabase link --project-ref "$SUPABASE_PROJECT_REF"

echo "🔑 Setting GEMINI_API_KEY as Supabase secret..."
supabase secrets set GEMINI_API_KEY="$GEMINI_API_KEY"

echo "🚀 Deploying generate-practice Edge Function..."
supabase functions deploy generate-practice

echo ""
echo "✅ Fertig! Die Edge Function ist live."
echo "   Teste sie in der App: Lektion öffnen → Check & XP klicken → KI-Übung erscheint bei schwierigen Lektionen."
