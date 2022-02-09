import { useEffect, useState } from 'react'
import { DfkHeroCard, buildAPIHero, getApiHero, DfkHeroSprite } from './entry'

function App() {
  const [hero, setHero] = useState(null)
  const [heroId, setHeroId] = useState('14')
  const [flip, setFlip] = useState(false)

  useEffect(async () => {
    const getData = async () => {
      const apiHero = await getApiHero(heroId)
      console.log(apiHero)
      setHero(apiHero)
    }
    getData()
  }, [heroId])
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div onClick={() => setFlip(!flip)}>
        {hero && <DfkHeroCard hero={hero} isFlipped={flip} isAnimated={true} />}
      </div>
      <div style={{ justifyContent: 'center' }}>
        <h1>Type Hero ID to display</h1>
        <input
          value={heroId}
          onChange={(e) => setHeroId(e.target.value)}
          style={{ width: 200 }}
        />
      </div>
    </div>
  )
}

export default App
