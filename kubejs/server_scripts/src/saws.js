// TODO: add recipe for sawblade mold without cutters

ServerEvents.recipes((event) => {
  event.remove({ id: 'immersiveengineering:crafting/sawblade' })
  event.remove({ id: 'domum_ornamentum:architectscutter' })
  event.remove({ id: 'minecraft:stonecutter' })
  event.remove({ id: 'cave_stuff:limestone_7' })
  event.remove({ id: 'create:crafting/kinetics/mechanical_saw' })
  event.remove({ id: 'notreepunching:iron_saw' })
  event.remove({ id: 'notreepunching:gold_saw' })
  event.remove({ id: 'notreepunching:diamond_saw' })
  event.remove({ id: 'notreepunching:netherite_saw' })

  event.recipes.createmetallurgy.casting_in_table(`immersiveengineering:sawblade`, [Fluid.of(global.moltenMaterialFluids.steel, 120), `kubejs:graphite_sawblade_mold`], 90, false)
  event.recipes.createmetallurgy.casting_in_table(`immersiveengineering:sawblade`, [Fluid.of(global.moltenMaterialFluids.steel, 120), `kubejs:sawblade_sand_cast`], 90, true)
  event.recipes.createmetallurgy.casting_in_table(`immersiveengineering:sawblade`, [Fluid.of(global.moltenMaterialFluids.steel, 120), `kubejs:sawblade_red_sand_cast`], 90, true)

  // iron saw

  event.shaped(
    Item.of('domum_ornamentum:architectscutter', 1),
    [
      ' A ',
      'BBB',
      'CCC'
    ],
    {
      A: 'immersiveengineering:sawblade',
      B: 'minecraft:stone_slab',
      C: '#minecraft:logs'
    }
  )

  event.shaped(
    Item.of('minecraft:stonecutter', 1),
    [
      ' A ',
      'BBB',
      'CCC'
    ],
    {
      A: 'immersiveengineering:sawblade',
      B: 'minecraft:stone',
      C: '#minecraft:logs'
    }
  )

  // steel saw

  event.shaped(
    Item.of('create:mechanical_saw', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'immersiveengineering:sawblade',
      B: 'create:andesite_casing',
      C: 'create:shaft'
    }
  )

  event.shaped(
    Item.of('notreepunching:iron_saw', 1),
    [
      'ABB',
    ],
    {
      A: 'hot_iron:tool_handle',
      B: '#forge:plates/iron'
    }
  )
});