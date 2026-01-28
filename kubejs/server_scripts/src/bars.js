ServerEvents.recipes((event) => {
  for (let id of [
    'minecraft:iron_bars',
    'tconstruct:smeltery/casting/metal/iron/bars',
    'createdeco:andesite_bars',
    'createdeco:brass_bars',
    'createdeco:copper_bars',
    'createdeco:industrial_iron_bars',
    'createdeco:zinc_bars',
    'bellsandwhistles:grab_rails/andesite_grab_rails',
    'bellsandwhistles:grab_rails/brass_grab_rails',
    'bellsandwhistles:grab_rails/copper_grab_rails',
    'quark:building/crafting/gold_bars',
    'tconstruct:common/gold_bars',
    'tconstruct:smeltery/casting/metal/gold/bars',

  ]) {
    event.remove({ id: id })
  }

  event.shaped(
    Item.of('minecraft:iron_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/iron'
    }
  )

  event.shaped(
    Item.of('create:andesite_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/andesite'
    }
  )
  event.shapeless(
    Item.of('createdeco:andesite_bars'),
    [
      'create:andesite_bars'
    ]
  )
  event.shapeless(
    Item.of('create:andesite_bars'),
    [
      'createdeco:andesite_bars'
    ]
  )

  event.shaped(
    Item.of('create:brass_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/brass'
    }
  )
  event.shapeless(
    Item.of('createdeco:brass_bars'),
    [
      'create:brass_bars'
    ]
  )
  event.shapeless(
    Item.of('create:brass_bars'),
    [
      'createdeco:brass_bars'
    ]
  )

  event.shaped(
    Item.of('create:copper_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/copper'
    }
  )
  event.shapeless(
    Item.of('createdeco:copper_bars'),
    [
      'create:copper_bars'
    ]
  )
  event.shapeless(
    Item.of('create:copper_bars'),
    [
      'createdeco:copper_bars'
    ]
  )

  event.shaped(
    Item.of('createdeco:zinc_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/zinc'
    }
  )

  event.shaped(
    Item.of('bellsandwhistles:andesite_grab_rails', 8),
    [
      'A A',
      'A A',
      'A A'
    ],
    {
      A: '#forge:rods/andesite'
    }
  )
  event.shaped(
    Item.of('bellsandwhistles:brass_grab_rails', 8),
    [
      'A A',
      'A A',
      'A A'
    ],
    {
      A: '#forge:rods/brass'
    }
  )
  event.shaped(
    Item.of('bellsandwhistles:copper_grab_rails', 8),
    [
      'A A',
      'A A',
      'A A'
    ],
    {
      A: '#forge:rods/copper'
    }
  )

  event.shaped(
    Item.of('tfmg:steel_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/steel'
    }
  )

  event.shaped(
    Item.of('tfmg:aluminum_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/aluminum'
    }
  )
  event.shaped(
    Item.of('tfmg:cast_iron_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/cast_iron'
    }
  )
  event.shaped(
    Item.of('tfmg:lead_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/lead'
    }
  )
  event.shaped(
    Item.of('tfmg:nickel_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/nickel'
    }
  )
  event.shaped(
    Item.of('tconstruct:gold_bars', 16),
    [
      'AAA',
      ' A ',
      'AAA'
    ],
    {
      A: '#forge:rods/gold'
    }
  )
  event.shapeless(
    Item.of('tconstruct:gold_bars'),
    [
      'quark:gold_bars'
    ]
  )
  event.shapeless(
    Item.of('quark:gold_bars'),
    [
      'tconstruct:gold_bars'
    ]
  )
})