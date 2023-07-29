# Use a base image with Node.js installed
FROM node:latest As prod

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's files to the container
COPY . .

# Build the production version of the app
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=prod /app/dist .
# run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
