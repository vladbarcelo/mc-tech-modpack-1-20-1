ServerEvents.recipes((event) => {
  // remove old stone recipes
  event.remove({ id: "immersiveengineering:crafting/blastbrick" })

  // this furnace is fucked, duplicates items
  event.remove({ id: 'tfmg:crafting/blast_furnace_output' })

  event.shaped(
    Item.of('immersiveengineering:blastbrick', 3), // arg 1: output
    [
      'ABA',
      'B B', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'tfmg:fireproof_brick',
      B: '#forge:ingots/brick',  //arg 3: the mapping object
    }
  )

  // new blast furnace via cast iron route
  event.shaped(
    Item.of('minecraft:blast_furnace', 1),
    [
      'AAA',
      'ABA',
      'CCC'
    ],
    {
      A: '#forge:ingots/cast_iron',
      B: 'minecraft:furnace',
      C: 'minecraft:smooth_stone'
    }
  )

  // electric burner
  event.remove({ id: 'moreburners:electric_burner' });
  event.shaped(
    'moreburners:electric_burner',
    [
      'ABA',
      ' C ',
      ' D '
    ],
    {
      A: '#forge:glass/tinted',
      B: 'moreburners:copper_coil',
      C: 'immersiveengineering:light_engineering',
      D: 'create:andesite_casing'
    }
  )
});