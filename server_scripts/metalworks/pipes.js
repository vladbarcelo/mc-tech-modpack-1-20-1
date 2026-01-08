ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('create:fluid_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/copper',
      B: 'tfmg:fireproof_brick',
    }
  )
  event.shaped(
    Item.of('tfmg:steel_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/steel',
      B: 'tfmg:fireproof_brick',
    }
  )
  event.shaped(
    Item.of('tfmg:cast_iron_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/cast_iron',
      B: 'tfmg:fireproof_brick',
    }
  )
  event.shaped(
    Item.of('tfmg:brass_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/brass',
      B: 'tfmg:fireproof_brick',
    }
  )
  event.shaped(
    Item.of('tfmg:aluminum_pipe', 4),
    [
      'AAA',
      'BBB',
      'AAA'
    ],
    {
      A: '#forge:plates/aluminum',
      B: 'tfmg:fireproof_brick',
    }
  )
});