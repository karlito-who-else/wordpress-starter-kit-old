FROM php:latest

MAINTAINER Wednesday <admin@wednesdayagency.com>

ENV DEBIAN_FRONTEND noninteractive

RUN locale-gen en_GB.UTF-8

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

RUN apt-get update --fix-missing

RUN apt-get -y upgrade

#RUN apt-get install -y curl git php5-cli

RUN apt-get install -y git php5-cli

#RUN curl -sS https://getcomposer.org/installer | php

RUN echo "memory_limit=1024M" > /usr/local/etc/php/conf.d/memory-limit.ini

RUN php -r "readfile('https://getcomposer.org/installer');" | php

RUN mv composer.phar /usr/bin/composer

RUN php --version
RUN composer --version

#RUN composer install .

# Set up the command arguments
CMD ["-"]
ENTRYPOINT ["composer", "--ansi"]
