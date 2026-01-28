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

// light for IE furnaces
BlockEntityEvents.tick(event => {
  if (event.level.levelData.getGameTime() % 60 !== 0) return

  let level = event.getLevel();
  let blockPosition = event.getPos()
  let block = level.getBlock(blockPosition);

  if (
    block.id !== 'immersiveengineering:coke_oven' ||
    block.id !== 'immersiveengineering:blast_furnace' || 
    block.id !== 'immersiveengineering:alloy_smelter'
  ) return

  if (block.properties.active === 'true') {
    let lightBlock = Block.getBlock('minecraft:light').blockStates[15]
    if (block.getNorth().getNorth().id === 'minecraft:air') {
      level.setBlock(block.getNorth().getNorth().pos, lightBlock, 3)
      return
    } else if (block.getSouth().getSouth().id === 'minecraft:air') {
      level.setBlock(block.getSouth().getSouth().pos, lightBlock, 3)
      return
    } else if (block.getWest().getWest().id === 'minecraft:air') {
      level.setBlock(block.getWest().getWest().pos, lightBlock, 3)
      return
    } else if (block.getEast().getEast().id === 'minecraft:air') {
      level.setBlock(block.getEast().getEast().pos, lightBlock, 3)
      return
    }
  } else {
    if (block.getNorth().getNorth().id === 'minecraft:light') {
      level.setBlock(block.getNorth().getNorth().pos, Block.getBlock('minecraft:air').defaultBlockState(), 3)
      return
    } else if (block.getSouth().getSouth().id === 'minecraft:light') {
      level.setBlock(block.getSouth().getSouth().pos, Block.getBlock('minecraft:air').defaultBlockState(), 3)
      return
    } else if (block.getWest().getWest().id === 'minecraft:light') {
      level.setBlock(block.getWest().getWest().pos, Block.getBlock('minecraft:air').defaultBlockState(), 3)
      return
    } else if (block.getEast().getEast().id === 'minecraft:light') {
      level.setBlock(block.getEast().getEast().pos, Block.getBlock('minecraft:air').defaultBlockState(), 3)
      return
    }
  }
})