// const itemCombineInInventoryMap = {}
// const playersWithIngredients = []
// itemCombineInInventoryMap.A = {
//     inputItems: [Ingredient.of("kubejs:hot_copper_ingot").withCount(1), Ingredient.of("hot_iron:smithing_tongs").withCount(1)],
//     result: Item.of("kubejs:hot_copper_ingot_in_tongs")
// }

// Object.keys(itemCombineInInventoryMap).forEach(k => {
//     const recipe = itemCombineInInventoryMap[k]
//     const inputItems = recipe.inputItems
//     const itemsToCheck = inputItems.map(inputItem => inputItem.ingredient.itemIds).reduce((a, b) => a.concat(b))
//     PlayerEvents.inventoryChanged(Array.from(itemsToCheck.toArray()), event=>{
//         const {player, player: { inventory } } = event
//         const count = inputItems.map(inputItem => Math.floor(inventory.count(inputItem.ingredient) / inputItem.count)).reduce((a, b) => Math.min(a, b))
//         console.log('inventoryChanged', count, k)
//         if(count) playersWithIngredients.push({player: player, count: count, key: k});
//     })
// })

// /**
//  * 
//  * @param {Internal.ServerPlayer} player 
//  * @param {number} count 
//  * @param {*} key 
//  */
// function combineIngredientsInInventory(player, count, key){
//     const recipe = itemCombineInInventoryMap[key]
//     const inputItems = recipe.inputItems
//     const outputItem = recipe.result
//     Array(count).fill(0).forEach(_ => {
//         inputItems.forEach(inputItem => Array(inputItem.count).fill(0).forEach(_ => {
//             const slotIndex = player.inventory.find(inputItem.ingredient)
//             player.inventory.getItem(slotIndex).shrink(1)
//         }))
//         player.give(outputItem)
//     })
// }

// ServerEvents.tick(event => {
//     if(playersWithIngredients.length == 0) return;
//     console.log('playersWithIngredients', playersWithIngredients)
//     const {player, count, key} = playersWithIngredients.shift()
//     combineIngredientsInInventory(player, count, key)
// })