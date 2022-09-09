FROM node:lts-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
EXPOSE 5000
CMD ["node","./build/server.js"]