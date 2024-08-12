FROM node:20-alpine AS dev
WORKDIR /client

COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json
RUN npm install 

COPY . .

