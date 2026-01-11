global.moltenMaterialFluids = {
  'lead': 'createmetallurgy:molten_lead',
  'zinc': 'createmetallurgy:molten_zinc',
  'aluminum': 'createmetallurgy:molten_aluminum',
  'brass': 'createmetallurgy:molten_brass',
  'electrum': 'createmetallurgy:molten_electrum',
  'silver': 'createmetallurgy:molten_silver',
  'gold': 'createmetallurgy:molten_gold',
  'copper': 'createmetallurgy:molten_copper',
  'cast_iron': 'kubejs:molten_cast_iron',
  'uranium': 'kubejs:molten_uranium',
  'constantan': 'createmetallurgy:molten_constantan',
  'nickel': 'createmetallurgy:molten_nickel',
  'iron': 'createmetallurgy:molten_iron',
  'steel': 'createmetallurgy:molten_steel',
  'palladium': 'kubejs:molten_palladium',
  'platinum': 'kubejs:molten_platinum',
  'chromium': 'kubejs:molten_chromium',
  'vanadium': 'kubejs:molten_vanadium',
  'rhodium': 'kubejs:molten_rhodium',
  'tungsten': 'createmetallurgy:molten_tungsten',
  'glass': 'kubejs:molten_glass',
  'lava': 'minecraft:lava'
}

global.materialMeltingPointTemps = {
  'plastic': 250,
  'lead': 330,
  'zinc': 420,
  'glass': 600,
  'aluminum': 660, 
  'brass': 900,
  'electrum': 960,
  'silver': 960,
  'gold': 1000,
  'copper': 1000,
  'cast_iron': 1000,
  'lava': 1000,
  // tinkers melting not available without mods below
  'uranium': 1130,
  'constantan': 1220,
  'nickel': 1450,
  'iron': 1500,
  'steel': 1510,
  'palladium': 1550,
  'platinum': 1770,
  'chromium': 1860,
  'vanadium': 1900,
  'rhodium': 1960,
  'tungsten': 3400
}

global.fluidTemps = {}

for (let material in global.materialMeltingPointTemps) {
  let fluidName = global.moltenMaterialFluids[material]
  global.fluidTemps[fluidName] = global.materialMeltingPointTemps[material]
}
