FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@9.8.0 --activate
COPY . /app
WORKDIR /app


FROM base AS deps
RUN pnpm install --frozen-lockfile

FROM base AS dev
COPY --from=deps /app/node_modules /app/node_modules
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]

FROM base AS prod-deps
RUN pnpm install --prod --frozen-lockfile

FROM deps AS build
RUN pnpm build

FROM base AS prod
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

