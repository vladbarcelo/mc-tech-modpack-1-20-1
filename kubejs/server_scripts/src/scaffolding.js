ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('minecraft:scaffolding', 6),
    [
      'ABA',
      'A A',
      'A A'
    ],
    {
      A: '#forge:rods/wooden',
      B: 'farmersdelight:canvas'
    }
  )
})