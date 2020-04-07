const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = new StylelintPlugin({
  files: [
    "**/*.s?(a|c)ss",
    "**/*.vue",
  ],
})
