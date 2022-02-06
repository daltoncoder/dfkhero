import { useEffect, useState } from 'react'
import { DfkHeroCard, buildAPIHero, getApiHero, DfkHeroSprite } from './entry'

function App() {
  const [hero, setHero] = useState(null)

  useEffect(async () => {
    const getData = async () => {
      const apiHero = await getApiHero('14')
      console.log(apiHero)
      setHero(apiHero)
    }
    getData()
  }, [])
  return <div>{hero && <DfkHeroCard hero={hero} />}</div>
}

export default App
