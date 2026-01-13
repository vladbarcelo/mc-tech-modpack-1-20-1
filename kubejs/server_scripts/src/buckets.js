ServerEvents.recipes((event) => {
  event.remove({ id: 'minecraft:bucket' })
  event.remove({ id: 'morebuckets:unfired_clay_bucket' })
  event.remove({ id: 'notreepunching:campfire/bucket' })
  event.remove({ id: 'notreepunching:smelting/bucket' })
  event.remove({ id: 'notreepunching:smelting/bucket' })
  event.remove({ id: 'vintageimprovements:curving/iron_sheet' })
  
  event.smelting('morebuckets:ceramic_bucket', 'notreepunching:clay_bucket', 0.35, 200)
  event.campfireCooking('morebuckets:ceramic_bucket', 'notreepunching:clay_bucket', 0.35, 600)
  event.custom({
    "type": "vintageimprovements:curving",
    "mode": 1,
    "ingredients": [
      {
        "tag": "forge:plates/aluminum"
      }
    ],
    "results": [
      {
        "item": "minecraft:bucket"
      }
    ]
  })
  event.shapeless(
    Item.of('minecraft:bucket', 1),
    [
      '#forge:plates/aluminum',
      'hot_iron:smithing_hammer',
    ]
  ).customIngredientAction('hot_iron:smithing_hammer', 'keep_smithing_hammer');
});