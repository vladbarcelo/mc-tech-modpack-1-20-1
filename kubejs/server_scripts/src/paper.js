ServerEvents.recipes((event) => {
  for (let id of [
    'minecraft:paper',
    'immersiveengineering:crafting/paper_from_sawdust',
    'quark:tweaks/crafting/utility/bent/paper',
    'farmersdelight:paper_from_tree_bark',
    'tfmg:crafting/paper'
  ]) {
    event.remove({ id: id })
  }

  event.recipes.create.crushing(['immersiveengineering:dust_wood', 'immersiveengineering:dust_wood', 'immersiveengineering:dust_wood'], 'createdieselgenerators:wood_chip')

  event.recipes.create.crushing(['createdieselgenerators:wood_chip', 'createdieselgenerators:wood_chip', 'createdieselgenerators:wood_chip'], '#minecraft:logs')
  event.recipes.create.crushing('createdieselgenerators:wood_chip', '#forge:rods/wooden')

  event.recipes.create.milling('createdieselgenerators:wood_chip', '#forge:rods/wooden')
  event.recipes.create.milling('immersiveengineering:dust_wood', 'createdieselgenerators:wood_chip')

  // bamboo
  event.recipes.create.milling(Item.of('notreepunching:plant_fiber', 16), 'minecraft:bamboo')
  event.recipes.create.crushing(Item.of('notreepunching:plant_fiber', 16), 'minecraft:bamboo')

  // base recipe

  event.shapeless(
    Item.of('kubejs:paper_mush', 1),
    [
      'notreepunching:plant_fiber',
      'minecraft:water_bucket'
    ]
  )
  event.shapeless(
    Item.of('kubejs:paper_mush', 1),
    [
      'immersiveengineering:dust_wood',
      'minecraft:water_bucket'
    ]
  )
  event.recipes.create.pressing('kubejs:wet_paper', 'kubejs:paper_mush')
  event.smelting('minecraft:paper', 'kubejs:paper_mush', 0.35, 200);

  // advanced recipe
  event.recipes.create.mixing(Item.of('kubejs:paper_mush', 4), [Fluid.of('minecraft:water'), Item.of('immersiveengineering:dust_wood', 4)])
  event.custom({
    "type":"vintageimprovements:pressurizing",
    "secondaryFluidOutput": 0,
    "heatRequirement": "heated",
    "ingredients": [ 
      {
        "item": "kubejs:paper_mush"
      }
    ],
    "results": [
      {
        "item": "minecraft:paper",
        "amount": 4
      }
    ],
    "processingTime": 400
  })
})