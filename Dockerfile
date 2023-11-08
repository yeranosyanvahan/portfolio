# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the Gatsby project files into the container at /app
COPY . ./

# Expose the port Gatsby will run on
EXPOSE 8000

# Run Gatsby
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
