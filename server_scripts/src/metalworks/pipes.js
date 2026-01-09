// MoreEventsJS.handleServer('block_entity.tick', event => {
//   let blockEntity = event.blockEntity;

//   // Check if the block entity is a furnace
//   if (blockEntity.id === 'create:fluid_pipe') {
//     /** @type {import("packages/net/minecraft/world/level/block/state/$BlockState").$BlockState} */
//     let blockState = blockEntity.blockState;

//     for (let value of blockState.getValues()) {
//       console.log(value)
//     }
//   }
// });

let checkableFluids = [
  'minecraft:lava',
  'createmetallurgy:molten_lead',
  'createmetallurgy:molten_zinc',
  'createmetallurgy:molten_aluminum',
  'createmetallurgy:molten_brass',
  'createmetallurgy:molten_electrum',
  'createmetallurgy:molten_silver',
  'createmetallurgy:molten_gold',
  'createmetallurgy:molten_copper',
  'kubejs:molten_cast_iron',
  'kubejs:molten_uranium',
  'createmetallurgy:molten_constantan',
  'createmetallurgy:molten_nickel',
  'createmetallurgy:molten_iron',
  'createmetallurgy:molten_steel',
  'kubejs:molten_palladium',
  'kubejs:molten_platinum',
  'kubejs:molten_chromium',
  'kubejs:molten_vanadium',
  'kubejs:molten_rhodium',
  'createmetallurgy:molten_tungsten',
]

let defaultAluminumMachineryCompatibility = [
  global.moltenMetals.lead,
  global.moltenMetals.zinc,
]

let defaultBrassMachineryCompatibility = [
  global.moltenMetals.lead,
  global.moltenMetals.zinc,
  global.moltenMetals.aluminum,
]

let defaultCopperMachineryCompatibility = [
  global.moltenMetals.lead,
  global.moltenMetals.zinc,
  global.moltenMetals.aluminum,
  global.moltenMetals.brass,
  global.moltenMetals.electrum,
  global.moltenMetals.silver,
]

let defaultCastIronMachineryCompatibility = [
  global.moltenMetals.lead,
  global.moltenMetals.zinc,
  global.moltenMetals.aluminum,
  global.moltenMetals.brass,
  global.moltenMetals.electrum,
  global.moltenMetals.silver,
  global.moltenMetals.gold,
  global.moltenMetals.copper,
]

let defaultSteelMachineryCompatibility = [
  global.moltenMetals.lead,
  global.moltenMetals.zinc,
  global.moltenMetals.aluminum,
  global.moltenMetals.brass,
  global.moltenMetals.electrum,
  global.moltenMetals.silver,
  global.moltenMetals.gold,
  global.moltenMetals.copper,
  global.moltenMetals.cast_iron,
  global.moltenMetals.uranium,
  global.moltenMetals.constantan,
  global.moltenMetals.nickel,
  global.moltenMetals.iron,
  'minecraft:lava',
]

let machineryFluidCompatibility = {
  'tfmg:plastic_pipe': [],
  'tfmg:plastic_smart_fluid_pipe': [],
  'tfmg:plastic_mechanical_pump': [],
  'tfmg:aluminum_pipe': defaultAluminumMachineryCompatibility,
  'tfmg:aluminum_smart_fluid_pipe': defaultAluminumMachineryCompatibility,
  'tfmg:aluminum_mechanical_pump': defaultAluminumMachineryCompatibility,
  'tfmg:brass_pipe': defaultBrassMachineryCompatibility,
  'tfmg:brass_smart_fluid_pipe': defaultBrassMachineryCompatibility,
  'tfmg:brass_mechanical_pump': defaultBrassMachineryCompatibility,
  'create:fluid_tank': defaultCopperMachineryCompatibility,
  'create:fluid_pipe': defaultCopperMachineryCompatibility,
  'create:fluid_smart_fluid_pipe': defaultCopperMachineryCompatibility,
  'create:mechanical_pump': defaultCopperMachineryCompatibility,
  'tfmg:cast_iron_pipe': defaultCastIronMachineryCompatibility,
  'tfmg:cast_iron_smart_fluid_pipe': defaultCastIronMachineryCompatibility,
  'tfmg:cast_iron_mechanical_pump': defaultCastIronMachineryCompatibility,
  'tfmg:steel_fluid_tank': defaultSteelMachineryCompatibility,
  'tfmg:steel_pipe': defaultSteelMachineryCompatibility,
  'tfmg:steel_smart_fluid_pipe': defaultSteelMachineryCompatibility,
  'tfmg:steel_mechanical_pump': defaultSteelMachineryCompatibility,
  'tfmg:electric_pump': defaultSteelMachineryCompatibility,
}

BlockEntityEvents.tick((event) => {
  if (event.level.levelData.getGameTime() % 60 !== 0) return

  let level = event.getLevel();
  let blockPosition = event.getPos()
  let block = level.getBlock(blockPosition);

  if (!machineryFluidCompatibility[block.id]) return

  let machineryFluid = getMachineryFluidContents(block)

  if (!machineryFluid || checkableFluids.indexOf(machineryFluid) === -1) return

  if (machineryFluidCompatibility[block.id].indexOf(machineryFluid) === -1) {
    let fluidBlock = Block.getBlock(machineryFluid).getBlockStates()[1]
    event.getLevel().setBlock(blockPosition, fluidBlock, 0, 0)
  }
})

/**
 * 
 * @param {$BlockContainerJS_} machinery 
 * @return {string}
 */
function getMachineryFluidContents(machinery) {
  let machineryEntityData = machinery.getEntityData()

  let fluidData = machineryEntityData.asString.match(/FluidName: ?".*"/)

  if (fluidData) return fluidData[0].split('"')[1]
}