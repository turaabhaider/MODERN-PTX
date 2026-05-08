# Step 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Add this line to handle the build warning error
ENV CI=false

COPY package*.json ./
# Use --force to prevent dependency conflicts
RUN npm install --force
COPY . .
RUN npm run build

# Step 2: Serve
FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
# Copy the build folder from the previous step
COPY --from=build /app/build ./build
EXPOSE 3000
# Command to serve the static files
CMD ["serve", "-s", "build", "-l", "3000"]