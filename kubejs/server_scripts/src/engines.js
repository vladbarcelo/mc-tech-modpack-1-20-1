ServerEvents.recipes((event) => {
  // engine components

  // engine base
  event.remove({ id: 'tfmg:mechanical_crafting/engine_base' })
  event.recipes.create.mechanical_crafting('tfmg:engine_base', [
    'AABAA',
    'ACBCA',
    'DEFGG',
    'AHBHA',
    'AABAA',
  ], {
    A: '#forge:plates/steel',
    B: 'create:shaft',
    C: 'immersiveengineering:component_steel',
    D: 'tfmg:exhaust',
    E: 'tfmg:steel_mechanical_pump',
    F: 'tfmg:heavy_machinery_casing',
    G: 'tfmg:steel_pipe',
    H: 'tfmg:steel_mechanism',
  })

  // piston
  event.remove({ id: 'createdieselgenerators:crafting/engine_piston_from_rods' })
  event.remove({ id: 'createdieselgenerators:crafting/engine_piston' })
  event.recipes.createmetallurgy.casting_in_basin('createdieselgenerators:engine_piston', [Fluid.of(global.moltenMaterialFluids.steel, 500), `kubejs:graphite_engine_piston_mold`], 90, true)
  event.stonecutting(`kubejs:graphite_engine_piston_mold`, 'createmetallurgy:graphite_blank_mold')
  
  // chamber
  event.remove({id: 'tfmg:mechanical_crafting/engine_chamber'})
  event.recipes.createmetallurgy.casting_in_basin('tfmg:engine_chamber', [Fluid.of(global.moltenMaterialFluids.steel, 1000), `kubejs:graphite_engine_chamber_mold`], 90, true)
  event.stonecutting(`kubejs:graphite_engine_chamber_mold`, 'createmetallurgy:graphite_blank_mold')
  
  // spark plug
  event.remove({ id: 'tfmg:mechanical_crafting/spark_plug' })
  let sparkPlugInter = 'minecraft:brick'
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:spark_plug', 9).withChance(130.0),
  ], sparkPlugInter, [
    event.recipes.createCutting(sparkPlugInter, sparkPlugInter),
    event.recipes.createDeploying(sparkPlugInter, [sparkPlugInter, '#forge:wires/copper']),
    event.recipes.createDeploying(sparkPlugInter, [sparkPlugInter, '#forge:rods/steel']),
    event.recipes.createDeploying(sparkPlugInter, [sparkPlugInter, 'tfmg:screw']),
    event.recipes.createDeploying(sparkPlugInter, [sparkPlugInter, 'tfmg:screwdriver']),
  ]).transitionalItem(sparkPlugInter).loops(9)

  // diesel engine
  event.remove({ id: 'createdieselgenerators:crafting/diesel_engine' })
  let dieselEngineInter = 'tfmg:engine_base'
  event.recipes.create.sequenced_assembly([
		Item.of('createdieselgenerators:diesel_engine').withChance(130.0), // this is the item that will appear in JEI as the result
	], dieselEngineInter, [ // 'create:golden_sheet' is the input
		// pistons
		event.recipes.createDeploying(
      dieselEngineInter,
      [dieselEngineInter, 'createdieselgenerators:engine_piston']
    ),
    // chambers
    event.recipes.createDeploying(
      dieselEngineInter,
      [dieselEngineInter, 'tfmg:engine_chamber']
    ),
    // spark plugs
    event.recipes.createDeploying(
      dieselEngineInter,
      [dieselEngineInter, 'tfmg:spark_plug']
    ),
    // lubricate
    event.recipes.createFilling(
      dieselEngineInter,
      [dieselEngineInter, Fluid.of('tfmg:lubrication_oil', 1000)]
    ),
    // screws
		event.recipes.createDeploying(
      dieselEngineInter,
      [dieselEngineInter, 'tfmg:screw']
    ),
    // brass sheet
    event.recipes.createDeploying(
      dieselEngineInter,
      [dieselEngineInter, '#forge:plates/brass']
    ),
	]).transitionalItem(dieselEngineInter).loops(4)
  event.remove({ id: 'createdieselgenerators:crafting/large_diesel_engine' })
  event.shapeless(
    Item.of('createdieselgenerators:diesel_engine', 1),
    [
      'createdieselgenerators:large_diesel_engine',
    ]
  )
  event.shapeless(
    Item.of('createdieselgenerators:large_diesel_engine', 1),
    [
      'createdieselgenerators:diesel_engine',
    ]
  )

  // gasoline engine
  event.remove({ id: 'tfmg:sequenced_assembly/gasoline_engine' })
  let gasolineEngineInter = 'tfmg:engine_base'
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:gasoline_engine').withChance(130.0),
  ], gasolineEngineInter, [
    // pistons
    event.recipes.createDeploying(
      gasolineEngineInter,
      [gasolineEngineInter, 'createdieselgenerators:engine_piston']
    ),
    // chambers
    event.recipes.createDeploying(
      gasolineEngineInter,
      [gasolineEngineInter, 'tfmg:engine_chamber']
    ),
    // spark plugs
    event.recipes.createDeploying(
      gasolineEngineInter,
      [gasolineEngineInter, 'tfmg:spark_plug']
    ),
    // lubricate
    event.recipes.createFilling(
      gasolineEngineInter,
      [gasolineEngineInter, Fluid.of('tfmg:lubrication_oil', 1000)]
    ),
    // screws
    event.recipes.createDeploying(
      gasolineEngineInter,
      [gasolineEngineInter, 'tfmg:screw']
    ),
    // brass sheet
    event.recipes.createDeploying(
      gasolineEngineInter,
      [gasolineEngineInter, '#forge:plates/steel']
    ),
  ]).transitionalItem(gasolineEngineInter).loops(4)


  // lpg engine
  event.remove({ id: 'tfmg:sequenced_assembly/lpg_engine' })
  let lpgEngineInter = 'tfmg:engine_base'
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:lpg_engine').withChance(130.0),
  ], lpgEngineInter, [
    // lubricate
    event.recipes.createFilling(
      lpgEngineInter,
      [lpgEngineInter, Fluid.of('tfmg:lubrication_oil', 1000)]
    ),
    // pistons
    event.recipes.createDeploying(
      lpgEngineInter,
      [lpgEngineInter, 'createdieselgenerators:engine_piston']
    ),
    // chambers
    event.recipes.createDeploying(
      lpgEngineInter,
      [lpgEngineInter, 'tfmg:engine_chamber']
    ),
    // spark plugs
    event.recipes.createDeploying(
      lpgEngineInter,
      [lpgEngineInter, 'tfmg:spark_plug']
    ),
    // screws
    event.recipes.createDeploying(
      lpgEngineInter,
      [lpgEngineInter, 'tfmg:screw']
    ),
    // brass sheet
    event.recipes.createDeploying(
      lpgEngineInter,
      [lpgEngineInter, '#forge:plates/steel']
    ),
  ]).transitionalItem(lpgEngineInter).loops(4)
});