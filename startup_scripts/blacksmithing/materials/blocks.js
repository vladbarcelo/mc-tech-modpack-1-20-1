StartupEvents.registry('block', event => {
  for (let metal of global.castableMetals.concat(global.smithableMetals)) {
    if (global.metalBlocks[metal] === '') {
      event
        .create(`${metal}_block`)
        .textureAll(`minecraft:block/iron_block`)
        .item(item => item.color(0, global.metalColors[metal]))
        .soundType('metal')
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .displayName(toSentenceCase(`${metal} Block`));
    }
  }
})