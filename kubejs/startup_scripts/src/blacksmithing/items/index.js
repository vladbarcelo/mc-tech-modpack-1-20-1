StartupEvents.registry('item', event => {
  for (let metal of global.allMetals) {
    addIngots(event, metal)
    addArmors(event, metal)
    addSheets(event, metal)
    addTools(event, metal)
    addRods(event, metal)
  }
});

/**
 * Adds tool recipes for the given metal.
 * @param {Item_} event
 * @param {string} metal
 */
function addTools(event, metal) {
  // forging, available only for smithable and base castable metals
  if (global.isSmithable(metal) || global.isBaseCastable(metal)) {
    // hot_%metal%_pickaxe_head_forging.json
    JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_pickaxe_head_forging.json`, {
      "type": "hot_iron:forging",
      "ingredients": [
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        }
      ],
      "output": {
        "item": `kubejs:hot_${metal}_pickaxe_head`,
        "count": 1
      }
    });
    // hot_%metal%_axe_head_forging.json
    JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_axe_head_forging.json`, {
      "type": "hot_iron:forging",
      "ingredients": [
        {
          "item": "hot_iron:jei_empty_tag"
        },
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": `kubejs:hot_${metal}_ingot`
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        }
      ],
      "output": {
        "item": `kubejs:hot_${metal}_axe_head`,
        "count": 1
      }
    });
    // hot_%metal%_shovel_blade_forging.json
    JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_shovel_blade_forging.json`, {
      "type": "hot_iron:forging",
      "ingredients": [
        {
          "item": "hot_iron:jei_empty_tag"
        },
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "item": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        }
      ],
      "output": {
        "item": `kubejs:hot_${metal}_shovel_blade`,
        "count": 1
      }
    });
    // hot_%metal%_hoe_blade_forging.json
    JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_hoe_blade_forging.json`, {
      "type": "hot_iron:forging",
      "ingredients": [
        {
          "item": "hot_iron:jei_empty_tag"
        },
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        }
      ],
      "output": {
        "item": `kubejs:hot_${metal}_hoe_blade`,
        "count": 1
      }
    });
    // hot_%metal%_sword_blade_forging.json
    JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_sword_blade_forging.json`, {
      "type": "hot_iron:forging",
      "ingredients": [
        {
          "item": "hot_iron:jei_empty_tag"
        },
        {
          "item": `kubejs:hot_${metal}_ingot`
        },
        {
          "item": "hot_iron:jei_empty_tag"
        },

        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": `kubejs:hot_${metal}_ingot`
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        }
      ],
      "output": {
        "item": `kubejs:hot_${metal}_sword_blade`,
        "count": 1
      }
    });
  }

  for (let part of global.toolParts) {
    event
      .create(`hot_${metal}_${part}_in_tongs`)
      .texture(`hot_iron:item/hot_iron_${part}_in_tongs`)
      .displayName(toSentenceCase(`Hot ${metal} ${part} In Tongs`))
    event
      .create(`hot_${metal}_${part}`)
      .texture(`hot_iron:item/hot_iron_${part}`)
      .displayName(toSentenceCase(`Hot ${metal} ${part}`))
    event
      .create(`${metal}_${part}_in_tongs`)
      .texture(`hot_iron:item/iron_${part}_in_tongs`)
      .color(0, global.metalColors[metal])
      .displayName(toSentenceCase(`Rough ${metal} ${part} In Tongs`))
    event
      .create(`rough_${metal}_${part}`)
      .texture(`hot_iron:item/stone_${part}`)
      .color(0, global.darkMetalColors[metal])
      .displayName(toSentenceCase(`Rough ${metal} ${part}`))
    event
      .create(`polished_${metal}_${part}_in_tongs`)
      .texture(`hot_iron:item/polished_iron_${part}_in_tongs`)
      .color(0, global.metalColors[metal])
      .displayName(toSentenceCase(`Polished ${metal} ${part} In Tongs`))
    event
      .create(`${metal}_${part}`)
      .texture(`hot_iron:item/stone_${part}`)
      .color(0, global.metalColors[metal])
      .displayName(toSentenceCase(`${metal} ${part}`))

    // add missing tools
    if (!global.toolItems[metal][part] && (!global.tConstructToolParts[part] || !global.metalHasTConstructItems[metal])) {
      let type = part.split('_')[0]
      let toolItem = `${metal}_${type}`

      event
        .create(toolItem, type)
        .maxDamage(global.baseMetalDurability[metal])
        .tier(global.metalTiers[metal])
        .texture(`minecraft:item/stone_${type}`)
        .color(0, global.metalColors[metal])
        .displayName(toSentenceCase(toolItem))

        global.toolItems[metal][part] = `kubejs:${toolItem}`
    }

    // cooling into rough part, available for all metals

    // hot_%metal%_%tool%_cooling.json
    JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_${part}_in_tongs_cooling.json`, {
      "type": "hot_iron:cooling",
      "ingredients": [
        {
          "item": `kubejs:hot_${metal}_${part}_in_tongs`
        }
      ],
      "output": {
        "item": `kubejs:${metal}_${part}_in_tongs`,
        "count": 1
      }
    })
    JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_${part}_cooling.json`, {
      "type": "hot_iron:cooling",
      "ingredients": [
        {
          "item": `kubejs:hot_${metal}_${part}`
        }
      ],
      "output": {
        "item": `kubejs:rough_${metal}_${part}`,
        "count": 1
      }
    })

    // polishing via grindstone, available only to smithable metals
    if (global.isSmithable(metal)) {
      // %metal%_%tool%_polishing.json
      JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_${metal}_${part}_in_tongs_polishing.json`, {
        "type": "hot_iron:polishing",
        "ingredients": [
          {
            "item": `kubejs:${metal}_${part}_in_tongs`
          }
        ],
        "output": {
          "item": `kubejs:polished_${metal}_${part}_in_tongs`,
          "count": 1
        }
      })

      // polishing rough part into final tool
      if (global.metalHasTConstructItems[metal] && global.tConstructToolParts[part]) {
        JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_${metal}_${part}_polishing.json`, {
          "type": "hot_iron:polishing",
          "ingredients": [
            {
              "item": `kubejs:rough_${metal}_${part}`
            }
          ],
          "output": {
            "item": `tconstruct:${global.tConstructToolParts[part]}`,
            "count": 1,
            "nbt": {"Material":`${global.tConstructMetals[metal]}`}
          }
        })
      } else {
        JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_${metal}_${part}_polishing.json`, {
          "type": "hot_iron:polishing",
          "ingredients": [
            {
              "item": `kubejs:rough_${metal}_${part}`
            }
          ],
          "output": {
            "item": `kubejs:${metal}_${part}`,
          }
        })
      }
    }
  }
}

function addSheets(event, metal) {
  let sheetItem = global.metalPlates[metal] || `kubejs:${metal}_sheet`
  if (!global.metalPlates[metal]) {
    event
      .create(sheetItem)
      .texture(`hot_iron:item/iron_sheet`)
      .color(0, global.metalColors[metal])
      .displayName(toSentenceCase(`${metal} Plate`))
  }

  if (global.isSmithable(metal)) {
    // %metal%_plate_forging.json
    JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_${metal}_plate_forging.json`, {
      "type": "hot_iron:forging",
      "ingredients": [
        {
          "item": "hot_iron:jei_empty_tag"
        },
        {
          "item": global.ingotDictionary[metal]
        },
        {
          "item": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        },
        {
          "tag": "hot_iron:jei_empty_tag"
        }
      ],
      "output": {
        "item": sheetItem,
        "count": 1
      }
    });
  }
}

function addRods(event, metal) {
  let rodItem = global.metalRods[metal] || `kubejs:${metal}_rod`
  if (!global.metalRods[metal]) {
    event
      .create(rodItem)
      .texture(`minecraft:item/blaze_rod`)
      .color(0, global.metalColors[metal])
      .displayName(toSentenceCase(`${metal} Rod`))
  }
}

function addIngots(event, metal) {
  // hot ingot
  event
    .create(`hot_${metal}_ingot`)
    .texture(`hot_iron:item/hot_iron_ingot`)
    .displayName(toSentenceCase(`Hot ${metal} Ingot`))
  // hot ingot in tongs
  event
    .create(`hot_${metal}_ingot_in_tongs`)
    .texture(`hot_iron:item/hot_iron_ingot_in_tongs`)
    .displayName(toSentenceCase(`Hot ${metal} Ingot In Tongs`))
  // ingot in tongs
  event
    .create(`${metal}_ingot_in_tongs`)
    .texture(`hot_iron:item/iron_ingot_in_tongs`)
    .color(0, global.metalColors[metal])
    .displayName(toSentenceCase(`${metal} Ingot In Tongs`))
  
  // %metal%_ingot_cooling.json
  JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_ingot_cooling.json`, {
    "type": "hot_iron:cooling",
    "ingredients": [
      {
        "item": `kubejs:hot_${metal}_ingot`
      }
    ],
    "output": {
      "item": global.ingotDictionary[metal],
      "count": 1,
    }
  })
  // %metal%_ingot_in_tongs_cooling.json
  JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_ingot_in_tongs_cooling.json`, {
    "type": "hot_iron:cooling",
    "ingredients": [
      {
        "item": `kubejs:hot_${metal}_ingot_in_tongs`
      }
    ],
    "output": {
      "item": `kubejs:${metal}_ingot_in_tongs`,
      "count": 1,
      "nbt": `{"ItemHeld":"${global.ingotDictionary[metal]}"}`
    }
  })
}

function addArmors(event, metal) {
  // strap
  event
    .create(`${metal}_strap`)
    .texture(`hot_iron:item/iron_armor_plate`)
    .color(0, global.metalColors[metal])
    .displayName(toSentenceCase(`${metal} Armor Strap`))
  if (!global.armorItems[metal].helmet)
    event
      .create(`${metal}_helmet`, 'helmet')
      .maxDamage(Math.ceil(global.baseMetalDurability[metal] * 2.4))
      .texture(`minecraft:item/iron_helmet`)
      .color(0, global.metalColors[metal])
      .tier(global.metalTiers[metal])
      .displayName(toSentenceCase(`${metal} Helmet`))
  if (!global.armorItems[metal].chestplate)
    event
      .create(`${metal}_chestplate`, 'chestplate')
      .maxDamage(Math.ceil(global.baseMetalDurability[metal] * 3.5))
      .texture(`minecraft:item/iron_chestplate`)
      .color(0, global.metalColors[metal])
      .tier(global.metalTiers[metal])
      .displayName(toSentenceCase(`${metal} Chestplate`))
  if (!global.armorItems[metal].leggings)  
    event
      .create(`${metal}_leggings`, 'leggings')
      .maxDamage(Math.ceil(global.baseMetalDurability[metal] * 3.2))
      .texture(`minecraft:item/iron_leggings`)
      .color(0, global.metalColors[metal])
      .tier(global.metalTiers[metal])
      .displayName(toSentenceCase(`${metal} Leggings`))
  if (!global.armorItems[metal].boots)  
    event
      .create(`${metal}_boots`, 'boots')
      .maxDamage(Math.ceil(global.baseMetalDurability[metal] * 2.8))
      .texture(`minecraft:item/iron_boots`)
      .color(0, global.metalColors[metal])
      .tier(global.metalTiers[metal])
      .displayName(toSentenceCase(`${metal} Boots`))
}

ItemEvents.modification(event => {
  for (let metal of global.allMetals) {
    for (let part of global.toolParts) {
      if (global.toolItems[metal][part]) {
        event.modify(global.toolItems[metal][part], item => {
          item.maxDamage = global.baseMetalDurability[metal]
        })
      }
      if (global.armorItems[metal].helmet) {
        event.modify(global.armorItems[metal].helmet, item => {
          item.maxDamage = Math.ceil(global.baseMetalDurability[metal] * 2.4)
        })
      }
      if (global.armorItems[metal].chestplate) {
        event.modify(global.armorItems[metal].chestplate, item => {
          item.maxDamage = Math.ceil(global.baseMetalDurability[metal] * 3.5)
        })
      }
      if (global.armorItems[metal].leggings) {
        event.modify(global.armorItems[metal].leggings, item => {
          item.maxDamage = Math.ceil(global.baseMetalDurability[metal] * 3.2)
        })
      }
      if (global.armorItems[metal].boots) {
        event.modify(global.armorItems[metal].boots, item => {
          item.maxDamage = Math.ceil(global.baseMetalDurability[metal] * 2.8)
        })
      }
    }
  }
})