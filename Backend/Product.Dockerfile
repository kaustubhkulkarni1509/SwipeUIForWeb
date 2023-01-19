FROM node:latest

ADD ./ISwipeProduct /ISwipeProduct

EXPOSE 3003

WORKDIR /ISwipeProduct/

CMD [ "npm", "start" ]