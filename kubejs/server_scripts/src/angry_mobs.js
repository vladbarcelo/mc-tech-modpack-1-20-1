const MOBS_AGGRESSIVE = [
  'wildernature:boar',
  'wildernature:bison',
  'wildernature:dog',
  'wildernature:cassowary',
  'alexsmobs:gorilla',
  'alexsmobs:capuchin_monkey',
  'alexsmobs:moose',
  'alexsmobs:elephant',
  'alexsmobs:snow_leopard',
  'alexsmobs:kangaroo',
  'alexsmobs:rhinoceros',
  'alexsmobs:caiman',
  'wildlands:grizzly_bear',
]

const MOBS_FIGHT_BACK = [
  'wildernature:raccoon',
  'wildernature:minisheep',
  'alexsmobs:seal',
  'wildlands:sea_lion',
]


const DEFAULT_MAX_AGGRO_RANGE_SQ = Math.pow(50, 2)
const DEFAULT_MIN_AGGRO_RANGE = 5
const DEFAULT_AGGRO_MOV_SPEED = 1.5
const DEFAULT_DMG_BOX_SIZE = 2
const DEFAULT_MAX_AGGRO_TIME = 20 * 15

const MAX_AGGRO_TIME_TICKS = {
  'wildernature:boar': 20 * 60,
  'wildernature:minisheep': 20 * 5,
}

const MAX_AGGRO_RANGE_SQ = {
  'wildernature:raccoon': Math.pow(10, 2),
  'wildernature:red_wolf': Math.pow(150, 2),
  'wildernature:dog': Math.pow(70, 2),
}

const MIN_AGGRO_RANGE = {
}

const AGGRO_MOV_SPEED = {
  'wildernature:cassowary': 2.5,
  'wildernature:red_wolf': 2.5,
  'wildernature:dog': 2.5,
  'wildernature:minisheep': 1,
}

const DMG_BOX_SIZE = {
}

const MOB_DAMAGE = {
  'wildernature:boar': 2,
  'wildernature:raccoon': 1,
  'wildernature:red_wolf': 2,
  'wildernature:dog': 2,
  'wildernature:minisheep': 1,
  'wildernature:cassowary': 1.5,
  'wildernature:bison': 3,
  'alexsmobs:gorilla': 3,
  'alexsmobs:capuchin_monkey': 1,
  'alexsmobs:moose': 3.5,
  'alexsmobs:seal': 2,
  'wildlands:sea_lion': 2,
  'alexsmobs:elephant': 3.5,
  'alexsmobs:snow_leopard': 2.5,
  'alexsmobs:kangaroo': 2,
  'wildlands:grizzly_bear': 3,
}

EntityEvents.hurt(event => {
  let attacker = event.getSource().getPlayer()
  
  if (!attacker || (attacker.isCreative && attacker.isCreative())) return
  
  if (
    MOBS_FIGHT_BACK.indexOf(event.entity.type) === -1
  ) return

  let mob = event.getEntity()

  console.log(`Aggroing mob ${mob.type} [${mob.nbt}] to player ${attacker.name}`)
  aggro(mob, attacker)
  goToPlayer(mob, attacker)
})

MEJSEvents.entityTick(event => {
  if (event.level.levelData.getGameTime() % 10 !== 0) return

  if (
    (MOBS_AGGRESSIVE.indexOf(event.entity.type) === -1 && MOBS_FIGHT_BACK.indexOf(event.entity.type) === -1) ||
    !event.entity.isLiving() ||
    !event.entity.isAlive()
  ) return

  /** @type {$Mob_} */
  let mob = event.entity
  let isAttacking = mob.nbt.getCompound('ForgeData').getBoolean('IsAttacking')
  let isTamed = mob.isTamed ? mob.isTamed() : false
  let hasOwner = mob.getOwner ? mob.getOwner() : false

  // console.log(`mob ${mob.type} [${mob.nbt}] isAttacking: ${isAttacking}, isTamed: ${isTamed}, hasOwner: ${hasOwner}`)

  // aggresive non-attacking mobs will scan for nearby players to attack
  if (
    MOBS_AGGRESSIVE.includes(mob.type) &&
    !isTamed &&
    !hasOwner &&
    !isAttacking
  ) {
    let player = mob.level.getNearestPlayer(mob, (MIN_AGGRO_RANGE[mob.type] || DEFAULT_MIN_AGGRO_RANGE))

    if (player && !player.isCreative() && mob.getSensing().hasLineOfSight(player)) {
      console.log(`Aggroing mob ${mob.type} [${mob.nbt}] to player ${player.name}`)
      aggro(mob, player)
      goToPlayer(mob, player)
      
      return
    }
  }

  if (isAttacking) {
    let playerToHurt = mob.level.getNearestPlayer(mob, (DMG_BOX_SIZE[mob.type] || DEFAULT_DMG_BOX_SIZE))
    let attackTargetUUID = mob.nbt.getCompound('ForgeData').getString('AttackTarget')
    if (!attackTargetUUID) return
    let playerToAttack = mob.level.getPlayerByUUID(UUID.fromString(attackTargetUUID))

    if (!playerToAttack || mob.getDistanceSq(playerToAttack.x, playerToAttack.y, playerToAttack.z) > (MAX_AGGRO_RANGE_SQ[mob.type] || DEFAULT_MAX_AGGRO_RANGE_SQ)) {
      console.log(`mob ${mob.type} [${mob.nbt}] lost aggro - can't find player`)
      deaggro(mob)

      return
    }

    // make mob go to player
    goToPlayer(mob, playerToAttack)
    
    // we have found the player to attack within range
    if (
      playerToHurt &&
      playerToHurt.getUuid().toString() === attackTargetUUID &&
      mob.getSensing().hasLineOfSight(playerToHurt)
    ) {
      // update aggro status
      aggro(mob, playerToHurt)

      // damage player, play animation
      mob.swing('main_hand')
      playerToHurt.attack(MOB_DAMAGE[mob.type])
      playerToHurt.setLastHurtByMob(mob)
    } else if (event.level.levelData.getGameTime() - mob.nbt.getCompound('ForgeData').getLong('LastAttackTime') > (MAX_AGGRO_TIME_TICKS[mob.type] || DEFAULT_MAX_AGGRO_TIME)) {
      // lose aggro due to timeout
      console.log(`mob ${mob.type} [${mob.nbt}] lost aggro due to timeout`)
      deaggro(mob)
    }
  }
})

/**
 * Makes mob go to a player
 * 
 * @param {$Mob_} mob - The mob to set to aggro.
 * @param {$Player_} player - The player to aggro on.
 */
function goToPlayer(mob, player) {
  let playerPos = player.blockPosition()
  mob.getLookControl().setLookAt(playerPos.x, playerPos.y + 1, playerPos.z)
  mob.getNavigation().moveTo(player, (AGGRO_MOV_SPEED[mob.type] || DEFAULT_AGGRO_MOV_SPEED))
}

/**
 * Sets a mob to aggro on a player.
 * 
 * @param {$Mob_} mob - The mob to set to aggro.
 * @param {$Player_} player - The player to aggro on.
 */
function aggro(mob, player) {
  mob.mergeNbt({
    ForgeData: {
      IsAttacking: true,
      LastAttackTime: mob.level.levelData.getGameTime(),
      AttackTarget: player.getUuid().toString()
    }
  })
}

/**
 * Sets a mob to aggro on a player.
 * 
 * @param {$Mob_} mob - The mob to set to aggro.
 */
function deaggro(mob) {
  mob.mergeNbt({
    ForgeData: {
      IsAttacking: false,
      AttackTarget: null,
      LastAttackTime: null,
    }
  })
}

