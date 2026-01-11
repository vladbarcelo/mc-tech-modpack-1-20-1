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
    "immersiveengineering:alloysmelter/constantan",
    "createaddition:compat/immersiveengineering/constantan",
    "createloveandwar:mixing/steel_ingot",
    "immersiveengineering:blastfurnace/steel",
  ]) {
    event.remove({ id: id })
  }

  for (let metal of global.allMetals) {
    let isHardCastable = global.isHardCastable(metal)

    let moltenMetal = global.moltenMaterialFluids[metal]
    let metalTemp = global.materialMeltingPointTemps[metal]
    let metalIngredientMaterial = metal

    addMeltingRecipes(
      event,
      metal,
      metalIngredientMaterial,
      metalTemp,
      moltenMetal,
      isHardCastable
    )
  }

  // additional compat
  addMeltingRecipes(
    event,
    'tungsten',
    'wolframite',
    global.materialMeltingPointTemps.tungsten,
    global.moltenMaterialFluids.tungsten,
    true
  )

  addTConstructMeltingRecipes(
    event,
    'iron',
    global.moltenMaterialFluids.cast_iron,
    global.materialMeltingPointTemps.cast_iron
  )
  addIEBlastingRecipes(
    event,
    'iron',
    'cast_iron'
  )
});

function addMeltingRecipes(
  event,
  metal,
  metalIngredientMaterial,
  metalTemp,
  moltenMetal,
  isHardCastable
) {
  // create metallurgy: available for all metals
  addCreateMeltingRecipes(
    event,
    metalIngredientMaterial,
    moltenMetal,
    isHardCastable
  )

  if (metalTemp <= 700) {
    // smelting: <= 700
    addSmeltingRecipes(
      event,
      metalIngredientMaterial,
      metal
    )
  }
  
  if (metalTemp <= 1000) {
    // tconstruct: available for all metals within temperature range
    addTConstructMeltingRecipes(
      event,
      metalIngredientMaterial,
      moltenMetal,
      metalTemp
    )
    // blasting: 700-1000
    addIEBlastingRecipes(
      event,
      metalIngredientMaterial,
      metal
    )
  }
}

function addCreateMeltingRecipes(
  event,
  metalIngredientMaterial,
  moltenMetal,
  superHeated
) {
  event.recipes.createmetallurgy.melting(Fluid.of(moltenMetal, 10), `#forge:nuggets/${metalIngredientMaterial}`, 4, superHeated ? 'superheated' : 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(moltenMetal, 90), `#forge:dusts/${metalIngredientMaterial}`, 30, superHeated ? 'superheated' : 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(moltenMetal, 90), `#forge:ingots/${metalIngredientMaterial}`, 40, superHeated ? 'superheated' : 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(moltenMetal, 90), `#forge:ores/${metalIngredientMaterial}`, 40, superHeated ? 'superheated' : 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(moltenMetal, 90), `#forge:raw_materials/${metalIngredientMaterial}`, 40, superHeated ? 'superheated' : 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(moltenMetal, 90), `create:crushed_raw_${metalIngredientMaterial}`, 40, superHeated ? 'superheated' : 'heated')
  event.recipes.createmetallurgy.melting(Fluid.of(moltenMetal, 810), `#forge:storage_blocks/raw_${metalIngredientMaterial}`, 40, superHeated ? 'superheated' : 'heated')
}

function addSmeltingRecipes(
  event,
  metalIngredientMaterial,
  metal
) {
  event.smelting(`kubejs:hot_${metal}_ingot`, `#forge:dusts/${metalIngredientMaterial}`)
  event.smelting(`kubejs:hot_${metal}_ingot`, `#forge:ores/${metalIngredientMaterial}`)
  event.smelting(`kubejs:hot_${metal}_ingot`, `create:crushed_raw_${metalIngredientMaterial}`)
  event.smelting(`kubejs:hot_${metal}_ingot`, `#forge:raw_materials/${metalIngredientMaterial}`)
}

function addTConstructMeltingRecipes(
  event,
  metalIngredientMaterial,
  moltenMetal,
  metalTemp
) {
  event.custom({
    type: "tconstruct:melting",
    ingredient: {
      tag: `forge:nuggets/${metalIngredientMaterial}`
    },
    result: {
      amount: 10,
      fluid: moltenMetal
    },
    temperature: metalTemp,
    time: 20
  })
  event.custom({
    type: "tconstruct:melting",
    ingredient: {
      tag: `forge:dusts/${metalIngredientMaterial}`
    },
    result: {
      amount: 90,
      fluid: moltenMetal
    },
    temperature: metalTemp,
    time: 60
  })
  event.custom({
    type: "tconstruct:melting",
    ingredient: {
      tag: `forge:ingots/${metalIngredientMaterial}`
    },
    result: {
      amount: 90,
      fluid: moltenMetal
    },
    temperature: metalTemp,
    time: 60
  })
  event.custom({
    type: "tconstruct:ore_melting",
    conditions: [
      {
        type: "mantle:tag_combination_filled",
        ignore: "tconstruct:non_singular_ore_rates",
        match: `forge:ores/${metalIngredientMaterial}`
      }
    ],
    byproducts: metalTemp > 800 ? [
      {
        amount: 90,
        rate: "metal",
        fluid: "tfmg:molten_slag"
      }
    ] : [],
    ingredient: {
      type: "forge:difference",
      base: {
        tag: `forge:ores/${metalIngredientMaterial}`
      },
      subtracted: {
        tag: "tconstruct:non_singular_ore_rates"
      }
    },
    rate: "metal",
    result: {
      amount: 180,
      fluid: moltenMetal
    },
    temperature: metalTemp,
    time: 150
  })
  event.custom({
    type: "tconstruct:ore_melting",
    ingredient: {
      tag: `forge:raw_materials/${metalIngredientMaterial}`
    },
    rate: "metal",
    result: {
      amount: 90,
      fluid: moltenMetal
    },
    temperature: metalTemp,
    time: 90
  })
  event.custom({
    type: "tconstruct:ore_melting",
    ingredient: {
      tag: `forge:storage_blocks/raw_${metalIngredientMaterial}`
    },
    rate: "metal",
    result: {
      amount: 810,
      fluid: moltenMetal
    },
    temperature: metalTemp,
    time: 361
  })
  event.custom({
    type: "tconstruct:ore_melting",
    ingredient: {
      item: `create:crushed_raw_${metalIngredientMaterial}`
    },
    rate: "metal",
    result: {
      amount: 90,
      fluid: moltenMetal
    },
    temperature: metalTemp,
    time: 90
  })
}

function addIEBlastingRecipes(
  event,
  metalIngredientMaterial,
  metal
) {
  event.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      tag: `forge:dusts/${metalIngredientMaterial}`
    },
    result: {
      item: `kubejs:hot_${metal}_ingot`
    },
    slag: {
      tag: `forge:slag`
    },
    time: 1200
  })
  event.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      tag: `forge:ores/${metalIngredientMaterial}`
    },
    result: {
      item: `kubejs:hot_${metal}_ingot`
    },
    slag: {
      tag: `forge:slag`
    },
    time: 1200
  })
  event.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      item: `create:crushed_raw_${metalIngredientMaterial}`
    },
    result: {
      item: `kubejs:hot_${metal}_ingot`
    },
    slag: {
      tag: `forge:slag`
    },
    time: 1200
  })
  event.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      tag: `forge:raw_materials/${metalIngredientMaterial}`
    },
    result: {
      item: `kubejs:hot_${metal}_ingot`
    },
    slag: {
      tag: `forge:slag`
    },
    time: 1200
  })
}