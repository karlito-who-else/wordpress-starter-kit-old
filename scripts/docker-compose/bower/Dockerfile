FROM node:latest

MAINTAINER Karl Podger <karl.podger@primeordinal.com>

RUN npm install -g bower

ONBUILD RUN bower

ENTRYPOINT ["bower"]
