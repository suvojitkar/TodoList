# Build]
FROM node:latest as build-stage
WORKDIR /app/analyzer
COPY package.json ./
RUN npm install --silent
COPY . ./
RUN npm run build

# Deploy
FROM nginx:alpine as deploy-stage
COPY --from=build-stage /app/analyzer/build /usr/share/nginx/html
