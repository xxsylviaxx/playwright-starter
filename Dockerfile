# Use an official Node.js runtime as a parent image
FROM mcr.microsoft.com/playwright:v1.38.0-focal

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Verify connectivity
RUN curl -s https://registry.npmjs.org/

# Install dependencies
RUN apt-get update && apt-get install -y libnss3 libatk1.0-0 libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libasound2 libpangocairo-1.0-0 libcairo2

# Install Playwright brpwsers
RUN npx playwright install --with-deps

# Copy the .env file
COPY .env /app/.env

# Export the environment variables
ENV $(cat /app/.env | xargs)

# Cache dependencies
RUN npm install --cache /tmp/npm-cache && npm ci --cache /tmp/npm-cache

# Install dependencies, including Playwright
RUN npm ci

# Copy the entire project into the container
COPY . .

# Expose any required ports (optional, e.g., for debugging)
EXPOSE 3000

# Default command to run Playwright tests
CMD ["npx", "playwright", "test"]

# FROM mcr.microsoft.com/playwright:v1.38.0

# WORKDIR /app
# COPY package*.json ./

# # Pause here for debugging
# RUN /bin/bash




