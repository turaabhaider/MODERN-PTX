# Step 1: Build
FROM node:18-alpine AS build
WORKDIR /app
# This variable is crucial to bypass small warnings
ENV CI=false

COPY package*.json ./
# Clean install to avoid lockfile conflicts
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve
FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]