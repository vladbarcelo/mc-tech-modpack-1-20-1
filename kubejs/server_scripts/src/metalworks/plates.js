ServerEvents.recipes((event) => {
  [
    'immersiveengineering:crafting/plate_steel_hammering',
    'createloveandwar:pressing/steel_sheet',
    'vintageimprovements:pressing/vanadium_ingot',
    'tfmg:sequenced_assembly/heavy_plate',
    'create:pressing/iron_ingot',
    'hot_iron:iron_plate_recipe',
    'vintageimprovements:pressing/cast_iron_ingot',
    'vintageimprovements:pressing/nickel_ingot',
    'vintageimprovements:pressing/constantan_ingot',
    'vintageimprovements:pressing/uranium_ingot',
    'createloveandwar:pressing/tungsten_sheet',
    'immersiveengineering:crafting/plate_uranium_hammering',
    'immersiveengineering:crafting/plate_constantan_hammering',
    'immersiveengineering:crafting/plate_nickel_hammering',
    'immersiveengineering:crafting/plate_iron_hammering',
    'immersiveengineering:crafting/plate_silver_hammering',
    'immersiveengineering:crafting/plate_aluminum_hammering',
    'immersiveengineering:crafting/plate_gold_hammering',
    'immersiveengineering:crafting/plate_electrum_hammering',
    'immersiveengineering:crafting/plate_copper_hammering',
    'immersiveengineering:crafting/plate_lead_hammering',
    'vintageimprovements:pressing/palladium_ingot',
    'vintageimprovements:pressing/platinum_ingot',
    'vintageimprovements:pressing/rhodium_ingot',
    'create:pressing/copper_ingot',
    'vintageimprovements:pressing/lead_ingot',
    'createdeco:pressing/zinc_sheet',
    'createaddition:pressing/zinc_ingot',
    'vintageimprovements:pressing/aluminum_ingot',
    'create:pressing/brass_ingot',
    'vintageimprovements:pressing/bronze_ingot',
    'createaddition:pressing/electrum_ingot',
    'vintageimprovements:pressing/silver_ingot',
    'create:pressing/gold_ingot',
    'create:pressing/copper_ingot',
  ].forEach(id => {
    event.remove({ id: id })
  })

  for (let metal of global.smithableMetals) {
    let sheetItem = global.metalPlates[metal] || `kubejs:${metal}_sheet`

    // too brittle
    if (metal !== 'cast_iron') {
      event.recipes.create.pressing(sheetItem, `kubejs:hot_${metal}_ingot`)
      event.shapeless(
        Item.of(sheetItem, 1),
        [
          `kubejs:hot_${metal}_ingot_in_tongs`,
          'immersiveengineering:hammer'
        ]
      ).customIngredientAction(
        'immersiveengineering:hammer',
        'keep_engineering_hammer'
      ).customIngredientAction(`kubejs:hot_${metal}_ingot_in_tongs`, 'keep_tongs');
      event.custom({
        type: "vintageimprovements:hammering",
        hammerBlows: 1,
        ingredients: [
          {
            item: `kubejs:hot_${metal}_ingot`
          }
        ],
        results: [
          {
            item: sheetItem
          }
        ]
      })
    }
  }

  for (let metal of global.baseCastableMetals) {
    let sheetItem = global.metalPlates[metal] || `kubejs:${metal}_sheet`

    event.custom({
      type: "vintageimprovements:hammering",
      hammerBlows: 3,
      ingredients: [
        {
          item: `kubejs:hot_${metal}_ingot`
        }
      ],
      results: [
        {
          item: sheetItem
        }
      ]
    })
  }

  for (let metal of global.hardCastableMetals) {
    let sheetItem = global.metalPlates[metal] || `kubejs:${metal}_sheet`
    
    event.custom({
      type: "vintageimprovements:hammering",
      hammerBlows: 6,
      ingredients: [
        {
          item: `kubejs:hot_${metal}_ingot`
        }
      ],
      results: [
        {
          item: sheetItem
        }
      ]
    })
  }
});