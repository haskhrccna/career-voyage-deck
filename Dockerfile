# Build stage
FROM --platform=linux/arm64/v8 node:20-alpine AS builder
WORKDIR /app
# Copy build output from previous build 
COPY dist/ ./dist/

# Production stage
FROM --platform=linux/arm64/v8 nginx:stable-alpine
# Install wget for healthcheck
RUN apk add --no-cache wget

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html
# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create necessary directories and set permissions
RUN mkdir -p /usr/share/nginx/html/images \
    && mkdir -p /var/log/nginx \
    && touch /var/log/nginx/error.log \
    && touch /var/log/nginx/access.log \
    && chmod -R 755 /usr/share/nginx/html \
    && chmod -R 755 /var/log/nginx

# Create a test index.html if it doesn't exist
RUN echo "<!DOCTYPE html><html><body><h1>Server is running</h1></body></html>" > /usr/share/nginx/html/index.html

# Verify nginx config
RUN nginx -t

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
