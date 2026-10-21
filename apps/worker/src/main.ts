import { tick } from "./index";

const INTERVAL_MS = Number(process.env.WORKER_INTERVAL_MS ?? 10_000);

async function loop(): Promise<void> {
  const result = await tick();
  console.log(`[worker] tick: ${result.jobsRun} jobs, llm=${result.llmProvider}`);
}

console.log(`[worker] started, polling every ${INTERVAL_MS} ms`);
void loop();
setInterval(() => void loop(), INTERVAL_MS);
