FROM node:14

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install && npm run build

EXPOSE 3000

ENTRYPOINT [ "node", "./server/server.js" ]