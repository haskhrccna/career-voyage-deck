# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and add terser
RUN npm ci && npm install -D terser

# Copy all source files
COPY . .

# Create missing TypeScript configs if they don't exist
RUN if [ ! -f tsconfig.json ]; then \
    echo '{"compilerOptions":{"target":"ES2020","useDefineForClassFields":true,"lib":["ES2020","DOM","DOM.Iterable"],"module":"ESNext","skipLibCheck":true,"moduleResolution":"bundler","allowImportingTsExtensions":true,"resolveJsonModule":true,"isolatedModules":true,"noEmit":true,"jsx":"react-jsx","strict":true,"noUnusedLocals":false,"noUnusedParameters":false,"noFallthroughCasesInSwitch":true,"baseUrl":".","paths":{"@/*":["./src/*"]}},"include":["src"],"references":[{"path":"./tsconfig.node.json"}]}' > tsconfig.json; \
    fi

RUN if [ ! -f tsconfig.node.json ]; then \
    echo '{"compilerOptions":{"composite":true,"skipLibCheck":true,"module":"ESNext","moduleResolution":"bundler","allowSyntheticDefaultImports":true},"include":["vite.config.ts"]}' > tsconfig.node.json; \
    fi

# Set production environment
ENV NODE_ENV=production

# Debug: show files
RUN ls -la

# Build the application
RUN npm run build

# Debug: show build output
RUN ls -la dist

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]