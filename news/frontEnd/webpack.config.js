/**
 * Created by H on 2017/5/10.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './index.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2']
                    }
                }

                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: '新闻头条',
            template:'index.html'
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name]-[hash:5].js'
    }
};