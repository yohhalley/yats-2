# db

- `migrations/` — forward-only SQL files named `NNNN_description.sql`, applied in order by `pnpm --filter @yats/db migrate`.
- `scripts/seed.ts` — idempotent seed hook (placeholder until YATS-009).

Both run automatically in the `migrate` service of `docker-compose.yml`. Both need `DATABASE_URL`.
