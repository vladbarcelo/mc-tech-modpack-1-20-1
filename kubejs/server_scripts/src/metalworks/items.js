ServerEvents.recipes((event) => {
  // grout
  event.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      item: 'tconstruct:grout'
    },
    result: {
      item: 'tconstruct:seared_brick'
    },
    slag: {
      tag: `forge:slag`
    },
    time: 1200
  })

  event.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      item: 'minecraft:cobblestone'
    },
    result: {
      item: 'tconstruct:seared_cobble'
    },
    slag: {
      tag: `forge:slag`
    },
    time: 1200
  })
});