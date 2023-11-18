FROM node:16.4 as react
WORKDIR /app
ADD ./package*.json ./
RUN npm install -y
COPY ./ ./
RUN npm run build

FROM httpd:2.4
EXPOSE 80

RUN sed -i \
        -e 's/ServerAdmin you@example.com/ServerAdmin admin@yeranosyanvahan.com/g' \
        -e 's/ServerName www.example.com:80/ServerName www.yeranosyanvahan.com/g' \
        conf/httpd.conf

RUN echo "ErrorDocument 404 /index.html" >> conf/httpd.conf

COPY --from=react /app/build /usr/local/apache2/htdocs/