ServerEvents.recipes((event) => {
  event.custom({
    type: "tconstruct:melting_fuel",
    duration: 100,
    fluid: {
      amount: 50,
      fluid: "tfmg:molten_slag"
    },
    rate: 10,
    temperature: 800
  })
});