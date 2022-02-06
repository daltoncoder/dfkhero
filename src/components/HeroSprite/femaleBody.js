import React from 'react'
import styles from '../../styles.module.css'

/* FEMALE TORSO */
import femaleArcherBody from '../../svgs/female/clothes/archer-Body.svg'
import femaleArcherBehind from '../../svgs/female/clothes/archer-Behind.svg'
import femaleKnightBody from '../../svgs/female/clothes/knight-Body.svg'
import femaleKnightBehind from '../../svgs/female/clothes/knight-Behind.svg'
import femaleMonkBody from '../../svgs/female/clothes/monk-Body.svg'
import femaleMonkBehind from '../../svgs/female/clothes/monk-Behind.svg'
import femalePirateBody from '../../svgs/female/clothes/pirate-Body.svg'
import femalePirateBehind from '../../svgs/female/clothes/pirate-Behind.svg'
import femalePriestBody from '../../svgs/female/clothes/priest-Body.svg'
import femalePriestBehind from '../../svgs/female/clothes/priest-Behind.svg'
import femaleThiefBody from '../../svgs/female/clothes/thief-Body.svg'
import femaleThiefBehind from '../../svgs/female/clothes/thief-Behind.svg'
import femaleWarriorBody from '../../svgs/female/clothes/warrior-Body.svg'
import femaleWarriorBehind from '../../svgs/female/clothes/warrior-Behind.svg'
import femaleWizardBody from '../../svgs/female/clothes/wizard-Body.svg'
import femaleWizardBehind from '../../svgs/female/clothes/wizard-Behind.svg'

import FemaleUndies from '../../svgs/female/undies-female.svg'
import FemaleBodyHighlight from '../../svgs/female/Body-highlight.svg'
import FemaleBodyShadow from '../../svgs/female/Body-shadow.svg'

/* ADVANCED HEROES */
import femalePaladinBody from '../../svgs/female/clothes/advanced/paladin-Body.svg'
import femalePaladinBehind from '../../svgs/female/clothes/advanced/paladin-Behind.svg'
import femaleDarkKnightBody from '../../svgs/female/clothes/advanced/darkKnight-Body.svg'
import femaleDarkKnightBehind from '../../svgs/female/clothes/advanced/darkKnight-Behind.svg'
import femaleSummonerBody from '../../svgs/female/clothes/advanced/summoner-Body.svg'
import femaleSummonerBehind from '../../svgs/female/clothes/advanced/summoner-Behind.svg'
import femaleNinjaBody from '../../svgs/female/clothes/advanced/ninja-Body.svg'
import femaleNinjaBehind from '../../svgs/female/clothes/advanced/ninja-Behind.svg'

/* ELITE HEROES */
import femaleDragoonBody from '../../svgs/female/clothes/elite/dragoon-Body.svg'
import femaleDragoonBehind from '../../svgs/female/clothes/elite/dragoon-Behind.svg'
import femaleSageBody from '../../svgs/female/clothes/elite/sage-Body.svg'
import femaleSageBehind from '../../svgs/female/clothes/elite/sage-Behind.svg'

/* LEGENDARY HEROES */
import femaleDreadKnightBody from '../../svgs/female/clothes/legendary/dreadknight-Body.svg'
import femaleDreadKnightBehind from '../../svgs/female/clothes/legendary/dreadknight-Behind.svg'

const getBody = (mainClass) => {
  switch (mainClass) {
    case 'archer': {
      return {
        body: femaleArcherBody,
        behind: femaleArcherBehind,
      }
    }
    case 'knight': {
      return {
        body: femaleKnightBody,
        behind: femaleKnightBehind,
      }
    }
    case 'monk': {
      return {
        body: femaleMonkBody,
        behind: femaleMonkBehind,
      }
    }
    case 'pirate': {
      return {
        body: femalePirateBody,
        behind: femalePirateBehind,
      }
    }
    case 'priest': {
      return {
        body: femalePriestBody,
        behind: femalePriestBehind,
      }
    }
    case 'thief': {
      return {
        body: femaleThiefBody,
        behind: femaleThiefBehind,
      }
    }
    case 'warrior': {
      return {
        body: femaleWarriorBody,
        behind: femaleWarriorBehind,
      }
    }
    case 'wizard': {
      return {
        body: femaleWizardBody,
        behind: femaleWizardBehind,
      }
    }
    case 'paladin': {
      return {
        body: femalePaladinBody,
        behind: femalePaladinBehind,
      }
    }
    case 'darkKnight': {
      return {
        body: femaleDarkKnightBody,
        behind: femaleDarkKnightBehind,
      }
    }
    case 'summoner': {
      return {
        body: femaleSummonerBody,
        behind: femaleSummonerBehind,
      }
    }
    case 'ninja': {
      return {
        body: femaleNinjaBody,
        behind: femaleNinjaBehind,
      }
    }
    case 'dragoon': {
      return {
        body: femaleDragoonBody,
        behind: femaleDragoonBehind,
      }
    }
    case 'sage': {
      return {
        body: femaleSageBody,
        behind: femaleSageBehind,
      }
    }
    case 'dreadKnight': {
      return {
        body: femaleDreadKnightBody,
        behind: femaleDreadKnightBehind,
      }
    }
    default: {
      return {}
    }
  }
}

const FemaleBody = ({ mainClass, stroke }) => {
  const config = getBody(mainClass)
  return (
    <>
      <div className={`${styles.heroBody} ${styles.bodyPart}`}>
        <img src={FemaleUndies} className={styles.heroUndies} />
        <img src={config.body} className={styles.clothing} />
        <img src={FemaleBodyHighlight} className={styles.highlight} />
        <img src={FemaleBodyShadow} className={styles.shadow} />

        {/* Body svg in female folder */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -0.5 30 45'
          shapeRendering='crispEdges'
          className={styles.color}
        >
          <path
            stroke={stroke}
            d='M13 20h5M13 21h6M12 22h8M11 23h9M11 24h9M11 25h8M11 26h7M11 27h6M11 28h6M11 29h5'
          />
        </svg>
      </div>
      <div className={`${styles.heroBehind} ${styles.bodyPart}`}>
        <img src={config.behind} className={styles.clothing} />
      </div>
    </>
  )
}

export default FemaleBody
