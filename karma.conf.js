var webpack = require('webpack')

module.exports = function (config) {
    config.set({
        basePath: 'test',
        frameworks: ['jasmine'],
        browsers: ['Safari'],
        files: ['index.js'],
        preprocessors: {
            'index.js': ['webpack']
        },
        webpack: {
            module: {
                rules: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }, {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: 'css-loader',
                            less: 'css-loader!less-loader'
                        }
                    }
                }]
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: '"test"'
                    }
                })
            ]
        },
        webpackMiddleware: {
            stats: 'errors-only'
        },
        plugins: [
            'karma-safari-launcher',
            'karma-jasmine',
            'karma-webpack'
        ]
    })
}