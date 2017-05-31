/**
 * Created by qingclass on 17/5/24.
 */
const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(webpackBaseConfig,{
    entry: [
        'react-hot-loader/patch',
        // 开启 React 代码的模块热替换(HMR)

        'webpack-dev-server/client?http://localhost:8080',
        // 为 webpack-dev-server 的环境打包代码
        // 然后连接到指定服务器域名与端口

        'webpack/hot/only-dev-server',
        // 为热替换(HMR)打包好代码
        // only- 意味着只有成功更新运行代码才会执行热替换(HMR)

        'babel-polyfill',
        './main.js'
        // 我们 app 的入口文件
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, '../dist'),

        publicPath: '/'
    },
    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname, '../dist'),
        // match the output path

        // historyApiFallback:true,

        publicPath: '/',
        // match the output `publicPath`
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            },
            //   BASE_URL: JSON.stringify('http://localhost:9009'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new HtmlWebpackPlugin({
            template: config.indexTemp
        }),
        new ExtractTextPlugin('[name].[contenthash].css')
    ]
});