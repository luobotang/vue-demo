var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')

var app = express()
require('./apis').init(app)
app.use(webpackDevMiddleware(webpack(require('./webpack.config')), {
    compress: true,
    stats: 'errors-only',
    publicPath: '/dist'
}))
app.use(express.static(__dirname))
app.listen(8080, function() {
    console.log('run on 8080...')
})