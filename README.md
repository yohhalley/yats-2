# yats-2

YATS 2.0: a browser-based Roman Republic writing RPG with a simulated Rome and AI NPCs.

> **Status:** scaffolding only (YATS-011). The first playable prototype (one Senate session with NPC votes and one domus scene) is being built in Sprint 1.

## Quick start (local, one command)

Requirements: Docker with Docker Compose v2.

```sh
cp .env.example .env && docker compose up --build
```

(or `pnpm start:local`, which does the same and only creates `.env` if it doesn't exist yet).

This builds the image, starts PostgreSQL, runs the database migrations and the seed (`migrate` service), then starts the web app and the worker. Open <http://localhost:3000> (health check: <http://localhost:3000/api/health>).

By default the LLM provider is `mock`, so nothing calls a real model. To use a real one, edit `LLM_PROVIDER`, `LLM_BASE_URL`, `LLM_MODEL` and `LLM_API_KEY` in your local `.env`. **Never commit `.env`**: this repo is public.

Stop with `Ctrl+C`; `docker compose down -v` also wipes the local database.

## Development

Requirements: Node 20+ and pnpm (`corepack enable` or `npm i -g pnpm`).

```sh
pnpm install
pnpm lint        # ESLint + Prettier check
pnpm typecheck   # tsc in every package
pnpm test        # Vitest in every package
pnpm dev         # Next.js dev server (needs DATABASE_URL once the DB is used)
pnpm check:public  # no private IPs, SSH targets, home paths or .env files
```

## Repository layout

| Path                 | What                                                                     |
| -------------------- | ------------------------------------------------------------------------ |
| `apps/web`           | Next.js + TypeScript app: the UI **and** the game API (route handlers)   |
| `apps/worker`        | Small background worker (closes motions, runs async LLM jobs)            |
| `packages/rules`     | Pure, I/O-free game rules (vote engine, 2007 tally)                      |
| `packages/contracts` | Shared zod schemas for commands, queries and LLM outputs                 |
| `packages/llm`       | Provider-agnostic LLM adapter (mock, OpenAI-compatible) with a spend cap |
| `db/`                | SQL migrations, migration runner and seed                                |
| `tools/`             | Dev scripts (one-command start, public-safety check)                     |
| `docs/`              | Technical docs                                                           |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Credits and licence

YATS began as a 2007 community role-playing game on the twcenter.net forums; YATS 2.0 is a new take on that idea, and the concept belongs to that community.

Code licensed under the [MIT License](LICENSE), © 2026 Yael Herrera Halley.
