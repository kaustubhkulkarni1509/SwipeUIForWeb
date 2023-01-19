FROM node:alpine3.10

COPY . /frontend

WORKDIR /frontend

RUN npm install --silent \
    && npm install react-scripts@3.4.1 -g --silent \
    && npm audit fix --silent

CMD [ "npm", "start" ]