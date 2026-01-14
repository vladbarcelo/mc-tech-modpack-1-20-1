ServerEvents.recipes((event) => {
  // tunnels and funnels
  event.remove({
    id: 'create:crafting/logistics/andesite_funnel'
  })

  event.remove({
    id: 'create:crafting/logistics/brass_funnel'
  })

  event.remove({
    id: 'create:crafting/logistics/andesite_tunnel'
  })

  event.remove({
    id: 'create:crafting/logistics/brass_tunnel'
  })

  event.shaped(
    Item.of('create:andesite_funnel', 1),
    [
      'AAA',
      'ABA',
      'ACA'
    ],
    {
      A: 'create:andesite_alloy',
      B: 'immersiveengineering:strip_curtain',
      C: 'create:belt_connector'
    }
  )

  event.shaped(
    Item.of('create:brass_funnel', 1),
    [
      'AAA',
      'ABA',
      'ACA'
    ],
    {
      A: '#forge:plates/brass',
      B: 'immersiveengineering:strip_curtain',
      C: 'create:belt_connector'
    }
  )

  event.shaped(
    Item.of('create:andesite_tunnel', 1),
    [
      'AAA',
      'B B',
      'CCC'
    ],
    {
      A: 'create:andesite_alloy',
      B: 'immersiveengineering:strip_curtain',
      C: 'create:belt_connector'
    }
  )

  event.shaped(
    Item.of('create:brass_tunnel', 1),
    [
      'AAA',
      'B B',
      'CCC'
    ],
    {
      A: '#forge:plates/brass',
      B: 'immersiveengineering:strip_curtain',
      C: 'create:belt_connector'
    }
  )

  // propeller
  event.remove({
    id: 'create:crafting/kinetics/propeller'
  })
  event.shaped(
    Item.of('create:propeller', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: '#forge:plates/cast_iron',
      B: 'create:andesite_alloy',
    }
  )
  event.shaped(
    Item.of('create:propeller', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: '#forge:plates/iron',
      B: 'create:andesite_alloy',
    }
  )

  event.remove({
    id: 'steampowered:cast_iron_boiler'
  })
  event.shaped(
    Item.of('steampowered:cast_iron_boiler', 1),
    [
      'AAA',
      'ABA',
      'ABA'
    ],
    {
      A: '#forge:plates/cast_iron',
      B: 'tfmg:cast_iron_pipe',
    }
  )
  event.remove({
    id: 'steampowered:cast_iron_burner'
  })
  event.shaped(
    Item.of('steampowered:cast_iron_burner', 1),
    [
      'AAA',
      'A A',
      'BBB'
    ],
    {
      A: '#forge:plates/cast_iron',
      B: 'minecraft:bricks',
    }
  )

  event.remove({ id: 'create:crafting/kinetics/fluid_tank' })
  event.shaped(
    Item.of('create:fluid_tank', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:plates/copper',
      B: 'kubejs:borosilicate_glass'
    }
  )

  event.remove({ id: 'railways:crafting/fuel_tank' })
  event.shaped(
    Item.of('railways:fuel_tank', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:plates/brass',
      B: 'kubejs:borosilicate_glass'
    }
  )

  event.remove({ id: 'tfmg:crafting/steel_tank' })
  event.shaped(
    Item.of('tfmg:steel_fluid_tank', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:plates/steel',
      B: 'kubejs:borosilicate_glass'
    }
  )

  event.remove({ id: 'create_sa:small_fueling_tank_recipe' })
  event.shapeless(
    Item.of('create_sa:small_fueling_tank'),
    [
      'railways:fuel_tank'
    ]
  )
});