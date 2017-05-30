module.exports = function (config) {
    config.set({
        basePath: 'test',
        frameworks: ['jasmine'],
        browsers: ['Safari'],
        files: ['**.js']
    })
}