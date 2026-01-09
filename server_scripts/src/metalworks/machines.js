ServerEvents.recipes((event) => {
  // low heated burner
  event.shaped(
    Item.of('createlowheated:basic_burner', 1),
    [
      'A A',
      'AAA',
      'A A'
    ],
    {
      A: 'tconstruct:seared_brick',
    }
  )
  // foundry basin
  event.shaped(
    Item.of('createmetallurgy:foundry_basin', 1),
    [
      'A A',
      'ABA',
      'AAA'
    ],
    {
      A: 'tconstruct:seared_brick',
      B: 'morebuckets:ceramic_bucket'
    }
  )
  // foundry lid
  event.shaped(
    Item.of('createmetallurgy:foundry_lid', 1),
    [
      'AAA',
      'A A'
    ],
    {
      A: 'tconstruct:seared_brick',
    }
  )
  // glassed foundry lid
  event.shaped(
    Item.of('createmetallurgy:glassed_foundry_lid', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'tfmg:fireproof_brick',
      B: 'kubejs:borosilicate_glass',
    }
  )
  // spout
  event.shaped(
    Item.of('create:spout', 1),
    [
      'AAA',
      'ABA',
      'ACA'
    ],
    {
      A: '#forge:plates/copper',
      B: 'createmetallurgy:glassed_foundry_lid',
      C: 'create:fluid_pipe'
    }
  )
  // seared fuel tank
  event.shaped(
    Item.of('tconstruct:seared_fuel_tank', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#tconstruct:smeltery_bricks',
      B: 'kubejs:borosilicate_glass',
    }
  )
  // smeltery controller
  event.shaped(
    Item.of('tconstruct:smeltery_controller', 1),
    [
      'AAA',
      'ABC',
      'AAA'
    ],
    {
      A: '#tconstruct:smeltery_bricks',
      B: 'kubejs:borosilicate_glass',
      C: 'createdeco:copper_bars'
    }
  )
  // drains
  event.shaped(
    Item.of('tconstruct:seared_drain', 1),
    [
      'A A',
      'B B',
      'A A'
    ],
    {
      A: 'tconstruct:seared_brick',
      B: 'create:fluid_pipe',
    }
  )
  event.shaped(
    Item.of('tconstruct:seared_drain', 1),
    [
      'ABA',
    ],
    {
      A: 'create:fluid_pipe',
      B: '#tconstruct:smeltery_bricks',
    }
  )
});