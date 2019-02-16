#########################
###### BUILD PHASE ######
#########################

# Base Image
FROM node:alpine AS builder

# Set Working Directory
RUN mkdir /amruthpillai
WORKDIR /amruthpillai

# Add `/amruthpillai/node_modules/.bin` to $PATH
ENV PATH /amruthpillai/node_modules/.bin:$PATH

# Install and Cache App Dependencies
RUN apk add git
RUN npm install -g @angular/cli
COPY package.json /amruthpillai/package.json
RUN npm install

# Copy App
COPY . /amruthpillai

# Generate Build
RUN ng build --prod

#########################
###### DEPLOY PHASE #####
#########################

# Base Image
FROM nginx:alpine

# Copy Artifact Build from the 'Build Phase'
COPY --from=builder /amruthpillai/dist/amruthpillai /usr/share/nginx/html

# Expose Port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]