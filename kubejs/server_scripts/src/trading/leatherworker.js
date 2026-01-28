function addLeatherWorkerTrades() {
  global.villager_trades_leatherworker_sell = []
  global.villager_trades_leatherworker_buy = []

  global.productComponents['minecraft:leather'] = [
    { type: 'product', item: 'butchersdelight:cow_hide', amount: 0.2 },
    { type: 'work', profession: 'leatherworker', level: 'basic' },
  ]

  global.villager_trades_leatherworker_sell.push(
    { 
      item: 'minecraft:leather',
      components: [
        { type: 'product', item: 'minecraft:leather' }
      ],
      level: 1
    }
  )
}

global.addLeatherWorkerTrades = addLeatherWorkerTrades