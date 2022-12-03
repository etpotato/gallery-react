FROM node:16.14.0-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:16.14.0-alpine

WORKDIR /app

COPY --from=builder /app ./

RUN npm install pm2 -g

ENV PORT=8080

CMD ["pm2-runtime", "ecosystem.config.js"]
