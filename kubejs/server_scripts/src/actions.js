ServerEvents.recipes((event) => {
  Ingredient.registerCustomIngredientAction("keep_tongs", () => {
    return Item.of('hot_iron:smithing_tongs', 1);
  })
  Ingredient.registerCustomIngredientAction("keep_smithing_hammer", () => {
    return Item.of('hot_iron:smithing_hammer', 1);
  })
  Ingredient.registerCustomIngredientAction("keep_bucket", () => {
    return Item.of('minecraft:bucket', 1);
  })
});