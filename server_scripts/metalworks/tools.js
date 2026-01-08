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