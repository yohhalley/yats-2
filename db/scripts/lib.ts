import { readdirSync } from "node:fs";

/** Migration files are plain SQL named NNNN_description.sql and applied in name order. */
export const MIGRATION_PATTERN = /^\d{4}_[a-z0-9_]+\.sql$/;

export function sortMigrations(files: string[]): string[] {
  return files.filter((f) => MIGRATION_PATTERN.test(f)).sort();
}

export function listMigrations(dir: string): string[] {
  return sortMigrations(readdirSync(dir));
}

export function requireDatabaseUrl(env: Record<string, string | undefined> = process.env): string {
  const url = env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set (copy .env.example to .env)");
  return url;
}
