const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/js/index.js', './src/scss/index.scss'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets'
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        writeToDisk: true
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pug/index.pug",
            filename: "../index.html"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: '' },
            ],
        })
    ],
    module: {
        rules: [{
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 50000
                    }
                }
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            }
        ]
    }
};