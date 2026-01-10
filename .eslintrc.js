module.exports = {
  extends: "eslint:recommended",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'no-unused-vars': 'warn',
  },
  globals: {
    'Java': true,
    'StartupEvents': true,
    'ServerEvents': true,
    'Item': true,
    'Ingredient': true,
    'Fluid': true,
    'JsonIO': true,
    'CreateEvents': true,
    'Block': true,
    'Blocks': true,
    'CreateHeatJS': true,
    'BlockEntityEvents': true,
    // helpers
    'toSentenceCase': true,
    'darkenColor': true,
    'addMetalCastingRecipe': true,
  }
}