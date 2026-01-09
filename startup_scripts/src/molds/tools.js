StartupEvents.registry('item', event => {
  for (let part of global.toolParts) {
    event
      .create(`graphite_${part}_mold`)
      .textureJson({
        layer0: 'createmetallurgy:item/graphite_blank_mold',
        layer1: `hot_iron:item/stone_${part}`
      })
      .color(1, '#000000')
      .displayName(`Graphite ${toSentenceCase(part)} Mold`)

    if (!global.tConstructToolParts[part]) {
      event
        .create(`${part}_sand_cast`)
        .textureJson({
          layer0: 'tconstruct:item/sand_cast/blank',
          layer1: `hot_iron:item/stone_${part}`
        })
        .color(1, '#000000')
        .displayName(`${toSentenceCase(part)} Sand Cast`)

      event
        .create(`${part}_red_sand_cast`)
        .textureJson({
          layer0: 'tconstruct:item/red_sand_cast/blank',
          layer1: `hot_iron:item/stone_${part}`
        })
        .color(1, '#000000')
        .displayName(`${toSentenceCase(part)} Sand Cast`)
    }
  }
});