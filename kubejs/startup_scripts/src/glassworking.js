StartupEvents.registry('block', event => {
  event
    .create(`borosilicate_glass`)
    .textureAll(`minecraft:block/glass`)
    .soundType('glass')
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .displayName('Borosilicate Glass');
})

StartupEvents.registry('item', event => {
  // regular bottle
  event
    .create(`bottle_sand_cast`)
    .textureJson({
      layer0: 'tconstruct:item/sand_cast/blank',
      layer1: 'minecraft:glass_bottle'
    })
    .color(1, '#000000')
    .displayName(`Bottle Sand Cast`)

  event
    .create(`bottle_red_sand_cast`)
    .textureJson({
      layer0: 'tconstruct:item/red_sand_cast/blank',
      layer1: 'minecraft:glass_bottle'
    })
    .color(1, '#000000')
    .displayName(`Bottle Sand Cast`)

  // large bottle
  event
    .create(`large_bottle_sand_cast`)
    .textureJson({
      layer0: 'tconstruct:item/sand_cast/blank',
      layer1: 'minecolonies:large_empty_bottle'
    })
    .color(1, '#000000')
    .displayName(`Large Bottle Sand Cast`)

  event
    .create(`large_bottle_red_sand_cast`)
    .textureJson({
      layer0: 'tconstruct:item/red_sand_cast/blank',
      layer1: 'minecolonies:large_empty_bottle'
    })
    .color(1, '#000000')
    .displayName(`Large Bottle Sand Cast`)
});

StartupEvents.registry('fluid', event => {
  event.create('molten_glass')
    .thinTexture(0xfcfcfc)
    .displayName('Molten Glass')
})

