FROM node:13
MAINTAINER Pereskokov Vladislav (v.pereskokov@yandex-team.com)

ARG BUILD

# Установка зависимостей всех
RUN rm -rf /var/lib/apt/lists/* && apt-get update -y && \
    apt-get install -y nginx supervisor && \
    chown -R www-data:www-data /var/lib/nginx

# Конфиги supervisord & nginx
COPY ./etc/nginx/common-locations /etc/nginx/
COPY ./etc/nginx/sites-available/service-name.conf /etc/nginx/sites-enabled/

COPY ./etc/supervisord/service-nameconf /etc/supervisor/conf.d/

# Подготавливаем папки и зависимости проекта
RUN rm -rf /var/www/html/* && \
    mkdir -p /var/www/html/
COPY . /var/www/html/

WORKDIR /var/www/html
RUN npm install && \
    npm install nodemon -g && \
    npm run build:${BUILD}