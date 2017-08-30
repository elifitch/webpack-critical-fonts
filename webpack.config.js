const path = require("path");
const WebpackCriticalFontPlugin = require('./webpack-critical-font-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        // publicPath: path.join(__dirname, '/') 
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
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: './',
                        outputPath: 'fonts/'
                    }  
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'foo'
        }),
        new ExtractTextPlugin("styles.css"),
        // new WebpackCriticalFontPlugin({
        //     cssFile: `path.join(__dirname, 'dist')`
        // })
    ]
}