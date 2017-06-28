const renderer = require('./webpack.config');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');

renderer.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function (module) {
            // This prevents stylesheet resources with the .css or .scss extension
            // from being moved from their original chunk to the vendor chunk
            if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
                return false;
            }
            return module.context && module.context.indexOf("node_modules") !== -1;
        }
    }),
    new BabiliPlugin()
);

module.exports = renderer;