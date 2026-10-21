import { describe, expect, it } from "vitest";
import { requireDatabaseUrl, sortMigrations } from "./lib";

describe("sortMigrations", () => {
  it("keeps only NNNN_name.sql files, in order", () => {
    expect(sortMigrations(["0002_b.sql", "README.md", "0001_a.sql", "x.sql"])).toEqual([
      "0001_a.sql",
      "0002_b.sql",
    ]);
  });
});

describe("requireDatabaseUrl", () => {
  it("throws a helpful error when DATABASE_URL is missing", () => {
    expect(() => requireDatabaseUrl({})).toThrow(/DATABASE_URL/);
  });
});
