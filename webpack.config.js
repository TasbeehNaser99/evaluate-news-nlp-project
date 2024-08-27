const webpack = require("webpack"),
    htmlWebpackPlugin = require("html-webpack-plugin"),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


    module.exports = {
        entry: ["./src/client/index.js"],
        module: {
            rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
            ]
        },
    
        optimization: {
            minimizer: [
                
                new CssMinimizerPlugin(),
            ],
            minimize: true,
          },
        plugins: [
            new htmlWebpackPlugin({
                template: "./src/client/views/index.html",
                filename: "./index.html"
            }),
            new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: false,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false,
               
            }),
        ]
    }