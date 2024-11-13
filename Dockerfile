# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Debug content
RUN echo "Build directory contents:" && ls -la

# Set NODE_ENV
ENV NODE_ENV=production

# Create minimal tsconfig if it doesn't exist
RUN echo '{"compilerOptions":{"target":"ES2020","module":"ESNext","moduleResolution":"bundler","jsx":"react-jsx","allowSyntheticDefaultImports":true},"include":["src"]}' > tsconfig.json

# Modify index.html to use a simple script import
RUN sed -i 's|<script type="module" src=".*"|<script type="module" src="/src/main.tsx"|' index.html

# Build with debug output
RUN echo "Starting build..." && \
    npm run build && \
    echo "Build completed" && \
    echo "Dist directory contents:" && \
    ls -la dist/

# Production stage
FROM nginx:alpine

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create a custom error page
RUN echo 'Server is running' > /usr/share/nginx/html/health.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]