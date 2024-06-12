const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
/*
 * Make changes here
 */
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    /*
     * Make changes here
     */

    new HtmlCriticalWebpackPlugin({
      base: path.join(path.resolve(__dirname), "dist/"),
      src: "index.html",
      dest: "index.html",
      inline: true,
      minify: true,
      extract: true,
      dimensions: [
        {
          height: 480, // for iphone 5's height
          width: 320, // for iphone 5's width
        },
        {
          height: 1024, // for ipad's height
          width: 768, // for ipad's width
        },
        {
          height: 900, // for typical desktop's height
          width: 1200, // for typical desktop's width
        },
      ],
    }),
  ],
};
