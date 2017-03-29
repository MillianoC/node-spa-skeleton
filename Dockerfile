FROM node

MAINTAINER Chris Milliano

RUN apt-get update
RUN npm install -g pm2

ADD . node-spa-skeleton
WORKDIR node-spa-skeleton
RUN npm install

RUN pm2 start --name node-spa-skeleton server.js
RUN pm2 save

CMD ["pm2", "start", "server.js", "--no-daemon"]
