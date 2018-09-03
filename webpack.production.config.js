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
        publicPath: '/static/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all', //all js will be split in chunks if needed
            minSize: 10000, //kb limit after where code split of chunks will be used
            automaticNameDelimiter: '_' //change files delimiter wich normally is ~
        }
    },
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
                                  chunks: ['hello-world', 'vendors_hello-world_kiwi', 'vendors_hello-world'],
                                  title: 'Hello World',
                                  template: 'src/page-template.hbs',
                                  description: 'Hello world page'
                              }),
        new HtmlWebpackPlugin({
                                  filename: 'kiwi.html',
                                  chunks: ['kiwi', 'vendors_hello-world_kiwi'],
                                  title: 'Kiwi World',
                                  template: 'src/page-template.hbs',
                                  description: 'Kiwi page'
                              }),
    ]
}