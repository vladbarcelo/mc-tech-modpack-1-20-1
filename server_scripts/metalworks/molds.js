ServerEvents.recipes((event) => {
  event.recipes.create.pressing('createmetallurgy:graphite_blank_mold', '#forge:ingots/hop_graphite')
  
  for (let part of global.toolParts) {
    event.stonecutting(`kubejs:graphite_${part}_mold`, 'createmetallurgy:graphite_blank_mold')
  }
});