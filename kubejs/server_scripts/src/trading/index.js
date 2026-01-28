/**
 * novice = zinc
 * apprentice = copper
 * journeyman = brass
 * expert = iron
 * master = gold
 * 
 * https://github.com/BluSunrize/ImmersiveEngineering/blob/1.21.1/src/main/java/blusunrize/immersiveengineering/common/world/Villages.java#L101
 * https://github.com/Luke100000/minecraft-comes-alive/blob/1.20.1/common/src/main/java/net/mca/TradeOffersMCA.java
 * https://minecraft.fandom.com/wiki/Trading
 */

MoreJSEvents.villagerTrades((event) => {
  event.removeVanillaTrades();
  event.removeModdedTrades();

  let coinTiers = [
    { coinItem: 'createdeco:zinc_coin', level: 1 },
    { coinItem: 'createdeco:copper_coin', level: 2 },
    { coinItem: 'createdeco:brass_coin', level: 3 },
    { coinItem: 'createdeco:industrial_iron_coin', level: 4 },
    { coinItem: 'createdeco:gold_coin', level: 5 },
  ]

  // cleric
  for (let _coinTierId in coinTiers) {
    let coinTierId = Number(_coinTierId)
    let coinTier = coinTiers[coinTierId]
    let nextCoinTier = coinTierId < coinTiers.length - 1 ? coinTiers[coinTierId + 1] : null
    let prevCoinTier = coinTierId > 0 ? coinTiers[coinTierId - 1] : null

    if (prevCoinTier) {
      event.addTrade(
        'cleric',
        coinTier.level,
        [
          TradeItem.of(coinTier.coinItem, 1)
        ],
        TradeItem.of(prevCoinTier.coinItem, 60, 64)
      )
    }

    if (nextCoinTier) {
      event.addTrade(
        'cleric',
        coinTier.level,
        [
          TradeItem.of(coinTier.coinItem, 64)
        ],
        TradeItem.of(nextCoinTier.coinItem, 1)
      )
    }
  }


  global.addToolSmithTrades()
  global.addArmorerTrades()
  global.addWeaponSmithTrades()
  global.addButcherTrades()
  global.addLeatherWorkerTrades()

  for (let profession of global.VILLAGER_PROFESSIONS) {
    for (let side of ['sell', 'buy']) {
      if (!global[`villager_trades_${profession}_${side}`]) continue
      for (let tradeInfo of global[`villager_trades_${profession}_${side}`]) {
        let tradeCfg = side === 'sell' ? getSellTradeConfig(tradeInfo.item, tradeInfo.components, tradeInfo.level, tradeInfo.lowDemandBiomes, tradeInfo.highDemandBiomes, tradeInfo.priceMultiplier) : getBuyTradeConfig(tradeInfo.item, tradeInfo.components, tradeInfo.level, tradeInfo.lowDemandBiomes, tradeInfo.highDemandBiomes, tradeInfo.priceMultiplier)
        if (tradeCfg !== null) {
          let input = [
            TradeItem.of(tradeCfg.input1.item, tradeCfg.input1.minCount, tradeCfg.input1.maxCount)
          ]

          if (tradeCfg.input2) {
            input.push(TradeItem.of(tradeCfg.input2.item, tradeCfg.input2.minCount, tradeCfg.input2.maxCount))
          }

          let trade = event.addTrade(
            profession,
            tradeCfg.level,
            input,
            TradeItem.of(tradeCfg.output.item, tradeCfg.output.count)
          )

          trade.transform(
            /**
             * @param {$MerchantOffer_} offer 
             * @param {$Entity_} entity 
             * @param {$Random_} random 
             */
            (offer, entity, random) => { 
              let biome = entity.level.getBlock(entity.blockPosition()).getBiomeId().toString()
              let currentDemand = offer.getDemand()

              if (tradeCfg.lowDemandBiomes.includes(biome)) {
                offer.setDemand(currentDemand * 0.3)
              } else if (tradeCfg.highDemandBiomes.includes(biome)) {
                offer.setDemand(currentDemand * 3)
              }
            }
          )
        }
      }
    }
  }
});


function calcPrice(components) {
  let total = 0;

  for (let component of components) {
    console.log(`Processing price for component ${JSON.stringify(component)}...`)
    if (component.type === 'work') {
      if (!global.workPrices[component.profession] || !global.workPrices[component.profession][component.level]) {
        console.error(`Work price not found for profession ${component.profession} and level ${component.level}`)
        return null
      }
      total += global.workPrices[component.profession][component.level]
    } else if (component.type === 'product') {
      if (!global.productComponents[component.item]) {
        console.error(`Product components not found for item ${component.item}`)
        return null
      }

      let componentPrice = calcPrice(global.productComponents[component.item])

      if (componentPrice === null) {
        return null
      }

      total += componentPrice * component.amount
    } else if (component.type === 'material') {
      if (!global.baseMaterialPrices[component.item]) {
        console.error(`Material price not found for item ${component.item}`)
        return null
      }
      total += global.baseMaterialPrices[component.item] * component.amount;
    }
  }

  return total
}

function calcMinMaxPrice(price, side) {
  return side === 'sell' ? {
    min: price,
    max: Math.ceil(price * 1.5)
  } : {
    min: Math.ceil(price * 0.5),
    max: price
  };
}

function getBuyTradeConfig(
  itemToBuy,
  itemComponents,
  level,
  lowDemandBiomes,
  highDemandBiomes,
  priceMultiplier
) {
  let price = calcPrice(itemComponents, 'buy')

  if (price === null) {
    return null
  }

  let normalizedPrice = global.convertCoins(price)

  console.log(`Can buy ${itemToBuy} for ${normalizedPrice[0].amount} ${normalizedPrice[0].coinItem}, level ${level}`)

  return {
    input1: {
      item: Item.of(itemToBuy),
      minCount: 1,
      maxCount: 2,
    },
    input2: null,
    output: {
      item: Item.of(normalizedPrice[0].coinItem),
      count: normalizedPrice[0].amount,
    },
    level: level,
    priceMultiplier: priceMultiplier || 0.05,
    lowDemandBiomes: lowDemandBiomes || [],
    highDemandBiomes: highDemandBiomes || [],
  }
}

function getSellTradeConfig(
  itemToSell,
  itemComponents,
  level,
  lowDemandBiomes,
  highDemandBiomes,
  priceMultiplier
) {
  let price = calcPrice(itemComponents, 'sell')
  if (price === null) {
    return null
  }
  let normalizedPrice = global.convertCoins(price)

  let minMax_1 = calcMinMaxPrice(normalizedPrice[0].amount, 'sell')
  let minMax_2 = null

  if (normalizedPrice.length > 1) {
    minMax_2 = calcMinMaxPrice(normalizedPrice[1].amount, 'sell')
  }

  console.log(`Can sell ${itemToSell} for ${JSON.stringify(normalizedPrice)}, level ${level}`)

  return {
    input1: {
      item: Item.of(normalizedPrice[0].coinItem),
      minCount: minMax_1.min,
      maxCount: minMax_1.max,
    },
    input2: minMax_2 ? {
      item: Item.of(normalizedPrice[1].coinItem),
      minCount: minMax_2.min,
      maxCount: minMax_2.max,
    } : null,
    output: {
      item: Item.of(itemToSell),
      count: 1,
    },
    level: level,
    priceMultiplier: priceMultiplier || 0.05,
    lowDemandBiomes: lowDemandBiomes || [],
    highDemandBiomes: highDemandBiomes || [],
  }
}