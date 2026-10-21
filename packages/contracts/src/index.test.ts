import { describe, expect, it } from "vitest";
import { HealthResponse } from "./index";

describe("HealthResponse", () => {
  it("accepts a valid payload and rejects an invalid one", () => {
    expect(HealthResponse.parse({ status: "ok", service: "web" })).toEqual({
      status: "ok",
      service: "web",
    });
    expect(HealthResponse.safeParse({ status: "down" }).success).toBe(false);
  });
});
