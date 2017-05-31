/**
 * Created by qingclass on 17/5/24.
 */
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context: resolve(__dirname, "../src"),

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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader?importLoaders=1',{
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')()
                            ]
                        }
                    },'less-loader']
                })
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