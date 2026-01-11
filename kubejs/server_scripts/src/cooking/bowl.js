ServerEvents.recipes((event) => {
  for (let id of [
    'minecolonies:cooked_rice',

    'biomeswevegone:allium_oddion_soup',
    'minecolonies:pasta_tomato',
    'alexsdelight:maggot_salad_recipe',

    'minecolonies:veggie_soup',
    'cave_stuff:crustaceanstewrecipe',
    'cave_stuff:crustaceanstewrecipe_2',
    'cave_stuff:crustaceanstewrecipe_3',
    'cave_stuff:crustraceanstewrecipe_3',
    'minecolonies:yogurt_with_berries',
    'alexsmobs:sopa_de_macaco',
    'farmersdelight:nether_salad',
    'cave_stuff:puffballandscrambledeggsrecipe',
    'minecolonies:congee',
    'minecraft:mushroom_stew',
    // wtf
    'cave_stuff:ragesouprecipe',
    'cave_stuff:guepiniopsissouprecipe',
    'cave_stuff:guepiniopsissouprecipe_2',

    'minecolonies:soy_corn_chowder',
    'minecolonies:corn_chowder',
    'cave_stuff:russulasouprecipe_2',
    'cave_stuff:russulasouprecipe',
    'minecolonies:cabochis',
    'minecolonies:potato_soup',
    'biomesoplenty:rabbit_stew_from_toadstool',
    'minecolonies:soy_pea_soup',
    'minecolonies:squash_soup',
    'minecolonies:chicken_broth',
    'minecolonies:pasta_plain',
    'minecraft:rabbit_stew_from_brown_mushroom',
    // 'biomeswevegone:white_puffball_stew',
    'alexsmobs:mosquito_repellent_stew',
    'minecolonies:pea_soup',
    'minecraft:rabbit_stew_from_red_mushroom',
    'minecraft:beetroot_soup',
  ]) {
    event.remove({ id: id })
  }

  event.recipes.farmersdelight.cooking(
    [
      '#forge:crops/rice',
    ],
    'minecolonies:cooked_rice', // output
    30, // exp
    300, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      'biomeswevegone:cooked_oddion_bulb',
      'biomeswevegone:cooked_oddion_bulb',
    ],
    'biomeswevegone:allium_oddion_soup', // output
    30, // exp
    20, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      '#forge:noodles',
      '#forge:noodles',
      '#forge:crops/tomato',
      '#forge:crops/tomato',
      '#forge:crops/onion',
      '#forge:crops/garlic',
    ],
    'minecolonies:pasta_tomato', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      'alexsmobs:maggot',
      '#forge:crops/cabbage',
      '#forge:crops/tomato',
      '#forge:crops/onion',
      '#forge:crops/beetroot',
    ],
    'alexsdelight:maggot_salad', // output
    30, // exp
    20, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      '#forge:vegetables',
      '#forge:vegetables',
      '#forge:vegetables',
      '#forge:vegetables',
      '#forge:vegetables',
      '#forge:vegetables',
    ],
    'minecolonies:veggie_soup', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      'minecraft:dried_kelp',
      '#forge:mushrooms',
      'cave_stuff:roastedjameosblindcrablegs',
      'cave_stuff:rawtroglocaris',
      'cave_stuff:troglocarishead',
    ],
    'cave_stuff:crustaceanstew', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.shapeless(
    Item.of('minecolonies:yogurt_with_berries'),
    [
      '#forge:yogurt',
      'minecraft:sweet_berries',
    ]
  )

  event.recipes.farmersdelight.cooking(
    [
      'minecraft:dried_kelp',
      '#forge:mushrooms',
      'cave_stuff:roastedjameosblindcrablegs',
      'cave_stuff:rawtroglocaris',
      'cave_stuff:troglocarishead',
    ],
    'cave_stuff:crustaceanstew', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      'cave_stuff:puffball',
      '#forge:eggs',
      '#forge:eggs',
    ],
    'cave_stuff:puffballandscrambledegg', // output
    30, // exp
    100, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      '#forge:crops/cabbage',
      '#forge:crops/garlic',
      'minecolonies:cooked_rice',
    ],
    'minecolonies:congee', // output
    30, // exp
    20, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      '#forge:crops/garlic',
      '#forge:crops/onion',
      '#forge:crops/corn',
      '#forge:crops/milk',
      'minecolonies:cooked_rice',
    ],
    'minecolonies:corn_chowder', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      'cave_stuff:russula',
      '#forge:meat/foods/raw',
    ],
    'cave_stuff:russulasoup', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      '#forge:crops/garlic',
      '#forge:crops/cabbage',
      '#forge:bread',
    ],
    'minecolonies:cabochis', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      '#forge:crops/potato',
      '#forge:crops/garlic',
      '#forge:crops/onion',
    ],
    'minecolonies:potato_soup', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      'minecolonies:butternut_squash',
      '#forge:crops/garlic',
      '#forge:crops/onion',
    ],
    'minecolonies:squash_soup', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      '#forge:raw_chicken',
      '#forge:crops/garlic',
      '#forge:crops/onion',
    ],
    'minecolonies:chicken_broth', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      'minecolonies:raw_noodle',
      '#forge:crops/garlic',
      '#forge:butter',
    ],
    'minecolonies:pasta_plain', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )

  event.recipes.farmersdelight.cooking(
    [
      '#forge:crops/pea',
      '#forge:crops/garlic',
      '#forge:crops/onion',
      '#forge:milk',
    ],
    'minecolonies:pea_soup', // output
    30, // exp
    600, // cookTime
    'minecraft:bowl' // container
  )
})