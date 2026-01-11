ServerEvents.recipes((event) => {  
  event.shapeless(
    Item.of('minecraft:clay_ball', 4),
    [
      'immersive_weathering:earthen_clay'
    ]
  )
  event.shapeless(
    Item.of('minecraft:clay_ball', 4),
    [
      'immersive_weathering:grassy_earthen_clay'
    ]
  )
  event.shapeless(
    Item.of('minecraft:clay_ball', 4),
    [
      'immersive_weathering:earthen_clay_farmland'
    ]
  )
});