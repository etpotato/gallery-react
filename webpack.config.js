const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false,
  },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'server-build'),
    filename: 'server.bundle.js',
  },
};
