const { environment } = require('@rails/webpacker')

const customConfig = require('./config')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const pug = require('./loaders/pug')
const eslint = require("./loaders/eslint")
const stylelint = require("./loaders/stylelint")

environment.config.merge(customConfig)
environment.loaders.prepend('eslint', eslint)
environment.loaders.prepend('pug', pug)
environment.loaders.prepend('vue', vue)
environment.plugins.prepend('StylelintPlugin', stylelint)
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())

module.exports = environment
