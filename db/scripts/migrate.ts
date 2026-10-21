/**
 * Minimal forward-only migration runner: applies db/migrations/*.sql in order,
 * each in its own transaction, and records it in schema_migrations.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import postgres from "postgres";
import { listMigrations, requireDatabaseUrl } from "./lib";

const dir = join(import.meta.dirname, "..", "migrations");
const sql = postgres(requireDatabaseUrl(), { onnotice: () => {} });

try {
  await sql`create table if not exists schema_migrations (
    name text primary key,
    applied_at timestamptz not null default now()
  )`;
  const applied = new Set((await sql`select name from schema_migrations`).map((r) => r.name));
  for (const file of listMigrations(dir)) {
    if (applied.has(file)) continue;
    const body = readFileSync(join(dir, file), "utf8");
    await sql.begin(async (tx) => {
      await tx.unsafe(body);
      await tx`insert into schema_migrations (name) values (${file})`;
    });
    console.log(`[db] applied ${file}`);
  }
  console.log("[db] migrations up to date");
} finally {
  await sql.end();
}
