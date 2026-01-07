ServerEvents.recipes((event) => {
  // ======== assembler ========
  event.remove({ id: 'automobility:auto_mechanic_table' })
  event.remove({ id: 'automobility:automobile_assembler' })
  event.shaped(
    Item.of('automobility:automobile_assembler', 1),
    [
      'AAA',
      ' B ',
      'CCC',
    ],
    {
      A: '#forge:ingots/copper',
      B: 'create:industrial_iron_block',
      C: 'tfmg:yellow_caution_block'
    }
  )

  // ======== engines ========
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      {
        "item": "tfmg:low_grade_fuel_engine"
      }
    ],
    "result": {
      "item": "automobility:automobile_engine",
      "nbt": `{ engine: "automobility:stone" }`,
      "count": 1
    }
  });

  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      {
        "item": "tfmg:compact_engine"
      }
    ],
    "result": {
      "item": "automobility:automobile_engine",
      "nbt": `{ engine: "automobility:iron" }`,
      "count": 1
    }
  });

  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      {
        "item": "createdieselgenerators:diesel_engine",
      }
    ],
    "result": {
      "item": "automobility:automobile_engine",
      "nbt": `{ engine: "automobility:gold" }`,
      "count": 1
    }
  });

  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      {
        "item": "tfmg:gasoline_engine",
      },
      {
        "item": "tfmg:gasoline_engine_back"
      }
    ],
    "result": {
      "item": "automobility:automobile_engine",
      "nbt": `{ engine: "automobility:diamond" }`,
      "count": 1
    }
  });

  // ======== wheels ========

  let tireInter = 'better_rubber:rubber_block'

  // standard wheel
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": tireInter,
    },
    "loops": 1,
    "results": [
      {
        "chance": 120.0,
        "item": "automobility:automobile_wheel",
        "nbt": `{ wheel: "automobility:standard" }`
      },
    ],
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [
          {
            "item": tireInter
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "item": "tfmg:steel_cogwheel"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
    ],
    "transitionalItem": {
      "item": tireInter
    }
  })

  // offroad wheel
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": tireInter,
    },
    "loops": 1,
    "results": [
      {
        "chance": 120.0,
        "item": "automobility:automobile_wheel",
        "nbt": `{ wheel: "automobility:off_road" }`
      },
    ],
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [
          {
            "item": tireInter
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "item": "tfmg:large_steel_cogwheel"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
    ],
    "transitionalItem": {
      "item": tireInter
    }
  })

  // plated wheel
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": tireInter,
    },
    "loops": 1,
    "results": [
      {
        "chance": 120.0,
        "item": "automobility:automobile_wheel",
        "nbt": `{ wheel: "automobility:plated" }`
      },
    ],
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [
          {
            "item": tireInter
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "item": "create:shaft"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:rods/copper"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:rods/copper"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:rods/copper"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
    ],
    "transitionalItem": {
      "item": tireInter
    }
  })

  // street wheel
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": tireInter,
    },
    "loops": 1,
    "results": [
      {
        "chance": 120.0,
        "item": "automobility:automobile_wheel",
        "nbt": `{ wheel: "automobility:street" }`
      },
    ],
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [
          {
            "item": tireInter
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "item": "create:shaft"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:rods/steel"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:rods/steel"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:rods/steel"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
    ],
    "transitionalItem": {
      "item": tireInter
    }
  })

  // steel wheel
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": tireInter,
    },
    "loops": 1,
    "results": [
      {
        "chance": 120.0,
        "item": "automobility:automobile_wheel",
        "nbt": `{ wheel: "automobility:steel" }`
      },
    ],
    "sequence": [
      {
        "type": "vintageimprovements:curving",
        "mode": 1,
        "ingredients": [
          {
            "item": tireInter
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "item": "create:shaft"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:ingots/steel"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:ingots/steel"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:ingots/steel"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": tireInter
          },
          {
            "tag": "forge:ingots/steel"
          }
        ],
        "results": [
          {
            "item": tireInter
          }
        ]
      },
    ],
    "transitionalItem": {
      "item": tireInter
    }
  })

  // ======== vehicles ========

  // tractors

  for (let color of ['red', 'yellow', 'green', 'blue']) {
    let tractorFrameInter = 'immersiveengineering:steel_scaffolding_standard'
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": tractorFrameInter,
      },
      "loops": 6,
      "results": [
        {
          "chance": 120.0,
          "item": "automobility:automobile_frame",
          "nbt": `{ frame: "automobility:${color}_tractor" }`
        },
      ],
      "sequence": [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": tractorFrameInter
            },
            {
              "item": "tfmg:steel_gearbox"
            }
          ],
          "results": [
            {
              "item": tractorFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": tractorFrameInter
            },
            {
              "item": "create_sa:hydraulic_engine"
            }
          ],
          "results": [
            {
              "item": tractorFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": tractorFrameInter
            },
            {
              "item": "tfmg:steel_mechanism"
            }
          ],
          "results": [
            {
              "item": tractorFrameInter
            }
          ]
        },
        {
          "type": "create:filling",
          "ingredients": [
            {
              "item": tractorFrameInter
            },
            {
              "fluid": "tfmg:lubrication_oil",
              "amount": 100
            }
          ],
          "results": [
            {
              "item": tractorFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": tractorFrameInter
            },
            {
              "tag": "forge:plates/steel"
            }
          ],
          "results": [
            {
              "item": tractorFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": tractorFrameInter
            },
            {
              "tag": `forge:dyes/${color}`
            }
          ],
          "results": [
            {
              "item": tractorFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": tractorFrameInter
            },
            {
              "item": "tfmg:screw"
            }
          ],
          "results": [
            {
              "item": tractorFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": tractorFrameInter
            },
            {
              "item": "tfmg:screwdriver"
            }
          ],
          "results": [
            {
              "item": tractorFrameInter
            }
          ]
        },
      ],
      "transitionalItem": {
        "item": tractorFrameInter
      }
    })
  }

  let automobileMaterialBase = {
    copper: 'copper',
    golden: 'brass',
    steel: 'steel',
  }

  // automobiles

  for (let automobileMaterial of ['copper', 'golden', 'steel']) {
    let baseMaterial = automobileMaterialBase[automobileMaterial]
    let automobileFrameInter = `tfmg:${baseMaterial}_frame`
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": automobileFrameInter,
      },
      "loops": 6,
      "results": [
        {
          "chance": 120.0,
          "item": "automobility:automobile_frame",
          "nbt": `{ frame: "automobility:${automobileMaterial}_motorcar" }`
        },
      ],
      "sequence": [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": automobileFrameInter
            },
            {
              "item": "tfmg:steel_gearbox"
            }
          ],
          "results": [
            {
              "item": automobileFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": automobileFrameInter
            },
            {
              "item": "create_sa:hydraulic_engine"
            }
          ],
          "results": [
            {
              "item": automobileFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": automobileFrameInter
            },
            {
              "item": "tfmg:steel_mechanism"
            }
          ],
          "results": [
            {
              "item": automobileFrameInter
            }
          ]
        },
        {
          "type": "create:filling",
          "ingredients": [
            {
              "item": automobileFrameInter
            },
            {
              "fluid": "tfmg:lubrication_oil",
              "amount": 100
            }
          ],
          "results": [
            {
              "item": automobileFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": automobileFrameInter
            },
            {
              "tag": `forge:plates/${baseMaterial}`
            }
          ],
          "results": [
            {
              "item": automobileFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": automobileFrameInter
            },
            {
              "item": "tfmg:screw"
            }
          ],
          "results": [
            {
              "item": automobileFrameInter
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": automobileFrameInter
            },
            {
              "item": "tfmg:screwdriver"
            }
          ],
          "results": [
            {
              "item": automobileFrameInter
            }
          ]
        },
      ],
      "transitionalItem": {
        "item": automobileFrameInter
      }
    })
  }
})