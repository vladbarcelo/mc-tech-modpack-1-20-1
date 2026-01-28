
StartupEvents.registry('item', event => {
  for (let sandType of [
    'sand',
    'red_sand'
  ]) {
    JsonIO.write(`kubejs/data/rechiseled/chiseling_recipes/${sandType}stone_slab.json`, {
      "type": "rechiseled:chiseling",
      "overwrite": false,
      "entries": [
        {
          "item": `minecraft:${sandType}stone_slab`
        },
        {
          "item": `kubejs:sawblade_${sandType}_cast`
        },
        {
          "item": `kubejs:shovel_blade_${sandType}_cast`
        },
        {
          "item": `kubejs:cooking_pot_${sandType}_cast`
        },
        {
          "item": `kubejs:oil_can_${sandType}_cast`
        },
        {
          "item": `kubejs:bottle_${sandType}_cast`
        },
        {
          "item": `kubejs:large_bottle_${sandType}_cast`
        }
      ].concat(global.tconstructDefaultCasts.map((cast) => {
        return {
          "item": `tconstruct:${cast}_${sandType}_cast`
        }
      }))
    })
  }
});