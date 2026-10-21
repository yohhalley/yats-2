import { describe, expect, it } from "vitest";
import { tick } from "./index";

describe("worker tick", () => {
  it("runs no jobs yet and uses the mock LLM by default", async () => {
    await expect(tick({})).resolves.toEqual({ jobsRun: 0, llmProvider: "mock" });
  });
});
