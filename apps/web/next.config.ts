import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Workspace packages ship TypeScript source; let Next compile them.
  transpilePackages: ["@yats/contracts", "@yats/rules"],
  // Linting runs once at the repo root (`pnpm lint`), not again inside `next build`.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
