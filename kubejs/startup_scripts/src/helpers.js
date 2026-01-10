/* eslint-disable no-unused-vars */
function toSentenceCase(txt) {
  let res = ''
  
  txt = txt.toLowerCase().replace(/_/g, ' ')

  for (let word of txt.split(' ')) {
    res += word.charAt(0).toUpperCase() + word.slice(1) + ' '
  }

  return res.trim()
}

function darkenColor(hexColor) {
  let newColor = Number('0x' + hexColor.replace(/#/, '')) - 1118481

  return '#' + newColor.toString(16)
}

function addMetalCastingRecipe(
  event,
  metal,
  fluidAmountMb,
  processingTimeTicks,
  outputItem,
  outputItemTexture
) {
  let castingVessel = fluidAmountMb >= 200 ? 'basin' : 'table'

  let itemName = outputItem.split(':')[1]

  event
    .create(`${itemName}_graphite_mold`)
    .textureJson({
      layer0: 'createmetallurgy:item/graphite_blank_mold',
      layer1: outputItemTexture
    })
    .color(1, '#000000')
    .displayName(`${toSentenceCase(itemName)} Mold`)

  event
    .create(`${itemName}_sand_cast`)
    .textureJson({
      layer0: 'tconstruct:item/sand_cast/blank',
      layer1: outputItemTexture
    })
    .color(1, '#000000')
    .displayName(`${toSentenceCase(itemName)} Sand Cast`)

  event
    .create(`${itemName}_red_sand_cast`)
    .textureJson({
      layer0: 'tconstruct:item/red_sand_cast/blank',
      layer1: outputItemTexture
    })
    .color(1, '#000000')
    .displayName(`${toSentenceCase(itemName)} Red Sand Cast`)

  // create metallurgy
  JsonIO.write(`kubejs/data/kjs_casting/recipes/${itemName}_createmetallurgy_graphite_casting.json`, {
    "type": `createmetallurgy:casting_in_${castingVessel}`,
    "ingredients": [
      {
        "item": `kubejs:${itemName}_graphite_mold`
      },
      {
        "amount": fluidAmountMb,
        "fluid": global.moltenMetals[metal],
        "nbt": {}
      }
    ],
    "processingTime": processingTimeTicks,
    "result": {
      "item": outputItem
    }
  })
  JsonIO.write(`kubejs/data/kjs_casting/recipes/${itemName}_createmetallurgy_sand_casting.json`, {
    "type": `createmetallurgy:casting_in_${castingVessel}`,
    "ingredients": [
      {
        "item": `kubejs:${itemName}_sand_cast`
      },
      {
        "amount": fluidAmountMb,
        "fluid": global.moltenMetals[metal],
        "nbt": {}
      }
    ],
    "processingTime": processingTimeTicks,
    "mold_consumed": true,
    "result": {
      "item": outputItem
    }
  })
  JsonIO.write(`kubejs/data/kjs_casting/recipes/${itemName}_createmetallurgy_red_sand_casting.json`, {
    "type": `createmetallurgy:casting_in_${castingVessel}`,
    "ingredients": [
      {
        "item": `kubejs:${itemName}_red_sand_cast`
      },
      {
        "amount": fluidAmountMb,
        "fluid": global.moltenMetals[metal],
        "nbt": {}
      }
    ],
    "processingTime": processingTimeTicks,
    "mold_consumed": true,
    "result": {
      "item": outputItem
    }
  })
  // tconstruct
  JsonIO.write(`kubejs/data/kjs_casting/recipes/${itemName}_tconstruct_graphite_casting.json`, {
    type: `tconstruct:casting_${castingVessel}`,
    cast: {
      item: `kubejs:${itemName}_graphite_mold`
    },
    cast_consumed: false,
    cooling_time: processingTimeTicks,
    fluid: {
      amount: fluidAmountMb,
      fluid: global.moltenMetals[metal]
    },
    result: {
      item: outputItem
    }
  })
  JsonIO.write(`kubejs/data/kjs_casting/recipes/${itemName}_tconstruct_sand_casting.json`, {
    type: `tconstruct:casting_${castingVessel}`,
    cast: {
      item: `kubejs:${itemName}_sand_cast`
    },
    cast_consumed: true,
    cooling_time: processingTimeTicks,
    fluid: {
      amount: fluidAmountMb,
      fluid: global.moltenMetals[metal]
    },
    result: {
      item: outputItem
    }
  })
  JsonIO.write(`kubejs/data/kjs_casting/recipes/${itemName}_tconstruct_red_sand_casting.json`, {
    type: `tconstruct:casting_${castingVessel}`,
    cast: {
      item: `kubejs:${itemName}_red_sand_cast`
    },
    cast_consumed: true,
    cooling_time: processingTimeTicks,
    fluid: {
      amount: fluidAmountMb,
      fluid: global.moltenMetals[metal]
    },
    result: {
      item: outputItem
    }
  })
}