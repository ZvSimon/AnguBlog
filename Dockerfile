FROM node:20-slim AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml angular.json tsconfig.json tsconfig.app.json ./
COPY src ./src

RUN pnpm install

RUN pnpm run build

FROM node:20-slim

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 8000

CMD [ "pnpm", "start" ]
