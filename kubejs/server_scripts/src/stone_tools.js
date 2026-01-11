ServerEvents.recipes((event) => {
  // stone
  for (let rId of [
    'quark:tweaks/crafting/utility/tools/stone_pickaxe',
    'cave_stuff:limestone_23',
    'quark:tweaks/crafting/utility/tools/stone_shovel',
    'cave_stuff:limestone_24',
    'quark:tweaks/crafting/utility/tools/stone_axe',
    'cave_stuff:limestone_21',
    'cave_stuff:limestone_22',
    'quark:tweaks/crafting/utility/tools/stone_hoe',
    'quark:tweaks/crafting/utility/tools/stone_sword',
    'cave_stuff:limestone_25',
    'notreepunching:flint_knife',
    'notreepunching:iron_knife',
    'notreepunching:gold_knife',
    'notreepunching:diamond_knife',
    'notreepunching:netherite_knife',
    'farmersdelight:flint_knife',
  ]) {
    event.remove({ id: rId })
  }

  event.shaped(
    Item.of('farmersdelight:flint_knife', 1),
    [
      ' A',
      'B ',
    ],
    {
      A: 'notreepunching:flint_shard',
      B: '#forge:rods/wooden',
    }
  )

  // stone recipes
  event.shapeless(
    Item.of('hot_iron:rock'),
    [
      '#notreepunching:loose_rocks'
    ]
  )
  event.shaped(
    Item.of('minecraft:stone_axe', 1),
    [
      'AB',
      'C ',
    ],
    {
      A: '#notreepunching:string',
      B: 'hot_iron:stone_axe_head',
      C: '#forge:rods/wooden'
    }
  )
  event.shaped(
    Item.of('minecraft:stone_pickaxe', 1),
    [
      'AB',
      'C ',
    ],
    {
      A: '#notreepunching:string',
      B: 'hot_iron:stone_pickaxe_head',
      C: '#forge:rods/wooden'
    }
  )
  event.shaped(
    Item.of('minecraft:stone_shovel', 1),
    [
      'AB',
      'C ',
    ],
    {
      A: '#notreepunching:string',
      B: 'hot_iron:stone_shovel_head',
      C: '#forge:rods/wooden'
    }
  )
  event.shaped(
    Item.of('minecraft:stone_hoe', 1),
    [
      'AB',
      'C ',
    ],
    {
      A: '#notreepunching:string',
      B: 'hot_iron:stone_hoe_head',
      C: '#forge:rods/wooden'
    }
  )
  event.shaped(
    Item.of('minecraft:stone_sword', 1),
    [
      'AB',
      'C ',
    ],
    {
      A: '#notreepunching:string',
      B: 'hot_iron:stone_sword_blade',
      C: '#forge:rods/wooden'
    }
  )
});

ServerEvents.tags('item', event => {
  // compat for knives
  for (let knife of [
    'farmersdelight:flint_knife',
    'farmersdelight:netherite_knife',
    'farmersdelight:golden_knife',
    'farmersdelight:diamond_knife',
    'farmersdelight:iron_knife',
  ]) {
    event.add('notreepunching:knives', knife)
    event.add('notreepunching:h/knives', knife)
  }

  event.add('notreepunching:weak_saws', 'minecraft:stone_axe')
  event.add('hot_iron:rock_obtainers', 'notreepunching:flint_pickaxe')
});