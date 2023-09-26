FROM node:12.6

WORKDIR /usr/src/app

COPY server.js .

RUN npm install -g json-server

EXPOSE 8080

CMD ["json-server", "https://raw.githubusercontent.com/marthin88/mockapi/main/db.json","--host","0.0.0.0", "--port", "8080","--middlewares","server.js"]

