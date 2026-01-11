let maxStressPerCogWheel = {
  'create:cogwheel': 1024,
  'create:large_cogwheel': 1024,

  'tfmg:aluminum_cogwheel': 73728,
  'tfmg:aluminum_large_cogwheel': 73728,

  'tfmg:bronze_cogwheel': 147456,
  'tfmg:bronze_large_cogwheel': 147456,

  'tfmg:cast_iron_cogwheel': 221184,
  'tfmg:cast_iron_large_cogwheel': 221184,

  'tfmg:steel_cogwheel': 294912,
  'tfmg:steel_large_cogwheel': 294912
}

BlockEntityEvents.tick((event) => {
  if (event.level.levelData.getGameTime() % 60 !== 0) return

  let level = event.getLevel();
  let blockPosition = event.getPos()
  let block = level.getBlock(blockPosition);

  if (!maxStressPerCogWheel[block.id]) return;

  let stressLevel = getWheelStressLevel(block)

  if (stressLevel > maxStressPerCogWheel[block.id]) {
    event.getLevel().destroyBlock(blockPosition, true)
  }
})

/**
 * 
 * @param {$BlockContainerJS_} machinery 
 * @return {string}
 */
function getWheelStressLevel(wheel) {
  let wheelEntityData = wheel.getEntityData()

  let stressData = wheelEntityData.asString.match(/Stress:.*f/)

  if (stressData) return stressData[0].split('f')[0].split(':')[1]
}