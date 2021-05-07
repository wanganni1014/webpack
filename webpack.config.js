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
    // mode: 'production',
    mode: 'development',
    devServer: {
        port: 9000,
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]'
                    }
                }],

            }
        ]
    },
    plugins: [
        // 解决报错: webpack5 uncaught referenceerror process is not defined(原因In webpack 5 automatic node.js polyfills are removed)
        // npm i process -D,然后webpack.ProvidePlugin
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new CleanWebpackPlugin(),
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
