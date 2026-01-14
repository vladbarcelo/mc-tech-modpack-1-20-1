ServerEvents.recipes((event) => {
  // glass
  event.recipes.createmetallurgy.melting(Fluid.of('tconstruct:molten_glass', 810), `#minecraft:sand`, 40, 'heated')
  event.custom({
    type: "tconstruct:melting",
    ingredient: {
      tag: 'minecraft:sand'
    },
    result: {
      amount: 810,
      fluid: 'tconstruct:molten_glass'
    },
    temperature: 600,
    time: 20
  })

  // glass recipes
  event.recipes.createmetallurgy.casting_in_table('minecraft:glass_bottle', [Fluid.of('tconstruct:molten_glass', 45), 'kubejs:bottle_sand_cast'], 120, false)
  event.recipes.createmetallurgy.casting_in_table('minecraft:glass_bottle', [Fluid.of('tconstruct:molten_glass', 45), 'kubejs:bottle_red_sand_cast'], 120, false)
  event.custom({
    type: "tconstruct:casting_table",
    cast: {
      item: 'kubejs:bottle_sand_cast'
    },
    cast_consumed: true,
    cooling_time: 43,
    fluid: {
      amount: 45,
      fluid: 'tconstruct:molten_glass'
    },
    result: {
      item: 'minecraft:glass_bottle'
    }
  })
  event.custom({
    type: "tconstruct:casting_table",
    cast: {
      item: 'kubejs:bottle_red_sand_cast'
    },
    cast_consumed: true,
    cooling_time: 43,
    fluid: {
      amount: 45,
      fluid: 'tconstruct:molten_glass'
    },
    result: {
      item: 'minecraft:glass_bottle'
    }
  })

  event.recipes.createmetallurgy.casting_in_table('minecolonies:large_empty_bottle', [Fluid.of('tconstruct:molten_glass', 90), 'kubejs:large_bottle_sand_cast'], 120, false)
  event.recipes.createmetallurgy.casting_in_table('minecolonies:large_empty_bottle', [Fluid.of('tconstruct:molten_glass', 90), 'kubejs:large_bottle_red_sand_cast'], 120, false)
  event.custom({
    type: "tconstruct:casting_table",
    cast: {
      item: 'kubejs:large_bottle_sand_cast'
    },
    cast_consumed: true,
    cooling_time: 43,
    fluid: {
      amount: 90,
      fluid: 'tconstruct:molten_glass'
    },
    result: {
      item: 'minecolonies:large_empty_bottle'
    }
  })
  event.custom({
    type: "tconstruct:casting_table",
    cast: {
      item: 'kubejs:large_bottle_red_sand_cast'
    },
    cast_consumed: true,
    cooling_time: 43,
    fluid: {
      amount: 90,
      fluid: 'tconstruct:molten_glass'
    },
    result: {
      item: 'minecolonies:large_empty_bottle'
    }
  })
})