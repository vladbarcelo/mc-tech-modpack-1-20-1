
global.tConstructMetals = {
  'lead': 'tconstruct:lead',
  'brass': 'tcintegrations:brass',
  'electrum': 'tconstruct:electrum',
  'silver': 'tconstruct:silver',
  'copper': 'tconstruct:copper',
  'constantan': 'tconstruct:constantan',
  'iron': 'tconstruct:iron',
  'steel': 'tconstruct:steel',
}


global.allMetals = [
  'lead',
  'zinc',
  'aluminum',
  'brass',
  'electrum',
  'silver',
  'gold',
  'copper',
  'cast_iron',
  'uranium',
  'constantan',
  'nickel',
  'iron',
  'steel',
  'palladium',
  'platinum',
  'chromium',
  'vanadium',
  'rhodium',
  'tungsten',
]

global.smithableMetals = [
  'lead',
  'zinc',
  'aluminum',
  'brass',
  'electrum',
  'silver',
  'gold',
  'copper',
  'cast_iron',
];

global.baseCastableMetals = [
  'uranium',
  'constantan',
  'nickel',
  'iron',
  'steel',
  'palladium',
]

global.hardCastableMetals = [
  'platinum',
  'chromium',
  'vanadium',
  'rhodium',
  'tungsten',
]

global.castableMetals = [
  'uranium',
  'constantan',
  'nickel',
  'iron',
  'steel',
  'palladium',
  'platinum',
  'chromium',
  'vanadium',
  'rhodium',
  'tungsten',
]

global.metalColors = {
  'lead': '#3f384f',
  'zinc': '#d3fcd9',
  'aluminum': '#c6ced1',
  'brass': '#fce892',
  'electrum': '#fcce50',
  'silver': '#e4f1fc',
  'gold': '#faf25e',
  'copper': '#bf5925',
  'cast_iron': '#4c4c51',
  'uranium': '#7e9173',
  'constantan': '#fc987a',
  'nickel': '#dee4d2',
  'iron': '#d5d5d5',
  'steel': '#b2b2b2',
  'palladium': '#ebd9d9',
  'platinum': '#d5eaea',
  'chromium': '#fcfcfc',
  'vanadium': '#d5e7e5',
  'rhodium': '#dad8e6',
  'tungsten': '#4e503b'
}

global.darkMetalColors = {
  "lead": "#1f182f",
  "zinc": "#b3dcb9",
  "aluminum": "#a6aeb1",
  "brass": "#dcc872",
  "electrum": "#dcae30",
  "silver": "#c4d1dc",
  "gold": "#dad23e",
  "copper": "#9f3905",
  "cast_iron": "#2c2c31",
  "uranium": "#5e7153",
  "constantan": "#dc785a",
  "nickel": "#bec4b2",
  "iron": "#b5b5b5",
  "steel": "#929292",
  "palladium": "#cbb9b9",
  "platinum": "#b5caca",
  "chromium": "#dcdcdc",
  "vanadium": "#b5c7c5",
  "rhodium": "#bab8c6",
  "tungsten": "#2e301b"
}

function isSmithable(metal) { return global.smithableMetals.indexOf(metal) !== -1 }
function isCastable(metal) { return global.castableMetals.indexOf(metal) !== -1 }
function isBaseCastable(metal) { return global.baseCastableMetals.indexOf(metal) !== -1 }
function isHardCastable(metal) { return global.hardCastableMetals.indexOf(metal) !== -1 }
global.isSmithable = isSmithable;
global.isCastable = isCastable;
global.isBaseCastable = isBaseCastable;
global.isHardCastable = isHardCastable;