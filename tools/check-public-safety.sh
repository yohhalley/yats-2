#!/usr/bin/env bash
# Fails if tracked files contain things that must never land in this PUBLIC repo (ADR-031):
# private/LAN IP addresses, user@host SSH targets, home-directory paths, or committed .env files.
# Run locally with `pnpm check:public`; CI runs it on every PR next to gitleaks.
set -euo pipefail
cd "$(dirname "$0")/.."

status=0
files=$(git ls-files | grep -v '^tools/check-public-safety.sh$' | grep -v '^pnpm-lock.yaml$' || true)

check() {
  local label=$1 pattern=$2
  # shellcheck disable=SC2086
  if hits=$(grep -nIE "$pattern" $files 2>/dev/null); then
    echo "✗ $label:"
    echo "$hits"
    status=1
  fi
}

check "private IPv4 address" '(^|[^0-9.])(10\.[0-9]{1,3}|192\.168|172\.(1[6-9]|2[0-9]|3[01]))\.[0-9]{1,3}\.[0-9]{1,3}([^0-9]|$)'
check "ssh user@host target" 'ssh +[^ ]*[A-Za-z0-9._-]+@[A-Za-z0-9.-]+'
check "home directory path" '(/home/[a-z]|/Users/[A-Za-z]|C:\\Users\\)'

if git ls-files | grep -E '(^|/)\.env' | grep -vE '(^|/)\.env\.example$'; then
  echo "✗ committed .env file(s) above"
  status=1
fi

if [ "$status" -eq 0 ]; then echo "✓ no private IPs, SSH targets, home paths or .env files in tracked files"; fi
exit "$status"
