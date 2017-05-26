/**
 * Created by qingclass on 17/5/24.
 */
var webpack = require('webpack');
var webpackProConfig = require('./webpack.pro.config');

var ora = require('ora')
var spinner = ora('building for production...')
spinner.start();

webpack(webpackProConfig, (err,stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
});
