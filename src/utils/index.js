import { BigNumber, utils } from 'ethers'
import { DateTime } from 'luxon'
import {
  RARITY_LEVELS,
  choices,
  statsGenesMap,
  visualGenesMap,
  ZERO_ADDRESS,
} from '../constants'

export function buildAPIHero(heroRaw) {
  console.log(heroRaw)
  const visualGenes = convertGenes(heroRaw.visualgenes, visualGenesMap)
  const statGenes = convertGenes(heroRaw.statgenes, statsGenesMap)

  if (typeof heroRaw.id == 'string') {
    heroRaw.id = BigNumber.from(heroRaw.id)
    heroRaw.xp = BigNumber.from(heroRaw.xp)
    heroRaw.staminafullat = BigNumber.from(heroRaw.staminafullat)
    heroRaw.summonedtime = BigNumber.from(heroRaw.summonedtime)
    heroRaw.nextsummontime = BigNumber.from(heroRaw.nextsummontime)
  }

  let auctionPrice = 0
  if (
    heroRaw.saleauction_startingprice &&
    heroRaw.saleauction_endingprice &&
    heroRaw.saleauction_startingprice !== heroRaw.saleauction_endingprice
  ) {
    auctionPrice = calculateCurrentAuctionPrice(
      parseFloat(utils.formatEther(heroRaw.saleauction_startingprice)),
      parseFloat(utils.formatEther(heroRaw.saleauction_endingprice)),
      heroRaw.saleauction_startedat,
      heroRaw.saleauction_duration
    )
  }

  return {
    owner: {
      id: '',
      heroId: heroRaw.id,
      name: heroRaw.owner_name,
      owner: heroRaw.owner,
      picId: heroRaw.owner_picid,
      created: heroRaw.owner_created,
    },
    id: heroRaw.id.toNumber(),
    background: visualGenes.background,
    class: statGenes.class || statGenes.mainClass,
    subClass: statGenes.subClass,
    element: statGenes.element,
    gender: visualGenes.gender,
    generation: heroRaw.generation,
    summonerId: heroRaw.summonerid,
    assistantId: heroRaw.assistantid,
    currentQuest: heroRaw.currentquest,
    isQuesting: heroRaw.currentquest !== ZERO_ADDRESS,
    level: heroRaw.level,
    xp: heroRaw.xp.toNumber(),
    firstName: heroRaw.firstname_string, //|| (getFirstName(visualGenes.gender, heroRaw.firstname) as string),
    lastName: heroRaw.lastname_string, //|| getLastName(heroRaw.lastname),
    name:
      heroRaw.firstname_string && heroRaw.lastname_string
        ? `${heroRaw.firstname_string} ${heroRaw.lastname_string}`
        : ' ', //(getFullName(visualGenes.gender, heroRaw.firstname, heroRaw.lastname) as string),
    rarity: RARITY_LEVELS[heroRaw.rarity],
    rarityNum: heroRaw.rarity,
    shiny: heroRaw.shiny,
    shinyStyle: heroRaw.shiny ? heroRaw.shinystyle : 0,
    staminaFullAt: DateTime.fromSeconds(heroRaw.staminafullat.toNumber()),
    summonedDate: DateTime.fromSeconds(heroRaw.summonedtime.toNumber()),
    nextSummonTime: DateTime.fromSeconds(heroRaw.nextsummontime.toNumber()),
    summons: heroRaw.summons,
    maxSummons: heroRaw.maxsummons,
    summonsRemaining:
      heroRaw.maxsummons < 11 ? heroRaw.maxsummons - heroRaw.summons : 11,
    price:
      auctionPrice > 0
        ? auctionPrice
        : heroRaw.saleprice
        ? parseFloat(utils.formatEther(heroRaw.saleprice))
        : 0,
    summoningPrice: heroRaw.assistingprice
      ? parseFloat(utils.formatEther(heroRaw.assistingprice))
      : 0,
    winner: heroRaw.privateauctionprofile || heroRaw.winner || null,
    auction: {
      onAuction:
        heroRaw.saleauction_startingprice !== heroRaw.saleauction_endingprice,
      startingPrice: heroRaw.saleauction_startingprice
        ? parseFloat(utils.formatEther(heroRaw.saleauction_startingprice))
        : 0,
      endingPrice: heroRaw.saleauction_endingprice
        ? parseFloat(utils.formatEther(heroRaw.saleauction_endingprice))
        : 0,
      startedAt: heroRaw.saleauction_startedat,
      duration: heroRaw.saleauction_duration,
    },
    visualGenes: visualGenes,
    statGenes: statGenes,
    stats: {
      id: '',
      strength: heroRaw.strength,
      intelligence: heroRaw.intelligence,
      wisdom: heroRaw.wisdom,
      luck: heroRaw.luck,
      agility: heroRaw.agility,
      vitality: heroRaw.vitality,
      endurance: heroRaw.endurance,
      dexterity: heroRaw.dexterity,
      hp: heroRaw.hp,
      mp: heroRaw.mp,
      stamina: heroRaw.stamina,
    },
    skills: {
      mining: heroRaw.mining / 10,
      gardening: heroRaw.gardening / 10,
      fishing: heroRaw.fishing / 10,
      foraging: heroRaw.foraging / 10,
    },
  }
}

export const calculateCurrentAuctionPrice = (
  startingPrice,
  endingPrice,
  startedAt,
  duration
) => {
  if (startingPrice === endingPrice) {
    return startingPrice
  } else {
    const currentTime = DateTime.fromJSDate(new Date())
    const auctionStartedAt = DateTime.fromJSDate(new Date(startedAt * 1000))

    const diffInSeconds = auctionStartedAt.diff(currentTime, ['seconds'])
    const finalDiff = diffInSeconds.toObject().seconds
    let percentTimeElapsed = 1

    // If duration hasn't passed, calculate elapsed time percentage.
    if (finalDiff && finalDiff < 0) {
      percentTimeElapsed = Number(finalDiff) / Number(duration)
    }

    // Calculate price from percentage of elpased time.
    const priceDiff = startingPrice - endingPrice
    const priceCut = -percentTimeElapsed * priceDiff
    const currentPrice = startingPrice - priceCut

    let finalPrice = currentPrice
    if (
      (startingPrice > endingPrice && currentPrice < endingPrice) ||
      (startingPrice < endingPrice && currentPrice > endingPrice)
    ) {
      finalPrice = endingPrice
    }

    // Round to 1 decimal.
    const currentPriceFormatted = (Math.round(finalPrice * 100) / 100).toFixed(
      1
    )
    return Number(currentPriceFormatted)
  }
}

const convertGenes = (_genes, genesMap) => {
  // First, convert the genes to kai.
  const rawKai = genesToKai(BigInt(_genes.toString())).split(' ').join('')

  const genes = {}

  // Remove spaces, and get every 4th character.
  for (const k in rawKai.split('')) {
    if (rawKai.hasOwnProperty(k)) {
      const trait = genesMap[Math.floor(Number(k) / 4)]

      const kai = rawKai[k]
      const valueNum = kai2dec(kai)

      genes[trait] = choices[trait][valueNum]
    }
  }

  return genes
}

function kai2dec(kai) {
  const ALPHABET = '123456789abcdefghijkmnopqrstuvwx'
  return ALPHABET.indexOf(kai)
}

function genesToKai(genes) {
  const ALPHABET = '123456789abcdefghijkmnopqrstuvwx'
  const BASE = BigInt(ALPHABET.length)

  let buf = ''
  while (genes >= BASE) {
    const mod = genes % BASE
    buf = ALPHABET[Number(mod)] + buf
    genes = (genes - mod) / BASE
  }

  // Add the last 4 (finally).
  buf = ALPHABET[Number(genes)] + buf

  // Pad with leading 0s.
  buf = buf.padStart(48, '1')

  return buf.replace(/(.{4})/g, '$1 ')
}

export const calculateRequiredXp = (currentLevel) => {
  let xpNeeded
  const nextLevel = currentLevel + 1
  switch (true) {
    case currentLevel < 6:
      xpNeeded = nextLevel * 1000
      break
    case currentLevel < 9:
      xpNeeded = 4000 + (nextLevel - 5) * 2000
      break
    case currentLevel < 16:
      xpNeeded = 12000 + (nextLevel - 9) * 4000
      break
    case currentLevel < 36:
      xpNeeded = 40000 + (nextLevel - 16) * 5000
      break
    case currentLevel < 56:
      xpNeeded = 140000 + (nextLevel - 36) * 7500
      break
    case currentLevel >= 56:
      xpNeeded = 290000 + (nextLevel - 56) * 10000
      break
    default:
      xpNeeded = 0
      break
  }

  return xpNeeded
}
