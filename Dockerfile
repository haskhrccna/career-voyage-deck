# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Debug: Show content
RUN ls -la && \
    echo "Content of src directory:" && \
    ls -la src

# Set environment variables
ENV NODE_ENV=production
ENV VITE_BASE_URL=./

# Build the application
RUN npm run build

# Debug: Show build output
RUN ls -la dist

# Production stage
FROM nginx:alpine

# Copy the built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]