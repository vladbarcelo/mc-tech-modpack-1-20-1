ServerEvents.recipes((event) => {
  // fuse
  event.remove({ id: 'tfmg:crafting/fuse' })
  event.custom({
    "type": "immersiveengineering:blueprint",
    "category": "components",
    "inputs": [
      {
        "tag": "forge:wires/copper"
      },
      {
        "tag": "forge:wires/copper"
      },
      {
        "item": "create:framed_glass"
      },
      {
        "tag": "forge:wires/lead"
      }
    ],
    "result": {
      "item": "tfmg:fuse"
    }
  })

  // circuit
  // event.remove({ id: 'immersiveengineering:blueprint/circuit_board' })


  // event.custom({
  //   "type": "create:sequenced_assembly",
  //   "ingredient": {
  //     "type": "destroy:circuit_pattern_item",
  //     "item": "destroy:circuit_board",
  //     "pattern": "destroy:smile"
  //   },
  //   "loops": 3,
  //   "results": [
  //     {
  //       "chance": 120.0,
  //       "item": "immersiveengineering:logic_circuit",
  //       "nbt": `{ output: "LIGHT_BLUE", inputs: ["ORANGE", "MAGENTA"], operator: "AND" }`
  //     },
  //   ],
  //   "sequence": [
  //     {
  //       "type": "create:deploying",
  //       "ingredients": [
  //         {
  //           "item": "destroy:circuit_board"
  //         },
  //         {
  //           "item": "tfmg:capacitor_"
  //         }
  //       ],
  //       "results": [
  //         {
  //           "item": "destroy:circuit_board"
  //         }
  //       ]
  //     },
  //     {
  //       "type": "create:deploying",
  //       "ingredients": [
  //         {
  //           "item": "destroy:circuit_board"
  //         },
  //         {
  //           "item": "tfmg:resistor_"
  //         }
  //       ],
  //       "results": [
  //         {
  //           "item": "destroy:circuit_board"
  //         }
  //       ]
  //     },
  //     {
  //       "type": "create:deploying",
  //       "ingredients": [
  //         {
  //           "item": "destroy:circuit_board"
  //         },
  //         {
  //           "item": "immersiveengineering:electron_tube"
  //         }
  //       ],
  //       "results": [
  //         {
  //           "item": "destroy:circuit_board"
  //         }
  //       ]
  //     }
  //   ],
  //   "transitionalItem": {
  //     "item": "destroy:circuit_board"
  //   }
  // })

  // light engineering block
  event.remove({ id: 'immersiveengineering:crafting/light_engineering' })
  event.recipes.create.mechanical_crafting('immersiveengineering:light_engineering', [
    ' ABA ',
    'ACDCA',
    'BEFEB',
    'AGHGA',
    ' ABA ',
  ], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:component_iron',
    C: 'immersiveengineering:electron_tube',
    D: 'create:electron_tube',
    E: 'immersiveengineering:component_electronic',
    F: 'tfmg:heavy_machinery_casing',
    G: 'createaddition:capacitor',
    H: 'tfmg:fuse',
  })

  // heavy engineering block
  event.remove({ id: 'immersiveengineering:crafting/heavy_engineering' })
  event.recipes.create.mechanical_crafting('immersiveengineering:heavy_engineering', [
    ' ABA ',
    'ACDIA',
    'BEFEB',
    'AGHJA',
    ' ABA ',
  ], {
    A: '#forge:plates/steel',
    B: 'immersiveengineering:component_steel',
    C: Ingredient.of('immersiveengineering:logic_circuit', 1),
    D: 'immersiveengineering:logic_unit',
    E: 'immersiveengineering:component_electronic_adv',
    F: 'immersiveengineering:light_engineering',
    G: Ingredient.of('immersiveengineering:logic_circuit', 1),
    H: 'tfmg:fuse',
    I: Ingredient.of('immersiveengineering:logic_circuit', 1),
    J: Ingredient.of('immersiveengineering:logic_circuit', 1),
  })

  // carbon brushes
  event.remove({ id: 'create_new_age:shaped/carbon_brushes' })
  event.recipes.create.mechanical_crafting('create_new_age:carbon_brushes', [
    ' ACA ',
    'A D A',
    'CDBDC',
    'A D A',
    ' ACA ',
  ], {
    A: '#forge:rods/steel',
    B: 'create:shaft',
    C: 'immersiveengineering:ingot_hop_graphite',
    D: '#forge:plates/copper',
  })

  // generator coil
  event.remove({ id: 'create_new_age:shaped/generator_coil' })
  event.recipes.create.mechanical_crafting('create_new_age:generator_coil', [
    'A  A  A',
    ' B B B ',
    '  CCC  ',
    'ABCDCBA',
    '  CCC  ',
    ' B B B ',
    'A  A  A',
  ], {
    A: 'immersiveengineering:wirecoil_copper',
    B: 'immersiveengineering:plate_duroplast',
    C: '#forge:ingots/steel',
    D: 'create:shaft',
  })
});