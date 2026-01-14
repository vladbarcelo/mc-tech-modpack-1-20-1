ServerEvents.tags('item', event => {
  for (let metal of global.allMetals) {
    // only put on anvil if it's smithable
    if (global.isSmithable(metal) || global.isBaseCastable(metal)) event.add('hot_iron:anvil_placable_by_clicking', `kubejs:hot_${metal}_ingot_in_tongs`)
    
    event.add('materials/hot', `kubejs:hot_${metal}_ingot`)
    
    for (let part of global.toolParts) {
      event.add('materials/hot', `kubejs:hot_${metal}_${part}`)
    }

    let ingotItem = global.ingotDictionary[metal] || `kubejs:${metal}_ingot`
    event.add(`forge:ingots`, ingotItem)
    event.add(`forge:ingots/${metal}`, ingotItem)

    let blockItem = global.metalBlocks[metal] || `kubejs:${metal}_block`
    event.add(`forge:storage_blocks/${metal}`, blockItem)

    let sheetItem = global.metalPlates[metal] || `kubejs:${metal}_sheet`
    event.add(`forge:plates`, sheetItem)
    event.add(`forge:plates/${metal}`, sheetItem)

    let rodItem = global.metalRods[metal] || `kubejs:${metal}_rod`
    event.add(`forge:rods`, rodItem)
    event.add(`forge:rods/${metal}`, rodItem)
  }

  event.add('tools/smithing_tongs', 'hot_iron:smithing_tongs')
});