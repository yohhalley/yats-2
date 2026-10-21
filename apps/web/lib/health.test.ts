import { describe, expect, it } from "vitest";
import { health } from "./health";

describe("health", () => {
  it("reports ok", () => {
    expect(health()).toEqual({ status: "ok", service: "web" });
  });
});
