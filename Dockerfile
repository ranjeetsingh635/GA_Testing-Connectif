# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Copy the rest of the application code to the working directory
COPY . .
RUN yarn install
# Install dependencies using yarn
RUN yarn build

# Expose the port that the app will run on
EXPOSE 4001

# Define the comand to run your application
CMD ["yarn", "start"]
