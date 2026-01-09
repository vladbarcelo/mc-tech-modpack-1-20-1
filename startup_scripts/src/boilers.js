/**
 * Explanation of Heat Level:
 * -1: This block does not provide heat in any form.
 * 0 : This block provides passive heat. (Like unfueled blaze burners)
 * 1 : This block provides 1 unit of heat (1 green bar in the status, like fueled blaze burners)
 * 2 : This block provides 2 units of heat (like blaze-caked burners)
 * X : This block provides X units of heat, which is X green bars in the status
 *
 * Notice that the callback is invoked only when there's an update signal to the boilers.
 * Like a change of blockstate in adjacent blocks, breaking/placing, etc.
 * 
 * source: https://kubejs-notes.pages.dev/en-us/example-scripts/KubeJS-Create-Events.html
*/

CreateEvents.boilerHeatHandler((event) => {
  event.add("minecraft:campfire", (block) => {
    return -1;
  });

  event.addAdvanced("steampowered:bronze_burner", (block) => {
    let upperBlock = block.up.getId()

    if (upperBlock !== 'create:fluid_tank') return -1

    let heatUnits = block.getEntityData().get('hu').toString()

    if (heatUnits > 1) return 1
    else if (heatUnits === 1) return 0
    else return -1
  });

  event.addAdvanced("steampowered:cast_iron_burner", (block) => {
    let upperBlock = block.up.getId()

    if (upperBlock !== 'create:fluid_tank') return -1

    let heatUnits = block.getEntityData().get('hu').toString()

    if (heatUnits > 1) return 2
    else if (heatUnits === 1) return 1
    else return -1
  });

  event.addAdvanced("steampowered:steel_burner", (block) => {
    let upperBlock = block.up.getId()

    if (upperBlock !== 'create:fluid_tank') return -1

    let heatUnits = block.getEntityData().get('hu').toString()

    if (heatUnits > 1) return 3
    else if (heatUnits === 1) return 2
    else return -1
  });
});