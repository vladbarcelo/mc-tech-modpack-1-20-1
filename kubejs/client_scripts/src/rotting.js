ItemEvents.tooltip(event => {
  event.addAdvanced(Ingredient.of('#forge:food'), (item, advanced, text) => {
    let nbt = item.nbt || {}

    let tempText = nbt.KubeJSRotting_Temp ? getTempText(nbt.KubeJSRotting_Temp) : 'Room temperature'

    text.add(tempText)

    if (nbt.KubeJSRotting_State >= 100) {
      text.add(Text.red('Completely rotten'))
    } else if (nbt.KubeJSRotting_State >= 50) {
      text.add(Text.red('Mostly rotten'))
    } else if (nbt.KubeJSRotting_State >= 25) {
      text.add(Text.gold('Slightly rotten'))
    } else if (nbt.KubeJSRotting_State >= 10) {
      text.add(Text.gold('Stale'))
    } else {
      text.add(Text.green('Fresh'))
    }
  })
})

function getTempText(temp) {
  if (temp >= 60) return Text.red('Hot')
  if (temp >= 36) return Text.gold('Warm')
  if (temp >= 20) return Text.gold('Slightly warm')
  if (temp >= 10) return Text.blue('Slightly cold')
  if (temp >= 4) return Text.blue('Cold')
  return Text.aqua('Frozen')
}