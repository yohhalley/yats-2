# tools

- `start-local.sh` — one-command local start (`pnpm start:local`).
- `check-public-safety.sh` — fails on private IPs, SSH login targets, home paths or committed `.env` files (`pnpm check:public`; also runs in CI).
