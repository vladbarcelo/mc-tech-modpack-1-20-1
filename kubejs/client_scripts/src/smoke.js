ClientEvents.tick(event => {
  const range = 2
  const { player, level } = event
  const { block, age } = player
  const pos = block.pos

  if (age % 30) return

  const radiusOf = n => Array.from(Array(2 * n + 1).keys()).map(i => i - n)

  radiusOf(range).forEach(dx =>
    radiusOf(range).forEach(dz => {
      level
        .getChunkAt(pos.offset(dx * 16, 0, dz * 16))['findBlocks(java.util.function.BiPredicate,java.util.function.BiConsumer)'](
          predicate,
          /**
           * @param {BlockPos} blockPos
           * @param {Internal.BlockState} blockState
           */
          (blockPos, blockState) => {
            if (pos.distManhattan(blockPos) > range * 3 * 16) return
            const { x, y, z } = blockPos
            level.spawnParticles(
              /* options: */ 'minecraft:campfire_signal_smoke',
              /* overrideLimiter: */ true,
              /* x: */ x + 0.5,
              /* y: */ y + 1.1,
              /* z: */ z + 0.5,
              /* vx: */ 0,
              /* vy: */ 1,
              /* vz: */ 0,
              /* count: */ 0,
              /* speed: */ 0.03
            )
          }
        )
    })
  )
})

/**
   * @param {Internal.BlockState} blockState
   * @param {BlockPos} blockPos
   */
function predicate(blockState, blockPos) {
  return blockState.block.equals(Block.getBlock('kubejs:smouldering_block'))
}