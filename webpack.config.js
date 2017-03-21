var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
    module: {
        rules: [{
            test: /.vue$/,
            loader: 'vue-loader'
        }, {
            test: /.css$/,
            loader: ExtractTextPlugin.extract('css-loader')
        }]
    }
}