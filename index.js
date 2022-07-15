require('dotenv').config();
const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const {
  API_PROXY,
  API_KEY,
  REACT_APP_API_URL,
  REACT_APP_API_PORT,
  PORT,
} = process.env;

const app = express();
const apiProxy = createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
  target: API_PROXY,
  onProxyReq(proxyReq) {
    proxyReq.setHeader('Authorization', API_KEY);
  },
});

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(REACT_APP_API_URL, apiProxy);

app.get('/*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = PORT || REACT_APP_API_PORT;

const server = app.listen(port, () => {
  console.log(`✓ gallery-react server is listening on port ${port}`);
});

const shutdownGracefully = (exitArg = 0) => server.close(() => {
  console.log('\n× gallery-react server closed');
  process.exit(exitArg);
});

process.once('uncaughtException', (err) => {
  console.error(err);
  shutdownGracefully(1);
});
process.once('SIGTERM', shutdownGracefully);
process.once('SIGINT', shutdownGracefully);
