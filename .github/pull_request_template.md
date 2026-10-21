## Task

YATS-### — <!-- task title from BOARD.md -->

## What changed

-

## How to test

```sh
pnpm install && pnpm lint && pnpm typecheck && pnpm test
```

## Checklist

- [ ] Branch is named `YATS-###-short-name` and targets `main`
- [ ] Tests added or updated, and `pnpm test` passes
- [ ] `pnpm lint` and `pnpm typecheck` pass
- [ ] **No secrets**: no API keys, tokens, passwords or `.env` files (only `.env.example` with placeholders)
- [ ] **No private infrastructure**: no LAN IPs, hostnames, SSH users or local paths (`pnpm check:public` passes)
- [ ] NPC/autopilot output carries `actor_kind` and is labelled as non-human (if relevant)
- [ ] Docs/README updated (if relevant)

## Screenshots

<!-- For UI changes. Delete if not applicable. -->
