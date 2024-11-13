# Build stage
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files and configurations
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Create the directory where we'll serve files from
RUN mkdir -p /app/dist

# Copy built assets from builder stage to the new location
#COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/dist/assets /usr/share/nginx/html/assets

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
