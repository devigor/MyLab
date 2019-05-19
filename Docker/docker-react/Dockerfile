FROM node:latest

RUN npm i -g yarn

WORKDIR /usr/reactapp
COPY package*.json ./
RUN yarn install

COPY . .
EXPOSE 3000

CMD [ "yarn", "start" ]