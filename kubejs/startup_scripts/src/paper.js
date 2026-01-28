StartupEvents.registry('item', event => {
  event
    .create(`paper_mush`)
    .textureJson({
      layer0: 'minecraft:items/paper'
    })
    .color(1, '#8c8c89')
    .displayName(`Paper Mush`)

  event
    .create(`wet_paper`)
    .textureJson({
      layer0: 'minecraft:items/paper'
    })
    .color(1, '#c1c1b9')
    .displayName(`Wet Paper`)
});