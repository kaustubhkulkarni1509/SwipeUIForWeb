FROM node:latest

ADD ./ISwipeSeller /ISwipeSeller

EXPOSE 3002

WORKDIR /ISwipeSeller/

CMD [ "npm", "start" ]