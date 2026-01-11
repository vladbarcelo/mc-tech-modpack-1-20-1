export const CustomGlobal: {
  allMetals: [
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
  moltenMetals: Record<typeof CustomGlobal.allMetals, string>
  metalTemps: Record<typeof CustomGlobal.allMetals, number>
}