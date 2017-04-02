var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract('css-loader'),
                    less: ExtractTextPlugin.extract('css-loader!less-loader')
                }
            }
        }, {
            test: /.css$/,
            loader: ExtractTextPlugin.extract('css-loader')
        }]
    },
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("bundle.css")
    ],
    devServer: {
        compress: true,
        port: 8080
    }
}