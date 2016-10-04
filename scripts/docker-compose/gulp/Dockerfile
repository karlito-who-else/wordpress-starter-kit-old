FROM node:latest

MAINTAINER Karl Podger <karl.podger@primeordinal.com>

RUN npm install -g gulp

ONBUILD RUN gulp

ENTRYPOINT ["gulp"]
