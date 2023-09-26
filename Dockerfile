FROM node:latest 

WORKDIR /tmp/backend

RUN npm install

CMD ["node", "index.js"]

