ServerEvents.recipes((event) => {
  event.shapeless(
    Item.of('hot_iron:smithing_tongs', 1),
    [
      '#forge:rods/cast_iron',
      '#forge:rods/cast_iron',
    ]
  );
  event.shaped(
    Item.of('hot_iron:smithing_hammer', 1),
    [
      ' AB',
      ' CA',
      'C  ',
    ],
    {
      A: '#forge:ingots/cast_iron',
      B: '#forge:strings',
      C: 'hot_iron:tool_handle',
    }
  )
});

ItemEvents.rightClicked('', event => {
  if (!String(event.item.id).match(/_in_tongs/)) return
  if (String(event.item.id).match(/:hot_/)) return

  event.player.give(Item.of(event.item.nbt.ItemHeld, 1))
  event.player.give(Item.of('hot_iron:smithing_tongs', 1))
  event.item.shrink(1)
})