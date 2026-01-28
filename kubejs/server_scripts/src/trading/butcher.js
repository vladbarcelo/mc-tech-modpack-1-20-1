function addButcherTrades() {
  global.villager_trades_butcher_sell = []
  global.villager_trades_butcher_buy = [
    {
      item: 'butchersdelight:deadchiken',
      components: [
        { type: 'material', item: 'small_animal_carcass', amount: 1 }
      ],
      level: 1,
      highDemandBiomes: [
        'biomesoplenty:cold_desert',
        'biomesoplenty:dead_forest',
        'biomesoplenty:tundra',
        'biomesoplenty:wasteland',
        'biomeswevegone:frosted_taiga',
        'biomeswevegone:shattered_glacier',
        'biomeswevegone:windswept_desert',
        'minecraft:badlands',
        'minecraft:desert',
        'minecraft:ice_spikes',
      ]
    },
    {
      item: 'butchersdelight:deadrabbitbrown',
      components: [
        { type: 'material', item: 'small_animal_carcass', amount: 1 }
      ],
      level: 1
    },
    {
      item: 'butchersdelight:deadpig',
      components: [
        { type: 'material', item: 'medium_animal_carcass', amount: 1 }
      ],
      level: 2
    },
    {
      item: 'butchersdelight:deadhoglin',
      components: [
        { type: 'material', item: 'medium_animal_carcass', amount: 1 }
      ],
      level: 2
    },
    {
      item: 'butchersdelight:deadgoat',
      components: [
        { type: 'material', item: 'medium_animal_carcass', amount: 1 }
      ],
      level: 2
    },
    {
      item: 'butchersdelight:deadsheep',
      components: [
        { type: 'material', item: 'medium_animal_carcass', amount: 1 }
      ],
      level: 2
    },
    {
      item: 'butchersdelight:dead_cow',
      components: [
        { type: 'material', item: 'large_animal_carcass', amount: 1 }
      ],
      level: 3
    },
    {
      item: 'butchersdelight:deadllama',
      components: [
        { type: 'material', item: 'large_animal_carcass', amount: 1 }
      ],
      level: 3
    },
  ]

  global.productComponents['wildernature:bison_meat'] = [
    { type: 'material', item: 'large_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'hard' },
  ]

  global.productComponents['wildernature:venison'] = [
    { type: 'material', item: 'large_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'hard' },
  ]

  global.productComponents['wildernature:cassowary_meat'] = [
    { type: 'material', item: 'medium_animal_carcass', amount: 1 },
    { type: 'work', profession: 'butcher', level: 'medium' },
  ]

  global.productComponents['wildernature:turkey_meat'] = [
    { type: 'material', item: 'small_animal_carcass', amount: 1 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['wildernature:pelican_meat'] = [
    { type: 'material', item: 'small_animal_carcass', amount: 1 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['alexsdelight:kangaroo_shank'] = [
    { type: 'material', item: 'medium_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['alexsdelight:loose_moose_rib'] = [
    { type: 'material', item: 'large_animal_carcass', amount: 0.1 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['alexsdelight:bison_mince'] = [
    { type: 'material', item: 'large_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'medium' },
  ]

  global.productComponents['alexsdelight:raw_bison'] = [
    { type: 'material', item: 'large_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'hard' },
  ]

  global.productComponents['alexsmobs:kangaroo_meat'] = [
    { type: 'material', item: 'medium_animal_carcass', amount: 0.5 },
    { type: 'work', profession: 'butcher', level: 'medium' },
  ]

  global.productComponents['alexsmobs:moose_ribs'] = [
    { type: 'material', item: 'large_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['farmersdelight:chicken_cuts'] = [
    { type: 'material', item: 'small_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['farmersdelight:bacon'] = [
    { type: 'material', item: 'medium_animal_carcass', amount: 0.1 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['minecraft:beef'] = [
    { type: 'material', item: 'large_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'hard' },
  ]

  global.productComponents['minecraft:porkchop'] = [
    { type: 'material', item: 'medium_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'medium' },
  ]

  global.productComponents['minecraft:mutton'] = [
    { type: 'material', item: 'medium_animal_carcass', amount: 0.25 },
    { type: 'work', profession: 'butcher', level: 'medium' },
  ]

  global.productComponents['minecraft:chicken'] = [
    { type: 'material', item: 'small_animal_carcass', amount: 1 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['minecraft:rabbit'] = [
    { type: 'material', item: 'small_animal_carcass', amount: 1 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['untitledduckmod:raw_duck'] = [
    { type: 'material', item: 'small_animal_carcass', amount: 1 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['untitledduckmod:raw_goose'] = [
    { type: 'material', item: 'small_animal_carcass', amount: 1 },
    { type: 'work', profession: 'butcher', level: 'basic' },
  ]

  global.productComponents['butchersdelight:cow_hide'] = [
    { type: 'material', item: 'large_animal_carcass', amount: 1 },
    { type: 'work', profession: 'butcher', level: 'medium' },
  ]

  global.villager_trades_butcher_sell.push(
    { 
      item: 'wildernature:bison_meat',
      components: [
        { type: 'product', item: 'wildernature:bison_meat' }
      ],
      level: 5
    },
    { 
      item: 'wildernature:venison',
      components: [
        { type: 'product', item: 'wildernature:venison' }
      ],
      level: 5
    },
    { 
      item: 'wildernature:cassowary_meat',
      components: [
        { type: 'product', item: 'wildernature:cassowary_meat' }
      ],
      level: 4
    },
    { 
      item: 'wildernature:turkey_meat',
      components: [
        { type: 'product', item: 'wildernature:turkey_meat' }
      ],
      level: 1
    },
    { 
      item: 'wildernature:pelican_meat',
      components: [
        { type: 'product', item: 'wildernature:pelican_meat' }
      ],
      level: 4
    },
    { 
      item: 'alexsdelight:kangaroo_shank',
      components: [
        { type: 'product', item: 'alexsdelight:kangaroo_shank' }
      ],
      level: 4
    },
    { 
      item: 'alexsdelight:loose_moose_rib',
      components: [
        { type: 'product', item: 'alexsdelight:loose_moose_rib' }
      ],
      level: 4
    },
    { 
      item: 'alexsdelight:bison_mince',
      components: [
        { type: 'product', item: 'alexsdelight:bison_mince' }
      ],
      level: 5
    },
    { 
      item: 'alexsdelight:raw_bison',
      components: [
        { type: 'product', item: 'alexsdelight:raw_bison' }
      ],
      level: 5
    },
    { 
      item: 'alexsmobs:kangaroo_meat',
      components: [
        { type: 'product', item: 'alexsmobs:kangaroo_meat' }
      ],
      level: 4
    },
    { 
      item: 'alexsmobs:moose_ribs',
      components: [
        { type: 'product', item: 'alexsmobs:moose_ribs' }
      ],
      level: 4
    },
    { 
      item: 'farmersdelight:chicken_cuts',
      components: [
        { type: 'product', item: 'farmersdelight:chicken_cuts' }
      ],
      level: 1
    },
    { 
      item: 'farmersdelight:bacon',
      components: [
        { type: 'product', item: 'farmersdelight:bacon' }
      ],
      level: 2
    },
    { 
      item: 'minecraft:beef',
      components: [
        { type: 'product', item: 'minecraft:beef' }
      ],
      level: 3
    },
    { 
      item: 'minecraft:porkchop',
      components: [
        { type: 'product', item: 'minecraft:porkchop' }
      ],
      level: 2
    },
    { 
      item: 'minecraft:mutton',
      components: [
        { type: 'product', item: 'minecraft:mutton' }
      ],
      level: 2
    },
    { 
      item: 'minecraft:chicken',
      components: [
        { type: 'product', item: 'minecraft:chicken' }
      ],
      level: 1
    },
    { 
      item: 'minecraft:rabbit',
      components: [
        { type: 'product', item: 'minecraft:rabbit' }
      ],
      level: 1
    },
    { 
      item: 'untitledduckmod:raw_duck',
      components: [
        { type: 'product', item: 'untitledduckmod:raw_duck' }
      ],
      level: 1
    },
    { 
      item: 'untitledduckmod:raw_goose',
      components: [
        { type: 'product', item: 'untitledduckmod:raw_goose' }
      ],
      level: 1
    }
  )
}

global.addButcherTrades = addButcherTrades