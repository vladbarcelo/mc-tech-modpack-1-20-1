StartupEvents.registry('block', event => {
  event
    .create('smouldering_block')
    .textureAll(`hot_iron:block/charcoal_pile_burning`)
    .soundType('basalt')
    .tagBlock('minecraft:mineable/pickaxe')
    .lightLevel(9)
    .displayName('Smouldering Pile')
    .noItem();
})