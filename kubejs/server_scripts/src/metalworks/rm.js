ServerEvents.recipes((event) => {
  for (let id of [
    'tinore:block_of_tin',
    'tinore:tin_ingot_from_raw_tin_smelting',
    'tinore:tin_ingot_from_deepslate_tin_ore_smelting',
    'tinore:tin_ingot_from_raw_tin_blasting',
    'tinore:tin_ingot_from_deepslate_tin_ore_blasting',
    'immersiveengineering:alloysmelter/bronze',
    'hot_iron:brass_ingot_in_tongs_heating',
    'hot_iron:electrum_ingot_in_tongs_heating',
    'hot_iron:silver_ingot_in_tongs_heating',
    'hot_iron:gold_ingot_in_tongs_heating',
    'hot_iron:copper_ingot_in_tongs_heating',
    'hot_iron:cast_iron_ingot_in_tongs_heating',
    'hot_iron:hot_iron_ingot_from_ingot_in_tongs',
    'hot_iron:iron_ingot_in_tongs',
    'hot_iron:hot_iron_ingot_in_tongs',
    'hot_iron:iron_ingot_in_tongs_heating',
    'hot_iron:iron_ingot_from_ingot_in_tongs',
    'hot_iron:iron_armor_strap',
    'minecraft:iron_leggings',
    'minecraft:iron_chestplate',
    'minecraft:iron_boots',
    'minecraft:iron_helmet',
    'mca:rose_gold_ingot_blasting',
    'mca:rose_gold_ingot_smelting',
    'mca:rose_gold_block',
    'createmetallurgy:pressing/graphite_blank_mold',
    'hot_iron:smithing_tongs_recipe',
    'hot_iron:smithing_anvil_recipe',
    'hot_iron:smithing_hammer_recipe',
    'createmetallurgy:glassed_foundry_lid',
    'create:crafting/kinetics/spout',
    'createlowheated:basic_burner',
    'createmetallurgy:foundry_basin',
    'createmetallurgy:foundry_lid',
    // tinkers
    // casting
    'tconstruct:tools/parts/casting/pick_head_sand_cast',
    'tconstruct:tools/parts/casting/small_axe_head_sand_cast',
    'tconstruct:tools/parts/casting/small_blade_sand_cast',
    'tconstruct:smeltery/seared/melter',
    'tconstruct:smeltery/seared/ingot_gauge',
    'tconstruct:smeltery/seared/fuel_gauge',
    'tconstruct:smeltery/seared/seared_brick',
    'tconstruct:smeltery/casting/seared/smeltery_controller',
    'tconstruct:smeltery/seared/drain',
    'tconstruct:smeltery/seared/drain_retextured',
    'tconstruct:smeltery/seared/fuel_tank',
    // entity melting
    'tconstruct:smeltery/entity_melting/bee',
    'tconstruct:smeltery/entity_melting/blaze',
    'tconstruct:smeltery/entity_melting/creeper',
    'tconstruct:smeltery/entity_melting/drowned',
    'tconstruct:smeltery/entity_melting/ender',
    'tconstruct:smeltery/entity_melting/ender_slime',
    'tconstruct:smeltery/entity_melting/frog',
    'tconstruct:smeltery/entity_melting/guardian',
    'tconstruct:smeltery/entity_melting/illager',
    // 'tconstruct:smeltery/entity_melting/iron_golem'
    'tconstruct:smeltery/entity_melting/magma_cube',
    'tconstruct:smeltery/entity_melting/meat_soup',
    'tconstruct:smeltery/entity_melting/night_vision',
    'tconstruct:smeltery/entity_melting/phantom',
    'tconstruct:smeltery/entity_melting/piglin',
    'tconstruct:smeltery/entity_melting/regeneration',
    'tconstruct:smeltery/entity_melting/shulker',
    'tconstruct:smeltery/entity_melting/silverfish',
    'tconstruct:smeltery/entity_melting/skeletons',
    'tconstruct:smeltery/entity_melting/sky_slime',
    'tconstruct:smeltery/entity_melting/slime',
    'tconstruct:smeltery/entity_melting/snow_golem',
    'tconstruct:smeltery/entity_melting/spider',
    'tconstruct:smeltery/entity_melting/strength',
    'tconstruct:smeltery/entity_melting/strider',
    'tconstruct:smeltery/entity_melting/swiftness',
    'tconstruct:smeltery/entity_melting/terracube',
    'tconstruct:smeltery/entity_melting/turtle',
    'tconstruct:smeltery/entity_melting/villager',
    'tconstruct:smeltery/entity_melting/water_breathing',
    'tconstruct:smeltery/entity_melting/wither',
    'tconstruct:smeltery/entity_melting/zombie',
    'tfmg:crafting/fireproof_bricks',
  ]) {
    event.remove({ id: id })
  }

  for (let metal of global.allMetals) {

    event.remove({ id: `createmetallurgy:casting_in_table/${metal}/ingot` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/ingot_sand_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/ingot_gold_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/wire_sand_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/wire_gold_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/nugget_gold_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/plate_gold_cast` })
    event.remove({ id: `tconstruct:smeltery/casting/metal/${metal}/plate_sand_cast` })

    for (let part of global.toolParts) {
      let partTool = part.split('_')[0]
  
      for (let id of [
        `minecraft:wooden_${partTool}`,
  
        `hot_iron:hot_${metal}_${part}_cooling`,
        `hot_iron:hot_${metal}_${part}_recipe`,
        `hot_iron:hot_${metal}_${part}_forging`,
        `hot_iron:${metal}_${part}_polishing`,
        `hot_iron:polished_${metal}_${part}_heating`,
        `hot_iron:${metal}_${part}_heating`,
        `minecraft:${metal}_${partTool}`,
    
        `hot_iron:golden_${part}_forging`,
        `hot_iron:golden_${part}_polishing`,
        `minecraft:golden_${partTool}`,
    
        `create_sa:${metal}_${partTool}_recipe`,
    
        `create_sa:${metal}_${partTool}_recipe`,
    
        `create_sa:${metal}_${partTool}_recipe`,
    
        `tfmg:crafting/tools/${metal}_${partTool}`,
        `immersiveengineering:crafting/${partTool}_${metal}`,
    
        `tfmg:crafting/tools/${metal}_${partTool}`,
    
        `tfmg:crafting/tools/${metal}_${partTool}`,
    
        `createloveandwar:${metal}_${partTool}`
      ]) {
        event.remove({ id: id })
      }
    }
  }
});