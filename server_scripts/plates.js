ServerEvents.recipes((event) => {
  [
    'immersiveengineering:crafting/plate_steel_hammering',
    'createloveandwar:pressing/steel_sheet',
    'vintageimprovements:pressing/vanadium_ingot',
    'tfmg:sequenced_assembly/heavy_plate',
    'create:pressing/iron_ingot',
    'hot_iron:iron_plate_recipe',
    'vintageimprovements:pressing/nickel_ingot',
    'vintageimprovements:pressing/constantan_ingot',
    'vintageimprovements:pressing/uranium_ingot',
    'immersiveengineering:crafting/plate_uranium_hammering',
    'immersiveengineering:crafting/plate_constantan_hammering',
    'immersiveengineering:crafting/plate_nickel_hammering',
    'immersiveengineering:crafting/plate_iron_hammering',
  ].forEach(id => {
    event.remove({ id: id })
  })

  for (let metal of global.smithableMetals) {
    let sheetItem = global.metalPlates[metal] || `kubejs:${metal}_sheet`
    event.recipes.create.pressing(sheetItem, global.ingotDictionary[metal])
    event.custom({
      type: "vintageimprovements:hammering",
      hammerBlows: 1,
      ingredients: [
        {
          tag: `forge:ingots/${metal}`
        }
      ],
      results: [
        {
          item: sheetItem
        }
      ]
    })
  }

  for (let metal of global.baseCastableMetals) {
    let sheetItem = global.metalPlates[metal] || `kubejs:${metal}_sheet`

    event.custom({
      type: "vintageimprovements:hammering",
      hammerBlows: 3,
      ingredients: [
        {
          tag: `forge:ingots/${metal}`
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
          tag: `forge:ingots/${metal}`
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