const path = require("path")

module.exports = {
  stories: ["../app/javascript/**/__stories__/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-a11y"],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.pug$/,
        use: ["pug-plain-loader"],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      }
    )
    return config
  },
}
