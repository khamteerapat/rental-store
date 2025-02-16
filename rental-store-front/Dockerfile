FROM node:20.15-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN yarn install

# COPY src ./src
# COPY public ./public
# COPY next.config.ts .
# COPY tsconfig.json .
COPY . .

ARG NEXT_PUBLIC_API_ENDPOINT
ENV NEXT_PUBLIC_API_ENDPOINT=${NEXT_PUBLIC_API_ENDPOINT}
ARG NEXT_PUBLIC_LOGIN_ENDPOINT
ENV NEXT_PUBLIC_LOGIN_ENDPOINT=${NEXT_PUBLIC_LOGIN_ENDPOINT}

RUN yarn build

FROM base AS runner

WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy the necessary files from the builder
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder app .

ARG NEXT_PUBLIC_API_ENDPOINT
ENV NEXT_PUBLIC_API_ENDPOINT=${NEXT_PUBLIC_API_ENDPOINT}
ARG NEXT_PUBLIC_LOGIN_ENDPOINT
ENV NEXT_PUBLIC_LOGIN_ENDPOINT=${NEXT_PUBLIC_LOGIN_ENDPOINT}


CMD ["yarn", "start"]