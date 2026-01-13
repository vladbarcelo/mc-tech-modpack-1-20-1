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
    'AABB': true,
    'ClientEvents': true,
    'StartupEvents': true,
    'ServerEvents': true,
    'Item': true,
    'ItemEvents': true,
    'Ingredient': true,
    'Fluid': true,
    'JsonIO': true,
    'CreateEvents': true,
    'Block': true,
    'Blocks': true,
    'CreateHeatJS': true,
    'BlockEntityEvents': true,
    'BlockEvents': true,
    'BlockProperties': true,
    'MEJSEvents': true,
    'BlockPos': true,
    // helpers
    'getRandomArrValue': true,
    'toSentenceCase': true,
    'darkenColor': true,
    'addMetalCastingRecipe': true,
  }
}