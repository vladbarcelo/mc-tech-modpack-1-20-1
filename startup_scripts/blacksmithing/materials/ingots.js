StartupEvents.registry('item', event => {
  // missing ingots
  for (let metal of global.allMetals) {
    if (global.ingotDictionary[metal] === '') {
      event
        .create(`${metal}_ingot`)
        .texture(`minecraft:item/iron_ingot`)
        .color(0, global.metalColors[metal])
        .displayName(toSentenceCase(`${metal} Ingot`));
      
      global.ingotDictionary[metal] = `kubejs:${metal}_ingot`
    }
  }
});