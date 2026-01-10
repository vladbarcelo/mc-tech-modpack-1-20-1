StartupEvents.registry('item', event => {
  event
    .create(`graphite_sawblade_mold`)
    .textureJson({
      layer0: 'createmetallurgy:item/graphite_blank_mold',
      layer1: 'immersiveengineering:item/sawblade'
    })
    .color(1, '#000000')
    .displayName(`Graphite Sawblade Mold`)

  event
    .create(`sawblade_sand_cast`)
    .textureJson({
      layer0: 'tconstruct:item/sand_cast/blank',
      layer1: 'immersiveengineering:item/sawblade'
    })
    .color(1, '#000000')
    .displayName(`Sawblade Sand Cast`)

  event
    .create(`sawblade_red_sand_cast`)
    .textureJson({
      layer0: 'tconstruct:item/red_sand_cast/blank',
      layer1: 'immersiveengineering:item/sawblade'
    })
    .color(1, '#000000')
    .displayName(`Sawblade Sand Cast`)
});