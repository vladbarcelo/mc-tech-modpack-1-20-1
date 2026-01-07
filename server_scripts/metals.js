// Furnace: up to 700
// Blast Furnace / Alloy kiln: up to 1100
// Tinker's Foundry / Create Metallurgy: up to 1700
// Superheated Create Metallurgy: everything else

// Lead: 328
// Zinc: 420
// Aluminum: 660

// Brass: 905
// Electrum: 960
// Silver: 961
// Gold: 1063
// Copper: 1084
// Cast iron: 1100

// Uranium: 1132
// Constantan: 1221
// Nickel: 1453
// Iron: 1500
// Steel: 1510
// Palladium: 1555

// Platinum: 1770
// Chromium: 1860
// Vanadium: 1900
// Rhodium: 1965
// Tungsten: 3400

ServerEvents.recipes((event) => {
  for (let id of [
    // lead
    'immersiveengineering:crafting/nugget_lead_to_ingot_lead',
    'immersiveengineering:crafting/storage_lead_from_slab',
    'tfmg:crafting/lead_block',
    'immersiveengineering:smelting/ingot_lead3',
    'immersiveengineering:smelting/ingot_lead',
    'immersiveengineering:smelting/ingot_lead_from_dust',
    'tfmg:smelting/lead_ingot_from_crushed',
    'immersiveengineering:smelting/ingot_lead_from_blasting3',
    'immersiveengineering:smelting/ingot_lead_from_blasting',
    'immersiveengineering:smelting/ingot_lead_from_dust_from_blasting',
    'tfmg:smelting/blasting/lead_ingot_from_crushed',
    'tconstruct:smeltery/casting/metal/lead/wire_sand_cast',
    'immersiveengineering:crafting/ingot_lead_to_storage_lead',
    // zinc
    'create:crafting/materials/zinc_ingot_from_decompacting',
    'create:crafting/materials/zinc_ingot_from_compacting',
    'create:crafting/materials/zinc_block_from_compacting',
    'tconstruct:smeltery/casting/metal/zinc/wire_sand_cast',
    'create:smelting/zinc_ingot_from_ore',
    'create:smelting/zinc_ingot_from_crushed',
    'create:smelting/zinc_ingot_from_raw_ore',
    'create:blasting/zinc_ingot_from_raw_ore',
    'create:blasting/zinc_ingot_from_ore',
    'create:blasting/zinc_ingot_from_crushed',
    // aluminum
    'immersiveengineering:crafting/storage_aluminum_to_ingot_aluminum',
    'immersiveengineering:crafting/nugget_aluminum_to_ingot_aluminum',
    'quark:tweaks/crafting/slab_to_block',
    'immersiveengineering:crafting/ingot_aluminum_to_storage_aluminum',
    'tfmg:crafting/aluminum_block',
    'tfmg:crafting/aluminum_from_block',
    'immersiveengineering:crafting/storage_aluminum_from_slab',
    'tconstruct:smeltery/casting/metal/aluminum/wire_sand_cast',
    'tfmg:smelting/aluminum_ingot',
    'immersiveengineering:smelting/ingot_aluminum3',
    'immersiveengineering:smelting/ingot_aluminum',
    'immersiveengineering:smelting/ingot_aluminum_from_dust',
    'tfmg:smelting/blasting/aluminum_ingot',
    'immersiveengineering:smelting/ingot_aluminum_from_blasting',
    'immersiveengineering:smelting/ingot_aluminum_from_blasting3',
    'immersiveengineering:smelting/ingot_aluminum_from_dust_from_blasting',
    // brass
    'create:crafting/materials/brass_ingot_from_decompacting',
    'immersiveengineering:crafting/storage_electrum_to_ingot_electrum',
    'create:crafting/materials/brass_ingot_from_compacting',
    'create:crafting/materials/brass_block_from_compacting',
    'tconstruct:smeltery/casting/metal/brass/wire_sand_cast',
    // silver
    'immersiveengineering:crafting/storage_silver_to_ingot_silver',
    'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
    'immersiveengineering:crafting/ingot_silver_to_storage_silver',
    'immersiveengineering:crafting/storage_silver_from_slab',
    'create:smelting/ingot_silver_compat_immersiveengineering',
    'immersiveengineering:smelting/ingot_silver3',
    'immersiveengineering:smelting/ingot_silver',
    'immersiveengineering:smelting/ingot_silver_from_dust',
    'immersiveengineering:smelting/ingot_silver_from_dust_from_blasting',
    'create:blasting/ingot_silver_compat_immersiveengineering',
    'immersiveengineering:smelting/ingot_silver_from_blasting3',
    'immersiveengineering:smelting/ingot_silver_from_blasting',
    'tconstruct:smeltery/casting/metal/silver/wire_sand_cast',
    // Gold
    'mca:rose_gold_ingot',
    'minecraft:gold_ingot_from_gold_block',
    'minecraft:gold_ingot_from_nuggets',
    'minecraft:gold_block',
    'create:smelting/gold_ingot_from_crushed',
    'quark:tweaks/smelting/raw_gold_bricks_smelt',
    'quark:tweaks/smelting/raw_gold_block_smelt',
    'minecraft:gold_ingot_from_smelting_raw_gold',
    'minecraft:gold_ingot_from_smelting_deepslate_gold_ore',
    'immersiveengineering:smelting/gold_ingot_from_dust',
    'immersiveengineering:smelting/gold_ingot_from_dust_from_blasting',
    'create:blasting/gold_ingot_from_crushed',
    'minecraft:gold_ingot_from_blasting_raw_gold',
    'minecraft:gold_ingot_from_blasting_deepslate_gold_ore',
    'quark:tweaks/blasting/raw_gold_block_blast',
    'quark:tweaks/blasting/raw_gold_bricks_blast',
    'tconstruct:smeltery/casting/metal/gold/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/gold/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/gold/plate_gold_cast',
    'tconstruct:smeltery/casting/metal/gold/wire_gold_cast',
    'tconstruct:smeltery/casting/metal/gold/wire_sand_cast',
    'tconstruct:tools/parts/casting/adze_head_gold_cast',
    'tconstruct:tools/parts/casting/boots_plating_gold_cast',
    'tconstruct:tools/parts/casting/chestplate_plating_gold_cast',
    'tconstruct:tools/parts/casting/helmet_plating_gold_cast',
    'tconstruct:tools/parts/casting/leggings_plating_gold_cast',
    'tconstruct:tools/parts/casting/maille_gold_cast',
    'tconstruct:tools/parts/casting/repair_kit_gold_cast',
    'tconstruct:tools/parts/casting/bow_grip_gold_cast',
    'tconstruct:tools/parts/casting/bow_limb_gold_cast',
    'tconstruct:tools/parts/casting/broad_axe_head_gold_cast',
    'tconstruct:tools/parts/casting/broad_blade_gold_cast',
    'tconstruct:tools/parts/casting/hammer_head_gold_cast',
    'tconstruct:tools/parts/casting/large_plate_gold_cast',
    'tconstruct:tools/parts/casting/pick_head_gold_cast',
    'tconstruct:tools/parts/casting/small_axe_head_gold_cast',
    'tconstruct:tools/parts/casting/small_blade_gold_cast',
    'tconstruct:tools/parts/casting/tool_binding_gold_cast',
    'tconstruct:tools/parts/casting/tool_handle_gold_cast',
    'tconstruct:tools/parts/casting/tough_binding_gold_cast',
    'tconstruct:tools/parts/casting/tough_handle_gold_cast',
    // Copper
    'minecraft:copper_ingot_from_waxed_copper_block',
    'minecraft:copper_ingot',
    'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
    'minecraft:copper_block',
    'create:smelting/copper_ingot_from_crushed',
    'minecraft:copper_ingot_from_smelting_raw_copper',
    'minecraft:copper_ingot_from_smelting_copper_ore',
    'immersiveengineering:smelting/copper_ingot_from_dust',
    'quark:tweaks/smelting/raw_copper_bricks_smelt',
    'quark:tweaks/smelting/raw_copper_block_smelt',
    'immersiveengineering:smelting/copper_ingot_from_dust_from_blasting',
    'create:blasting/copper_ingot_from_crushed',
    'minecraft:copper_ingot_from_blasting_raw_copper',
    'minecraft:copper_ingot_from_blasting_copper_ore',
    'quark:tweaks/blasting/raw_copper_bricks_blast',
    'quark:tweaks/blasting/raw_copper_block_blast',
    'tconstruct:smeltery/casting/metal/copper/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/copper/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/copper/plate_gold_cast',
    'tconstruct:smeltery/casting/metal/copper/wire_gold_cast',
    'tconstruct:smeltery/casting/metal/copper/wire_sand_cast',
    // Cast iron
    'tfmg:crafting/cast_iron_from_block',
    // Uranium
    'immersiveengineering:crafting/storage_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/nugget_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/storage_uranium_from_slab',
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
    'create:smelting/ingot_uranium_compat_immersiveengineering',
    'immersiveengineering:smelting/ingot_uranium3',
    'immersiveengineering:smelting/ingot_uranium',
    'immersiveengineering:smelting/ingot_uranium_from_dust',
    'immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting',
    'create:blasting/ingot_uranium_compat_immersiveengineering',
    'immersiveengineering:smelting/ingot_uranium_from_blasting3',
    'immersiveengineering:smelting/ingot_uranium_from_blasting',
    'tconstruct:smeltery/casting/metal/uranium/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/uranium/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/uranium/plate_gold_cast',
    'tconstruct:smeltery/casting/metal/uranium/wire_gold_cast',
    'tconstruct:smeltery/casting/metal/uranium/wire_sand_cast',
    'tconstruct:smeltery/melting/metal/uranium/chain_boots',
    'tconstruct:smeltery/melting/metal/uranium/chain_chestplate',
    'tconstruct:smeltery/melting/metal/uranium/chain_helmet',
    'tconstruct:smeltery/melting/metal/uranium/chain_leggings',
    'tconstruct:smeltery/melting/metal/uranium/ore_singular',
    'tconstruct:smeltery/melting/metal/uranium/raw',
    'tconstruct:smeltery/melting/metal/uranium/raw_block',
    'tconstruct:smeltery/melting/metal/uranium/axes',
    'tconstruct:smeltery/melting/metal/uranium/block',
    'tconstruct:smeltery/melting/metal/uranium/boots',
    'tconstruct:smeltery/melting/metal/uranium/chestplate',
    'tconstruct:smeltery/melting/metal/uranium/cluster',
    'tconstruct:smeltery/melting/metal/uranium/dust',
    'tconstruct:smeltery/melting/metal/uranium/helmet',
    'tconstruct:smeltery/melting/metal/uranium/ingot',
    'tconstruct:smeltery/melting/metal/uranium/leggings',
    'tconstruct:smeltery/melting/metal/uranium/nugget',
    'tconstruct:smeltery/melting/metal/uranium/plate',
    'tconstruct:smeltery/melting/metal/uranium/raw_nugget',
    'tconstruct:smeltery/melting/metal/uranium/rod',
    'tconstruct:smeltery/melting/metal/uranium/sheetmetal',
    'tconstruct:smeltery/melting/metal/uranium/shovel',
    'tconstruct:smeltery/melting/metal/uranium/sword',
    'tconstruct:smeltery/melting/metal/uranium/wire',
    'tconstruct:tools/materials/melting/uranium',
    // Constantan
    'immersiveengineering:crafting/storage_constantan_to_ingot_constantan',
    'immersiveengineering:crafting/nugget_constantan_to_ingot_constantan',
    'immersiveengineering:crafting/storage_constantan_from_slab',
    'immersiveengineering:crafting/ingot_constantan_to_storage_constantan',
    'immersiveengineering:smelting/ingot_constantan_from_dust',
    'immersiveengineering:smelting/ingot_constantan_from_dust_from_blasting',
    'tconstruct:smeltery/casting/metal/constantan/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/constantan/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/constantan/plate_gold_cast',
    'tconstruct:smeltery/casting/metal/constantan/wire_gold_cast',
    'tconstruct:smeltery/casting/metal/constantan/wire_sand_cast',
    'tconstruct:smeltery/melting/metal/constantan/chain_boots',
    'tconstruct:smeltery/melting/metal/constantan/chain_chestplate',
    'tconstruct:smeltery/melting/metal/constantan/chain_helmet',
    'tconstruct:smeltery/melting/metal/constantan/chain_leggings',
    'tconstruct:smeltery/melting/metal/constantan/ore_singular',
    'tconstruct:smeltery/melting/metal/constantan/raw',
    'tconstruct:smeltery/melting/metal/constantan/raw_block',
    'tconstruct:smeltery/melting/metal/constantan/axes',
    'tconstruct:smeltery/melting/metal/constantan/block',
    'tconstruct:smeltery/melting/metal/constantan/boots',
    'tconstruct:smeltery/melting/metal/constantan/chestplate',
    'tconstruct:smeltery/melting/metal/constantan/cluster',
    'tconstruct:smeltery/melting/metal/constantan/dust',
    'tconstruct:smeltery/melting/metal/constantan/helmet',
    'tconstruct:smeltery/melting/metal/constantan/ingot',
    'tconstruct:smeltery/melting/metal/constantan/leggings',
    'tconstruct:smeltery/melting/metal/constantan/nugget',
    'tconstruct:smeltery/melting/metal/constantan/plate',
    'tconstruct:smeltery/melting/metal/constantan/raw_nugget',
    'tconstruct:smeltery/melting/metal/constantan/rod',
    'tconstruct:smeltery/melting/metal/constantan/sheetmetal',
    'tconstruct:smeltery/melting/metal/constantan/shovel',
    'tconstruct:smeltery/melting/metal/constantan/sword',
    'tconstruct:smeltery/melting/metal/constantan/wire',
    'tconstruct:tools/materials/melting/constantan',
    // Nickel
    'tfmg:crafting/nickel_from_block',
    'immersiveengineering:crafting/storage_nickel_to_ingot_nickel',
    'immersiveengineering:crafting/nugget_nickel_to_ingot_nickel',
    'immersiveengineering:crafting/storage_nickel_from_slab',
    'tfmg:crafting/nickel_block',
    'tfmg:smelting/nickel_ingot_from_crushed',
    'immersiveengineering:smelting/ingot_nickel3',
    'immersiveengineering:smelting/ingot_nickel',
    'tfmg:smelting/blasting/nickel_ingot_from_crushed',
    'immersiveengineering:smelting/ingot_nickel_from_blasting3',
    'immersiveengineering:smelting/ingot_nickel_from_blasting',
    'tconstruct:smeltery/casting/metal/nickel/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/nickel/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/nickel/plate_gold_cast',
    'tconstruct:smeltery/casting/metal/nickel/wire_gold_cast',
    'tconstruct:smeltery/casting/metal/nickel/wire_sand_cast',
    'tconstruct:smeltery/melting/metal/nickel/chain_boots',
    'tconstruct:smeltery/melting/metal/nickel/chain_chestplate',
    'tconstruct:smeltery/melting/metal/nickel/chain_helmet',
    'tconstruct:smeltery/melting/metal/nickel/chain_leggings',
    'tconstruct:smeltery/melting/metal/nickel/ore_singular',
    'tconstruct:smeltery/melting/metal/nickel/raw',
    'tconstruct:smeltery/melting/metal/nickel/raw_block',
    'tconstruct:smeltery/melting/metal/nickel/axes',
    'tconstruct:smeltery/melting/metal/nickel/block',
    'tconstruct:smeltery/melting/metal/nickel/boots',
    'tconstruct:smeltery/melting/metal/nickel/chestplate',
    'tconstruct:smeltery/melting/metal/nickel/cluster',
    'tconstruct:smeltery/melting/metal/nickel/dust',
    'tconstruct:smeltery/melting/metal/nickel/helmet',
    'tconstruct:smeltery/melting/metal/nickel/ingot',
    'tconstruct:smeltery/melting/metal/nickel/leggings',
    'tconstruct:smeltery/melting/metal/nickel/nugget',
    'tconstruct:smeltery/melting/metal/nickel/plate',
    'tconstruct:smeltery/melting/metal/nickel/raw_nugget',
    'tconstruct:smeltery/melting/metal/nickel/rod',
    'tconstruct:smeltery/melting/metal/nickel/sheetmetal',
    'tconstruct:smeltery/melting/metal/nickel/shovel',
    'tconstruct:smeltery/melting/metal/nickel/sword',
    'tconstruct:smeltery/melting/metal/nickel/wire',
    'tconstruct:tools/materials/melting/nickel',
    // Iron
    'minecraft:iron_ingot_from_iron_block',
    'minecraft:iron_ingot_from_nuggets',
    'tfmg:crafting/cast_iron_block',
    'minecraft:iron_block',
    'create:smelting/iron_ingot_from_crushed',
    'minecraft:iron_ingot_from_smelting_raw_iron',
    'minecraft:iron_ingot_from_smelting_deepslate_iron_ore',
    'immersiveengineering:smelting/iron_ingot_from_dust',
    'quark:tweaks/smelting/raw_iron_bricks_smelt',
    'quark:tweaks/smelting/raw_iron_block_smelt',
    'immersiveengineering:smelting/iron_ingot_from_dust_from_blasting',
    'create:blasting/iron_ingot_from_crushed',
    'minecraft:iron_ingot_from_blasting_raw_iron',
    'minecraft:iron_ingot_from_blasting_deepslate_iron_ore',
    'quark:tweaks/blasting/raw_iron_bricks_blast',
    'quark:tweaks/blasting/raw_iron_block_blast',
    'create_tinkers_compat:raw_iron_melt',
    'tconstruct:smeltery/casting/metal/iron/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/iron/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/iron/plate_gold_cast',
    'tconstruct:smeltery/casting/metal/iron/wire_gold_cast',
    'tconstruct:smeltery/casting/metal/iron/wire_sand_cast',
    'tconstruct:smeltery/melting/metal/iron/chain_boots',
    'tconstruct:smeltery/melting/metal/iron/chain_chestplate',
    'tconstruct:smeltery/melting/metal/iron/chain_helmet',
    'tconstruct:smeltery/melting/metal/iron/chain_leggings',
    'tconstruct:smeltery/melting/metal/iron/ore_singular',
    'tconstruct:smeltery/melting/metal/iron/raw',
    'tconstruct:smeltery/melting/metal/iron/raw_block',
    'tconstruct:smeltery/melting/metal/iron/axes',
    'tconstruct:smeltery/melting/metal/iron/block',
    'tconstruct:smeltery/melting/metal/iron/boots',
    'tconstruct:smeltery/melting/metal/iron/chestplate',
    'tconstruct:smeltery/melting/metal/iron/cluster',
    'tconstruct:smeltery/melting/metal/iron/dust',
    'tconstruct:smeltery/melting/metal/iron/helmet',
    'tconstruct:smeltery/melting/metal/iron/ingot',
    'tconstruct:smeltery/melting/metal/iron/leggings',
    'tconstruct:smeltery/melting/metal/iron/nugget',
    'tconstruct:smeltery/melting/metal/iron/plate',
    'tconstruct:smeltery/melting/metal/iron/raw_nugget',
    'tconstruct:smeltery/melting/metal/iron/rod',
    'tconstruct:smeltery/melting/metal/iron/sheetmetal',
    'tconstruct:smeltery/melting/metal/iron/shovel',
    'tconstruct:smeltery/melting/metal/iron/sword',
    'tconstruct:smeltery/melting/metal/iron/wire',
    'tconstruct:tools/materials/melting/iron',
    // Steel
    'createmetallurgy:steel_ingots_from_block',
    'tfmg:crafting/steel_from_block',
    'createloveandwar:crafting/steel_from_nuggets',
    'immersiveengineering:crafting/storage_steel_from_slab',
    'createmetallurgy:steel_block_from_steel_ingots',
    'immersiveengineering:smelting/ingot_steel_from_dust',
    'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting',
    'tconstruct:smeltery/casting/metal/steel/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/steel/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/steel/plate_gold_cast',
    'tconstruct:smeltery/casting/metal/steel/wire_gold_cast',
    'tconstruct:smeltery/casting/metal/steel/wire_sand_cast',
    'tconstruct:smeltery/melting/metal/steel/axes',
    'tconstruct:smeltery/melting/metal/steel/block',
    'tconstruct:smeltery/melting/metal/steel/boots',
    'tconstruct:smeltery/melting/metal/steel/chestplate',
    'tconstruct:smeltery/melting/metal/steel/cluster',
    'tconstruct:smeltery/melting/metal/steel/dust',
    'tconstruct:smeltery/melting/metal/steel/helmet',
    'tconstruct:smeltery/melting/metal/steel/ingot',
    'tconstruct:smeltery/melting/metal/steel/leggings',
    'tconstruct:smeltery/melting/metal/steel/nugget',
    'tconstruct:smeltery/melting/metal/steel/plate',
    'tconstruct:smeltery/melting/metal/steel/raw',
    'tconstruct:smeltery/melting/metal/steel/raw_block',
    'tconstruct:smeltery/melting/metal/steel/raw_nugget',
    'tconstruct:smeltery/melting/metal/steel/rod',
    'tconstruct:smeltery/melting/metal/steel/sheetmetal',
    'tconstruct:smeltery/melting/metal/steel/shovel',
    'tconstruct:smeltery/melting/metal/steel/sword',
    'tconstruct:smeltery/melting/metal/steel/wire',
    'tconstruct:tools/materials/melting/steel',
    // Palladium
    // Platinum
    // Chromium
    // Vanadium
    'vintageimprovements:craft/vanadium_block_to_ingots',
    // Rhodium
    // Tungsten
    'createmetallurgy:tungsten_ingot_from_block',
    'createmetallurgy:tungsten_ingot_from_nuggets',
    'createloveandwar:crafting/tungsten_from_nuggets',
    'createmetallurgy:tungsten_block_from_ingots',
    'createloveandwar:tungsten_block',
    'createloveandwar:tungsten_from_smelting_deepslate_tungsten_ore',
    'createloveandwar:tungsten_from_smelting_raw_tungsten',
    'createloveandwar:tungsten_from_smelting_crushed_tungsten',
    'createloveandwar:tungsten_from_blasting_crushed_tungsten',
    'createloveandwar:tungsten_from_blasting_raw_tungsten',
    'createloveandwar:tungsten_from_blasting_deepslate_tungsten_ore',
    'createmetallurgy:melting/tungsten/nugget',
    'createmetallurgy:melting/tungsten/plate',
    'createmetallurgy:melting/tungsten/wire',
    'createmetallurgy:melting/tungsten/ingot',
    'createmetallurgy:melting/wolframite/dust',
    'tconstruct:smeltery/casting/metal/tungsten/ingot_gold_cast',
    'tconstruct:smeltery/casting/metal/tungsten/nugget_gold_cast',
    'tconstruct:smeltery/casting/metal/tungsten/plate_gold_cast',
    'tconstruct:smeltery/casting/metal/tungsten/wire_gold_cast',
    'tconstruct:smeltery/casting/metal/tungsten/wire_sand_cast',
    'tconstruct:smeltery/melting/metal/tungsten/block',
    'tconstruct:smeltery/melting/metal/tungsten/ingot',
    'tconstruct:smeltery/melting/metal/tungsten/nugget',
    'tconstruct:smeltery/melting/metal/tungsten/ore_dense',
    'tconstruct:smeltery/melting/metal/tungsten/ore_singular',
    'tconstruct:smeltery/melting/metal/tungsten/ore_sparse',
    'tconstruct:smeltery/melting/metal/tungsten/raw',
    'tconstruct:smeltery/melting/metal/tungsten/raw_block',
  ]) {
    event.remove({ id: id })
  }

  // Lead
  event.smelting('kubejs:hot_lead_ingot', '#forge:dusts/lead')
  event.smelting('kubejs:hot_lead_ingot', '#forge:raw_materials/lead')
  event.smelting('kubejs:hot_lead_ingot', '#forge:ores/lead')
  event.smelting('kubejs:hot_lead_ingot', 'create:crushed_raw_lead')
  event.recipes.tfmg.industrial_blasting("#forge:dusts/lead", [Fluid.of(global.moltenMetals.lead, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("#forge:ingots/lead", [Fluid.of(global.moltenMetals.lead, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("create:crushed_raw_lead", [Fluid.of(global.moltenMetals.lead, 90), Fluid.of("tfmg:molten_slag", 50)], 1);
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.lead, 90), '#forge:dusts/lead', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.lead, 10), '#forge:nuggets/lead', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.lead, 90), '#forge:ingots/lead', 40, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.lead, 90), 'create:crushed_raw_lead', 30, 'heated');
  event.recipes.create.splashing(global.ingotDictionary.lead, 'kubejs:hot_lead_ingot')
  // event.recipes.create.mixing(global.ingotDictionary.lead, '#forge:dusts/lead').heated()

  // Zinc
  event.smelting('kubejs:hot_zinc_ingot', '#forge:dusts/zinc')
  event.smelting('kubejs:hot_zinc_ingot', '#forge:raw_materials/zinc')
  event.smelting('kubejs:hot_zinc_ingot', '#forge:ores/zinc')
  event.smelting('kubejs:hot_zinc_ingot', 'create:crushed_raw_zinc')
  event.recipes.tfmg.industrial_blasting("#forge:dusts/zinc", [Fluid.of(global.moltenMetals.zinc, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("#forge:ingots/zinc", [Fluid.of(global.moltenMetals.zinc, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("create:crushed_raw_zinc", [Fluid.of(global.moltenMetals.zinc, 90), Fluid.of("tfmg:molten_slag", 50)], 1);
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.zinc, 90), '#forge:dusts/zinc', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.zinc, 10), '#forge:nuggets/zinc', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.zinc, 90), '#forge:ingots/zinc', 40, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.zinc, 90), 'create:crushed_raw_zinc', 30, 'heated');
  event.recipes.create.splashing(global.ingotDictionary.zinc, 'kubejs:hot_zinc_ingot')
  // event.recipes.create.mixing(global.ingotDictionary.zinc, '#forge:dusts/zinc').heated()

  // Aluminum
  event.smelting('kubejs:hot_aluminum_ingot', '#forge:dusts/aluminum')
  event.smelting('kubejs:hot_aluminum_ingot', '#forge:raw_materials/aluminum')
  event.smelting('kubejs:hot_aluminum_ingot', '#forge:ores/aluminum')
  event.smelting('kubejs:hot_aluminum_ingot', 'create:crushed_raw_aluminum')
  event.recipes.tfmg.industrial_blasting("#forge:dusts/aluminum", [Fluid.of(global.moltenMetals.aluminum, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("#forge:ingots/aluminum", [Fluid.of(global.moltenMetals.aluminum, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("create:crushed_raw_aluminum", [Fluid.of(global.moltenMetals.aluminum, 90), Fluid.of("tfmg:molten_slag", 50)], 1);
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.aluminum, 90), '#forge:dusts/aluminum', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.aluminum, 10), '#forge:nuggets/aluminum', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.aluminum, 90), '#forge:ingots/aluminum', 40, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.aluminum, 90), 'create:crushed_raw_aluminum', 30, 'heated');
  event.recipes.create.splashing(global.ingotDictionary.aluminum, 'kubejs:hot_aluminum_ingot')
  // event.recipes.create.mixing(global.ingotDictionary.aluminum, '#forge:dusts/aluminum').heated()

  // === Blast Furnace ===
  // Brass
  event.recipes.tfmg.industrial_blasting("#forge:dusts/brass", [Fluid.of(global.moltenMetals.brass, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("#forge:ingots/brass", [Fluid.of(global.moltenMetals.brass, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.brass, 90), '#forge:dusts/brass', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.brass, 10), '#forge:nuggets/brass', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.brass, 90), '#forge:ingots/brass', 40, 'heated')
  event.recipes.create.splashing(global.ingotDictionary.brass, 'kubejs:hot_brass_ingot')
  // event.recipes.create.mixing(global.ingotDictionary.brass, '#forge:dusts/brass').heated()

  // Electrum
  event.remove({ id: 'createaddition:mixing/electrum' })
  event.recipes.tfmg.industrial_blasting("#forge:dusts/electrum", [Fluid.of(global.moltenMetals.electrum, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("#forge:ingots/electrum", [Fluid.of(global.moltenMetals.electrum, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.electrum, 90), '#forge:dusts/electrum', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.electrum, 10), '#forge:nuggets/electrum', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.electrum, 90), '#forge:ingots/electrum', 40, 'heated')
  event.recipes.create.splashing(global.ingotDictionary.electrum, 'kubejs:hot_electrum_ingot')
  // event.recipes.create.mixing(global.ingotDictionary.electrum, '#forge:dusts/electrum').heated()

  // Silver
  event.recipes.tfmg.industrial_blasting("#forge:dusts/silver", [Fluid.of(global.moltenMetals.silver, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("#forge:ingots/silver", [Fluid.of(global.moltenMetals.silver, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("create:crushed_raw_silver", [Fluid.of(global.moltenMetals.silver, 90), Fluid.of("tfmg:molten_slag", 50)], 1);
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.silver, 90), '#forge:dusts/silver', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.silver, 10), '#forge:nuggets/silver', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.silver, 90), '#forge:ingots/silver', 40, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.silver, 90), 'create:crushed_raw_silver', 30, 'heated');
  event.recipes.create.splashing(global.ingotDictionary.silver, 'kubejs:hot_silver_ingot')
  // event.recipes.create.mixing(global.ingotDictionary.silver, '#forge:dusts/silver').heated()

  // Gold
  event.recipes.tfmg.industrial_blasting("#forge:dusts/gold", [Fluid.of(global.moltenMetals.gold, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("#forge:ingots/gold", [Fluid.of(global.moltenMetals.gold, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("create:crushed_raw_gold", [Fluid.of(global.moltenMetals.gold, 90), Fluid.of("tfmg:molten_slag", 50)], 1);
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.gold, 90), '#forge:dusts/gold', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.gold, 10), '#forge:nuggets/gold', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.gold, 90), '#forge:ingots/gold', 40, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.gold, 90), 'create:crushed_raw_gold', 30, 'heated');
  event.recipes.create.splashing(global.ingotDictionary.gold, 'kubejs:hot_gold_ingot')
  // event.recipes.create.mixing(global.ingotDictionary.gold, '#forge:dusts/gold').heated()

  // Copper
  event.recipes.tfmg.industrial_blasting("#forge:dusts/copper", [Fluid.of(global.moltenMetals.copper, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("#forge:ingots/copper", [Fluid.of(global.moltenMetals.copper, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.tfmg.industrial_blasting("create:crushed_raw_copper", [Fluid.of(global.moltenMetals.copper, 90), Fluid.of("tfmg:molten_slag", 50)], 1);
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.copper, 90), '#forge:dusts/copper', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.copper, 10), '#forge:nuggets/copper', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.copper, 90), '#forge:ingots/copper', 40, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.copper, 90), 'create:crushed_raw_copper', 30, 'heated');
  event.recipes.create.splashing(global.ingotDictionary.copper, 'kubejs:hot_copper_ingot')
  // event.recipes.create.mixing(global.ingotDictionary.copper, '#forge:dusts/copper').heated()

  // Cast iron
  event.recipes.tfmg.industrial_blasting("#forge:ingots/cast_iron", [Fluid.of(global.moltenMetals.cast_iron, 90), Fluid.of("tfmg:molten_slag", 10)], 1);
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.cast_iron, 90), '#forge:ingots/cast_iron', 40, 'heated')
  event.recipes.create.splashing(global.ingotDictionary.cast_iron, 'kubejs:hot_cast_iron_ingot')

  // Metallurgy > 1100
  // Uranium
  // event.recipes.create.mixing(global.ingotDictionary.uranium, '#forge:dusts/uranium').heated()
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.uranium, 90), 'create:crushed_raw_uranium', 30, 'heated');
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.uranium, 90), '#forge:dusts/uranium', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.uranium, 10), '#forge:nuggets/uranium', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.uranium, 90), '#forge:ingots/uranium', 40, 'heated')

  // Constantan
  event.remove({ id: "immersiveengineering:alloysmelter/constantan" })
  event.remove({ id: "createaddition:compat/immersiveengineering/constantan" })
  // event.recipes.create.mixing(global.ingotDictionary.constantan, '#forge:dusts/constantan').heated()
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.constantan, 90), '#forge:dusts/constantan', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.constantan, 10), '#forge:nuggets/constantan', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.constantan, 90), '#forge:ingots/constantan', 40, 'heated')

  // Nickel
  // event.recipes.create.mixing(global.ingotDictionary.nickel, '#forge:dusts/nickel').heated()
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.nickel, 90), 'create:crushed_raw_nickel', 30, 'heated');
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.nickel, 90), '#forge:dusts/nickel', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.nickel, 10), '#forge:nuggets/nickel', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.nickel, 90), '#forge:ingots/nickel', 40, 'heated')

  // Iron
  // event.recipes.create.mixing(global.ingotDictionary.iron, '#forge:dusts/iron').heated()
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.iron, 90), 'create:crushed_raw_iron', 30, 'heated');
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.iron, 90), '#forge:dusts/iron', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.iron, 10), '#forge:nuggets/iron', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.iron, 90), '#forge:ingots/iron', 40, 'heated')

  // Steel
  event.remove({ id: "createloveandwar:mixing/steel_ingot" })
  event.remove({ id: "immersiveengineering:blastfurnace/steel" })
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.steel, 90), '#forge:dusts/steel', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.steel, 10), '#forge:nuggets/steel', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.steel, 90), '#forge:ingots/steel', 40, 'heated')


  // Palladium
  // event.recipes.create.mixing(global.ingotDictionary.palladium, '#forge:dusts/palladium').heated()
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.palladium, 90), '#forge:dusts/palladium', 30, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.palladium, 10), '#forge:nuggets/palladium', 4, 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.palladium, 90), '#forge:ingots/palladium', 40, 'heated')

  // Superheated metallurgy > 1700
  // Platinum
  // event.recipes.create.mixing(global.ingotDictionary.platinum, '#forge:dusts/platinum').superheated()
  event.recipes.createmetallurgy.melting(Fluid.of('kubejs:molten_platinum', 90), '#forge:dusts/platinum', 30, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.platinum, 10), '#forge:nuggets/platinum', 4, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.platinum, 90), '#forge:ingots/platinum', 40, 'superheated')

  // Chromium
  // event.recipes.create.mixing(global.ingotDictionary.chromium, '#forge:dusts/chromium').superheated()
  event.recipes.createmetallurgy.melting(Fluid.of('kubejs:molten_chromium', 90), '#forge:dusts/chromium', 30, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.chromium, 10), '#forge:nuggets/chromium', 4, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.chromium, 90), '#forge:ingots/chromium', 40, 'superheated')

  // Vanadium
  // event.recipes.create.mixing(global.ingotDictionary.vanadium, '#forge:dusts/vanadium').superheated()
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.vanadium, 90), '#forge:dusts/vanadium', 30, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.vanadium, 10), '#forge:nuggets/vanadium', 4, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.vanadium, 90), '#forge:ingots/vanadium', 40, 'superheated')

  // Rhodium
  // event.recipes.create.mixing(global.ingotDictionary.rhodium, '#forge:dusts/rhodium').superheated()
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.rhodium, 90), '#forge:dusts/rhodium', 30, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.rhodium, 10), '#forge:nuggets/rhodium', 4, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.rhodium, 90), '#forge:ingots/rhodium', 40, 'superheated')

  // Tungsten
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.tungsten, 90), '#forge:dusts/wolframite', 30, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.tungsten, 10), '#forge:nuggets/tungsten', 4, 'superheated')
  event.recipes.createmetallurgy.melting(Fluid.of(global.moltenMetals.tungsten, 90), '#forge:ingots/tungsten', 40, 'superheated')
});