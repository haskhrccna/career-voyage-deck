# Build stage
FROM --platform=linux/arm64/v8 node:20-alpine AS builder
WORKDIR /app
COPY dist/ ./dist/

# Production stage
FROM --platform=linux/arm64/v8 nginx:stable-alpine

# Install debugging tools
RUN apk add --no-cache curl procps net-tools

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html/

# Create a test index.html
RUN echo "<!DOCTYPE html><html><head><title>Test Page</title></head><body><h1>Test Page</h1></body></html>" > /usr/share/nginx/html/index.html

# Setup nginx
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /var/log/nginx \
    && touch /var/log/nginx/access.log \
    && touch /var/log/nginx/error.log \
    && chown -R nginx:nginx /var/log/nginx \
    && chmod -R 755 /var/log/nginx \
    && chown -R nginx:nginx /usr/share/nginx/html \
    && chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
