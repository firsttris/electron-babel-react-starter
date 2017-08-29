const base = require('./base');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

base.module.rules.push(
    {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader",
                options: {
                    sourceMap: true
                }
            },
            {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }
        ]
    }
);
let web = false;
if (process.env.app === 'web') {
    base.target = "web";
    web = true;
}

base.plugins.push(
    new FriendlyErrorsWebpackPlugin()
);



base.devtool = "eval";
module.exports = base;