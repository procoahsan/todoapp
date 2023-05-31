# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Expose the port on which the Node.js app is listening
EXPOSE 5000
# Install app dependencies
RUN npm install

# Copy the rest of the app's source code to the working directory
COPY . .

# Define the command to start the Node.js app
CMD ["npm", "start"]