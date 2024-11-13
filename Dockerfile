# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy configuration files
COPY tsconfig*.json ./
COPY vite.config.ts ./

# Copy source code
COPY src/ ./src/
COPY public/ ./public/
COPY index.html ./

# Build
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]