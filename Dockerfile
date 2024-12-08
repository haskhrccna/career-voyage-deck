# Use the official Nginx image based on Alpine Linux for a smaller footprint
FROM nginx:stable-alpine

# Install necessary utilities for debugging and maintenance
RUN apk add --no-cache \
    curl \
    bash \
    tzdata \
    vim \
    grep \
    # Tools for log handling and debugging
    logrotate \
    tini

# Set up proper timezone
ENV TZ=UTC
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Create necessary directories with proper permissions
RUN mkdir -p /var/log/nginx && \
    mkdir -p /var/cache/nginx && \
    mkdir -p /usr/share/nginx/html && \
    # Create log files explicitly
    touch /var/log/nginx/access.log && \
    touch /var/log/nginx/error.log && \
    # Set proper ownership and permissions
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /var/log/nginx && \
    chmod -R 755 /var/cache/nginx && \
    chmod 644 /var/log/nginx/*.log

# Configure log rotation to prevent disk space issues
COPY logrotate.conf /etc/logrotate.d/nginx

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built application
COPY dist/ /usr/share/nginx/html/

# Verify Nginx configuration
RUN nginx -t

# Set up a health check to monitor the container
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Use tini as init process to handle signals properly
ENTRYPOINT ["/sbin/tini", "--"]

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
