/**
 * @yats/contracts — shared zod schemas (ADR-P04).
 * Command/query schemas arrive with YATS-003; this is only the scaffold.
 */
import { z } from "zod";

export const HealthResponse = z.object({
  status: z.literal("ok"),
  service: z.string(),
});
export type HealthResponse = z.infer<typeof HealthResponse>;
