require('./index.css')
require('es6-promise').polyfill()
require('whatwg-fetch')
var App = require('./app.vue')

new App({
    el: '#app'
})