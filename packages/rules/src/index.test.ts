import { describe, expect, it } from "vitest";
import { isNonHuman } from "./index";

describe("isNonHuman", () => {
  it("labels NPC, autopilot and system actors as non-human", () => {
    expect(isNonHuman("player")).toBe(false);
    expect(isNonHuman("npc")).toBe(true);
    expect(isNonHuman("autopilot")).toBe(true);
    expect(isNonHuman("system")).toBe(true);
  });
});
