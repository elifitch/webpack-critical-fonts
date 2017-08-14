const path = require("path");
const WebpackCriticalFontPlugin = require('./webpack-critical-font-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ["css-loader"]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin("styles.css"),
        new WebpackCriticalFontPlugin({
            cssFile: `path.join(__dirname, 'dist')`
        })
    ]
}