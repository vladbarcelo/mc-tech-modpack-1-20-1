StartupEvents.registry('item', event => {
  // engine component molds
  
  // piston
  event
    .create(`graphite_engine_piston_mold`)
    .textureJson({
      layer0: 'createmetallurgy:item/graphite_blank_mold',
      layer1: 'createdieselgenerators:item/engine_piston'
    })
    .color(1, '#000000')
    .displayName(`Graphite Engine Piston Mold`)

  // chamber
  event
    .create(`graphite_engine_chamber_mold`)
    .textureJson({
      layer0: 'createmetallurgy:item/graphite_blank_mold',
      layer1: 'tfmg:item/engine_chamber'
    })
    .color(1, '#000000')
    .displayName(`Graphite Engine Chamber Mold`)
});