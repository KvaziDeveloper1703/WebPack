const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main:   "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./src/index.html"
        }
    )],
    module: {
        rules: [
            {
                test : /\.scss$/,
                use : [ "style-loader", 
                        "css-loader", 
                        "sass-loader"]
            },
            {
                test : /\.css$/,
                use : [ "style-loader", 
                        "css-loader"]
            },
            {
                test: /\.html$/,
                use: [" html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
};