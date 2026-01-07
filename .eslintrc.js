module.exports = {
  extends: "eslint:recommended",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'no-unused-vars': 'warn'
  },
  globals: {
    'StartupEvents': true,
    'ServerEvents': true,
    'Item': true,
    'Ingredient': true,
    'Fluid': true,
    'JsonIO': true,
    // helpers
    'toSentenceCase': true,
    'darkenColor': true,
  }
}