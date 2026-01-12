StartupEvents.registry('item', event => {
  addMetalCastingRecipe(
    event,
    "copper",
    90,
    20 * 5,
    "hardcore_torches:oil_can",
    "hardcore_torches:item/oil_can"
  )
});