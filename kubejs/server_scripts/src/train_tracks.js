ServerEvents.recipes((event) => {
  for (let id of [
    'create:crafting/kinetics/metal_girder',
    'create:sequenced_assembly/track',
    'createmetallurgy:sequenced_assembly/steel_track',
    'railways:sequenced_assembly/track_biomesoplenty_jacaranda_wide',
    'railways:sequenced_assembly/track_warped_wide',
    'railways:sequenced_assembly/track_jungle_wide',
    'railways:sequenced_assembly/track_mangrove_narrow',
    'railways:sequenced_assembly/track_quark_azalea_narrow',
    'railways:sequenced_assembly/track_biomesoplenty_umbran_wide',
    'railways:sequenced_assembly/track_biomesoplenty_willow_wide',
    'railways:sequenced_assembly/track_spruce_narrow',
    'railways:sequenced_assembly/track_bamboo_wide',
    'railways:sequenced_assembly/track_warped_narrow',
    'railways:sequenced_assembly/track_jungle_narrow',
    'railways:sequenced_assembly/track_biomesoplenty_redwood_narrow',
    'railways:sequenced_assembly/track_oak',
    'railways:sequenced_assembly/track_quark_ancient_narrow',
    'railways:sequenced_assembly/track_stripped_bamboo_wide',
    'railways:sequenced_assembly/track_biomesoplenty_hellbark_wide',
    'railways:sequenced_assembly/track_cherry',
    'railways:sequenced_assembly/track_oak_narrow',
    'railways:sequenced_assembly/track_biomesoplenty_jacaranda',
    'railways:sequenced_assembly/track_biomesoplenty_hellbark',
    'railways:sequenced_assembly/track_biomesoplenty_mahogany',
    'railways:sequenced_assembly/track_ender_narrow',
    'railways:sequenced_assembly/track_quark_blossom_narrow',
    'railways:sequenced_assembly/track_blackstone_wide',
    'railways:sequenced_assembly/track_quark_blossom',
    'railways:sequenced_assembly/track_biomesoplenty_jacaranda_narrow',
    'railways:sequenced_assembly/track_acacia',
    'railways:sequenced_assembly/track_quark_blossom_wide',
    'railways:sequenced_assembly/track_dark_oak_narrow',
    'railways:sequenced_assembly/track_blackstone_narrow',
    'railways:sequenced_assembly/track_stripped_bamboo',
    'railways:sequenced_assembly/track_dark_oak_wide',
    'railways:sequenced_assembly/track_crimson_wide',
    'railways:sequenced_assembly/track_mangrove',
    'railways:sequenced_assembly/track_biomesoplenty_dead_wide',
    'railways:sequenced_assembly/track_cherry_wide',
    'railways:sequenced_assembly/track_acacia_narrow',
    'railways:sequenced_assembly/track_jungle',
    'railways:sequenced_assembly/track_birch_narrow',
    'railways:sequenced_assembly/track_dark_oak',
    'railways:sequenced_assembly/track_acacia_wide',
    'railways:sequenced_assembly/track_biomesoplenty_palm_wide',
    'railways:sequenced_assembly/track_biomesoplenty_magic_wide',
    'railways:sequenced_assembly/track_create_andesite_wide',
    'railways:sequenced_assembly/track_biomesoplenty_mahogany_narrow',
    'railways:sequenced_assembly/track_bamboo_narrow',
    'railways:sequenced_assembly/track_bamboo',
    'railways:sequenced_assembly/track_quark_ancient',
    'railways:sequenced_assembly/track_oak_wide',
    'railways:sequenced_assembly/track_quark_azalea_wide',
    'railways:sequenced_assembly/track_ender',
    'railways:sequenced_assembly/track_crimson_narrow',
    'railways:sequenced_assembly/track_birch_wide',
    'railways:sequenced_assembly/track_spruce',
    'railways:sequenced_assembly/track_biomesoplenty_palm',
    'railways:sequenced_assembly/track_biomesoplenty_redwood',
    'railways:sequenced_assembly/track_biomesoplenty_dead_narrow',
    'railways:sequenced_assembly/track_ender_wide',
    'railways:sequenced_assembly/track_biomesoplenty_willow_narrow',
    'railways:sequenced_assembly/track_biomesoplenty_umbran',
    'railways:sequenced_assembly/track_mangrove_wide',
    'railways:sequenced_assembly/track_biomesoplenty_magic_narrow',
    'railways:sequenced_assembly/track_tieless_wide',
    'railways:sequenced_assembly/track_biomesoplenty_fir_wide',
    'railways:sequenced_assembly/track_phantom',
    'railways:sequenced_assembly/track_create_andesite_narrow',
    'railways:sequenced_assembly/track_quark_ancient_wide',
    'railways:sequenced_assembly/track_biomesoplenty_magic',
    'railways:sequenced_assembly/track_quark_azalea',
    'railways:sequenced_assembly/track_biomesoplenty_umbran_narrow',
    'railways:sequenced_assembly/track_spruce_wide',
    'railways:sequenced_assembly/track_biomesoplenty_dead',
    'railways:sequenced_assembly/track_biomesoplenty_willow',
    'railways:sequenced_assembly/track_biomesoplenty_hellbark_narrow',
    'railways:sequenced_assembly/track_tieless',
    'railways:sequenced_assembly/track_biomesoplenty_fir_narrow',
    'railways:sequenced_assembly/track_crimson',
    'railways:sequenced_assembly/track_biomesoplenty_fir',
    'railways:sequenced_assembly/track_monorail',
    'railways:sequenced_assembly/track_warped',
    'railways:sequenced_assembly/track_biomesoplenty_palm_narrow',
    'railways:sequenced_assembly/track_birch',
    'railways:sequenced_assembly/track_stripped_bamboo_narrow',
    'railways:sequenced_assembly/track_blackstone',
    'railways:sequenced_assembly/track_biomesoplenty_redwood_wide',
    'railways:sequenced_assembly/track_tieless_narrow',
    'railways:sequenced_assembly/track_cherry_narrow',
    'railways:sequenced_assembly/track_biomesoplenty_mahogany_wide',
  ]) {
    event.remove({ id: id })
  }

  event.shaped(
    Item.of('create:metal_girder', 3),
    [
      'AAA',
      'BBB'
    ],
    {
      A: '#forge:plates/steel',
      B: '#forge:ingots/steel'
    }
  )

  let trackItem = 'create:track'
  let trainTrackInter = 'minecraft:andesite_slab'
  event.recipes.create.sequenced_assembly([
    Item.of(trackItem, 16).withChance(120.0),
  ], trainTrackInter, [
    event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'create:metal_girder']),
    event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'tfmg:screw']),
    event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'tfmg:screw']),
    event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'tfmg:screw']),
    event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'tfmg:screw']),
    event.recipes.createPressing(trainTrackInter, trainTrackInter),
  ]).transitionalItem(trainTrackInter).loops(2)

  Ingredient.of('#minecraft:wooden_slabs').itemIds.forEach((slab) => {
    let mod = slab.split(':')[0]
    let prefix = mod === 'minecraft' ? '' : `${mod}_`
    let trackItem = `railways:track_${prefix}${slab.split(':')[1].split('_')[0]}`
    let trainTrackInter = slab
    event.recipes.create.sequenced_assembly([
      Item.of(trackItem, 16).withChance(120.0),
    ], trainTrackInter, [
      event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'create:metal_girder']),
      event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'tfmg:screw']),
      event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'tfmg:screw']),
      event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'tfmg:screw']),
      event.recipes.createDeploying(trainTrackInter, [trainTrackInter, 'tfmg:screw']),
      event.recipes.createPressing(trainTrackInter, trainTrackInter),
    ]).transitionalItem(trainTrackInter).loops(2)
  })
})