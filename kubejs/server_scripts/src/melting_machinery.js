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
  'kubejs:molten_glass',
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

let machineryMeltingPoint = {
  'tfmg:plastic_pipe': global.materialMeltingPointTemps.plastic,
  'tfmg:plastic_smart_fluid_pipe': global.materialMeltingPointTemps.plastic,
  'tfmg:plastic_mechanical_pump': global.materialMeltingPointTemps.plastic,
  'tfmg:aluminum_pipe': global.materialMeltingPointTemps.aluminum,
  'tfmg:aluminum_smart_fluid_pipe': global.materialMeltingPointTemps.aluminum,
  'tfmg:aluminum_mechanical_pump': global.materialMeltingPointTemps.aluminum,
  'tfmg:brass_pipe': global.materialMeltingPointTemps.brass,
  'tfmg:brass_smart_fluid_pipe': global.materialMeltingPointTemps.brass,
  'tfmg:brass_mechanical_pump': global.materialMeltingPointTemps.brass,
  'create:fluid_tank': global.materialMeltingPointTemps.copper,
  'create:fluid_pipe': global.materialMeltingPointTemps.copper,
  'create:fluid_smart_fluid_pipe': global.materialMeltingPointTemps.copper,
  'create:mechanical_pump': global.materialMeltingPointTemps.copper,
  'tfmg:cast_iron_pipe': global.materialMeltingPointTemps.cast_iron,
  'tfmg:cast_iron_smart_fluid_pipe': global.materialMeltingPointTemps.cast_iron,
  'tfmg:cast_iron_mechanical_pump': global.materialMeltingPointTemps.cast_iron,
  'tfmg:steel_fluid_tank': global.materialMeltingPointTemps.steel,
  'tfmg:steel_pipe': global.materialMeltingPointTemps.steel,
  'tfmg:steel_smart_fluid_pipe': global.materialMeltingPointTemps.steel,
  'tfmg:steel_mechanical_pump': global.materialMeltingPointTemps.steel,
  'tfmg:electric_pump': global.materialMeltingPointTemps.steel,
  'copycats:copycat_fluid_pipe': -1,
}

BlockEntityEvents.tick((event) => {
  if (event.level.levelData.getGameTime() % 60 !== 0) return

  let level = event.getLevel();
  let blockPosition = event.getPos()
  let block = level.getBlock(blockPosition);

  if (!machineryMeltingPoint[block.id]) return

  let machineryFluid = getMachineryFluidContents(block)

  if (!machineryFluid || checkableFluids.indexOf(machineryFluid) === -1) return

  let meltingPointTemp = machineryMeltingPoint[block.id]

  if (block.id === 'copycats:copycat_fluid_pipe') {
    // createmetallurgy:tungsten_block
    let actualMachineryMaterial = block.getEntityData().getCompound('Material').getString('Name')
    meltingPointTemp = global.materialMeltingPointTemps[actualMachineryMaterial.split(':')[1].split('_')[0]] || global.materialMeltingPointTemps.zinc
  }

  if (meltingPointTemp < global.fluidTemps[machineryFluid]) {
    // blockstate 1 corresponds to a almost-full fluid block (0 is full, 1 is almost-full, etc.)
    let fluidBlock = Block.getBlock(machineryFluid).getBlockStates()[1]
    /**
     * Value 1 (NOTIFY_NEIGHBORS): Triggers neighbor updates (e.g., updating redstone or observers).
     * Value 2 (BLOCK_UPDATE / UPDATE_CLIENTS): Sends the change to the client to ensure the block is rendered correctly.
     * Value 3 (1 + 2): The standard choice. Notifies neighbors and updates the client visuals.
     * Value 4 (NO_RERENDER): Prevents the block from being re-rendered on the client.
     * Value 16 (IS_MOVING): Used if the block is being moved (like by a piston) to prevent it from dropping as an item during the transition. 
     */
    event.getLevel().setBlock(blockPosition, fluidBlock, 3)
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