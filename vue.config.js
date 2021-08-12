const config = require('config');
const host = config.get("host");
const port = config.get("port");
const path = require('path');

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "^/api": {
        target: `http://${host}:${port}`,
        changeOrigin: true,
      },
    },
  },
};