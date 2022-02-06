import React from 'react' // useState
import styles from '../../styles.module.css'

import MaleLeftFootHighlight from '../../svgs/male/LeftFoot-highlight.svg'
import MaleLeftFootShadow from '../../svgs/male/LeftFoot-shadow.svg'
import MaleRightFootHighlight from '../../svgs/male/RightFoot-highlight.svg'
import MaleRightFootShadow from '../../svgs/male/RightFoot-shadow.svg'

import archerLeftFoot from '../../svgs/male/clothes/archer-LeftFoot.svg'
import archerRightFoot from '../../svgs/male/clothes/archer-RightFoot.svg'

import knightLeftFoot from '../../svgs/male/clothes/knight-LeftFoot.svg'
import knightRightFoot from '../../svgs/male/clothes/knight-RightFoot.svg'

import monkLeftFoot from '../../svgs/male/clothes/monk-LeftFoot.svg'
import monkRightFoot from '../../svgs/male/clothes/monk-RightFoot.svg'

import pirateLeftFoot from '../../svgs/male/clothes/pirate-LeftFoot.svg'
import pirateRightFoot from '../../svgs/male/clothes/pirate-RightFoot.svg'

import priestLeftFoot from '../../svgs/male/clothes/priest-LeftFoot.svg'
import priestRightFoot from '../../svgs/male/clothes/priest-RightFoot.svg'

import thiefLeftFoot from '../../svgs/male/clothes/thief-LeftFoot.svg'
import thiefRightFoot from '../../svgs/male/clothes/thief-RightFoot.svg'

import warriorLeftFoot from '../../svgs/male/clothes/warrior-LeftFoot.svg'
import warriorRightFoot from '../../svgs/male/clothes/warrior-RightFoot.svg'

import wizardLeftFoot from '../../svgs/male/clothes/wizard-LeftFoot.svg'
import wizardRightFoot from '../../svgs/male/clothes/wizard-RightFoot.svg'

/* ADVANCED HEROES */
import paladinLeftFoot from '../../svgs/male/clothes/advanced/paladin-LeftFoot.svg'
import paladinRightFoot from '../../svgs/male/clothes/advanced/paladin-RightFoot.svg'
import darkKnightLeftFoot from '../../svgs/male/clothes/advanced/darkKnight-LeftFoot.svg'
import darkKnightRightFoot from '../../svgs/male/clothes/advanced/darkKnight-RightFoot.svg'
import summonerLeftFoot from '../../svgs/male/clothes/advanced/summoner-LeftFoot.svg'
import summonerRightFoot from '../../svgs/male/clothes/advanced/summoner-RightFoot.svg'
import ninjaLeftFoot from '../../svgs/male/clothes/advanced/ninja-LeftFoot.svg'
import ninjaRightFoot from '../../svgs/male/clothes/advanced/ninja-RightFoot.svg'

/* ELITE HEROES */
import dragoonLeftFoot from '../../svgs/male/clothes/elite/dragoon-LeftFoot.svg'
import dragoonRightFoot from '../../svgs/male/clothes/elite/dragoon-RightFoot.svg'
import sageLeftFoot from '../../svgs/male/clothes/elite/sage-LeftFoot.svg'
import sageRightFoot from '../../svgs/male/clothes/elite/sage-RightFoot.svg'

/* LEGENDARY HEROES */
import dreadKnightLeftFoot from '../../svgs/male/clothes/legendary/dreadknight-LeftFoot.svg'
import dreadKnightRightFoot from '../../svgs/male/clothes/legendary/dreadknight-RightFoot.svg'

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

const LeftFootMale = ({ leftFoot, stroke }) => (
  <React.Fragment>
    <img src={leftFoot} className={styles.clothing} />
    <img src={MaleLeftFootHighlight} className={styles.highlight} />
    <img src={MaleLeftFootShadow} className={styles.shadow} />
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

const RightFootMale = ({ rightFoot, stroke }) => (
  <React.Fragment>
    <img src={rightFoot} className={styles.clothing} />
    <img src={MaleRightFootHighlight} className={styles.highlight} />
    <img src={MaleRightFootShadow} className={styles.shadow} />
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

const MaleFeet = ({ mainClass, stroke }) => {
  const classInfo = getClassInfo(mainClass)
  return (
    <>
      <div className={`${styles.heroFootRight} ${styles.bodyPart}`}>
        <RightFootMale rightFoot={classInfo.rightFoot} stroke={stroke} />
      </div>
      <div className={`${styles.heroFootLeft} ${styles.bodyPart}`}>
        <LeftFootMale leftFoot={classInfo.leftFoot} stroke={stroke} />
      </div>
    </>
  )
}

export default MaleFeet
