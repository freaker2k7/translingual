FROM node:12

RUN curl -L https://get.docker.com | sh -
RUN npm i -g translingual@1.1.7

ENTRYPOINT ["node", "/usr/local/lib/node_modules/translingual/src/bin.js"]