const webpackConfig = require('./webpack.config');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const renderer = Object.assign(
    {
        devtool: 'inline-source-map',
        devServer: {
            contentBase: OUTPUT_DIR,
            stats: {
                colors: true,
                chunks: false,
                children: false
            }
        }
    },
    webpackConfig[0]);

module.exports = renderer;