// config

const MIN_HEARTS_IGNORE_CRIME = {
  thievery: 5,
  vandalism: 10
}

const CRIME_HEARTS_LOSS = {
  thievery: 10,
  vandalism: 20
}

const MIN_HEARTS_PERMIT_RESIDENCY = 5


/** @type {$Class_<$VillagerEntityMCA_>} */
const VillagerEntityMCAClass = Java.loadClass('forge.net.mca.entity.VillagerEntityMCA')

/** @type {$Class_<$VillageManager_>} */
const VillageManager = Java.loadClass('forge.net.mca.server.world.data.VillageManager')

const Integer = Java.loadClass('java.lang.Integer')

ServerEvents.tags('block', event => {
  event.add('village_crime:thievery', 'immersiveengineering:crate')
  event.add('village_crime:thievery', 'immersiveengineering:crafting_table')
})

const Thievery_BlocksRClick = [
  'village_crime:thievery',
  'forge:chests',
]

const CrimeWarnings = {
  thievery: [
    "Hey! That's not yours!",
    "Don't touch that!",
    "You have been warned, thief!"
  ],
  vandalism: [
    "Don't touch that!",
    "You have been warned, vandal!"
  ]
}

const CrimeAlarms = {
  thievery: [
    "Guards! Thief! Thief!",
    "That's mine! Guards! Guards!",
    "Somebody, help! I am being robbed!"
  ],
  vandalism: [
    "Guards! Somebody is breaking our stuff!",
    "Somebody, help! Our stuff is being destroyed!",
    "Help! My home is being vandalized!"
  ]
}

BlockEvents.rightClicked('', event => {
  if (event.block.hasTag('minecraft:beds')) {
    requestVillageResidence(event)
    return
  }

  for (let tag of Thievery_BlocksRClick) {
    if (event.block.hasTag(tag)) {
      commitCrime(event, 'thievery')
      return
    }
  }
})

BlockEvents.broken('', event => {
  if (!event.player) return
  commitCrime(event, 'vandalism')
})


/**
 * Commits a crime against a village.
 * 
 * @param {$BlockRightClickedEventJS_} event - The event that triggered the crime.
 * @param {string} crimeType - The type of crime. Can be 'thievery' or 'vandalism'.
 */
function commitCrime(event, crimeType) {
  if (event.player.isCreative()) return

  console.log(`Checking possible crime ${crimeType} at ${event.block.pos}`)

  /** @type {$VillageManager_} */
  let vm = VillageManager.get(event.getLevel())

  let village = vm.findNearestVillage(event.block.pos, 64)
  
  if (!village.isPresent()) return

  if (!village.get().autoScan) {
    console.warn('[VillageCrimeJS] Warning: this village is not being auto-scanned. Please enable auto-scan in MCA settings.')
    village.get().toggleAutoScan()
  }

  console.log(`Detected village presence ${village.get().getName()}, checking for building`)
  
  let building = village.get().getBuildingAt(event.block.pos)
  
  if (!building.isPresent()) return

  /** @type {$BlockPos_} */
  let playerSpawnPos = event.player.getRespawnPosition()

  console.log(`Detected building presence (${building.get().getType()}), checking if player lives in this building`)

  if (playerSpawnPos && building.get().containsPos(playerSpawnPos)) return
  
  console.log(`Player commited crime "${crimeType}" at ${event.block.pos} in village ${village.get().getName()} building ${building.get().getType()}. Searching for witnesses...`)

  let crimeWasReported = false
  let playerWasWarned = false

  let nearbyVillagers = event.getLevel().getEntitiesOfClass(VillagerEntityMCAClass, AABB.ofBlock(event.block.pos).inflate(32))

  nearbyVillagers.forEach(
    /** @param {$VillagerEntityMCA_} villager */
    villager => {
      if (
        !villager.canEntityBeSeen(event.player) ||
        villager.isBaby() ||
        villager.isSleeping()
      ) return

      // handle marriage status
      /** @type {$Relationship_<$VillagerEntityMCA_} */
      let relationship = villager.getRelationships()

      if (
        relationship.getPartnerUUID().isPresent() &&
        relationship.getPartnerUUID().get().toString === event.player.getStringUuid()
      ) {
        return
      }

      // crime was seen by somebody, we'll consider it reported
      crimeWasReported = true
      
      console.log(`Crime was reported by ${villager.getName().getString()}`);

      // lose reputation
      villager.getVillagerBrain().getMemoriesForPlayer(event.player).modHearts(-CRIME_HEARTS_LOSS[crimeType])

      // we'll handle the guards later
      if (villager.isGuard()) return

      // report crime
      event.player.tell(`${villager.getName().getString()}: ${global.getRandomArrValue(CrimeAlarms[crimeType])}`)
  })

  if (!crimeWasReported) return

  nearbyVillagers.forEach(
    /** @param {$VillagerEntityMCA_} guard */
    guard => {
      if (!guard.isGuard()) return

      let heartsForInstantPardon = MIN_HEARTS_IGNORE_CRIME[crimeType]

      let playerVillageReputation = village.get().getReputation(event.player)
      let playerGuardReputation = guard.getVillagerBrain().getMemoriesForPlayer(event.player).getHearts()
      let playerReputation = Math.max(playerVillageReputation, playerGuardReputation)

      // good reputation
      if (playerReputation > heartsForInstantPardon) {
        if (!playerWasWarned) {
          event.player.tell(`${guard.getName().getString()}: ${global.getRandomArrValue(CrimeWarnings[crimeType])}`)
          playerWasWarned = true
        }
      } else if (playerReputation === heartsForInstantPardon || playerReputation === -1 || playerReputation === 0) {
        // last pardonable offence
        if (!playerWasWarned) {
          event.player.tell(`${guard.getName().getString()}: This is the last time we will look the other way. One more crime - and judgement will be swift, and I will see to it personally.`)
          playerWasWarned = true
        }
      } else {
        if (!playerWasWarned) {
          event.player.tell(`${guard.getName().getString()}: We've had enough of you! Go away or face the consequences!`)
          playerWasWarned = true
        }

        // add bounty, otherwise guard won't attack
        guard.getBrain().setMemory('mca:small_bounty', Integer(`${guard.getSmallBounty() + 10}`))
        guard.getBrain().setMemory('minecraft:attack_target', event.getPlayer());
      }
    }
  )
}

function requestVillageResidence(event) {
  /** @type {$VillageManager_} */
  let vm = VillageManager.get(event.getLevel())

  let village = vm.findNearestVillage(event.block.pos, 64)
  
  if (!village.isPresent()) return

  let building = village.get().getBuildingAt(event.block.pos)
  
  if (!building.isPresent()) return

  /** @type {$BlockPos_} */
  let playerSpawnPos = event.player.getRespawnPosition()

  if (building.get().containsPos(playerSpawnPos)) return

  let reputation = village.get().getReputation(event.player)

  if (reputation < MIN_HEARTS_PERMIT_RESIDENCY) {
    event.player.tell('You do not have enough reputation to reside here.')
    event.cancel()
  } else {
    event.player.tell('This building is now your home.')
  }
}