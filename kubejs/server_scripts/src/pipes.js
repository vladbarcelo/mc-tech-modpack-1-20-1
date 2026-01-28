ServerEvents.recipes((event) => {
  for (let id of [
    'copycats:crafting/copycat_fluid_pipe',
    'create:crafting/kinetics/fluid_pipe',
    'create:crafting/kinetics/fluid_pipe_vertical',
    'tfmg:crafting/pipes/steel_pipe_horizontal',
    'tfmg:crafting/pipes/steel_pipe_vertical',
    'tfmg:crafting/pipes/cast_iron_pipe_horizontal',
    'tfmg:crafting/pipes/cast_iron_pipe_vertical',
    'tfmg:crafting/pipes/brass_pipe_horizontal',
    'tfmg:crafting/pipes/brass_pipe_vertical',
    'tfmg:crafting/pipes/plastic_pipe_horizontal',
    'tfmg:crafting/pipes/plastic_pipe_vertical',
    'tfmg:crafting/pipes/aluminum_pipe_horizontal',
    'tfmg:crafting/pipes/aluminum_pipe_vertical',
    'immersive_aircraft:sturdy_pipes',
  ]) {
    event.remove({ id: id })
  }

  event.shaped(
    Item.of('create:fluid_pipe', 3),
    [
      'AAA',
      '   ',
      'AAA'
    ],
    {
      A: '#forge:plates/copper',
    }
  )
  event.shaped(
    Item.of('copycats:copycat_fluid_pipe', 3),
    [
      'A A',
      '   ',
      'A A'
    ],
    {
      A: '#forge:rods/zinc',
    }
  )
  event.shaped(
    Item.of('tfmg:steel_pipe', 3),
    [
      'AAA',
      '   ',
      'AAA'
    ],
    {
      A: '#forge:plates/steel',
    }
  )
  event.shaped(
    Item.of('tfmg:cast_iron_pipe', 3),
    [
      'AAA',
      '   ',
      'AAA'
    ],
    {
      A: '#forge:plates/cast_iron',
    }
  )
  event.shaped(
    Item.of('tfmg:brass_pipe', 3),
    [
      'AAA',
      '   ',
      'AAA'
    ],
    {
      A: '#forge:plates/brass',
    }
  )
  event.shaped(
    Item.of('tfmg:plastic_pipe', 3),
    [
      'AAA',
      '   ',
      'AAA'
    ],
    {
      A: '#forge:plates/plastic',
    }
  )
  event.shaped(
    Item.of('tfmg:aluminum_pipe', 3),
    [
      'AAA',
      '   ',
      'AAA'
    ],
    {
      A: '#forge:plates/aluminum',
    }
  )
})