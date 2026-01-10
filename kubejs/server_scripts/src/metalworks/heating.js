ServerEvents.recipes((event) => {
  for (let metal of global.smithableMetals) {
    event.smelting(`kubejs:hot_${metal}_ingot`, `#forge:ingots/${metal}`)
  }
  for (let metal of global.baseCastableMetals) {
    event.blasting(`kubejs:hot_${metal}_ingot`, `#forge:ingots/${metal}`)
  }
});