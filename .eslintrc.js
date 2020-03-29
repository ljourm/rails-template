module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    'prettier',
    'vue',
  ],
  rules: {
    "semi": [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "max-len": ["error", { "code": 100 }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
      }
    }],
    "prettier/prettier": [
      "error", { "semi": false, "trailingComma": "es5" },
    ],
  }
}
