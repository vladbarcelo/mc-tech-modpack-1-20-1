ServerEvents.recipes((event) => {
  // hammer
  event.remove({ id: 'immersiveengineering:crafting/hammer' })
  event.shaped(
    Item.of('immersiveengineering:hammer', 1),
    [
      ' AB',
      ' CA',
      'C  ',
    ],
    {
      A: '#forge:ingots/lead',
      B: '#forge:strings',
      C: 'hot_iron:tool_handle',
    }
  )

  // flint and steel
  event.remove({ id: 'alexsmobs:flint_n_steel_dropbear_claw' })
  event.shapeless(
    Item.of('minecraft:flint_and_steel', 1),
    [
      '#forge:ingots/cast_iron',
      'minecraft:flint',
    ]
  )

  // chisel
  event.remove({ id: 'rechiseled:chisel' })
  event.shaped(
    Item.of('rechiseled:chisel', 1),
    [
      ' A',
      'B ',
    ],
    {
      A: '#forge:ingots/cast_iron',
      B: 'hot_iron:tool_handle',
    }
  )
});