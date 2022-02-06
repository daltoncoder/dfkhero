import React from 'react' // useState
import styles from '../../styles.module.css'

import FemaleLeftFootHighlight from '../../svgs/female/LeftFoot-highlight.svg'
import FemaleLeftFootShadow from '../../svgs/female/LeftFoot-shadow.svg'
import FemaleRightFootHighlight from '../../svgs/female/RightFoot-highlight.svg'
import FemaleRightFootShadow from '../../svgs/female/RightFoot-shadow.svg'

import archerLeftFoot from '../../svgs/female/clothes/archer-LeftFoot.svg'
import archerRightFoot from '../../svgs/female/clothes/archer-RightFoot.svg'

import knightLeftFoot from '../../svgs/female/clothes/knight-LeftFoot.svg'
import knightRightFoot from '../../svgs/female/clothes/knight-RightFoot.svg'

import monkLeftFoot from '../../svgs/female/clothes/monk-LeftFoot.svg'
import monkRightFoot from '../../svgs/female/clothes/monk-RightFoot.svg'

import pirateLeftFoot from '../../svgs/female/clothes/pirate-LeftFoot.svg'
import pirateRightFoot from '../../svgs/female/clothes/pirate-RightFoot.svg'

import priestLeftFoot from '../../svgs/female/clothes/priest-LeftFoot.svg'
import priestRightFoot from '../../svgs/female/clothes/priest-RightFoot.svg'

import thiefLeftFoot from '../../svgs/female/clothes/thief-LeftFoot.svg'
import thiefRightFoot from '../../svgs/female/clothes/thief-RightFoot.svg'

import warriorLeftFoot from '../../svgs/female/clothes/warrior-LeftFoot.svg'
import warriorRightFoot from '../../svgs/female/clothes/warrior-RightFoot.svg'

import wizardLeftFoot from '../../svgs/female/clothes/wizard-LeftFoot.svg'
import wizardRightFoot from '../../svgs/female/clothes/wizard-RightFoot.svg'

/* ADVANCED HEROES */
import paladinLeftFoot from '../../svgs/female/clothes/advanced/paladin-LeftFoot.svg'
import paladinRightFoot from '../../svgs/female/clothes/advanced/paladin-RightFoot.svg'
import darkKnightLeftFoot from '../../svgs/female/clothes/advanced/darkKnight-LeftFoot.svg'
import darkKnightRightFoot from '../../svgs/female/clothes/advanced/darkKnight-RightFoot.svg'
import summonerLeftFoot from '../../svgs/female/clothes/advanced/summoner-LeftFoot.svg'
import summonerRightFoot from '../../svgs/female/clothes/advanced/summoner-RightFoot.svg'
import ninjaLeftFoot from '../../svgs/female/clothes/advanced/ninja-LeftFoot.svg'
import ninjaRightFoot from '../../svgs/female/clothes/advanced/ninja-RightFoot.svg'

/* ELITE HEROES */
import dragoonLeftFoot from '../../svgs/female/clothes/elite/dragoon-LeftFoot.svg'
import dragoonRightFoot from '../../svgs/female/clothes/elite/dragoon-RightFoot.svg'
import sageLeftFoot from '../../svgs/female/clothes/elite/sage-LeftFoot.svg'
import sageRightFoot from '../../svgs/female/clothes/elite/sage-RightFoot.svg'

/* LEGENDARY HEROES */
import dreadKnightLeftFoot from '../../svgs/female/clothes/legendary/dreadknight-LeftFoot.svg'
import dreadKnightRightFoot from '../../svgs/female/clothes/legendary/dreadknight-RightFoot.svg'

const getClassInfo = (mainClass) => {
  switch (mainClass) {
    case 'archer': {
      return {
        leftFoot: archerLeftFoot,
        rightFoot: archerRightFoot,
      }
    }
    case 'knight': {
      return {
        leftFoot: knightLeftFoot,
        rightFoot: knightRightFoot,
      }
    }
    case 'monk': {
      return {
        leftFoot: monkLeftFoot,
        rightFoot: monkRightFoot,
      }
    }
    case 'pirate': {
      return {
        leftFoot: pirateLeftFoot,
        rightFoot: pirateRightFoot,
      }
    }
    case 'priest': {
      return {
        leftFoot: priestLeftFoot,
        rightFoot: priestRightFoot,
      }
    }
    case 'thief': {
      return {
        leftFoot: thiefLeftFoot,
        rightFoot: thiefRightFoot,
      }
    }
    case 'warrior': {
      return {
        leftFoot: warriorLeftFoot,
        rightFoot: warriorRightFoot,
      }
    }
    case 'wizard': {
      return {
        leftFoot: wizardLeftFoot,
        rightFoot: wizardRightFoot,
      }
    }
    case 'paladin': {
      return {
        leftFoot: paladinLeftFoot,
        rightFoot: paladinRightFoot,
      }
    }
    case 'darkKnight': {
      return {
        leftFoot: darkKnightLeftFoot,
        rightFoot: darkKnightRightFoot,
      }
    }
    case 'summoner': {
      return {
        leftFoot: summonerLeftFoot,
        rightFoot: summonerRightFoot,
      }
    }
    case 'ninja': {
      return {
        leftFoot: ninjaLeftFoot,
        rightFoot: ninjaRightFoot,
      }
    }
    case 'dragoon': {
      return {
        leftFoot: dragoonLeftFoot,
        rightFoot: dragoonRightFoot,
      }
    }
    case 'sage': {
      return {
        leftFoot: sageLeftFoot,
        rightFoot: sageRightFoot,
      }
    }
    case 'dreadKnight': {
      return {
        leftFoot: dreadKnightLeftFoot,
        rightFoot: dreadKnightRightFoot,
      }
    }
    default: {
      return {}
    }
  }
}

const LeftFootFemale = ({ leftFoot, stroke }) => (
  <React.Fragment>
    <img src={leftFoot} className={styles.clothing} />
    <img src={FemaleLeftFootHighlight} className={styles.highlight} />
    <img src={FemaleLeftFootShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path stroke={stroke} d='M19 43h4M19 44h5' />
    </svg>
  </React.Fragment>
)

const RightFootFemale = ({ rightFoot, stroke }) => (
  <React.Fragment>
    <img src={rightFoot} className={styles.clothing} />
    <img src={FemaleRightFootHighlight} className={styles.highlight} />
    <img src={FemaleRightFootShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path stroke={stroke} d='M11 43h4M10 44h5' />
    </svg>
  </React.Fragment>
)

const FemaleFeet = ({ mainClass, stroke }) => {
  const classInfo = getClassInfo(mainClass)
  return (
    <>
      <div className={`${styles.heroFootRight} ${styles.bodyPart}`}>
        <RightFootFemale rightFoot={classInfo.rightFoot} stroke={stroke} />
      </div>
      <div className={`${styles.heroFootLeft} ${styles.bodyPart}`}>
        <LeftFootFemale leftFoot={classInfo.leftFoot} stroke={stroke} />
      </div>
    </>
  )
}

export default FemaleFeet
