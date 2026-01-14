ServerEvents.recipes((event) => {
  event.remove({ id: 'immersiveengineering:crafting/torch' })
  event.shaped(
    Item.of('hardcore_torches:unlit_torch', 16),
    [
      'AB ',
      'CCC'
    ],
    {
      A: '#minecraft:wool',
      B: 'immersiveengineering:creosote_bucket',
      C: '#forge:rods/wooden'
    }
  ).customIngredientAction('immersiveengineering:creosote_bucket', 'keep_bucket');
});

MEJSEvents.entityTick(event => {
  if (
    event.entity.type !== 'mca:male_villager' &&
    event.entity.type !== 'mca:female_villager' &&
    event.entity.type !== 'minecolonies:citizen'
  ) return
  if (event.entity.level.levelData.getGameTime() % 60 !== 0) return

  let aabb = AABB.ofBlock(event.entity.blockPosition()).inflate(2)
  let light = event.entity.level.dayTime() >= 12542
  let unlight = !light

  BlockPos.betweenClosed(aabb.minX, aabb.minY, aabb.minZ, aabb.maxX, aabb.maxY, aabb.maxZ).forEach(pos => {
    let block = event.level.getBlock(pos)

    switch (block.id) {
      case 'hardcore_torches:unlit_torch':
        light && block.set('hardcore_torches:lit_torch')
        break
      case 'hardcore_torches:unlit_wall_torch':
        light && block.set('hardcore_torches:lit_wall_torch', {
          facing: block.properties.facing
        })
        break
      case 'hardcore_torches:unlit_lantern':
        light && lightLantern(event, block)
        break
      case 'hardcore_torches:lit_torch':
        unlight && block.set('hardcore_torches:unlit_torch')
        break
      case 'hardcore_torches:lit_wall_torch':
        unlight && block.set('hardcore_torches:unlit_wall_torch', {
          facing: block.properties.facing
        })
        break
      case 'hardcore_torches:lit_lantern':
        unlight && unlightLantern(event, block)
        break
      default:
        return
    }
  })
})

/**
 * Relights a lantern block by setting its type to 'hardcore_torches:lit_lantern' and setting its fuel to 144000.
 * @param {$EntityTickEventJS_} event The event that triggered this function.
 * @param {$BlockContainerJS_} block The block to relight.
 */
function lightLantern(event, block) {
  block.set('hardcore_torches:lit_lantern', {
    hanging: block.properties.hanging,
    waterlogged: block.properties.waterlogged
  })
  let newBlock = event.level.getBlock(block.pos)
  let nbt = newBlock.getEntityData()
  nbt.merge({Fuel: 144000})
  newBlock.setEntityData(nbt)
}

/**
 * Relights a lantern block by setting its type to 'hardcore_torches:lit_lantern' and setting its fuel to 144000.
 * @param {$EntityTickEventJS_} event The event that triggered this function.
 * @param {$BlockContainerJS_} block The block to relight.
 */
function unlightLantern(event, block) {
  block.set('hardcore_torches:unlit_lantern', {
    hanging: block.properties.hanging,
    waterlogged: block.properties.waterlogged
  })
  let newBlock = event.level.getBlock(block.pos)
  let nbt = newBlock.getEntityData()
  nbt.merge({Fuel: 144000})
  newBlock.setEntityData(nbt)
}