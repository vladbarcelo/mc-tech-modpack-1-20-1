StartupEvents.registry('fluid', event => {
  // borosilicate glass
  event.create('molten_borosilicate_glass')
    .thinTexture(0xfcfcfc)
    .displayName('Molten Borosilicate Glass')
});

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