// TODO: add rolling recipes

ServerEvents.recipes((event) => {
  for (let metal of global.allMetals) {
    event.remove({ id: `createaddition:rolling/${metal}_ingot` })
  }

  for (let metal of [].concat(global.smithableMetals, global.baseCastableMetals)) {
    if (!global.metalRods[metal]) continue;

    event.custom({
      "type":"vintageimprovements:turning",
      "ingredients": [
        {
          "tag": `forge:ingots/${metal}`
        }
      ],
      "results": [
        {
          "item": global.metalRods[metal],
          "count": 2
        }
      ]
    })
  }

  // iron
  event.remove({ id: 'immersiveengineering:crafting/stick_iron' })
  
  // steel
  event.remove({ id: 'immersiveengineering:crafting/stick_steel' })
  
  // NO IE METAL PRESS BELOW, CASTING ONLY

  // platinum
  event.remove({ id: 'vintageimprovements:rolling/platinum_ingot' })
  event.remove({ id: 'immersiveengineering:metalpress/rod_platinum' })
  event.recipes.createmetallurgy.casting_in_table(
    'vintageimprovements:platinum_rod',
    [
      Fluid.of(global.moltenMetals.platinum, 45),
      'createmetallurgy:graphite_rod_mold',
    ],
    30,
    true
  )

  // vanadium
  event.remove({ id: 'vintageimprovements:rolling/vanadium_ingot' })
  event.recipes.createmetallurgy.casting_in_table(
    'vintageimprovements:vanadium_rod',
    [
      Fluid.of(global.moltenMetals.vanadium, 45),
      'createmetallurgy:graphite_rod_mold',
    ],
    30,
    true
  )

  // rhodium
  event.remove({ id: 'vintageimprovements:rolling/rhodium_ingot' })
  event.recipes.createmetallurgy.casting_in_table(
    'vintageimprovements:rhodium_rod',
    [
      Fluid.of(global.moltenMetals.rhodium, 45),
      'createmetallurgy:graphite_rod_mold',
    ],
    30,
    true
  )
});