ClientEvents.tick(event => {
  let { player, level } = event
  let { block, age } = player
  
  if (age % 30) return

  let chunkRange = 2
  let pos = block.pos

  let radiusOf = n => Array.from(Array(2 * n + 1).keys()).map(i => i - n)

  radiusOf(chunkRange).forEach(dx =>
    radiusOf(chunkRange).forEach(dz => {
      level
        .getChunkAt(pos.offset(dx * 16, 0, dz * 16))['findBlocks(java.util.function.BiPredicate,java.util.function.BiConsumer)'](
          predicate,
          /**
           * @param {BlockPos} blockPos
           * @param {Internal.BlockState} blockState
           */
          (blockPos, blockState) => {
            if (pos.distManhattan(blockPos) > chunkRange * 3 * 16) return

            let foundBlock = level.getBlock(blockPos)
            if (
              [
                'immersiveengineering:coke_oven',
                'immersiveengineering:blast_furnace'
              ].indexOf(foundBlock.id) !== -1 &&
              foundBlock.properties.multiblockslave === 'false' &&
              foundBlock.properties.active === 'true'
            ) {
              let x, y, z;

              if (foundBlock.properties.facing === 'south') {
                let effPos = foundBlock.getNorth().getNorth().pos
                x = effPos.x + 0.5
                y = effPos.y + 0.5
                z = effPos.z + 1
              } else if (foundBlock.properties.facing === 'north') {
                let effPos = foundBlock.getSouth().getSouth().pos
                x = effPos.x + 0.5
                y = effPos.y + 0.5
                z = effPos.z
              } else if (foundBlock.properties.facing === 'west') {
                let effPos = foundBlock.getEast().getEast().pos
                x = effPos.x
                y = effPos.y + 0.5
                z = effPos.z + 0.5
              } else if (foundBlock.properties.facing === 'east') {
                let effPos = foundBlock.getWest().getWest().pos
                x = effPos.x + 1
                y = effPos.y + 0.5
                z = effPos.z + 0.5
              }
              level.spawnParticles(
                /* options: */ 'minecraft:flame',
                /* overrideLimiter: */ true,
                /* x: */ x,
                /* y: */ y,
                /* z: */ z,
                /* vx: */ 0.3,
                /* vy: */ 0.3,
                /* vz: */ 0.3,
                /* count: */ 15,
                /* speed: */ 0
              )
            } else if (
              foundBlock.id === 'immersiveengineering:alloy_smelter' &&
              foundBlock.properties.multiblockslave === 'false' &&
              foundBlock.properties.active === 'true'
            ) {
              let x, y, z;

              if (foundBlock.properties.facing === 'south') {
                let effPos = foundBlock.getNorth().getNorth().pos
                x = effPos.x
                y = effPos.y + 0.5
                z = effPos.z + 2
              } else if (foundBlock.properties.facing === 'north') {
                let effPos = foundBlock.getSouth().getSouth().pos
                x = effPos.x + 1
                y = effPos.y + 0.5
                z = effPos.z - 1
              } else if (foundBlock.properties.facing === 'west') {
                // checked
                let effPos = foundBlock.getEast().getEast().pos
                x = effPos.x - 1
                y = effPos.y + 0.5
                z = effPos.z
              } else if (foundBlock.properties.facing === 'east') {
                // checked
                let effPos = foundBlock.getWest().getWest().pos
                x = effPos.x + 2
                y = effPos.y + 0.5
                z = effPos.z + 1
              }
              level.spawnParticles(
                /* options: */ 'minecraft:flame',
                /* overrideLimiter: */ true,
                /* x: */ x,
                /* y: */ y,
                /* z: */ z,
                /* vx: */ 0.3,
                /* vy: */ 0.3,
                /* vz: */ 0.3,
                /* count: */ 15,
                /* speed: */ 0
              )
            } else if (
              foundBlock.id === 'kubejs:smouldering_block'
            ) {
              let { x, y, z } = blockPos
              level.spawnParticles(
                /* options: */ 'minecraft:campfire_signal_smoke',
                /* overrideLimiter: */ true,
                /* x: */ x + 0.5,
                /* y: */ y + 1.1,
                /* z: */ z + 0.5,
                /* vx: */ 0,
                /* vy: */ 1,
                /* vz: */ 0,
                // Count = 0 spawns 1 particle that obeys the direction vector
                // Otherwise the particles spawn in an area and have random direction vectors
                /* count: */ 0,
                /* speed: */ 0.03
              )
            }
          }
        )
    })
  )
})

/**
 * @param {$BlockState_} blockState
 * @param {$BlockPos_} blockPos
 */
function predicate(blockState, blockPos) {
  return blockState.block.id === 'kubejs:smouldering_block' ||
    blockState.block.id === 'immersiveengineering:coke_oven' ||
    blockState.block.id === 'immersiveengineering:blast_furnace' ||
    blockState.block.id === 'immersiveengineering:alloy_smelter'
}