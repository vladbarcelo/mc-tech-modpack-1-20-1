ServerEvents.recipes((event) => {
  for (let id of [
    'createdeco:pressing/coins/zinc_coin',
    'createdeco:pressing/coins/copper_coin',
    'createdeco:pressing/coins/brass_coin',
    'createdeco:pressing/coins/iron_coin',
    'createdeco:pressing/coins/gold_coin',
    'createdeco:pressing/coins/netherite_coin',
    'createdeco:pressing/coins/industrial_iron_coin',
  ]) {
    event.remove({ id: id })
  }
})

function convertCoins(zincAmount) {
  let tiers = [
    { coinItem: 'createdeco:gold_coin', value: 16777216 },
    { coinItem: 'createdeco:industrial_iron_coin', value: 262144 },
    { coinItem: 'createdeco:brass_coin', value: 4096 },
    { coinItem: 'createdeco:copper_coin', value: 64 },
    { coinItem: 'createdeco:zinc_coin', value: 1 }
  ];

  let result = [];

  for (let tier of tiers) {
    let amount = Math.floor(zincAmount / tier.value);
    if (amount > 0) {
      result.push({ coinItem: tier.coinItem, amount: amount });
      zincAmount -= amount * tier.value;
    }
  }

  if (!result.length) result = [{ coinItem: 'createdeco:zinc_coin', amount: 1 }]

  return result;
}

global.convertCoins = convertCoins