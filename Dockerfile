# Stage 1: Build the Angular application
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN pnpm build

# Stage 2: Serve the Angular application with Nginx
FROM nginx:stable-alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/dist/angu-blog /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
