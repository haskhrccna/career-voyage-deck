# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy all files
COPY . .

# Install dependencies and build
RUN npm ci
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]