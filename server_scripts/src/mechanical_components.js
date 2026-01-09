// vintageimprovements:vibrating

// vintageimprovements:polishing
//  "speed_limits": 2,

// create_new_age:energising

// vintageimprovements:curving
// "itemAsHead": "",

// vintageimprovements:laser_cutting
// "energy": 2000,
// "maxChargeRate": 50

// vintageimprovements:coiling
// vintageimprovements:vacuumizing

ServerEvents.recipes((event) => {
  // ball bearings
  event.remove({ id: 'createloveandwar:ball_bearings' })

  let ballBearingInter = 'immersiveengineering:stick_steel'
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "forge:rods/steel",
    },
    "loops": 5,
    "results": [
      {
        "item": "createloveandwar:ball_bearings",
      },
    ],
    "sequence": [
      {
        "type": "create:cutting",
        "ingredients": [
          {
            "item": ballBearingInter
          },
        ],
        "results": [
          {
            "item": ballBearingInter
          }
        ]
      },
      {
        "type": "vintageimprovements:polishing",
        "speed_limits": 2,
        "ingredients": [
          {
            "item": ballBearingInter
          },
        ],
        "results": [
          {
            "item": ballBearingInter
          }
        ]
      },
    ],
    "transitionalItem": {
      "item": ballBearingInter
    }
  })

  // iron mechanical component
  event.remove({ id: 'immersiveengineering:crafting/component_iron' })
  event.remove({ id: 'immersiveengineering:blueprint/component_iron' })
  let ironComponentInter = '#forge:plates/iron'
  event.recipes.create.sequenced_assembly([
    Item.of('immersiveengineering:component_iron').withChance(130.0),
  ], ironComponentInter, [
    event.recipes.createDeploying(ironComponentInter, [ironComponentInter, 'steampowered:cast_iron_cogwheel']),
    event.recipes.createDeploying(ironComponentInter, [ironComponentInter, 'vintageimprovements:small_iron_spring']),
    event.recipes.createDeploying(ironComponentInter, [ironComponentInter, '#forge:wires/iron']),
    event.recipes.createDeploying(ironComponentInter, [ironComponentInter, '#forge:plates/iron']),
  ]).transitionalItem(ironComponentInter).loops(1)

  // precision mechanism
  event.remove({ id: 'create:sequenced_assembly/precision_mechanism' })
  let precisionMechanismInter = '#forge:plates/brass'
  event.recipes.create.sequenced_assembly([
    Item.of('create:precision_mechanism').withChance(130.0),
  ], precisionMechanismInter, [
    event.recipes.createDeploying(precisionMechanismInter, [precisionMechanismInter, 'immersiveengineering:component_iron']),
    event.recipes.createDeploying(precisionMechanismInter, [precisionMechanismInter, '#forge:rods/iron']),
    event.recipes.createDeploying(precisionMechanismInter, [precisionMechanismInter, 'vintageimprovements:iron_spring']),
    event.recipes.createFilling(
      precisionMechanismInter,
      [precisionMechanismInter, Fluid.of('tfmg:lubrication_oil', 10)]
    ),
  ]).transitionalItem(precisionMechanismInter).loops(3)

  // steel mechanical component
  event.remove({ id: 'immersiveengineering:crafting/component_steel' })
  event.remove({ id: 'immersiveengineering:blueprint/component_steel' })
  let steelComponentInter = '#forge:plates/steel'
  event.recipes.create.sequenced_assembly([
    Item.of('immersiveengineering:component_steel').withChance(130.0),
  ], steelComponentInter, [
    event.recipes.createDeploying(steelComponentInter, [steelComponentInter, 'tfmg:steel_cogwheel']),
    event.recipes.createDeploying(steelComponentInter, [steelComponentInter, 'createloveandwar:ball_bearings']),
    event.recipes.createDeploying(steelComponentInter, [steelComponentInter, 'vintageimprovements:small_steel_spring']),
    event.recipes.createDeploying(steelComponentInter, [steelComponentInter, 'tfmg:screw']),
    event.recipes.createDeploying(steelComponentInter, [steelComponentInter, 'tfmg:screwdriver']),
    event.recipes.createDeploying(steelComponentInter, [steelComponentInter, '#forge:plates/steel']),
  ]).transitionalItem(steelComponentInter).loops(1)

  // steel mechanism
  event.remove({ id: 'tfmg:sequenced_assembly/steel_mechanism' })
  let steelMechanismInter = '#forge:plates/steel'
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:steel_mechanism').withChance(130.0),
  ], steelMechanismInter, [
    event.recipes.createDeploying(steelMechanismInter, [steelMechanismInter, 'immersiveengineering:component_steel']),
    event.recipes.createDeploying(steelMechanismInter, [steelMechanismInter, '#forge:rods/steel']),
    event.recipes.createDeploying(steelMechanismInter, [steelMechanismInter, 'vintageimprovements:steel_spring']),
    event.recipes.createFilling(
      steelMechanismInter,
      [steelMechanismInter, Fluid.of('tfmg:lubrication_oil', 10)]
    ),
    event.recipes.createDeploying(steelMechanismInter, [steelMechanismInter, 'tfmg:screw']),
    event.recipes.createDeploying(steelMechanismInter, [steelMechanismInter, 'tfmg:screwdriver']),
  ]).transitionalItem(steelMechanismInter).loops(3)

  // hydraulic engine
  event.remove({ id: 'create_sa:hydraulic_engine_recipe' })
  let hydraulicEngineInter = '#forge:plates/copper'
  event.recipes.create.sequenced_assembly([
    Item.of('create_sa:hydraulic_engine').withChance(130.0),
  ], hydraulicEngineInter, [
    event.recipes.createDeploying(hydraulicEngineInter, [hydraulicEngineInter, 'tfmg:steel_mechanism']),
    event.recipes.createDeploying(hydraulicEngineInter, [hydraulicEngineInter, 'create:mechanical_pump']),
    event.recipes.createFilling(
      hydraulicEngineInter,
      [hydraulicEngineInter, Fluid.of('minecraft:water', 50)]
    ),
    event.recipes.createDeploying(hydraulicEngineInter, [hydraulicEngineInter, 'create:piston_extension_pole']),
    event.recipes.createPressing(hydraulicEngineInter, hydraulicEngineInter),
    event.recipes.createDeploying(hydraulicEngineInter, [hydraulicEngineInter, 'tfmg:screw']),
    event.recipes.createDeploying(hydraulicEngineInter, [hydraulicEngineInter, 'tfmg:screwdriver']),
  ]).transitionalItem(hydraulicEngineInter).loops(3)
});