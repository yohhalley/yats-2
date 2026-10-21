#!/usr/bin/env bash
# One-command local start (ADR-032): creates .env from the template if missing,
# then builds and starts Postgres, runs migrations + seed, and starts the app and worker.
set -euo pipefail
cd "$(dirname "$0")/.."
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example (LLM_PROVIDER=mock). Edit it to point at a real LLM."
fi
exec docker compose up --build "$@"
