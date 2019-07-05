// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "semi": "off",
    "no-multiple-empty-lines": ['error', {'max': 5}],
    "no-trailing-spaces": 0,
    "padded-blocks": 0,
    "eqeqeq": 0,
    "quotes": 0,
    "space-before-function-paren": 0,
    "no-unreachable": 0,
    "keyword-spacing": 0,
    "spaced-comment": 0,
    "no-unneeded-ternary": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "indent": ["error", 2] //缩进为 2 个空格
  }
}
