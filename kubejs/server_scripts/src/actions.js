ServerEvents.recipes((event) => {
  Ingredient.registerCustomIngredientAction("keep_tongs", () => {
    return Item.of('hot_iron:smithing_tongs', 1);
  })
  Ingredient.registerCustomIngredientAction("keep_smithing_hammer", () => {
    return Item.of('hot_iron:smithing_hammer', 1);
  })
  Ingredient.registerCustomIngredientAction("keep_engineering_hammer", () => {
    return Item.of('immersiveengineering:hammer', 1);
  })
  Ingredient.registerCustomIngredientAction("keep_bucket", () => {
    return Item.of('minecraft:bucket', 1);
  })
  Ingredient.registerCustomIngredientAction("keep_wooden_bucket", () => {
    return Item.of('morebuckets:wooden_bucket', 1);
  })
  Ingredient.registerCustomIngredientAction("keep_stone_bucket", () => {
    return Item.of('morebuckets:stone_bucket', 1);
  })
  Ingredient.registerCustomIngredientAction("keep_gold_bucket", () => {
    return Item.of('morebuckets:gold_bucket', 1);
  })
  // TODO
  // Ingredient.registerCustomIngredientAction("keep", (item) => {
  //   return Item.of(item., 1);
  // })
});