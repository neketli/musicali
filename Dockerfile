FROM node:22-alpine AS base
WORKDIR /app

RUN apk update
RUN apk add --no-cache make gcc g++ libc6-compat bash python3 curl

FROM base AS builder
WORKDIR /src

COPY . .
RUN npm ci
ENV NODE_OPTIONS=--max-old-space-size=2048
RUN npm run build . --dotenv .env

FROM base AS production
WORKDIR /app

COPY --from=builder /src/.output ./.output

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", ".output/server/index.mjs"]
