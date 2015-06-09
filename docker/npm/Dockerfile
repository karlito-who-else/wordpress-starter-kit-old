FROM ubuntu:utopic

MAINTAINER Wednesday

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

RUN apt-get update --fix-missing

RUN apt-get -y upgrade

RUN locale-gen en_GB.UTF-8

RUN apt-get install -y build-essential curl npm

curl -sL https://deb.nodesource.com/setup | sudo bash -

RUN npm install .
