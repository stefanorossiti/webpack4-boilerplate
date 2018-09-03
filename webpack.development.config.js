const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9001
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
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
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
        new CleanWebpackPlugin(['dist', 'temp']),
        new HtmlWebpackPlugin({
                                  filename: 'hello-world.html',
                                  chunk: ['hello-world'],
                                  title: 'Hello World',
                                  template: 'src/page-template.hbs',
                                  description: 'Hello world example'
                              }),
        new HtmlWebpackPlugin({
                                  filename: 'kiwi.html',
                                  chunk: ['kiwi'],
                                  title: 'Kiwi World',
                                  template: 'src/page-template.hbs',
                                  description: 'Kiwi example'
                              }),
    ]
}