const MOBS_AGGRESSIVE = [
  'wildernature:boar'
]

const MOBS_FIGHT_BACK = [
  'wildernature:raccoon'
]


const DEFAULT_MAX_AGGRO_RANGE_SQ = Math.pow(50, 2)
const DEFAULT_MIN_AGGRO_RANGE = 5
const DEFAULT_AGGRO_MOV_SPEED = 2
const DEFAULT_DMG_BOX_SIZE = 2

const MAX_AGGRO_TIME_TICKS = {
  'wildernature:boar': 20 * 30,
  'wildernature:raccoon': 20 * 5
}

const MAX_AGGRO_RANGE_SQ = {
  'wildernature:boar': DEFAULT_MAX_AGGRO_RANGE_SQ,
  'wildernature:raccoon': DEFAULT_MAX_AGGRO_RANGE_SQ
}

const MIN_AGGRO_RANGE = {
  'wildernature:boar': DEFAULT_MIN_AGGRO_RANGE,
}

const AGGRO_MOV_SPEED = {
  'wildernature:boar': DEFAULT_AGGRO_MOV_SPEED,
  'wildernature:raccoon': DEFAULT_AGGRO_MOV_SPEED
}

const DMG_BOX_SIZE = {
  'wildernature:boar': DEFAULT_DMG_BOX_SIZE,
  'wildernature:raccoon': DEFAULT_DMG_BOX_SIZE
}

const MOB_DAMAGE = {
  'wildernature:boar': 2,
  'wildernature:raccoon': 1
}

EntityEvents.hurt(event => {
  let attacker = event.getSource().getPlayer()
  
  if (!attacker) return

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
    MOBS_AGGRESSIVE.indexOf(event.entity.type) === -1 &&
    MOBS_FIGHT_BACK.indexOf(event.entity.type) === -1
  ) return

  /** @type {$Mob_} */
  let mob = event.entity
  let isAttacking = mob.nbt.getCompound('ForgeData').getBoolean('IsAttacking')

  // aggresive non-attacking mobs will scan for nearby players to attack
  if (MOBS_AGGRESSIVE.includes(mob.type) && !isAttacking) {
    let player = mob.level.getNearestPlayer(mob, MIN_AGGRO_RANGE[mob.type])

    if (player && mob.getSensing().hasLineOfSight(player)) {
      console.log(`Aggroing mob ${mob.type} [${mob.nbt}] to player ${player.name}`)
      aggro(mob, player)
      goToPlayer(mob, player)
      
      return
    }
  }

  if (isAttacking) {
    let playerToHurt = mob.level.getNearestPlayer(mob, DMG_BOX_SIZE[mob.type])
    let attackTargetUUID = mob.nbt.getCompound('ForgeData').getString('AttackTarget')
    if (!attackTargetUUID) return
    let playerToAttack = mob.level.getPlayerByUUID(UUID.fromString(attackTargetUUID))

    if (!playerToAttack || mob.getDistanceSq(playerToAttack.x, playerToAttack.y, playerToAttack.z) > MAX_AGGRO_RANGE_SQ[mob.type]) {
      console.log(`mob ${mob.type} [${mob.nbt}] lost aggro - can't find player`)
      deaggro(mob)

      return
    }

    // make mob go to player
    goToPlayer(mob)
    
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
    } else if (event.level.levelData.getGameTime() - mob.nbt.getCompound('ForgeData').getLong('LastAttackTime') > MAX_AGGRO_TIME_TICKS[mob.type]) {
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
  mob.getLookControl().setLookAt(player, 30, 30)
  mob.setTarget(player)
  mob.getNavigation().moveTo(player, AGGRO_MOV_SPEED[mob.type])
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
      LastAttackTime: event.level.levelData.getGameTime(),
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
  mob.setTarget(null)
}

