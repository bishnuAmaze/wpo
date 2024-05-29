const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * Make changes here
**/

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output: {
        filename: "[name].bundle.js"
    },
    mode: 'development',
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
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" }),
        /**
         * Make changes here
        **/
    ],
};
