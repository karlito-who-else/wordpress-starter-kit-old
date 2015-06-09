FROM ubuntu:utopic

MAINTAINER Wednesday

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

RUN apt-get update --fix-missing

RUN apt-get -y upgrade

RUN locale-gen en_GB.UTF-8

#RUN apt-get install -y curl git php5-cli

RUN apt-get install -y git php5-cli

#RUN curl -sS https://getcomposer.org/installer | php

RUN php -r "readfile('https://getcomposer.org/installer');" | php

RUN mv composer.phar /usr/bin/composer

RUN composer install .
