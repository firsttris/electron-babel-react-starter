const renderer = require('./base');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

renderer.module.rules.push(
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
renderer.plugins.push(
    new FriendlyErrorsWebpackPlugin()
);
renderer.devtool = "eval";

module.exports = renderer;