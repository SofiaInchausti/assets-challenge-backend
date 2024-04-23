FROM node:18-bullseye

WORKDIR /assets-backend

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]