const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPluginConfig = new ExtractTextPlugin("app.css");

module.exports = {
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: ExtractTextPluginConfig.extract(
                {
                    fallback: "style-loader",
                    use: "css-loader"
                }
            )
        }]
    },
    plugins: [ExtractTextPluginConfig]
 }