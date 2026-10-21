/**
 * Worker tick. For now it does nothing but report; YATS-003/YATS-005/YATS-012
 * add the Postgres-backed job table, motion closing and LLM jobs.
 */
import { readLlmConfig } from "@yats/llm";

export interface TickResult {
  jobsRun: number;
  llmProvider: string;
}

export async function tick(
  env: Record<string, string | undefined> = process.env,
): Promise<TickResult> {
  return { jobsRun: 0, llmProvider: readLlmConfig(env).provider };
}
