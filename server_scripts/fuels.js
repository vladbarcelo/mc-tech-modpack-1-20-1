ServerEvents.recipes((event) => {
  event.recipes.create.compacting(Item.of('createloveandwar:fuel_pellet'), Fluid.of('createdieselgenerators:diesel', 250))
  event.recipes.create.compacting(Item.of('createloveandwar:fuel_pellet'), Fluid.of('createdieselgenerators:biodiesel', 250))
  event.recipes.create.compacting(Item.of('createloveandwar:fuel_pellet'), Fluid.of('tfmg:diesel', 250))

  // tfmg compat

  // gasoline
  event.recipes.create.mixing(Fluid.of('createdieselgenerators:gasoline'), Fluid.of('tfmg:gasoline'))
  event.recipes.create.mixing(Fluid.of('tfmg:gasoline'), Fluid.of('createdieselgenerators:gasoline'))

  // diesel
  event.recipes.create.mixing(Fluid.of('createdieselgenerators:diesel'), Fluid.of('tfmg:diesel'))
  event.recipes.create.mixing(Fluid.of('tfmg:diesel'), Fluid.of('createdieselgenerators:diesel'))
  event.recipes.create.mixing(Fluid.of('createloveandwar:diesel'), Fluid.of('tfmg:diesel'))
  event.recipes.create.mixing(Fluid.of('tfmg:diesel'), Fluid.of('createloveandwar:diesel'))

  // kerosene
  event.recipes.create.mixing(Fluid.of('createloveandwar:kerosene'), Fluid.of('tfmg:kerosene'))
  event.recipes.create.mixing(Fluid.of('tfmg:kerosene'), Fluid.of('createloveandwar:kerosene'))
});