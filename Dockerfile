FROM node:18-bullseye

WORKDIR /assets-challenge-backend

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]