FROM php:8.3-apache

COPY nexava/ /var/www/html/
COPY docker-entrypoint.sh /usr/local/bin/helicorp-apache

RUN a2enmod headers expires rewrite \
    && chmod +x /usr/local/bin/helicorp-apache \
    && chown -R www-data:www-data /var/www/html

EXPOSE 10000
CMD ["helicorp-apache"]
