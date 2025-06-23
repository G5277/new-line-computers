#!/bin/bash

echo "🐳 Building Docker containers..."

# Build development container
echo "🔨 Building development container..."
docker build -f Dockerfile.dev -t newline-computers:dev .

# Build production container
echo "🔨 Building production container..."
docker build -f Dockerfile.prod -t newline-computers:prod .

echo "✅ Docker containers built successfully!"
echo ""
echo "🚀 To run:"
echo "Development: docker run -p 5173:5173 newline-computers:dev"
echo "Production: docker run -p 80:80 newline-computers:prod"
echo "Or use: docker-compose up"