// ------ BEWARE ------
// This JS implementation is notoriously BAD with "const" variables
// They are shared between loops and don't work as intended
// --------------------


StartupEvents.registry('item', event => {
  // metallurgy
  for (let metal of global.castableMetals) {
    // ingot
    event
      .create(`hot_${metal}_ingot`)
      .texture(`hot_iron:item/hot_iron_ingot`)
      .displayName(toSentenceCase(`Hot ${metal} Ingot`))

    event
      .create(`hot_${metal}_ingot_in_tongs`)
      .texture(`hot_iron:item/hot_iron_ingot_in_tongs`)
      .displayName(toSentenceCase(`Hot ${metal} Ingot In Tongs`))

    event
      .create(`${metal}_ingot_in_tongs`)
      .texture(`hot_iron:item/iron_ingot_in_tongs`)
      .color(0, global.metalColors[metal])
      .displayName(toSentenceCase(`${metal} Ingot In Tongs`))

    // strap
    event
      .create(`${metal}_strap`)
      .texture(`hot_iron:item/iron_armor_plate`)
      .color(0, global.metalColors[metal])
      .displayName(toSentenceCase(`${metal} Armor Strap`))
    if (!global.armorItems[metal].helmet)
      event
        .create(`${metal}_helmet`, 'helmet')
        .texture(`minecraft:item/iron_helmet`)
        .color(0, global.metalColors[metal])
        .tier(global.hardCastableMetals.includes(metal) ? 'netherite' : 'diamond')
        .displayName(toSentenceCase(`${metal} Helmet`))
    if (!global.armorItems[metal].chestplate)
      event
        .create(`${metal}_chestplate`, 'chestplate')
        .texture(`minecraft:item/iron_chestplate`)
        .color(0, global.metalColors[metal])
        .tier(global.hardCastableMetals.includes(metal) ? 'netherite' : 'diamond')
        .displayName(toSentenceCase(`${metal} Chestplate`))
    if (!global.armorItems[metal].leggings)  
      event
        .create(`${metal}_leggings`, 'leggings')
        .texture(`minecraft:item/iron_leggings`)
        .color(0, global.metalColors[metal])
        .tier(global.hardCastableMetals.includes(metal) ? 'netherite' : 'diamond')
        .displayName(toSentenceCase(`${metal} Leggings`))
    if (!global.armorItems[metal].boots)  
      event
        .create(`${metal}_boots`, 'boots')
        .texture(`minecraft:item/iron_boots`)
        .color(0, global.metalColors[metal])
        .tier(global.hardCastableMetals.includes(metal) ? 'netherite' : 'diamond')
        .displayName(toSentenceCase(`${metal} Boots`))

    // plate
    if (global.metalPlates[metal] === '') {
      event
        .create(`${metal}_plate`)
        .texture(`hot_iron:item/iron_sheet`)
        .color(0, global.metalColors[metal])
        .displayName(toSentenceCase(`${metal} Plate`))
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

      // hot_%metal%_%tool%_cooling.json
      JsonIO.write(`kubejs/data/hot_iron/recipes/kjs_hot_${metal}_${part}_cooling.json`, {
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

      // polishing
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
  
      // add missing tools
      if (global.toolItems[metal][part] === '') {
        let type = part.split('_')[0]
        let toolItem = `${metal}_${type}`
        let tier = global.hardCastableMetals.includes(metal) ? 'netherite' : 'diamond'
        
        event
          .create(toolItem, type)
          .tier(tier)
          .texture(`minecraft:item/stone_${type}`)
          .color(0, global.metalColors[metal])
          .displayName(toSentenceCase(toolItem))
      }
    }
  }
})