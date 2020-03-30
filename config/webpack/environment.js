const { environment } = require('@rails/webpacker')

const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const pug = require('./loaders/pug')
const eslint = require("./loaders/eslint")

environment.loaders.prepend('eslint', eslint)
environment.loaders.prepend('pug', pug)
environment.loaders.prepend('vue', vue)
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())

module.exports = environment
