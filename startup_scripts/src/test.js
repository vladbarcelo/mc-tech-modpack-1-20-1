/**
 * @param {import("packages/com/simibubi/create/content/fluids/$OpenEndedPipe").$OpenEndedPipe$Type} pipe 
 * @param {import("packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS").$FluidStackJS$Type} fluid 
 */
function pipeHandler(pipe, fluid) {
  let pipePosition = pipe.getPos()
  pipe.getWorld().setBlock(pipePosition, Block.getBlock('minecraft:water').getBaseBlockState(), 0, 0)
}