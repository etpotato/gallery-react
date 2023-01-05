[gallery-react.etpotato.com](https://gallery-react.etpotato.com/)

node v16.19.0

#### Development

install deps
`npm i`
start server
`npm run api`
start client
`npm start`


#### Production

Build on local machine, then deploy with docker-compose

install deps
`npm i`
build server
`npm run api-build`
build client
`npm run build`
set remote docker context
`docker context use <remote-context-name>`
set up container
`docker compose up -d --build`
