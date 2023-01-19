FROM node:latest

ADD ./ISwipeCustomer /ISwipeCustomer

EXPOSE 3001

WORKDIR /ISwipeCustomer/

CMD [ "npm", "start" ]