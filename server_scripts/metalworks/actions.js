ServerEvents.recipes((event) => {
  Ingredient.registerCustomIngredientAction("keep_tongs", () => {
    return Item.of('hot_iron:smithing_tongs', 1);
  })
});

ServerEvents.tags('item', event => {
  for (let metal of global.allMetals) {
    // only put on anvil if it's smithable
    if (global.smithableMetals.indexOf(metal) !== -1) event.add('hot_iron:anvil_placable_by_clicking', `kubejs:hot_${metal}_ingot_in_tongs`)
    
    event.add('materials/hot', `kubejs:hot_${metal}_ingot`)
    
    for (let part of global.toolParts) {
      event.add('materials/hot', `kubejs:hot_${metal}_${part}`)
    }
  }

  event.add('tools/smithing_tongs', 'hot_iron:smithing_tongs')
});