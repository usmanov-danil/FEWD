// const path = require('path')
// const ESLintPlugin = require('eslint-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
//
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve('dist'),
//         filename: 'bundle.js',
//     },
//     mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//     devServer: {
//         port: 3000,
//         // historyApiFallback: true,
//         client: {
//             overlay: {
//                 errors: true,
//                 warnings: false
//             }
//         }
//     },
//     devtool: 'eval-source-map',
//     resolve: {
//         extensions: ['.js', 'jsx']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ["style-loader", "css-loader"],
//             },
//             {
//                 test: /\.(js|jsx)$/i,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env']
//                     }
//                 }
//             },
//             {
//                 test: /\.(png|svg|jpg|ico)$/,
//                 use: 'file-loader'
//             }
//         ]
//     },
//     plugins: [
//         new ESLintPlugin({
//             extensions: ['js', 'jsx'],
//             exclude: 'node_modules'
//         }),
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, "public/index.html"),
//             inject: true,
//             favicon: "./public/favicon.ico",
//         })
//     ]
// }


const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        open: true,
        hot: true,
        port: 3000,
    },
    resolve: {
        extensions: ['.js', 'jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'FEWD HW2',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            favicon: "./public/favicon.ico",
            inject: true,
        }),
        new webpack.HotModuleReplacementPlugin(),


    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],

            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },


}