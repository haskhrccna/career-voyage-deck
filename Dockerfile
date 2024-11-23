# Build stage
FROM --platform=linux/arm64/v8 node:20-alpine AS builder
WORKDIR /app
COPY dist/ ./dist/

# Production stage
FROM --platform=linux/arm64/v8 nginx:stable-alpine

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create directories and set permissions
RUN mkdir -p /var/log/nginx \
    && touch /var/log/nginx/error.log \
    && touch /var/log/nginx/access.log \
    && chown -R nginx:nginx /var/log/nginx \
    && chmod -R 755 /var/log/nginx \
    && chown -R nginx:nginx /usr/share/nginx/html \
    && chmod -R 755 /usr/share/nginx/html

# Verify nginx config and expose port
RUN nginx -t
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
