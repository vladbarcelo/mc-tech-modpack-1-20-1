ServerEvents.recipes((event) => {
  event.remove({ id: 'morebuckets:unfired_clay_bucket' })
  event.remove({ id: 'notreepunching:campfire/bucket' })
  event.remove({ id: 'notreepunching:smelting/bucket' })
  event.remove({ id: 'notreepunching:smelting/bucket' })
  
  event.smelting('morebuckets:ceramic_bucket', 'notreepunching:clay_bucket', 0.35, 200)
  event.campfireCooking('morebuckets:ceramic_bucket', 'notreepunching:clay_bucket', 0.35, 600)
});