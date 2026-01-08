ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('hot_iron:smithing_anvil', 1),
    [
      'ABA',
      ' A ',
      'CCC'
    ],
    {
      A: '#forge:ingots/cast_iron',
      B: '#forge:storage_blocks/cast_iron',
      C: '#forge:treated_wood_slab'
    }
  )
});