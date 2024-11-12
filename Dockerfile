# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files - using explicit file names instead of wildcard
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code and other necessary files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]