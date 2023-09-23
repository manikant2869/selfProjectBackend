FROM node:lts
WORKDIR /tmp/project
COPY . .
RUN npm install
ENTRYPOINT ["node","index.js"]