ServerEvents.recipes((event) => {
  Ingredient.registerCustomIngredientAction("keep_tongs", () => {
    return Item.of('hot_iron:smithing_tongs', 1);
  })
});