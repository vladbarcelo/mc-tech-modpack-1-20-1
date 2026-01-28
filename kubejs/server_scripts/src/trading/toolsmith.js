function addToolSmithTrades() {
  global.villager_trades_toolsmith_sell = []
  global.villager_trades_toolsmith_buy = [
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

    global.productComponents[ingotItem] = [
      { type: 'material', item: metal, amount: 1 },
      { type: 'material', item: 'coal', amount: 1 },
      { type: 'work', profession: 'toolsmith', level: 'basic' }
    ]

    global.villager_trades_toolsmith_sell.push(
      {
        item: ingotItem,
        components: [
          { type: 'product', item: ingotItem, amount: 1 },
        ],
        level: level
      }
    )

    let sheetItem = global.metalPlates[metal] || `kubejs:${metal}_sheet`

    global.productComponents[sheetItem] = [
      { type: 'product', item: ingotItem, amount: 2 },
      { type: 'work', profession: 'toolsmith', level: 'basic' },
    ]

    global.villager_trades_toolsmith_sell.push(
      {
        item: sheetItem,
        components: [
          { type: 'product', item: sheetItem, amount: 1 },
        ],
        level: level
      }
    )

    let shovelItem = global.toolItems[metal].shovel_blade || `kubejs:${metal}_shovel`

    global.productComponents[shovelItem] = [
      { type: 'product', item: ingotItem, amount: 1 },
      { type: 'product', item: 'hot_iron:tool_handle', amount: 1 },
      { type: 'work', profession: 'toolsmith', level: 'hard' },
    ]

    global.villager_trades_toolsmith_sell.push({
      item: shovelItem,
      components: [
        { type: 'product', item: shovelItem, amount: 1 },
      ],
      level: level
    })

    let hoeItem = global.toolItems[metal].hoe_blade || `kubejs:${metal}_hoe`

    global.productComponents[hoeItem] = [
      { type: 'product', item: ingotItem, amount: 1 },
      { type: 'product', item: 'hot_iron:tool_handle', amount: 1 },
      { type: 'work', profession: 'toolsmith', level: 'hard' },
    ]

    global.villager_trades_toolsmith_sell.push({
      item: hoeItem,
      components: [
        { type: 'product', item: hoeItem, amount: 1 },
      ],
      level: level
    })

    let pickaxeItem = global.toolItems[metal].pickaxe_head || `kubejs:${metal}_pickaxe`

    global.productComponents[pickaxeItem] = [
      { type: 'product', item: ingotItem, amount: 3 },
      { type: 'product', item: 'hot_iron:tool_handle', amount: 1 },
      { type: 'work', profession: 'toolsmith', level: 'hard' },
    ]

    global.villager_trades_toolsmith_sell.push({
      item: pickaxeItem,
      components: [
        { type: 'product', item: pickaxeItem, amount: 1 },
      ],
      level: level
    })

    let axeItem = global.toolItems[metal].axe_head || `kubejs:${metal}_axe`

    global.productComponents[axeItem] = [
      { type: 'product', item: ingotItem, amount: 3 },
      { type: 'product', item: 'hot_iron:tool_handle', amount: 1 },
      { type: 'work', profession: 'toolsmith', level: 'hard' },
    ]

    global.villager_trades_toolsmith_sell.push({
      item: axeItem,
      components: [
        { type: 'product', item: axeItem, amount: 1 },
      ],
      level: level
    })
  }

  global.productComponents['hot_iron:tool_handle'] = [
    { type: 'material', item: 'wood_stick', amount: 1 },
    { type: 'work', profession: 'toolsmith', level: 'basic' },
  ]

  global.productComponents['immersiveengineering:hammer'] = [
    { type: 'product', item: 'hot_iron:tool_handle', amount: 2 },
    { type: 'product', item: global.ingotDictionary.lead, amount: 2 },
    { type: 'material', item: 'string', amount: 1 },
    { type: 'work', profession: 'toolsmith', level: 'medium' },
  ]

  global.villager_trades_toolsmith_sell.push(
    {
      item: 'immersiveengineering:hammer',
      components: [
        { type: 'product', item: 'immersiveengineering:hammer', amount: 1 },
      ],
      level: 1
    }
  )

  global.productComponents['hot_iron:smithing_hammer'] = [
    { type: 'product', item: 'hot_iron:tool_handle', amount: 2 },
    { type: 'product', item: global.ingotDictionary.cast_iron, amount: 2 },
    { type: 'material', item: 'string', amount: 1 },
    { type: 'work', profession: 'toolsmith', level: 'medium' },
  ]

  global.villager_trades_toolsmith_sell.push(
    {
      item: 'hot_iron:smithing_hammer',
      components: [
        { type: 'product', item: 'hot_iron:smithing_hammer', amount: 1 },
      ],
      level: 1
    }
  )

  global.productComponents['notreepunching:iron_saw'] = [
    { type: 'product', item: 'hot_iron:tool_handle', amount: 1 },
    { type: 'product', item: global.metalPlates.cast_iron, amount: 2 },
    { type: 'work', profession: 'toolsmith', level: 'basic' },
  ]

  global.villager_trades_toolsmith_sell.push(
    {
      item: 'notreepunching:iron_saw',
      components: [
        { type: 'product', item: 'notreepunching:iron_saw', amount: 1 },
      ],
      level: 1
    }
  )

  global.productComponents['farmersdelight:cooking_pot'] = [
    { type: 'product', item: 'hot_iron:tool_handle', amount: 1 },
    { type: 'product', item: global.ingotDictionary.cast_iron, amount: 1 },
    { type: 'work', profession: 'toolsmith', level: 'hard' },
  ]

  global.villager_trades_toolsmith_sell.push(
    {
      item: 'farmersdelight:cooking_pot',
      components: [
        { type: 'product', item: 'farmersdelight:cooking_pot', amount: 1 },
      ],
      level: 1
    }
  )

  global.productComponents['farmersdelight:skillet'] = [
    { type: 'product', item: global.metalPlates.cast_iron, amount: 1 },
    { type: 'work', profession: 'toolsmith', level: 'basic' },
  ]

  global.villager_trades_toolsmith_sell.push(
    {
      item: 'farmersdelight:skillet',
      components: [
        { type: 'product', item: 'farmersdelight:skillet', amount: 1 },
      ],
      level: 1
    }
  )

  global.productComponents['notreepunching:clay_tool'] = [
    { type: 'material', item: 'wood_stick', amount: 4 },
    { type: 'work', profession: 'toolsmith', level: 'basic' },
  ]

  global.villager_trades_toolsmith_sell.push(
    {
      item: 'notreepunching:clay_tool',
      components: [
        { type: 'product', item: 'notreepunching:clay_tool', amount: 1 },
      ],
      level: 1
    }
  )
}

global.addToolSmithTrades = addToolSmithTrades