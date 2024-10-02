# Step 1: Use an official Node.js image as the base
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Install a lightweight HTTP server to serve the React app
RUN npm install -g serve

# Step 8: Expose the port the app will run on
EXPOSE 3000

# Step 9: Start the app using the HTTP server
CMD ["serve", "-s", "build", "-l", "3000"]
