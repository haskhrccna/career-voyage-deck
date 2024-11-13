# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy build output from previous build
COPY dist/ ./dist/

# Production stage
FROM nginx:alpine

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/ssl.conf || true

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]