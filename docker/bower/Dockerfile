FROM node:latest

MAINTAINER Wednesday <admin@wednesdayagency.com>

RUN npm install -g bower

ONBUILD RUN bower

ENTRYPOINT ["bower"]
