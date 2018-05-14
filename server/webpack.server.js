const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");
const serverConfig = {
     // Inform webpack building a bunlde for node.js, than for browser
     target: "node",
     //Tell webpack the root file of our server application
     entry: "./src/indexServer.js",
    // Tell webpack where to put the generated bundle js file
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },

    externals: [webpackNodeExternals()]
 }

 module.exports = merge(baseConfig, serverConfig);