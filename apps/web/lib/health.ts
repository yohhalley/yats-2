import { HealthResponse } from "@yats/contracts";

export function health(): HealthResponse {
  return HealthResponse.parse({ status: "ok", service: "web" });
}
