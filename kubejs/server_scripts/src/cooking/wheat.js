ServerEvents.recipes((event) => {
  for (let id of [
    'bucketlib:farmersdelight/wheat_dough_from_water',
    'minecraft:bread',
    'regions_unexplored:barley_smoking',
    'regions_unexplored:barley_smelting',
    'quark:tweaks/crafting/utility/bent/bread',
    'untitledduckmod:crafting_shaped/duck_cake',
    'untitledduckmod:crafting_shaped/goose_cake',
    'create:crafting/curiosities/cake',
    'bucketlib:cake',
    'minecraft:cake',
    'farmersdelight:cake_from_milk_bottle',
    'quark:tweaks/crafting/utility/bent/cookie',
    'minecraft:cookie',
    'biomeswevegone:blooming_oddion',
    'cave_stuff:puffballfritterrecipe',
    'cave_stuff:russulaandpuffballquicherecipe',
    'cave_stuff:russulaandpuffballquicherecipe_2',
    'farmersdelight:honey_cookie',
    'farmersdelight:sweet_berry_cookie',
    'farmersdelight:pie_crust',
    'farmersdelight:apple_pie',
    'minecolonies:cheese_ravioli',
    'minecolonies:veggie_ravioli',
    'minecolonies:pottage',
    'minecolonies:veggie_quiche',
    'minecolonies:apple_pie',
    'minecolonies:raw_noodle',
    'minecolonies:fish_n_chips',
    'minecolonies:pierogi',
    'minecolonies:cheese_pizza',
    'minecolonies:plain_cheesecake',
    'minecolonies:meat_ravioli',
  ]) {
    event.remove({ id: id })
  }

  // cake
  event.shaped(
    Item.of('minecolonies:cake_batter', 1),
    [
      'AAA',
      'BCB',
      'DDD'
    ],
    {
      A: '#forge:milk',
      B: 'minecraft:sugar',
      C: '#forge:eggs',
      D: '#forge:flour'
    }
  )

  // cookie
  event.shapeless(
    Item.of('minecolonies:cookie_dough', 4),
    [
      '#forge:flour',
      '#forge:bean/crops/cocoa'
    ]
  )

  // blooming_oddion
  event.recipes.farmersdelight.cooking(
    [
      '#forge:dough',
      'biomeswevegone:cooked_oddion_bulb'
    ],
    'biomeswevegone:blooming_oddion', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl' // container
  )
  // puffball fritter
  event.recipes.farmersdelight.cooking(
    [
      '#forge:dough',
      'cave_stuff:puffball'
    ],
    'cave_stuff:puffballfritter', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl' // container
  )

  // russula and puffball quiche
  event.recipes.farmersdelight.cooking(
    [
      'cave_stuff:russula',
      'cave_stuff:russula',
      'cave_stuff:puffball',
      'cave_stuff:puffball',
    ],
    'cave_stuff:russulaandpuffballquiche', // output
    30, // exp
    10, // cookTime
    'farmersdelight:pie_crust' // container
  )

  // honey cookie
  event.shapeless(
    Item.of('farmersdelight:honey_cookie', 1),
    [
      '#forge:foods/cookie',
      'minecraft:honey_bottle'
    ]
  )

  // sweet berry cookie
  event.shapeless(
    Item.of('farmersdelight:sweet_berry_cookie', 1),
    [
      '#forge:foods/cookie',
      'minecraft:sweet_berries'
    ]
  )

  // pie crust
  event.shaped(
    Item.of('farmersdelight:pie_crust', 1),
    [
      'ABA',
      ' A ',
    ],
    {
      A: '#forge:dough',
      B: '#forge:milk',
    }
  )

  // apple pie
  event.recipes.farmersdelight.cooking(
    [
      'minecraft:apple',
      'minecraft:apple',
      'minecraft:apple',
      'minecraft:sugar',
      'minecraft:sugar',
    ],
    'farmersdelight:apple_pie', // output
    30, // exp
    10, // cookTime
    'farmersdelight:pie_crust' // container
  )

  // cheese ravioli
  event.recipes.farmersdelight.cooking(
    [
      '#forge:dough',
      '#forge:cheese',
      '#forge:cheese'
    ],
    'minecolonies:cheese_ravioli', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl' // container
  )

  // veggie ravioli
  event.recipes.farmersdelight.cooking(
    [
      '#forge:dough',
      '#forge:vegetables',
      '#forge:vegetables',
    ],
    'minecolonies:veggie_ravioli', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl' // container
  )

  // pottage
  event.recipes.farmersdelight.cooking(
    [
      '#forge:flour',
      '#forge:flour',
      '#forge:vegetables',
      '#forge:vegetables',
      '#forge:vegetables',
      '#forge:vegetables',
    ],
    'minecolonies:pottage', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl' // container
  )

  // veggie quiche
  event.recipes.farmersdelight.cooking(
    [
      '#forge:vegetables',
      '#forge:vegetables',
      '#forge:vegetables',
      '#forge:vegetables',
    ],
    'minecolonies:veggie_quiche', // output
    30, // exp
    10, // cookTime
    'farmersdelight:pie_crust' // container
  )

  // raw noodles
  event.shapeless(
    Item.of('minecolonies:raw_noodle', 4),
    [
      '#forge:dough',
      '#forge:rods'
    ]
  )

  // fish and chips
  event.recipes.farmersdelight.cooking(
    [
      '#forge:dough',
      '#minecraft:fishes',
      '#forge:crops/garlic',
      '#forge:crops/onion',
      '#forge:crops/potato',
    ],
    'minecolonies:fish_n_chips', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl' // container
  )

  // pierogi
  event.recipes.farmersdelight.cooking(
    [
      '#forge:dough',
      '#forge:cheese',
      '#forge:crops/garlic',
      '#forge:crops/onion',
      '#forge:crops/potato',
    ],
    'minecolonies:pierogi', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl' // container
  )

  // pizza
  event.recipes.farmersdelight.cooking(
    [
      '#forge:cheese',
      '#forge:crops/garlic',
      '#forge:crops/tomato',
      '#forge:crops/tomato',
      '#forge:crops/tomato',
    ],
    'minecolonies:cheese_pizza', // output
    30, // exp
    10, // cookTime
    'farmersdelight:pie_crust' // container
  )

  // cheesecake
  event.recipes.farmersdelight.cooking(
    [
      'minecolonies:creamcheese',
      'minecolonies:creamcheese',
      '#forge:dough',
      '#forge:butter',
      'minecraft:sugar',
    ],
    'minecolonies:plain_cheesecake', // output
    30, // exp
    10, // cookTime
    'farmersdelight:pie_crust' // container
  )

  // meat ravioli
  event.recipes.farmersdelight.cooking(
    [
      '#forge:dough',
      '#forge:meat/foods/raw',
      '#forge:meat/foods/raw',
    ],
    'minecolonies:meat_ravioli', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl' // container
  )
});