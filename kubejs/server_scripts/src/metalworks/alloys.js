ServerEvents.recipes((event) => {
  // andesite alloy
  event.remove({ id: 'create:crafting/materials/andesite_alloy' });
  event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' });
  // event.remove({ id: 'destroy:crafting/andesite_alloy_from_chromium' });
  // event.remove({ id: 'destroy:mixing/andesite_alloy_from_chromium' });
  event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' });
  event.remove({ id: 'createmetallurgy:casting_in_basin/andesite_alloy_from_iron' });
  event.remove({ id: 'create:crafting/materials/andesite_alloy_block' })
  event.remove({ id: 'create:mixing/andesite_alloy' })
  event.custom({
    "type": "immersiveengineering:alloy",
    "input0": {
      "tag": "forge:ingots/zinc"
    },
    "input1": {
      "item": "minecraft:andesite"
    },
    "result": {
      "base_ingredient": {
        "item": "create:andesite_alloy"
      },
      "count": 1
    },
    "time": 200
  })

  // red alloy
  event.remove({ id: 'projectred_core:red_ingot' })
  event.custom({
    "type": "immersiveengineering:alloy",
    "input0": {
      "tag": "forge:ingots/iron"
    },
    "input1": {
      "item": "minecraft:redstone"
    },
    "result": {
      "base_ingredient": {
        "item": "projectred_core:red_ingot"
      },
      "count": 1
    },
    "time": 200
  });

  // electrotine alloy
  event.remove({ id: 'projectred_core:electrotine_ingot' })
  event.custom({
    "type": "immersiveengineering:alloy",
    "input0": {
      "tag": "forge:ingots/iron"
    },
    "input1": {
      "tag": "forge:dusts/electrotine"
    },
    "result": {
      "base_ingredient": {
        "item": "projectred_core:electrotine_ingot"
      },
      "count": 1
    },
    "time": 200
  });

  event.custom({
    "type": "immersiveengineering:alloy",
    "input0": {
      "tag": "forge:ingots/tin"
    },
    "input1": {
      "item": "forge:ingots/copper"
    },
    "result": {
      "base_ingredient": {
        "item": "kubejs:hot_bronze_ingot"
      },
      "count": 1
    },
    "time": 200
  })
});