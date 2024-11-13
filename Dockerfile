# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files and configuration
COPY . .

# Create TypeScript configurations
RUN echo '{"compilerOptions":{"target":"ES2020","useDefineForClassFields":true,"lib":["ES2020","DOM","DOM.Iterable"],"module":"ESNext","skipLibCheck":true,"moduleResolution":"bundler","allowImportingTsExtensions":true,"resolveJsonModule":true,"isolatedModules":true,"noEmit":true,"jsx":"react-jsx","strict":true,"noUnusedLocals":false,"noUnusedParameters":false,"noFallthroughCasesInSwitch":true,"baseUrl":".","paths":{"@/*":["./src/*"]}},"include":["src"],"references":[{"path":"./tsconfig.node.json"}]}' > tsconfig.json

RUN echo '{"compilerOptions":{"composite":true,"skipLibCheck":true,"module":"ESNext","moduleResolution":"bundler","allowSyntheticDefaultImports":true},"include":["vite.config.ts"]}' > tsconfig.node.json

# Build the app with specific environment
ENV NODE_ENV=production
RUN NODE_ENV=production npm run build

# Production stage
FROM nginx:alpine

# Copy build output and nginx configuration
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Verify the files were copied correctly
RUN ls -la /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]