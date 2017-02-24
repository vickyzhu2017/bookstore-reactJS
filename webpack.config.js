let HtmlWebpackPlugin = require('html-webpack-plugin');
let OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: './build',
        filename: 'bundle.js'

    },
    devServer: {
        inline:true,
        contentBase: './build'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                loader: 'url'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new OpenBrowserWebpackPlugin({url: 'http://localhost:8080'})
    ]
}

