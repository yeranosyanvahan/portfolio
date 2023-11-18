# Build stage
FROM node:20.9 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -lah /app
RUN echo "What is this"
# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
