const config = require("config");
const host = config.get("host");
const port = config.get("port");

module.exports = {
  pages: {
    index: {
      entry: "frontend/main.ts",
    },
  },
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
