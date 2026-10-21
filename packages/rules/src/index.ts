/**
 * @yats/rules — pure game rules. No I/O allowed in this package (ADR-P02).
 * The vote engine and the 2007 tally arrive in YATS-005.
 */
export const RULES_VERSION = "0.0.0";

/** Actor kinds carried on every vote/post/event (ADR-026). */
export const ACTOR_KINDS = ["player", "autopilot", "npc", "system"] as const;
export type ActorKind = (typeof ACTOR_KINDS)[number];

/** True for any actor that must be visibly labelled as non-human. */
export function isNonHuman(kind: ActorKind): boolean {
  return kind !== "player";
}
