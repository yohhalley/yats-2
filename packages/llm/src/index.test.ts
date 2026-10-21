import { describe, expect, it } from "vitest";
import { readLlmConfig } from "./index";

describe("readLlmConfig", () => {
  it("defaults to the mock provider and a 20 EUR cap", () => {
    expect(readLlmConfig({})).toEqual({
      provider: "mock",
      baseUrl: undefined,
      model: undefined,
      monthlyCapEur: 20,
    });
  });

  it("falls back to mock for an unknown provider", () => {
    expect(readLlmConfig({ LLM_PROVIDER: "nope" }).provider).toBe("mock");
  });
});
