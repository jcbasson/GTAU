const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const clientConfig = {
     //Tell webpack the root file of our server application
     entry: "./src/client/indexClient.js",
    // Tell webpack where to put the generated bundle js file
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    }
 }

 module.exports = merge(clientConfig, baseConfig);