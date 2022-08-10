FROM node:latest

MAINTAINER Ayush 

RUN echo "Tryin to build my first application"

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE 5000

ENTRYPOINT ["npm","start"]
