ServerEvents.tags('item', event => {
  for (let metal of global.allMetals) {
    // only put on anvil if it's smithable
    if (global.isSmithable(metal) || global.isBaseCastable(metal)) event.add('hot_iron:anvil_placable_by_clicking', `kubejs:hot_${metal}_ingot_in_tongs`)
    
    event.add('materials/hot', `kubejs:hot_${metal}_ingot`)
    
    for (let part of global.toolParts) {
      event.add('materials/hot', `kubejs:hot_${metal}_${part}`)
    }

    if (!global.ingotDictionary[metal] || global.ingotDictionary[metal].startsWith('kubejs')) {
      event.add(`forge:ingots/${metal}`, `kubejs:${metal}_ingot`)
    }

    if (!global.metalBlocks[metal] || global.metalBlocks[metal].startsWith('kubejs')) {
      event.add(`forge:storage_blocks/${metal}`, `kubejs:${metal}_block`)
    }

    if (!global.metalPlates[metal] || global.metalPlates[metal].startsWith('kubejs')) {
      event.add(`forge:plates/${metal}`, `kubejs:${metal}_sheet`)
    }
  }

  event.add('tools/smithing_tongs', 'hot_iron:smithing_tongs')
});