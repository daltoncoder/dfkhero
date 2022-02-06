import { useEffect, useState } from 'react'
import { DfkHeroCard, buildAPIHero, getApiHero, DfkHeroSprite } from './entry'

function App() {
  const [hero, setHero] = useState(null)
  const [flip, setFlip] = useState(false)

  useEffect(async () => {
    const getData = async () => {
      const apiHero = await getApiHero('14')
      console.log(apiHero)
      setHero(apiHero)
    }
    getData()
  }, [])
  return (
    <div onClick={() => setFlip(!flip)}>
      {hero && <DfkHeroCard hero={hero} isFlipped={flip} animated={true} />}
    </div>
  )
}

export default App
