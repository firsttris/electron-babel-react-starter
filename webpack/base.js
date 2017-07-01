const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'electron-renderer',
    entry: {
        gui: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{loader: 'babel-loader'}],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]'}]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]'}]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
};