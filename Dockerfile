# Use the official Node.js image with Alpine Linux
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Expose port 8080 for the application
EXPOSE 8080

# Define the default command to run when the container starts
CMD ["npm", "start"]
