const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/hello-world.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
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
                                  filename: 'index.html',
                                  title: 'Hello World',
                                  template: 'src/page-template.hbs',
                                  description: 'Handlebar template example'
                              }),
    ]
}