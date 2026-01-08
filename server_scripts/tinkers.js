ServerEvents.recipes((event) => {
  for (let id of [
    // casting
    'tconstruct:tools/parts/casting/pick_head_sand_cast',
    'tconstruct:tools/parts/casting/small_axe_head_sand_cast',
    'tconstruct:tools/parts/casting/small_blade_sand_cast',
    'tconstruct:smeltery/seared/melter',
    'tconstruct:smeltery/seared/ingot_gauge',
    'tconstruct:smeltery/seared/fuel_gauge',
    'tconstruct:smeltery/seared/seared_brick',
    'tconstruct:smeltery/casting/seared/smeltery_controller',
    'tconstruct:smeltery/seared/drain',
    'tconstruct:smeltery/seared/drain_retextured',
    'tconstruct:smeltery/seared/fuel_tank',
    // entity melting
    'tconstruct:smeltery/entity_melting/bee',
    'tconstruct:smeltery/entity_melting/blaze',
    'tconstruct:smeltery/entity_melting/creeper',
    'tconstruct:smeltery/entity_melting/drowned',
    'tconstruct:smeltery/entity_melting/ender',
    'tconstruct:smeltery/entity_melting/ender_slime',
    'tconstruct:smeltery/entity_melting/frog',
    'tconstruct:smeltery/entity_melting/guardian',
    'tconstruct:smeltery/entity_melting/illager',
    // 'tconstruct:smeltery/entity_melting/iron_golem'
    'tconstruct:smeltery/entity_melting/magma_cube',
    'tconstruct:smeltery/entity_melting/meat_soup',
    'tconstruct:smeltery/entity_melting/night_vision',
    'tconstruct:smeltery/entity_melting/phantom',
    'tconstruct:smeltery/entity_melting/piglin',
    'tconstruct:smeltery/entity_melting/regeneration',
    'tconstruct:smeltery/entity_melting/shulker',
    'tconstruct:smeltery/entity_melting/silverfish',
    'tconstruct:smeltery/entity_melting/skeletons',
    'tconstruct:smeltery/entity_melting/sky_slime',
    'tconstruct:smeltery/entity_melting/slime',
    'tconstruct:smeltery/entity_melting/snow_golem',
    'tconstruct:smeltery/entity_melting/spider',
    'tconstruct:smeltery/entity_melting/strength',
    'tconstruct:smeltery/entity_melting/strider',
    'tconstruct:smeltery/entity_melting/swiftness',
    'tconstruct:smeltery/entity_melting/terracube',
    'tconstruct:smeltery/entity_melting/turtle',
    'tconstruct:smeltery/entity_melting/villager',
    'tconstruct:smeltery/entity_melting/water_breathing',
    'tconstruct:smeltery/entity_melting/wither',
    'tconstruct:smeltery/entity_melting/zombie',
  ]) {
    event.remove({ id: id });
  }

  // tconstruct
  event.shaped(
    Item.of('tconstruct:seared_fuel_tank', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#tconstruct:smeltery_bricks',
      B: 'kubejs:borosilicate_glass',
    }
  )

  // smeltery controller crafting
  event.shaped(
    Item.of('tconstruct:smeltery_controller', 1),
    [
      'AAA',
      'ABC',
      'AAA'
    ],
    {
      A: '#tconstruct:smeltery_bricks',
      B: 'kubejs:borosilicate_glass',
      C: 'createdeco:copper_bars'
    }
  )

  // new drains
  event.shaped(
    Item.of('tconstruct:seared_drain', 1),
    [
      'A A',
      'B B',
      'A A'
    ],
    {
      A: 'tconstruct:seared_brick',
      B: 'create:fluid_pipe',
    }
  )
  event.shaped(
    Item.of('tconstruct:seared_drain', 1),
    [
      'ABA',
    ],
    {
      A: 'create:fluid_pipe',
      B: '#tconstruct:smeltery_bricks',
    }
  )

  // grout
  event.blasting('tconstruct:seared_brick', 'tconstruct:grout', 0.35, 600)

  // compat
  for (let metal of global.allMetals) {
    let moltenMetal = global.moltenMetals[metal]

    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/ingot_sand_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/ingot_gold_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/wire_sand_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/wire_gold_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/nugget_gold_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/plate_gold_cast` })

    // ingot
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
    // rod
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
    // plate
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
    // block
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

    // melting

    if (metal === 'iron') continue;
    
    let metalMaterial = metal === 'cast_iron' ? 'iron' : metal

    event.custom({
      type: "tconstruct:melting",
      ingredient: {
        tag: `forge:ingots/${metal}`
      },
      result: {
        amount: 90,
        fluid: global.moltenMetals[metal]
      },
      temperature: global.metalTemps[metal],
      time: 60
    })
    event.custom({
      type: "tconstruct:melting",
      ingredient: {
        tag: `forge:nuggets/${metalMaterial}`
      },
      result: {
        amount: 10,
        fluid: global.moltenMetals[metal]
      },
      temperature: global.metalTemps[metal],
      time: 20
    })
    event.custom({
      type: "tconstruct:ore_melting",
      conditions: [
        {
          type: "mantle:tag_combination_filled",
          ignore: "tconstruct:non_singular_ore_rates",
          match: `forge:ores/${metalMaterial}`
        }
      ],
      byproducts: global.metalTemps[metal] > 800 ? [
        {
          amount: 90,
          rate: "metal",
          fluid: "tfmg:molten_slag"
        }
      ] : [],
      ingredient: {
        type: "forge:difference",
        base: {
          tag: `forge:ores/${metalMaterial}`
        },
        subtracted: {
          tag: "tconstruct:non_singular_ore_rates"
        }
      },
      rate: "metal",
      result: {
        amount: 180,
        fluid: global.moltenMetals[metal]
      },
      temperature: global.metalTemps[metal],
      time: 150
    })
    event.custom({
      type: "tconstruct:ore_melting",
      ingredient: {
        tag: `forge:raw_materials/${metalMaterial}`
      },
      rate: "metal",
      result: {
        amount: 90,
        fluid: global.moltenMetals[metal]
      },
      temperature: global.metalTemps[metal],
      time: 90
    })
    event.custom({
      type: "tconstruct:ore_melting",
      ingredient: {
        tag: `forge:storage_blocks/raw_${metalMaterial}`
      },
      rate: "metal",
      result: {
        amount: 810,
        fluid: global.moltenMetals[metal]
      },
      temperature: global.metalTemps[metal],
      time: 361
    })
    event.custom({
      type: "tconstruct:ore_melting",
      ingredient: {
        item: `create:crushed_raw_${metalMaterial}`
      },
      rate: "metal",
      result: {
        amount: 90,
        fluid: global.moltenMetals[metal]
      },
      temperature: global.metalTemps[metal],
      time: 90
    })
  }

  // fuel
  event.custom({
    type: "tconstruct:melting_fuel",
    duration: 100,
    fluid: {
      amount: 50,
      fluid: "tfmg:molten_slag"
    },
    rate: 10,
    temperature: 800
  })
});