ServerEvents.recipes((event) => {
  event.remove({ id: 'hardcore_torches:oil_can' })
  event.remove({ id: 'hardcore_torches:oil_can/coal' })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "createaddition:seed_oil_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "immersiveengineering:creosote_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "createdieselgenerators:crude_oil_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "createdieselgenerators:plant_oil_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "tag": "forge:buckets/crude_oil"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "tag": "forge:buckets/heavy_oil"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "immersiveengineering:plantoil_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "createloveandwar:crude_oil_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "createdieselgenerators:bioethanol_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "createdieselgenerators:gasoline_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "createdieselgenerators:ethanol_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "tag": "forge:buckets/kerosene"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "tag": "forge:buckets/gasoline"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "immersiveengineering:ethanol_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "createloveandwar:kerosene_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.custom({
    "type": "hardcore_torches:oil_can",
    "ingredients":[
      {
        "item": "createloveandwar:ethylene_bucket"
      },
      {
        "item": "hardcore_torches:oil_can"
      }
    ],
    "result": {
      "item": "hardcore_torches:oil_can"
    },
    "fuel": 576000,
  })
  event.shapeless(
    Item.of('hardcore_torches:oil_can', 1, { Fuel: 576000 }),
    [
      'hardcore_torches:oil_can',
      Item.of('morebuckets:wooden_bucket', 1, { Fluid: 'immersiveengineering:creosote' })
    ]
  )
});