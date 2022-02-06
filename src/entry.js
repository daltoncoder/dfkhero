import React from 'react'
import HeroCard from './components/HeroCard'
import HeroSprite from './components/HeroSprite'
import { buildAPIHero } from './utils'
import axios from 'axios'

export const DfkHeroCard = ({ hero, isAnimated, isFlipped }) => {
  return <HeroCard hero={hero} isAnimited={isAnimated} isFlipped={isFlipped} />
}

export const DfkHeroSprite = () => {
  return <HeroSprite noCard={true} />
}

export const getApiHero = async (id) => {
  const { data } = await axios.post(
    'https://us-central1-defi-kingdoms-api.cloudfunctions.net/query_heroes',
    {
      limit: 1,
      params: [{ field: 'id', operator: '=', value: id }],
    }
  )
  const apiHero = buildAPIHero(data[0])

  return apiHero
}

export { buildAPIHero }
