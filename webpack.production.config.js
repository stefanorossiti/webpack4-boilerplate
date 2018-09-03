const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js',
        publicPath: './'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: 'handlebars-loader'
                }
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
                                     filename: '[name].[contenthash].css'
                                 }),
        new CleanWebpackPlugin(['dist', 'temp']),
        new HtmlWebpackPlugin({
                                  filename: 'hello-world.html',
                                  chunks: ['hello-world'],
                                  title: 'Hello World',
                                  template: 'src/page-template.hbs',
                                  description: 'Hello world page'
                              }),
        new HtmlWebpackPlugin({
                                  filename: 'kiwi.html',
                                  chunks: ['kiwi'],
                                  title: 'Kiwi World',                                  chunks: ['hello-world'],
                                  template: 'src/page-template.hbs',
                                  description: 'Kiwi page'
                              }),
    ]
}