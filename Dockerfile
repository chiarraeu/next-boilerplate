# Use official Node.js image as a base
FROM node:22-alpine

#Set up working directory
WORKDIR /app 

# Copi project files
COPY . . 

# Build application
RUN npm run build 

# Set port to listen on and start the server
EXPOSE 3000
CMD ["npm", "run", "start"]
