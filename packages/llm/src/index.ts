/**
 * @yats/llm — provider-agnostic LLM adapter (ADR-P13, ADR-031).
 * Only config parsing is scaffolded here; drivers, cap, cache and fallback arrive in YATS-012.
 * Configuration comes from the environment only; nothing machine-specific is hard-coded.
 */
export const LLM_PROVIDERS = ["mock", "openai-compatible"] as const;
export type LlmProvider = (typeof LLM_PROVIDERS)[number];

export interface LlmConfig {
  provider: LlmProvider;
  baseUrl?: string;
  model?: string;
  monthlyCapEur: number;
}

const DEFAULT_CAP_EUR = 20;

export function readLlmConfig(env: Record<string, string | undefined> = process.env): LlmConfig {
  const raw = env.LLM_PROVIDER ?? "mock";
  const provider: LlmProvider = (LLM_PROVIDERS as readonly string[]).includes(raw)
    ? (raw as LlmProvider)
    : "mock";
  const cap = Number(env.LLM_MONTHLY_CAP_EUR);
  return {
    provider,
    baseUrl: env.LLM_BASE_URL || undefined,
    model: env.LLM_MODEL || undefined,
    monthlyCapEur: Number.isFinite(cap) && cap >= 0 ? cap : DEFAULT_CAP_EUR,
  };
}
