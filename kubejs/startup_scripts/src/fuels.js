ItemEvents.modification(event => {
  event.modify('better_campfires:campfire_stick', item => {
    item.burnTime = 2000
  })
})