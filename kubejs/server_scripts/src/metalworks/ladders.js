ServerEvents.recipes((event) => {
  for (let metal of global.allMetals) {
    if (!global.metalLadders[metal]) continue;

    event.shaped(
      Item.of(global.metalLadders, 2),
      [
        'A A',
        'AAA',
        'A A',
      ],
      {
        A: `#forge:rods/${metal}`
      }
    );
  }
})