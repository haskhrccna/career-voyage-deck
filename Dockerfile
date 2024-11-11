# Build stage
FROM node:20-alpine as builder



# Copy package files first
COPY package.json package-lock.json ./

WORKDIR /app

RUN npm install

# Then copy the rest of the application
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
