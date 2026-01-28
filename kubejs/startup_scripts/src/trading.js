global.VILLAGER_PROFESSIONS = [
  'cleric',
  'armorer',
  'butcher',
  'toolsmith',
  'weaponsmith',
  'leatherworker',

  // sells books, manuals for mods
  'librarian',

  // buys seeds, sells fresh produce
  'farmer',

  // sells animals in cages
  'shepherd',
  'mason',
  
  // sells fish
  'fisherman',

  // sells compass, trasure maps
  'cartographer',

  // sells bows and arrows
  'fletcher',

  'immersiveengineering:engineer',
  'immersiveengineering:machinist',
  'immersiveengineering:electrician',
  'immersiveengineering:outfitter',
  'immersiveengineering:gunsmith',
  'mca.outlaw',
  'mca.guard',
  'mca.archer',
  'mca.adventurer',
  'mca.mercenary',
  'mca.cultist',
  
  // ??? who the fuck is that?
  'forager',
  
  // nothing
  'nitwit',
]

global.productComponents = {}

for (let profession of global.VILLAGER_PROFESSIONS) {
  global[`villager_trades_${profession}_sell`] = []
  global[`villager_trades_${profession}_buy`] = []
}