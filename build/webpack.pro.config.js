/**
 * Created by qingclass on 17/5/25.
 */
const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');

module.exports = merge(webpackBaseConfig, {
    entry: [

        'babel-polyfill',
        './main.js'
        // 我们 app 的入口文件
    ],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,        //去掉注释
            compress: {
                warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
            }
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            },
            //   BASE_URL: JSON.stringify('http://localhost:9009'),
        }),
        new HtmlWebpackPlugin({
            template: config.indexTemp,
            inject: true,
            minify: {
                removeComments: true,        //去注释
                collapseWhitespace: true,    //压缩空格
                //removeAttributeQuotes: true  //去除属性引用
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
                chunksSortMode: 'dependency'
            },
        }),
        new CompressionWebpackPlugin({ //gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
            ),
            threshold: 10240,
            minRatio: 0.8
        }),
        new ExtractTextPlugin('[name].[contenthash].css')
    ]
})

