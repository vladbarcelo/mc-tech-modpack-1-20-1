/** @type {$WorldHelper_} */
const TemperatureHelper = Java.loadClass('com.momosoftworks.coldsweat.util.world.WorldHelper')

ServerEvents.tick(event => {
  let level = event.server.getLevel('overworld')

  if (level.levelData.getGameTime() % 120 !== 0) return

  level.getChunkSource().chunkMap.getChunks().forEach(chunk => {

    /** @type {$LevelChunk_} */
    let levelChunk = chunk.getFullChunk();

    if (!levelChunk) return

    levelChunk.getBlockEntities().forEach(
      /** @param {$BlockPos_} BlockPos */
      blockPosition => {
        let block = level.getBlock(blockPosition);

        let inventory = block.getInventory();

        if (!inventory || inventory.isEmpty()) return

        let temp = TemperatureHelper.getTemperatureAt(level, blockPosition) * 23.5

        inventory.getAllItems().forEach(
          /** @param {$Item_} item */
          item => {

            if (!item.hasTag('forge:food')) return

            item.nbt = item.nbt || {}

            item.nbt.putDouble("KubeJSRotting_LastCheck", level.levelData.getGameTime()) 

            if (!item.nbt.KubeJSRotting_State) {
              item.nbt.putDouble("KubeJSRotting_State", 0)
            }

            if (!item.nbt.KubeJSRotting_Temp) {
              item.nbt.putDouble("KubeJSRotting_Temp", temp)
            }

            let itemTemp = item.nbt.KubeJSRotting_Temp

            if (itemTemp > temp) {
              itemTemp = itemTemp - 2 <= temp ? temp : itemTemp - 2
            } else if (itemTemp < temp) {
              itemTemp = itemTemp + 2 >= temp ? temp : itemTemp + 2
            }

            item.nbt.putDouble("KubeJSRotting_Temp", itemTemp)

            if (itemTemp <= 4 || itemTemp >= 60) return

            if (level.levelData.getGameTime() - item.nbt.KubeJSRotting_LastCheck <= 20 * 60 * 15) return

            let rottingModifier = 10

            if (itemTemp >= 25) rottingModifier *= 1.3
            else if (itemTemp <= 20) rottingModifier *= 0.7

            if (
              item.hasTag('forge:meat/foods/raw') ||
              item.hasTag('forge:milk')
            ) rottingModifier *= 2
            else if (
              item.hasTag('forge:crops/onion') ||
              item.hasTag('forge:crops/garlic')
            ) rottingModifier *= 0.5
            else if (item.hasTag('forge:vegetables')) rottingModifier *= 0.8

            if (
              item.hasTag('minecolonies_tweaks:fine_food') || 
              item.hasTag('minecolonies_tweaks:decent_food') || 
              item.hasTag('minecolonies:cook_product') ||
              item.hasTag('minecolonies:baker_product')
            ) rottingModifier *= 0.8

            if (item.nbt.Salted) rottingModifier *= 0.1

            let newState = item.nbt.KubeJSRotting_State + rottingModifier

            if (newState >= 100) newState = 100

            item.nbt.putDouble("KubeJSRotting_State", newState)
          }
        )
      }
    )
  })
})