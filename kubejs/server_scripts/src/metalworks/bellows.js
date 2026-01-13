ServerEvents.recipes((event) => {
  event.remove({ id: 'hot_iron:bellows' })
})

BlockEntityEvents.tick((event) => {
  if (event.level.levelData.getGameTime() % 20 !== 0) return

  let level = event.getLevel();
  let blockPosition = event.getPos()
  let block = level.getBlock(blockPosition);

  if (block.id !== 'supplementaries:bellows') return

  if (!block.properties.power) return

  block.set(
    block.id,
    {
      facing: block.properties.facing
    }
  )
})

BlockEvents.rightClicked('supplementaries:bellows', event => {
  let facing = event.block.properties.facing
  /** @type {$BlockContainerJS_} */
  let burnerBlock;

  switch (facing) {
    case 'north':
      burnerBlock = event.block.getNorth()
      break
    case 'south':
      burnerBlock = event.block.getSouth()
      break
    case 'east':
      burnerBlock = event.block.getEast()
      break
    case 'west':
      burnerBlock = event.block.getWest()
      break
    default:
      console.warn(`Could not parse direction from facing value "${facing}"`)
      return
  }

  if (burnerBlock.id === 'createlowheated:basic_burner' &&
    burnerBlock.properties.lit === 'true' &&
    burnerBlock.properties.fueled === 'true' && 
    burnerBlock.properties.empowered === 'false'
  ) {
    burnerBlock.set(
      burnerBlock.id,
      {
        empowered: 'true',
        lit: burnerBlock.properties.lit,
        fueled: burnerBlock.properties.fueled,
        low: burnerBlock.properties.low,
        facing: burnerBlock.properties.facing
      }
    )

    event.server.scheduleInTicks(40, () => {
      let currentBlock = event.level.getBlock(burnerBlock.pos)

      if (currentBlock.id !== burnerBlock.id) return

      burnerBlock.set(burnerBlock.id, {
        empowered: 'false',
        lit: currentBlock.properties.lit,
        fueled: currentBlock.properties.fueled,
        low: currentBlock.properties.low,
        facing: currentBlock.properties.facing
      })
    })
  }

})