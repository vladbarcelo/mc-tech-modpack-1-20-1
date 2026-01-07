ServerEvents.recipes((event) => {
  // remove recipes

  // brass
  event.remove({ id: 'hot_iron:brass_ingot_in_tongs_heating' })
  event.blasting('kubejs:hot_brass_ingot', '#forge:ingots/brass')

  // electrum
  event.remove({ id: 'hot_iron:electrum_ingot_in_tongs_heating' })
  event.blasting('kubejs:hot_electrum_ingot', '#forge:ingots/electrum')

  // silver
  event.remove({ id: 'hot_iron:silver_ingot_in_tongs_heating' })
  event.blasting('kubejs:hot_silver_ingot', '#forge:ingots/silver')

  // gold
  event.remove({ id: 'hot_iron:gold_ingot_in_tongs_heating' })
  event.blasting('kubejs:hot_gold_ingot', '#forge:ingots/gold')

  // copper
  event.remove({ id: 'hot_iron:copper_ingot_in_tongs_heating' })
  event.blasting('kubejs:hot_copper_ingot', '#forge:ingots/copper')

  // cast iron
  event.remove({ id: 'hot_iron:cast_iron_ingot_in_tongs_heating' })
  event.blasting('kubejs:hot_cast_iron_ingot', '#forge:ingots/cast_iron')

  // iron
  event.remove({ id: 'hot_iron:hot_iron_ingot_from_ingot_in_tongs' })
  event.remove({ id: 'hot_iron:iron_ingot_in_tongs'})
  event.remove({ id: 'hot_iron:hot_iron_ingot_in_tongs'})
  event.remove({ id: 'hot_iron:iron_ingot_in_tongs_heating'})
  event.remove({ id: 'hot_iron:iron_ingot_from_ingot_in_tongs' })

  event.remove({ id: 'hot_iron:iron_armor_strap' })
  event.remove({ id: 'minecraft:iron_leggings' })
  event.remove({ id: 'minecraft:iron_chestplate' })
  event.remove({ id: 'minecraft:iron_boots' })
  event.remove({ id: 'minecraft:iron_helmet' })

  // gold
  event.remove({ id: 'mca:rose_gold_ingot_blasting' })
  event.remove({ id: 'mca:rose_gold_ingot_smelting' })
  event.remove({ id: 'mca:rose_gold_block' })

  // graphite
  event.remove({ id: 'createmetallurgy:pressing/graphite_blank_mold' })
  event.recipes.create.pressing('createmetallurgy:graphite_blank_mold', '#forge:ingots/hop_graphite')

  // tongs, anvil and hammer
  event.remove({ id: 'hot_iron:smithing_tongs_recipe' })
  event.shapeless(
    Item.of('hot_iron:smithing_tongs', 1),
    [
      '#forge:rods/cast_iron',
      '#forge:rods/cast_iron',
    ]
  );
  event.remove({ id: 'hot_iron:smithing_anvil_recipe' })
  event.shaped(
    Item.of('hot_iron:smithing_anvil', 1),
    [
      'ABA',
      ' A ',
      'CCC'
    ],
    {
      A: '#forge:ingots/cast_iron',
      B: '#forge:storage_blocks/cast_iron',
      C: '#forge:treated_wood_slab'
    }
  )
  event.remove({ id: 'hot_iron:smithing_hammer_recipe' })
  event.shaped(
    Item.of('hot_iron:smithing_hammer', 1),
    [
      ' AB',
      ' CA',
      'C  ',
    ],
    {
      A: '#forge:ingots/cast_iron',
      B: '#forge:strings',
      C: 'hot_iron:tool_handle',
    }
  )


  for (let part of global.toolParts) {
    let partTool = part.split('_')[0]

    event.remove({ id: `minecraft:wooden_${partTool}` })

    event.remove({ id: `hot_iron:hot_iron_${part}_cooling`})
    event.remove({ id: `hot_iron:iron_${part}_polishing`})
    event.remove({ id: `hot_iron:hot_iron_${part}_recipe`})
    event.remove({ id: `hot_iron:hot_iron_${part}_forging`})
    event.remove({ id: `hot_iron:polished_iron_${part}_heating`})
    event.remove({ id: `hot_iron:iron_${part}_heating`})
    event.remove({ id: `minecraft:iron_${partTool}`})

    event.remove({ id: `hot_iron:golden_${part}_forging`})
    event.remove({ id: `hot_iron:golden_${part}_polishing`})
    event.remove({ id: `minecraft:golden_${partTool}` })

    event.remove({ id: `create_sa:brass_${partTool}_recipe` })

    event.remove({ id: `create_sa:zinc_${partTool}_recipe` })

    event.remove({ id: `create_sa:copper_${partTool}_recipe` })

    event.remove({ id: `tfmg:crafting/tools/steel_${partTool}` })
    event.remove({ id: `immersiveengineering:crafting/${partTool}_steel` })

    event.remove({ id: `tfmg:crafting/tools/aluminum_${partTool}` })

    event.remove({ id: `tfmg:crafting/tools/lead_${partTool}` })

    event.remove({ id: `createloveandwar:tungsten_${partTool}` })

    event.stonecutting(`kubejs:graphite_${part}_mold`, 'createmetallurgy:graphite_blank_mold')
  }
  
  // diamond
  // hot_iron:hot_diamond_pickaxe_head_cooling
  // hot_iron:diamond_pickaxe_head_polishing
  // hot_iron:hot_diamond_pickaxe_head_recipe
  // hot_iron:hot_diamond_pickaxe_head_forging

  // tongs
  Ingredient.registerCustomIngredientAction("keep_tongs", () => {
    return Item.of('hot_iron:smithing_tongs', 1);
  })

  for (let metal of global.smithableMetals) {
    // hot_%metal%_ingot_from_ingot_in_tongs.json
    event.custom({
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": `kubejs:hot_${metal}_ingot_in_tongs`
        }
      ],
      "result": {
        "item": `kubejs:hot_${metal}_ingot`,
        "count": 1
      }
    });
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
    // %metal%_ingot_from_ingot_in_tongs.json
    event.custom({
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": `kubejs:${metal}_ingot_in_tongs`
        }
      ],
      "result": {
        "item": global.ingotDictionary[metal],
        "count": 1
      }
    });
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

    event.recipes.createmetallurgy.casting_in_basin(Item.of(global.metalBlocks[metal]), Fluid.of(global.moltenMetals[metal], 810), 320)

    // armor
    event.shaped(
      Item.of(`kubejs:${metal}_strap`, 3),
      [
        ' A ',
        'BAB',
        ' A ',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: '#forge:leather'
      }
    );
    event.shaped(
      Item.of(global.armorItems[metal].helmet || `kubejs:${metal}_helmet`, 1),
      [
        '   ',
        'AAA',
        'B B',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].chestplate || `kubejs:${metal}_chestplate`, 1),
      [
        'B B',
        'BAB',
        'AAA',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].leggings || `kubejs:${metal}_leggings`, 1),
      [
        'AAA',
        'B B',
        'B B',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].boots || `kubejs:${metal}_boots`, 1),
      [
        '   ',
        'B B',
        'A A',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )

    // TOOL RECIPES
    for (let part of global.toolParts) {
      let resultTool = global.toolItems[metal][part] || `kubejs:${metal}_${part.split('_')[0]}`

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
            fluid: global.moltenMetals[metal]
          },
          result: `kubejs:rough_${metal}_${part}`,
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
            fluid: global.moltenMetals[metal]
          },
          result: `kubejs:rough_${metal}_${part}`,
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
            fluid: global.moltenMetals[metal]
          },
          result: `kubejs:rough_${metal}_${part}`,
          switch_slots: true
        })
      }

      if (global.metalHasTConstructItems[metal] && global.tConstructToolParts[part]) {
        event.shapeless(
          Item.of(`tconstruct:${global.tConstructToolParts[part]}`, `{"Material":"${global.tConstructMetals[metal]}"}`),
          [`kubejs:polished_${metal}_${part}_in_tongs`]
        ).customIngredientAction(`kubejs:polished_${metal}_${part}_in_tongs`, 'keep_tongs');
        event.custom({
          type: "vintageimprovements:polishing",
          speedLimits: 1,
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
          speedLimits: 1,
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
      event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "pattern": [
          " a",
          "b "
        ],
        "key": {
          "a": {
            "item": `kubejs:hot_${metal}_${part}`
          },
          "b": {
            "item": "hot_iron:smithing_tongs"
          }
        },
        "result": {
          "item": `kubejs:hot_${metal}_${part}_in_tongs`,
          "count": 1,
          "nbt": `{"ItemHeld":"kubejs:hot_${metal}_${part}"}`
        }
      });
    }
  }

  // metallurgy

  // borosilicate glass
  event.recipes.createmetallurgy.casting_in_basin(Item.of('kubejs:borosilicate_glass', 1), Fluid.of('kubejs:molten_borosilicate_glass', 810), 320)
  
  // foundry lid
  event.remove({ id: 'createmetallurgy:glassed_foundry_lid' })
  event.shaped(
    Item.of('createmetallurgy:glassed_foundry_lid', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'tfmg:fireproof_brick',
      B: 'kubejs:borosilicate_glass',
    }
  )

  // spout
  event.remove({ id: 'create:crafting/kinetics/spout' })
  event.shaped(
    Item.of('create:spout', 1),
    [
      'AAA',
      'ABA',
      'ACA'
    ],
    {
      A: '#forge:plates/copper',
      B: 'createmetallurgy:glassed_foundry_lid',
      C: 'create:fluid_pipe'
    }
  )

  event.remove({
    id: 'createlowheated:basic_burner'
  })
  event.shaped(
    Item.of('createlowheated:basic_burner', 1),
    [
      'A A',
      'AAA',
      'A A'
    ],
    {
      A: 'tconstruct:seared_brick',
    }
  )

  event.remove({
    id: 'createmetallurgy:foundry_basin'
  })
  event.shaped(
    Item.of('createmetallurgy:foundry_basin', 1),
    [
      'A A',
      'ABA',
      'AAA'
    ],
    {
      A: 'tconstruct:seared_brick',
      B: 'morebuckets:ceramic_bucket'
    }
  )

  event.remove({
    id: 'createmetallurgy:foundry_lid'
  })
  event.shaped(
    Item.of('createmetallurgy:foundry_lid', 1),
    [
      'AAA',
      'A A'
    ],
    {
      A: 'tconstruct:seared_brick',
    }
  )
  
  // pipes

  // copper
  event.remove({ id: 'create:crafting/kinetics/fluid_pipe' })
  event.remove({ id: 'create:crafting/kinetics/fluid_pipe_vertical' })
  event.shaped(
    Item.of('create:fluid_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/copper',
      B: 'tfmg:fireproof_brick',
    }
  )

  // steel
  event.remove({ id: 'tfmg:crafting/pipes/steel_pipe_horizontal' })
  event.remove({ id: 'tfmg:crafting/pipes/steel_pipe_vertical' })
  event.shaped(
    Item.of('tfmg:steel_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/steel',
      B: 'tfmg:fireproof_brick',
    }
  )

  // cast iron
  event.remove({ id: 'tfmg:crafting/pipes/cast_iron_pipe_horizontal' })
  event.remove({ id: 'tfmg:crafting/pipes/cast_iron_pipe_vertical' })
  event.shaped(
    Item.of('tfmg:cast_iron_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/cast_iron',
      B: 'tfmg:fireproof_brick',
    }
  )

  // brass
  event.remove({ id: 'tfmg:crafting/pipes/brass_pipe_horizontal' })
  event.remove({ id: 'tfmg:crafting/pipes/brass_pipe_vertical' })
  event.shaped(
    Item.of('tfmg:brass_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/brass',
      B: 'tfmg:fireproof_brick',
    }
  )

  // aluminum
  event.remove({ id: 'tfmg:crafting/pipes/aluminum_pipe_horizontal' })
  event.remove({ id: 'tfmg:crafting/pipes/aluminum_pipe_vertical' })
  event.shaped(
    Item.of('tfmg:aluminum_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/aluminum',
      B: 'tfmg:fireproof_brick',
    }
  )

  // casting
  for (let metal of global.castableMetals) {
    let blockItem = global.metalBlocks[metal] || `kubejs:${metal}_block`

    event.recipes.createmetallurgy.casting_in_basin(Item.of(blockItem, 1), Fluid.of(global.moltenMetals[metal], 810), 320)
    // ingot
    event.recipes.createmetallurgy.casting_in_table(global.ingotDictionary[metal], [Fluid.of(global.moltenMetals[metal], 90), 'tconstruct:ingot_sand_cast'], 120, true)
    event.recipes.createmetallurgy.casting_in_table(global.ingotDictionary[metal], [Fluid.of(global.moltenMetals[metal], 90), 'tconstruct:ingot_red_sand_cast'], 120, true)
    // rod
    if (global.metalRods[metal]) {
      event.recipes.createmetallurgy.casting_in_table(global.metalRods[metal], [Fluid.of(global.moltenMetals[metal], 45), 'tconstruct:rod_sand_cast'], 120, true)
      event.recipes.createmetallurgy.casting_in_table(global.metalRods[metal], [Fluid.of(global.moltenMetals[metal], 45), 'tconstruct:rod_red_sand_cast'], 120, true)
    }
    // plate
    if (global.metalPlates[metal]) {
      event.recipes.createmetallurgy.casting_in_table(global.metalPlates[metal], [Fluid.of(global.moltenMetals[metal], 90), 'tconstruct:plate_sand_cast'], 120, true)
      event.recipes.createmetallurgy.casting_in_table(global.metalPlates[metal], [Fluid.of(global.moltenMetals[metal], 90), 'tconstruct:plate_red_sand_cast'], 120, true)
    }

    event.shaped(
      Item.of(`kubejs:${metal}_strap`, 3),
      [
        ' A ',
        'BAB',
        ' A ',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: '#forge:leather'
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].helmet || `kubejs:${metal}_helmet`, 1),
      [
        '   ',
        'AAA',
        'B B',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].chestplate || `kubejs:${metal}_chestplate`, 1),
      [
        'B B',
        'BAB',
        'AAA',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].leggings || `kubejs:${metal}_leggings`, 1),
      [
        'AAA',
        'B B',
        'B B',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].boots || `kubejs:${metal}_boots`, 1),
      [
        '   ',
        'B B',
        'A A',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )

    for (let part of global.toolParts) {
      event.recipes.createmetallurgy.casting_in_table(`kubejs:rough_${metal}_${part}`, [Fluid.of(global.moltenMetals[metal], 120), `kubejs:graphite_${part}_mold`], 90, false)
      event.recipes.createmetallurgy.casting_in_table(`kubejs:rough_${metal}_${part}`, [Fluid.of(global.moltenMetals[metal], 120), global.tConstructToolParts[part] ? `tconstruct:${global.tConstructToolParts[part]}_sand_cast` : `kubejs:${part}_sand_cast`], 90, true)
      event.recipes.createmetallurgy.casting_in_table(`kubejs:rough_${metal}_${part}`, [Fluid.of(global.moltenMetals[metal], 120), global.tConstructToolParts[part] ? `tconstruct:${global.tConstructToolParts[part]}_red_sand_cast` : `kubejs:${part}_red_sand_cast`], 90, true)
      
      if (global.metalHasTConstructItems[metal] && global.tConstructToolParts[part]) {
        event.custom({
          type: "vintageimprovements:polishing",
          speedLimits: global.baseCastableMetals.indexOf(metal) > -1 ? 2 : 3,
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
        event.custom({
          type: "vintageimprovements:polishing",
          speedLimits: global.baseCastableMetals.indexOf(metal) > -1 ? 2 : 3,
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

ServerEvents.tags('item', event => {
  for (let metal of global.smithableMetals) {
    event.add('materials/hot', `kubejs:hot_${metal}_ingot`)
    event.add('hot_iron:anvil_placable_by_clicking', `kubejs:hot_${metal}_ingot_in_tongs`)

    for (let part of global.toolParts) {
      event.add('materials/hot', `kubejs:hot_${metal}_${part}`)
    }
  }
});