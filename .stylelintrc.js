module.exports = {
  "plugins": [
    "stylelint-scss",
  ],
  "extends": "stylelint-config-standard",
  "rules": {
    "scss/dollar-variable-colon-space-after": "always",
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-empty-source": null,
    "no-descending-specificity": null,
  },
  "ignoreFiles": [
    "public/**",
    "vendor/**",
  ],
}
