const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * Make changes here
 **/

const babelconfigModern = require("./babel.config.modern.js");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    filename: "[name].mjs",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        /**
         * Make changes here
         **/
        use: [
          {
            loader: "babel-loader",
            options: Object.assign(babelconfigModern(), {
              cacheDirectory: true,
              cacheCompression: false,
            }),
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    /**
     * Make changes here
     **/
    new ScriptExtHtmlWebpackPlugin({
      custom: [
        {
          test: /\.js$/,
          attribute: "type",
          value: "module",
        },
        {
          test: /nomodule\.js$/,
          attribute: "nomodule",
        },
      ],
    }),
  ],
};
