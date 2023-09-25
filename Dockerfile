FROM node:12.6

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 8080

CMD ["npm", "start", "./server.js", "--port=8080"]