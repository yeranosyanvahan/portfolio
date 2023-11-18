# Build stage
FROM node:20 as builder
WORKDIR /app
RUN npm install -g gatsby-cli
COPY package*.json ./
RUN npm install
RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install tree

COPY . .
RUN tree ./src
RUN yarn
RUN yarn build
RUN tree -L 2 /app
RUN echo heres

# Production stage
FROM nginx:stable-alpine as production-stage
WORKDIR /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/public/* /usr/share/nginx/html/
COPY --from=builder /app/public/* /usr/share/nginx/html/html2/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]