var path = require('path')
var webpack = require('webpack')
var Extract = require("extract-text-webpack-plugin")
var Clean = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: Extract.extract('css-loader'),
                    less: Extract.extract('css-loader!less-loader')
                }
            }
        }, {
            test: /\.css$/,
            loader: Extract.extract('css-loader')
        }]
    },
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
    },
    plugins: [
        new Clean(['dist'], {
            verbose: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new Extract("bundle.css")
    ]
}