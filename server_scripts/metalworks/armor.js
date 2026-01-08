ServerEvents.recipes((event) => {
  for (let metal of global.allMetals) {
    // armor
    event.shaped(
      Item.of(`kubejs:${metal}_strap`, 3),
      [
        ' A ',
        'BAB',
        ' A ',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: '#forge:leather'
      }
    );
    event.shaped(
      Item.of(global.armorItems[metal].helmet || `kubejs:${metal}_helmet`, 1),
      [
        '   ',
        'AAA',
        'B B',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].chestplate || `kubejs:${metal}_chestplate`, 1),
      [
        'B B',
        'BAB',
        'AAA',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].leggings || `kubejs:${metal}_leggings`, 1),
      [
        'AAA',
        'B B',
        'B B',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
    event.shaped(
      Item.of(global.armorItems[metal].boots || `kubejs:${metal}_boots`, 1),
      [
        '   ',
        'B B',
        'A A',
      ],
      {
        A: `#forge:plates/${metal}`,
        B: `kubejs:${metal}_strap`
      }
    )
  }
})