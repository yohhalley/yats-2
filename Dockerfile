# One image for the local stack: the web app, the worker and the migrate/seed job
# all run from it with different commands (see docker-compose.yml).
FROM node:22-slim
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm install -g pnpm@10.34.6
WORKDIR /app

# Install dependencies first so they are cached between code changes.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps/web/package.json apps/web/
COPY apps/worker/package.json apps/worker/
COPY packages/rules/package.json packages/rules/
COPY packages/contracts/package.json packages/contracts/
COPY packages/llm/package.json packages/llm/
COPY db/package.json db/
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm --filter @yats/web build

EXPOSE 3000
CMD ["pnpm", "--filter", "@yats/web", "start"]
