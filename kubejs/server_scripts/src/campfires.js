ServerEvents.recipes((event) => {
  event.remove({ id: 'better_campfires:new_campfire_recipe' })
  event.remove({ id: 'better_campfires:campfire_torch' })
  event.remove({ id: 'minecraft:glowstone_campfire' })
  event.campfireCooking('hardcore_torches:lit_torch', 'minecraft:stick', 0.35, 600)
});

BlockEvents.rightClicked('better_campfires:campfire_build', event => {
  if (event.player.getMainHandItem().id !== 'better_campfires:campfire_stick') return

  if (event.block.properties.stage === '2') {
    event.player.mainHandItem.shrink(1)
    // this is to circumvent BlockSwapper event highjacking
    event.server.scheduleInTicks(1, () => {
      let campfireBlock = Block.getBlock('hardcore_torches:hardcore_campfire').defaultBlockState()
      event.getLevel().setBlock(event.block.pos, campfireBlock, 3)
    })
  }
})