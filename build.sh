#!/bin/bash

# Ensure the necessary directories exist
mkdir -p public/css

# Build Tailwind CSS and output to the public directory
npx tailwindcss -i ./css/main.css -o ./public/css/main.css --config tailwind.config.js

# Copy HTML files to the public directory
cp ./index.html ./public/index.html

# Copy any assets (e.g., images, logos) to the public directory
cp -r ./ui-kit/assets ./public/assets

# Done
echo "Build completed and output files are in the /public directory."
