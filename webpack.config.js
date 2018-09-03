const path = require('path')

const UglifyJsPlugin = require('uglify-js-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/hello-world.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[contenthash].js',
        publicPath: '../'
    },
    mode: 'none',
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
                                     filename: 'styles.[contenthash].css'
                                 }),
        new CleanWebpackPlugin(['dist', 'temp']),
        new HtmlWebpackPlugin({
                                  filename: 'public/index.html',
                                  title: 'Hello World',
                                  template: 'src/page-template.hbs',
                                  description: "Handlebar template example"
                              }),
    ],
    optimization: {
        minimizer: [
            //here u can set plugin options
            new UglifyJsPlugin()
        ]
    }
}