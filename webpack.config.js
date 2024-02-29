const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Не забудьте установить этот пакет

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader", // добавлен resolve-url-loader
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // включен sourceMap для sass-loader
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // путь к вашему исходному файлу index.html
    }),
  ],
};
