const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./frontend/main.ts"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./*"),
      "@src": path.resolve(__dirname, "./src/*"),
      "@config": path.resolve(__dirname, "config/*"),
      "@common": path.resolve(__dirname, "./src/common/*"),
      "@frontend": path.resolve(__dirname, "./frontend/*"),
      "@backend": path.resolve(__dirname, "./backend/*"),
      "@public": path.resolve(__dirname, "./public/*"),
      "@schema": path.resolve(__dirname, "./backend/schema/*"),
      "@controller": path.resolve(__dirname, "./backend/controller/*"),
      "@middleware": path.resolve(__dirname, "./backend/middleware/*"),
      "@model": path.resolve(__dirname, "./backend/model/*"),
      "@service": path.resolve(__dirname, "./backend/service/*"),
    },
  },
};
