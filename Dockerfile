# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Install PM2 globally
RUN npm install -g pm2

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN yarn build

# Expose the port that the app will run on
EXPOSE 4001

# Use PM2 to manage the application
CMD ["pm2-runtime", "start", "yarn", "--", "start"]
