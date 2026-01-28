ServerEvents.tick(event => {
  event.server.players.forEach(
    /** @param {$Player_} player */
    player => {
      if (event.server.getLevel('minecraft:overworld').levelData.getGameTime() % 20 !== 0) return
      if (!player.alive || player.isSpectator()) return;

      // hot ingots
      let hotMaterialSlot = player.inventory.find('#materials/hot');
      if (hotMaterialSlot !== -1) {
        let hotMaterial = player.inventory.getItem(hotMaterialSlot);
        let tongsSlot = player.inventory.find("hot_iron:smithing_tongs")

        if (tongsSlot !== -1) {
          let hotItemInTongs = Item.of(hotMaterial.id + '_in_tongs')
          hotItemInTongs.nbt = hotItemInTongs.nbt || {}
          hotItemInTongs.nbt.putString("ItemHeld", hotMaterial.id)
          player.inventory.getItem(tongsSlot).shrink(1)
          player.inventory.getItem(hotMaterialSlot).shrink(1)
          player.give(hotItemInTongs)
        } else {
          !player.isCreative() && player.setSecondsOnFire(1);
        }
      }

      player.inventory.getAllItems().forEach(
        /** @param {$Item_} item */
        item => {
          if (
            ['wooden_bucket', 'gold_bucket', 'diamond_bucket', 'obsidian_bucket'].indexOf(item.id) !== -1 &&
            item.hasNBT() && item.nbt.Fluid && String(item.nbt.Fluid.FluidName).match(/lava|molten/)
          ) {
            dropHotLiquidDestroyBucket(player, player.inventory.find(item.id), String(item.nbt.Fluid.FluidName))
          } else if (
            item.id.match(/lava|molten/)
          ) {
            let mod = item.id.split(':')[0]
            let liquid = item.id.split(':')[1].split('_bucket')[0]
            dropHotLiquidDestroyBucket(player, player.inventory.find(item.id), `${mod}:${liquid}`)
          }
        }
      )
    }
  );
});


/**
 * Drops a hot liquid from a player's inventory and destroys the bucket.
 * @param {$Player_} player - The player to drop the liquid from.
 * @param {number} slot - The slot index of the bucket to drop the liquid from.
 * @param {string} forceLiquid - The name of the liquid to drop.
 * If true, the function will only drop the liquid if the item has NBT and the fluid name matches "lava" or "molten".
 * If false, the function will always drop the liquid.
 */
function dropHotLiquidDestroyBucket(player, slot, liquid) {
  let item = player.inventory.getItem(slot)

  if (!player.isCreative()) {
    let fluidBlock = Block.getBlock(liquid ? liquid : String(item.nbt.Fluid.FluidName)).getBlockStates()[0]
    player.inventory.getItem(slot).shrink(1)
    player.getLevel().setBlock(player.blockPosition(), fluidBlock, 3)
  }
}