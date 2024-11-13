# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Debug: Show working directory and contents
RUN pwd && \
    echo "Initial contents:" && \
    ls -la

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy everything else
COPY . .

# Debug: Show all contents after copy
RUN echo "Contents after copy:" && \
    ls -la && \
    echo "Current working directory:" && \
    pwd

# Set environment variables
ENV NODE_ENV=production
ENV VITE_BASE_URL=./

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]