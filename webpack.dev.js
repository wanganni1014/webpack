'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/search.js',
    output: {
        filename: '[name]_[chunkhash:8].js',
        path: path.join(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        port: 9002,
        contentBase: path.resolve(__dirname, './dist'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'px2rem-loader',
                    options: {
                        remUnit: 75,
                        remPrecision: 8
                    }
                }]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', {
                    loader: 'px2rem-loader',
                    options: {
                        remUnit: 75,
                        remPrecision: 8
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader',

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            favicon: './src/images/favicon.ico',
            scriptLoading: 'blocking',
            template: path.join(__dirname, './src/index.html'),
            minify: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]   
}
