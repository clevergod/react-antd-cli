/**
 * Created by qingclass on 17/5/24.
 */
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: resolve(__dirname, "../src"),
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
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, '../dist'),

        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [ 'babel-loader', ],
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: [ 'style-loader', 'css-loader?importLoaders=1',{
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('autoprefixer')()
                        ]
                    }
                },'less-loader'],
            },{
                test: /\.(png|jpg|jpeg|gif|md)$/,
                use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            }
        ],
    }
};