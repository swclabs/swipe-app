# Stage 1: install dependencies
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json .
RUN npm install

# Stage 2: build
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY src ./src
COPY public ./public
COPY package.json next.config.js ./
RUN npm run build

# Stage 3: run
FROM node:22-alpine as runner
WORKDIR /app
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
CMD ["npm", "run", "start"]