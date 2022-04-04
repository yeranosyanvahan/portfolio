FROM node:16.4 as react
WORKDIR /app
COPY . ./
RUN npm install -y
RUN npm run build

FROM httpd:2.4
EXPOSE 80
EXPOSE 443

RUN sed -i \
        -e 's/^#\(Include .*httpd-ssl.conf\)/\1/' \
        -e 's/^#\(LoadModule .*mod_ssl.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_socache_shmcb.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_rewrite.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_proxy.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_proxy_http.so\)/\1/' \
#        -e 's/ServerAdmin you@example.com/ServerAdmin admin@miom.am/g' \
#        -e 's/#ServerName www.example.com:80/ServerName sell.miom.am/g' \
        conf/httpd.conf

RUN sed -e "s/<\/VirtualHost>//g" -i conf/extra/httpd-ssl.conf

RUN echo " \n\

SSLProxyEngine on \n\
ErrorDocument 404 /index.html \n\

#ProxyPass /apis https://api:4000 \n\
#ProxyPassReverse /apis https://api:4000 \n\
ProxyRequests Off \n\
ProxyPreserveHost On \n\
ProxyVia Full \n\
<Proxy *> \n\
  Require all granted \n\
</Proxy> \n\

#<IfModule rewrite_module> \n\
#    RewriteEngine On \n\
#        RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR] \n\
#        RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d \n\
#        RewriteRule ^ - [L] \n\
#    RewriteRule ^ /index.html \n\
#</IfModule> \n\
</VirtualHost> \n\
<VirtualHost *:80>  \n\
  ServerName yeranosyanvahan.com \n\
  ServerAlias www.yeranosyanvahan.com \n\
  Redirect permanent / https://yeranosyanvahan.com/  \n\
</VirtualHost> \n\
" >> conf/extra/httpd-ssl.conf

COPY --from=react /app/build /usr/local/apache2/htdocs/
