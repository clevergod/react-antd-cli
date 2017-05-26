/**
 * Created by qingclass on 17/5/24.
 */
const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');
module.exports = merge(webpackBaseConfig,{
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname, '../dist'),
        // match the output path

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
        })
    ]
});