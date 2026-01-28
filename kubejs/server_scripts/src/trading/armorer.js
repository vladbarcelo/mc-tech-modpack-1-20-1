function addArmorerTrades() {
  global.villager_trades_armorer_sell = []
  global.villager_trades_armorer_buy = [
    {
      item: 'minecraft:coal',
      components: [
        { type: 'material', item: 'coal', amount: 1 }
      ],
      level: 1
    },
    {
      item: 'minecraft:leather',
      components: [
        { type: 'product', item: 'minecraft:leather', amount: 1 },
      ],
      level: 1
    },
    {
      item: 'minecraft:coal_block',
      components: [
        { type: 'material', item: 'coal', amount: 9 }
      ],
      level: 1
    },
  ]

  for (let metal of global.smithableMetals) {
    let level = 1
    if (global.baseMetalDurability[metal] >=  320) {
      level = 5
    } else if (global.baseMetalDurability[metal] >= 240) {
      level = 4
    } else if (global.baseMetalDurability[metal] >= 160) {
      level = 3
    } else if (global.baseMetalDurability[metal] >= 80) {
      level = 2
    }

    let ingotItem = global.ingotDictionary[metal] || `kubejs:${metal}_ingot`

    global.villager_trades_armorer_buy.push({
      item: ingotItem,
      components: [
        { type: 'product', item: ingotItem, amount: 1 },
      ],
      level: level
    })

    let sheetItem = global.metalPlates[metal] || `kubejs:${metal}_sheet`

    let strapItem = `kubejs:${metal}_strap`

    global.productComponents[strapItem] = [
      { type: 'work', profession: 'armorer', level: 'medium' },
      { type: 'product', item: 'minecraft:leather', amount: 2 },
      { type: 'product', item: sheetItem, amount: 1 },
    ]

    let bootsItem = global.armorItems[metal].boots || `kubejs:${metal}_boots`

    global.productComponents[bootsItem] = [
      { type: 'work', profession: 'armorer', level: 'hard' },
      { type: 'product', item: strapItem, amount: 2 },
      { type: 'product', item: sheetItem, amount: 2 },
    ]

    let leggingsItem = global.armorItems[metal].leggings || `kubejs:${metal}_leggings`

    global.productComponents[leggingsItem] = [
      { type: 'work', profession: 'armorer', level: 'hard' },
      { type: 'product', item: strapItem, amount: 4 },
      { type: 'product', item: sheetItem, amount: 3 },
    ]

    let chestplateItem = global.armorItems[metal].chestplate || `kubejs:${metal}_chestplate`

    global.productComponents[chestplateItem] = [
      { type: 'work', profession: 'armorer', level: 'hard' },
      { type: 'product', item: strapItem, amount: 4 },
      { type: 'product', item: sheetItem, amount: 4 },
    ]

    let helmetItem = global.armorItems[metal].helmet || `kubejs:${metal}_helmet`

    global.productComponents[helmetItem] = [
      { type: 'work', profession: 'armorer', level: 'hard' },
      { type: 'product', item: strapItem, amount: 2 },
      { type: 'product', item: sheetItem, amount: 4 },
    ]

    global.villager_trades_armorer_sell.push(
      {
        item: strapItem,
        components: [
          { type: 'product', item: strapItem, amount: 1 },
        ],
        level: level
      },
      {
        item: bootsItem,
        components: [
          { type: 'product', item: bootsItem, amount: 1 },
        ],
        level: level
      }, 
      {
        item: leggingsItem,
        components: [
          { type: 'product', item: leggingsItem, amount: 1 },
        ],
        level: level
      },
      {
        item: chestplateItem,
        components: [
          { type: 'product', item: chestplateItem, amount: 1 },
        ],
        level: level
      },
      {
        item: helmetItem,
        components: [
          { type: 'product', item: helmetItem, amount: 1 },
        ],
        level: level
      }
    )
  }
}

global.addArmorerTrades = addArmorerTrades