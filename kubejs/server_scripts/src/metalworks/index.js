ServerEvents.recipes((event) => {
  for (let metal of global.allMetals) {
    let isSmithable = global.isSmithable(metal)
    let isBaseCastable = global.isBaseCastable(metal)

    let moltenMetal = global.moltenMaterialFluids[metal]


    // hot_%metal%_ingot_from_ingot_in_tongs.json
    event.shapeless(
      Item.of(`kubejs:hot_${metal}_ingot`, 1),
      [`kubejs:hot_${metal}_ingot_in_tongs`]
    ).customIngredientAction(`kubejs:hot_${metal}_ingot_in_tongs`, 'keep_tongs');
    // hot_%metal%_ingot_in_tongs.json
    event.custom({
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "item": "hot_iron:smithing_tongs"
        }
      ],
      "result": {
        "item": `kubejs:hot_${metal}_ingot_in_tongs`,
        "count": 1,
        "nbt": `{"ItemHeld":"kubejs:hot_${metal}_ingot"}`
      }
    });
    // hot_%metal%_ingot_from_ingot_in_tongs.json
    event.shapeless(
      Item.of(global.ingotDictionary[metal], 1),
      [`kubejs:${metal}_ingot_in_tongs`]
    ).customIngredientAction(`kubejs:${metal}_ingot_in_tongs`, 'keep_tongs');
    // %metal%_ingot_in_tongs.json
    event.custom({
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": global.ingotDictionary[metal]
        },
        {
          "item": "hot_iron:smithing_tongs"
        }
      ],
      "result": {
        "item": `kubejs:${metal}_ingot_in_tongs`,
        "count": 1,
        "nbt": `{"ItemHeld":"${global.ingotDictionary[metal]}"}`
      }
    })
    

    
    // 1. casting
    // blocks
    event.recipes.createmetallurgy.casting_in_basin(Item.of(global.metalBlocks[metal]), Fluid.of(global.moltenMaterialFluids[metal], 810), 320)
    event.custom({
      type: "tconstruct:casting_basin",
      cooling_time: 180,
      fluid: {
        amount: 810,
        fluid: moltenMetal
      },
      result: {
        tag: `forge:storage_blocks/${metal}`
      }
    })
    // ingots, results in hot ingot
    event.recipes.createmetallurgy.casting_in_table(`kubejs:hot_${metal}_ingot`, [Fluid.of(global.moltenMaterialFluids[metal], 90), `createmetallurgy:graphite_ingot_mold`], 120, false)
    event.recipes.createmetallurgy.casting_in_table(`kubejs:hot_${metal}_ingot`, [Fluid.of(global.moltenMaterialFluids[metal], 90), 'tconstruct:ingot_sand_cast'], 120, true)
    event.recipes.createmetallurgy.casting_in_table(`kubejs:hot_${metal}_ingot`, [Fluid.of(global.moltenMaterialFluids[metal], 90), 'tconstruct:ingot_red_sand_cast'], 120, true)
    event.custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/single_use/ingot"
      },
      cast_consumed: true,
      cooling_time: 60,
      fluid: {
        amount: 90,
        fluid: moltenMetal
      },
      result: {
        item: `kubejs:hot_${metal}_ingot`
      }
    })

    // 2. cooling hot item via splashing results in ingot
    event.recipes.create.splashing(global.ingotDictionary[metal], `kubejs:hot_${metal}_ingot`)

    // rod
    if (global.metalRods[metal]) {
      event.recipes.createmetallurgy.casting_in_table(global.metalRods[metal], [Fluid.of(global.moltenMaterialFluids[metal], 45), 'tconstruct:rod_sand_cast'], 120, true)
      event.recipes.createmetallurgy.casting_in_table(global.metalRods[metal], [Fluid.of(global.moltenMaterialFluids[metal], 45), 'tconstruct:rod_red_sand_cast'], 120, true)
      event.custom({
        type: "tconstruct:casting_table",
        cast: {
          tag: "tconstruct:casts/single_use/rod"
        },
        cast_consumed: true,
        conditions: [
          {
            type: "mantle:tag_filled",
            tag: `forge:rods/${metal}`
          }
        ],
        cooling_time: 43,
        fluid: {
          amount: 45,
          fluid: moltenMetal
        },
        result: {
          tag: `forge:rods/${metal}`
        }
      })
    }
    // plate
    if (global.metalPlates[metal]) {
      event.recipes.createmetallurgy.casting_in_table(global.metalPlates[metal], [Fluid.of(global.moltenMaterialFluids[metal], 90), 'createmetallurgy:graphite_plate_mold'], 120, false)
      event.recipes.createmetallurgy.casting_in_table(global.metalPlates[metal], [Fluid.of(global.moltenMaterialFluids[metal], 90), 'tconstruct:plate_sand_cast'], 120, true)
      event.recipes.createmetallurgy.casting_in_table(global.metalPlates[metal], [Fluid.of(global.moltenMaterialFluids[metal], 90), 'tconstruct:plate_red_sand_cast'], 120, true)
      event.custom({
        type: "tconstruct:casting_table",
        cast: {
          tag: "tconstruct:casts/single_use/plate"
        },
        cast_consumed: true,
        conditions: [
          {
            type: "mantle:tag_filled",
            tag: `forge:plates/${metal}`
          }
        ],
        cooling_time: 60,
        fluid: {
          amount: 90,
          fluid: moltenMetal
        },
        result: {
          tag: `forge:plates/${metal}`
        }
      })
    }

    for (let part of global.toolParts) {
      // 1. casting results in hot part
      if (global.tConstructToolParts[part]) {
        event.custom({
          type: "tconstruct:casting_table",
          cast: {
            tag: `tconstruct:casts/single_use/${global.tConstructToolParts[part]}`
          },
          cast_consumed: true,
          cooling_time: 57,
          fluid: {
            amount: 90,
            fluid: global.moltenMaterialFluids[metal]
          },
          result: `kubejs:hot_${metal}_${part}`,
          switch_slots: true
        })
      } else {
        event.custom({
          type: "tconstruct:casting_table",
          cast: {
            item: `kubejs:${part}_sand_cast`
          },
          cast_consumed: true,
          cooling_time: 57,
          fluid: {
            amount: 90,
            fluid: global.moltenMaterialFluids[metal]
          },
          result: `kubejs:hot_${metal}_${part}`,
          switch_slots: true
        })
        event.custom({
          type: "tconstruct:casting_table",
          cast: {
            item: `kubejs:${part}_red_sand_cast`
          },
          cast_consumed: true,
          cooling_time: 57,
          fluid: {
            amount: 90,
            fluid: global.moltenMaterialFluids[metal]
          },
          result: `kubejs:hot_${metal}_${part}`,
          switch_slots: true
        })
      }

      // 2. splashing results in rough part
      event.recipes.create.splashing(`kubejs:rough_${metal}_${part}`, `kubejs:hot_${metal}_${part}`)

      // 3. polishing via vintageimprovements, available for all metals
      if (global.metalHasTConstructItems[metal] && global.tConstructToolParts[part]) {
        event.shapeless(
          Item.of(`tconstruct:${global.tConstructToolParts[part]}`, `{"Material":"${global.tConstructMetals[metal]}"}`),
          [`kubejs:polished_${metal}_${part}_in_tongs`]
        ).customIngredientAction(`kubejs:polished_${metal}_${part}_in_tongs`, 'keep_tongs');
        event.custom({
          type: "vintageimprovements:polishing",
          speedLimits: isSmithable ? 1 : isBaseCastable ? 2 : 3,
          ingredients: [
            {
              item: `kubejs:rough_${metal}_${part}`
            }
          ],
          results: [
            {
              item: `tconstruct:${global.tConstructToolParts[part]}`,
              count: 1,
              nbt: {"Material":`${global.tConstructMetals[metal]}`}
            }
          ],
          processingTime: 20
        })
      } else {
        event.shapeless(
          Item.of(`kubejs:${metal}_${part}`, 1),
          [`kubejs:polished_${metal}_${part}_in_tongs`]
        ).customIngredientAction(`kubejs:polished_${metal}_${part}_in_tongs`, 'keep_tongs');
        event.custom({
          type: "vintageimprovements:polishing",
          speedLimits: isSmithable ? 1 : isBaseCastable ? 2 : 3,
          ingredients: [
            {
              item: `kubejs:rough_${metal}_${part}`
            }
          ],
          results: [
            {
              item: `kubejs:${metal}_${part}`,
            }
          ],
          processingTime: 20
        })

        let resultTool = global.toolItems[metal][part] || `kubejs:${metal}_${part.split('_')[0]}`
        event.shaped(
          Item.of(resultTool, 1),
          [
            ' A',
            'B ',
          ],
          {
            A: `kubejs:${metal}_${part}`,
            B: 'hot_iron:tool_handle',
          }
        )
      }
    }
  }
});