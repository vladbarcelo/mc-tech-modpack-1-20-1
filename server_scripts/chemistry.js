ServerEvents.recipes((event) => {
  // plastic
  event.remove({ id: 'better_rubber:smelting/raw_plastic_from_rubber_bar' })

  // ash
  event.remove({ id: 'regions_unexplored:ash' })
  event.shapeless(
    Item.of('regions_unexplored:ash', 1),
    [
      '#forge:dusts/ash',
      '#forge:dusts/ash',
      '#forge:dusts/ash',
      '#forge:dusts/ash',
    ]
  );
  event.shapeless(
    Item.of('supplementaries:ash', 4),
    [
      'regions_unexplored:ash',
    ]
  );
  event.recipes.create.crushing('regions_unexplored:ash', 'regions_unexplored:volcanic_ash')
  event.custom({
    "type":"vintageimprovements:vibrating",
    "ingredients": [ 
      {
        "item": "regions_unexplored:ashen_dirt"
      }
    ],
    "results": [
      {
        "item": "minecraft:dirt",
        "count": 1
      },
      {
        "item": "supplementaries:ash",
        "count": 2
      }
    ],
    "processingTime": 300
  })

  // borosilicate glass
  event.custom({
    "type": "immersiveengineering:alloy",
    "input0": {
      "item": "minecraft:sand"
    },
    "input1": {
      "tag": "forge:dusts/ash"
    },
    "result": {
      "base_ingredient": {
        "item": "kubejs:borosilicate_glass"
      },
      "count": 1
    },
    "time": 200
  });

  // creosote
  event.recipes.create.mixing(Fluid.of('immersiveengineering:creosote'), Fluid.of('tfmg:creosote'))
  event.recipes.create.mixing(Fluid.of('tfmg:creosote'), Fluid.of('immersiveengineering:creosote'))

  // phenolic resin
  let phenolicMixtureInter = 'minecraft:bucket'
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:creosote_acetaldehyde_mixture_bucket').withChance(130.0),
  ], phenolicMixtureInter, [
    event.recipes.createFilling(phenolicMixtureInter, [phenolicMixtureInter, Fluid.of(
      'minecraft:water',
      250
    )]),
    event.recipes.createFilling(phenolicMixtureInter, [phenolicMixtureInter, Fluid.of(
      'immersiveengineering:acetaldehyde',
      500
    )]),
    event.recipes.createFilling(phenolicMixtureInter, [phenolicMixtureInter, Fluid.of(
      'immersiveengineering:creosote',
      300
    )]),
    event.recipes.createFilling(phenolicMixtureInter, [phenolicMixtureInter, Fluid.of(
      'tfmg:sulfuric_acid',
      50
    )]),
  ]).transitionalItem(phenolicMixtureInter).loops(1)
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:creosote_acetaldehyde_mixture_bucket').withChance(130.0),
  ], phenolicMixtureInter, [
    event.recipes.createFilling(phenolicMixtureInter, [phenolicMixtureInter, Fluid.of(
      'minecraft:water',
      250
    )]),
    event.recipes.createFilling(phenolicMixtureInter, [phenolicMixtureInter, Fluid.of(
      'immersiveengineering:acetaldehyde',
      500
    )]),
    event.recipes.createFilling(phenolicMixtureInter, [phenolicMixtureInter, Fluid.of(
      'tfmg:creosote',
      300
    )]),
    event.recipes.createFilling(phenolicMixtureInter, [phenolicMixtureInter, Fluid.of(
      'tfmg:sulfuric_acid',
      50
    )]),
  ]).transitionalItem(phenolicMixtureInter).loops(1)
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [
        {
            "fluid": 'kubejs:creosote_acetaldehyde_mixture',
            "amount": 1000
        }
    ],
    "results": [
      {
        "fluid": "minecraft:water",
        "amount": 136
      },
      {
        "fluid": "immersiveengineering:phenolic_resin",
        "amount": 500
      },
    ],
    "heatRequirement": "heated"
  })
  event.recipes.tfmg.distillation(Fluid.of("kubejs:creosote_acetaldehyde_mixture", 1000), [Fluid.of("minecraft:water", 136), Fluid.of("immersiveengineering:phenolic_resin", 500)])
  
  // acetaldehyde
  event.recipes.create.mixing(
    [
      Fluid.of(
        'kubejs:acetaldehyde_vapor',
        900
      ),
    ],
    [
      Fluid.of(
        'immersiveengineering:ethanol',
        1000
      ),
      Ingredient.of(
        '#forge:dusts/silver',
        1
      ),
    ]
  ).heated();
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [
        {
            "fluid": 'kubejs:acetaldehyde_vapor',
            "amount": 1000
        }
    ],
    "results": [
      {
        "fluid": "immersiveengineering:acetaldehyde",
        "amount": 600
      },
    ],
    "heatRequirement": "heated"
  })
  event.recipes.tfmg.distillation(Fluid.of("kubejs:acetaldehyde_vapor", 1000), [Fluid.of("immersiveengineering:acetaldehyde", 600)])

  // graphite
  event.remove({ id: 'immersiveengineering:smelting/ingot_hop_graphite_from_blasting' })
  event.remove({ id: 'immersiveengineering:smelting/ingot_hop_graphite' })
  event.remove({ id: 'createmetallurgy:graphite' })
  event.recipes.create.mixing(
    [
      Item.of('immersiveengineering:ingot_hop_graphite', 1)
    ],
    [
      Ingredient.of('#forge:dusts/hop_graphite', 1)
    ]
  ).heated()
})