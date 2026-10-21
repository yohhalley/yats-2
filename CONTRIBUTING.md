# Contributing to YATS 2.0

This repository is **public**. Read the "Never commit" section before your first commit.

## Workflow

1. **One task, one branch.** Every change belongs to a board task `YATS-###`. Branch from `main` as `YATS-###-short-name`, e.g. `YATS-012-senate-vote-api`.
2. **One worktree per person/agent**, so parallel work doesn't collide in the main checkout:
   ```sh
   git fetch origin
   git worktree add ../wt-<role>-YATS-### -b YATS-###-short-name origin/main
   ```
3. **Checks before pushing:** `pnpm install && pnpm lint && pnpm typecheck && pnpm test && pnpm check:public`.
4. **Push only your feature branch** and open a PR to `main` with `gh pr create`. Link the task ID in the title (`YATS-###: …`), fill in the PR template and include tests.
5. **Review:** the Tech Lead reviews every PR. CI (lint, typecheck, test, gitleaks) must be green.
6. **Merging:** **only Yael (the Product Owner) merges into `main`.** Nobody else merges PRs or pushes to `main`. When a PR has passed Tech Lead review, the Tech Lead adds the `ready-for-yael` label; that label is what notifies Yael.

## Never commit

- Secrets: API keys, tokens, passwords, `.env` files. Only `.env.example` with placeholders is tracked.
- Private infrastructure: LAN IP addresses, hostnames, SSH users, local paths. These live only in your local `.env`.
- Third-party content (forum quotes, map tiles, texts) without a licence check.

If a secret is ever pushed, **rotate it immediately**; deleting the commit is not enough.

## Conventions

- TypeScript everywhere, `strict` mode. Formatting by Prettier, linting by ESLint (`pnpm format` fixes formatting).
- Tests with Vitest, next to the code (`*.test.ts`).
- `packages/rules` stays pure: no I/O, no clock, no randomness without a seed.
- Every NPC or autopilot action carries `actor_kind` and is visibly labelled as non-human.
- The LLM never decides game outcomes; it only voices decisions made by the rules.
