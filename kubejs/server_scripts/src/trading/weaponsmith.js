function addWeaponSmithTrades() {
  global.villager_trades_weaponsmith_sell = []
  global.villager_trades_weaponsmith_buy = [
    {
      item: 'minecraft:coal',
      components: [
        { type: 'material', item: 'coal', amount: 1 }
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

    global.villager_trades_weaponsmith_buy.push({
      item: ingotItem,
      components: [
        { type: 'product', item: ingotItem, amount: 1 },
      ],
      level: level
    })

    let swordItem = global.toolItems[metal].sword_blade || `kubejs:${metal}_sword`

    global.productComponents[swordItem] = [
      { type: 'product', item: ingotItem, amount: 1 },
      { type: 'product', item: 'hot_iron:tool_handle', amount: 1 },
      { type: 'work', profession: 'weaponsmith', level: 'hard' },
    ]

    global.villager_trades_weaponsmith_sell.push({
      item: swordItem,
      components: [
        { type: 'product', item: swordItem, amount: 1 },
      ],
      level: level
    })
  }

  global.productComponents['butchersdelight:cleaver'] = [
      { type: 'product', item: global.metalPlates.cast_iron, amount: 2 },
      { type: 'product', item: 'hot_iron:tool_handle', amount: 1 },
      { type: 'work', profession: 'weaponsmith', level: 'basic' },
    ]

  global.villager_trades_weaponsmith_sell.push(
    {
      item: 'butchersdelight:cleaver',
      components: [
        { type: 'product', item: 'butchersdelight:cleaver', amount: 1 },
      ],
      level: 1
    }
  )
}

global.addWeaponSmithTrades = addWeaponSmithTrades