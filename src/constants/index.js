export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const RARITY_COMMON = 'common'
export const RARITY_UNCOMMON = 'uncommon'
export const RARITY_RARE = 'rare'
export const RARITY_LEGENDARY = 'legendary'
export const RARITY_MYTHIC = 'mythic'
export const RARITY_COLORS = {
  [RARITY_COMMON]: '#FFFFFF',
  [RARITY_UNCOMMON]: '#14C25A',
  [RARITY_RARE]: '#21CCFF',
  [RARITY_LEGENDARY]: '#ffa32d',
  [RARITY_MYTHIC]: '#df5bff',
}

export const RARITY_LEVELS = [
  RARITY_COMMON,
  RARITY_UNCOMMON,
  RARITY_RARE,
  RARITY_LEGENDARY,
  RARITY_MYTHIC,
]

export const visualGenesMap = {
  0: 'gender',
  1: 'headAppendage',
  2: 'backAppendage',
  3: 'background',
  4: 'hairStyle',
  5: 'hairColor',
  6: 'visualUnknown1',
  7: 'eyeColor',
  8: 'skinColor',
  9: 'appendageColor',
  10: 'backAppendageColor',
  11: 'visualUnknown2',
}

export const statsGenesMap = {
  0: 'class',
  1: 'subClass',
  2: 'profession',
  3: 'passive1',
  4: 'passive2',
  5: 'active1',
  6: 'active2',
  7: 'statBoost1',
  8: 'statBoost2',
  9: 'statsUnknown1',
  10: 'element',
  11: 'statsUnknown2',
}

export const genders = {
  1: 'male',
  3: 'female',
}

export const backgrounds = {
  0: 'desert',
  2: 'forest',
  4: 'plains',
  6: 'island',
  8: 'swamp',
  10: 'mountains',
  12: 'city',
  14: 'arctic',
}

export const classes = {
  0: 'warrior',
  1: 'knight',
  2: 'thief',
  3: 'archer',
  4: 'priest',
  5: 'wizard',
  6: 'monk',
  7: 'pirate',
  16: 'paladin',
  17: 'darkKnight',
  18: 'summoner',
  19: 'ninja',
  24: 'dragoon',
  25: 'sage',
  28: 'dreadKnight',
}

const skinColors = {
  0: 'c58135',
  2: 'f1ca9e',
  4: '985e1c',
  6: '57340c',
  8: 'e6a861',
  10: '7b4a11',
  12: 'e5ac91',
  14: 'aa5c38',
}

const hairColors = {
  0: 'ab9159',
  1: 'af3853',
  2: '578761',
  3: '068483',
  4: '48321e',
  5: '66489e',
  6: 'ca93a7',
  7: '62a7e6',
  16: 'd7bc65',
  17: '9b68ab',
  18: '8d6b3a',
  19: '566377',
  24: '880016',
  25: '353132',
  28: '8f9bb3',
}

const eyeColors = {
  0: '203997',
  2: '896693',
  4: 'bb3f55',
  6: '0d7634',
  8: '8d7136',
  10: '613d8a',
  12: '2494a2',
  14: 'a41e12',
}

const appendageColors = {
  0: 'c5bfa7',
  1: 'a88b47',
  2: '58381e',
  3: '566f7d',
  4: '2a386d',
  5: '3f2e40',
  6: '830e18',
  7: '6f3a3c',
  16: '6b173c',
  17: 'a0304d',
  18: '78547c',
  19: '352a51',
  24: 'c29d35',
  25: '211f1f',
  28: 'd7d7d7',
}

const backAppendageColors = {
  0: 'c5bfa7',
  1: 'a88b47',
  2: '58381e',
  3: '566f7d',
  4: '2a386d',
  5: '3f2e40',
  6: '830e18',
  7: '6f3a3c',
  16: '6b173c',
  17: 'a0304d',
  18: '78547c',
  19: '352a51',
  24: 'c29d35',
  25: '211f1f',
  28: 'd7d7d7',
}

const attacks = {
  0: 'Basic1',
  1: 'Basic2',
  2: 'Basic3',
  3: 'Basic4',
  4: 'Basic5',
  5: 'Basic6',
  6: 'Basic7',
  7: 'Basic8',
  16: 'Advanced1',
  17: 'Advanced2',
  18: 'Advanced3',
  19: 'Advanced4',
  24: 'Elite1',
  25: 'Elite2',
  28: 'Transcendent1',
}

const traits = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  24: 24,
  25: 25,
  28: 28,
}

export const professions = {
  0: 'mining',
  2: 'gardening',
  4: 'fishing',
  6: 'foraging',
}

export const statBoosts = {
  0: 'STR',
  2: 'AGI',
  4: 'INT',
  6: 'WIS',
  8: 'LCK',
  10: 'VIT',
  12: 'END',
  14: 'DEX',
}

export const elements = {
  0: 'fire',
  2: 'water',
  4: 'earth',
  6: 'wind',
  8: 'lightning',
  10: 'ice',
  12: 'light',
  14: 'dark',
}

export const choices = {
  gender: genders,
  background: backgrounds,
  class: classes,
  skinColor: skinColors,
  hairColor: hairColors,
  eyeColor: eyeColors,
  appendageColor: appendageColors,
  backAppendageColor: backAppendageColors,
  hairStyle: traits,
  backAppendage: traits,
  headAppendage: traits,
  subClass: classes,
  profession: professions,
  passive1: attacks,
  passive2: attacks,
  active1: attacks,
  active2: attacks,
  statBoost1: statBoosts,
  statBoost2: statBoosts,
  element: elements,
  visualUnknown1: traits,
  visualUnknown2: traits,
  statsUnknown1: traits,
  statsUnknown2: traits,
}

export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GÖRLI: 5,
  KOVAN: 42,
  BSC_MAINNET: 56,
  BSC_TESTNET: 97,
  HARMONY_MAINNET: 1666600000,
  HARMONY_TESTNET: 1666700000,
  HARDHAT: 31337,
}

export const stats = [
  {
    value: 'strength',
    label: 'Strength',
    abbr: 'STR',
  },
  {
    value: 'dexterity',
    label: 'Dexterity',
    abbr: 'DEX',
  },
  {
    value: 'agility',
    label: 'Agility',
    abbr: 'AGI',
  },
  {
    value: 'vitality',
    label: 'Vitality',
    abbr: 'VIT',
  },
  {
    value: 'endurance',
    label: 'Endurance',
    abbr: 'END',
  },
  {
    value: 'intelligence',
    label: 'Intelligence',
    abbr: 'INT',
  },
  {
    value: 'wisdom',
    label: 'Wisdom',
    abbr: 'WIS',
  },
  {
    value: 'luck',
    label: 'Luck',
    abbr: 'LCK',
  },
]
