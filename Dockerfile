FROM node:16.19.0-alpine

WORKDIR /app

COPY /build ./build

COPY /server-build/server.bundle.js ./

COPY /.env ./

CMD ["node", "./server.bundle.js"]
