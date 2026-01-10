/**
 * NOTE: THIS WORKS ONLY VIA CREATE: CENTRAL KITCHEN!
 * Id adds a mixin for the heat source tag, using a blockstate[lit] check
 */

ServerEvents.tags('block', event => {
  event.add('farmersdelight:heat_sources', 'minecraft:furnace')
  event.add('farmersdelight:heat_sources', 'steampowered:bronze_burner')
  event.add('farmersdelight:heat_sources', 'steampowered:cast_iron_burner')
  event.add('farmersdelight:heat_sources', 'steampowered:steel_burner')
})

ServerEvents.recipes((event) => {
  event.remove({ id: 'farmersdelight:skillet' })
  event.shaped(
    Item.of('farmersdelight:skillet'),
    [
      ' A',
      'B ',
    ],
    {
      A: '#forge:plates/cast_iron',
      B: 'minecraft:brick'
    }
  )

  event.remove({ id: 'farmersdelight:cooking_pot' })
  event.custom({
    "type": "vintageimprovements:curving",
    "mode": 1,
    "ingredients": [
      {
        "tag": "forge:plates/cast_iron"
      }
    ],
    "results": [
      {
        "item": "farmersdelight:cooking_pot"
      }
    ]
  })

  event.remove({ id: 'butchersdelight:cleaver_recipe' })
  event.shaped(
    Item.of('butchersdelight:cleaver'),
    [
      'A',
      'A',
      'B',
    ],
    {
      A: '#forge:plates/cast_iron',
      B: 'hot_iron:tool_handle'
    }
  )

  event.remove({ id: 'butchersdelight:hook_recipe' })
  event.shapeless(
    Item.of('butchersdelight:hook', 1),
    [
      '#forge:rods/cast_iron',
      'hot_iron:smithing_hammer',
    ]
  ).customIngredientAction('hot_iron:smithing_hammer', 'keep_smithing_hammer');
});