ServerEvents.tick(event => {
  event.server.players.forEach(player => {
    if (!player.alive || player.isSpectator()) return;

    // hot ingots
    let hotMaterialSlot = player.inventory.find('#materials/hot');
    if (hotMaterialSlot != -1) {
      
      let hotMaterial = player.inventory.getItem(hotMaterialSlot);
      let tongsSlot = player.inventory.find("hot_iron:smithing_tongs")

      if (tongsSlot != -1) {
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

    // lava buckets
    let ironLavaBucketSlot = player.inventory.find('minecraft:lava_bucket');
    if (ironLavaBucketSlot != -1) {
      dropLavaDestroyBucket(player, ironLavaBucketSlot, false)
    }

    for (let dynamicBucket of ['wooden_bucket', 'gold_bucket', 'diamond_bucket', 'obsidian_bucket']) {
      let dynamicBucketSlot = player.inventory.find(`morebuckets:${dynamicBucket}`);
      if (dynamicBucketSlot != -1) {
        dropLavaDestroyBucket(player, dynamicBucketSlot, true)
      }
    }
  });
});

function dropLavaDestroyBucket(player, slot, checkNBT) {
  let performAction = false
  if (checkNBT) {
    let item = player.inventory.getItem(slot)
    if (item.hasNBT() && item.nbt.Fluid && String(item.nbt.Fluid.FluidName).match(/lava|molten/)) {
      performAction = true
    }
  } else {
    performAction = true
  }

  if (!performAction) {
    return
  }
  player.inventory.getItem(slot).shrink(1)
  !player.isCreative() && player.setSecondsOnFire(5);
}