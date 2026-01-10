ServerEvents.recipes((event) => {
  event.remove({ id: 'immersiveengineering:crafting/torch' })
  event.shaped(
    Item.of('hardcore_torches:unlit_torch', 16),
    [
      'AB ',
      'CCC'
    ],
    {
      A: '#minecraft:wool',
      B: 'immersiveengineering:creosote_bucket',
      C: '#forge:rods/wooden'
    }
  ).customIngredientAction('immersiveengineering:creosote_bucket', 'keep_bucket');
});