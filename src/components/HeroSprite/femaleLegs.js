import React from 'react' // useState
import styles from '../../styles.module.css'

import FemaleLeftLegHighlight from '../../svgs/female/LeftLeg-highlight.svg'
import FemaleLeftLegShadow from '../../svgs/female/LeftLeg-shadow.svg'
import FemaleRightLegHighlight from '../../svgs/female/RightLeg-highlight.svg'
import FemaleRightLegShadow from '../../svgs/female/RightLeg-shadow.svg'
import FemaleLeftLegBtmHighlight from '../../svgs/female/LeftLegBtm-highlight.svg'
import FemaleLeftLegBtmShadow from '../../svgs/female/LeftLegBtm-shadow.svg'
import FemaleRightLegBtmHighlight from '../../svgs/female/RightLegBtm-highlight.svg'
import FemaleRightLegBtmShadow from '../../svgs/female/RightLegBtm-shadow.svg'

import archerLeftLegTop from '../../svgs/female/clothes/archer-LeftLeg.svg'
import archerLeftLegBottom from '../../svgs/female/clothes/archer-LeftLegBtm.svg'
import archerRightLegTop from '../../svgs/female/clothes/archer-RightLeg.svg'
import archerRightLegBottom from '../../svgs/female/clothes/archer-RightLegBtm.svg'

import knightLeftLegTop from '../../svgs/female/clothes/knight-LeftLeg.svg'
import knightLeftLegBottom from '../../svgs/female/clothes/knight-LeftLegBtm.svg'
import knightRightLegTop from '../../svgs/female/clothes/knight-RightLeg.svg'
import knightRightLegBottom from '../../svgs/female/clothes/knight-RightLegBtm.svg'

import monkLeftLegTop from '../../svgs/female/clothes/monk-LeftLeg.svg'
import monkLeftLegBottom from '../../svgs/female/clothes/monk-LeftLegBtm.svg'
import monkRightLegTop from '../../svgs/female/clothes/monk-RightLeg.svg'
import monkRightLegBottom from '../../svgs/female/clothes/monk-RightLegBtm.svg'

import pirateLeftLegTop from '../../svgs/female/clothes/pirate-LeftLeg.svg'
import pirateLeftLegBottom from '../../svgs/female/clothes/pirate-LeftLegBtm.svg'
import pirateRightLegTop from '../../svgs/female/clothes/pirate-RightLeg.svg'
import pirateRightLegBottom from '../../svgs/female/clothes/pirate-RightLegBtm.svg'

import priestLeftLegTop from '../../svgs/female/clothes/priest-LeftLeg.svg'
import priestLeftLegBottom from '../../svgs/female/clothes/priest-LeftLegBtm.svg'
import priestRightLegTop from '../../svgs/female/clothes/priest-RightLeg.svg'
import priestRightLegBottom from '../../svgs/female/clothes/priest-RightLegBtm.svg'

import thiefLeftLegTop from '../../svgs/female/clothes/thief-LeftLeg.svg'
import thiefLeftLegBottom from '../../svgs/female/clothes/thief-LeftLegBtm.svg'
import thiefRightLegTop from '../../svgs/female/clothes/thief-RightLeg.svg'
import thiefRightLegBottom from '../../svgs/female/clothes/thief-RightLegBtm.svg'

import warriorLeftLegTop from '../../svgs/female/clothes/warrior-LeftLeg.svg'
import warriorLeftLegBottom from '../../svgs/female/clothes/warrior-LeftLegBtm.svg'
import warriorRightLegTop from '../../svgs/female/clothes/warrior-RightLeg.svg'
import warriorRightLegBottom from '../../svgs/female/clothes/warrior-RightLegBtm.svg'

import wizardLeftLegTop from '../../svgs/female/clothes/wizard-LeftLeg.svg'
import wizardLeftLegBottom from '../../svgs/female/clothes/wizard-LeftLegBtm.svg'
import wizardRightLegTop from '../../svgs/female/clothes/wizard-RightLeg.svg'
import wizardRightLegBottom from '../../svgs/female/clothes/wizard-RightLegBtm.svg'

/* ADVANCED HEROES */
import paladinLeftLegTop from '../../svgs/female/clothes/advanced/paladin-LeftLeg.svg'
import paladinLeftLegBottom from '../../svgs/female/clothes/advanced/paladin-LeftLegBtm.svg'
import paladinRightLegTop from '../../svgs/female/clothes/advanced/paladin-RightLeg.svg'
import paladinRightLegBottom from '../../svgs/female/clothes/advanced/paladin-RightLegBtm.svg'

import darkKnightLeftLegTop from '../../svgs/female/clothes/advanced/darkKnight-LeftLeg.svg'
import darkKnightLeftLegBottom from '../../svgs/female/clothes/advanced/darkKnight-LeftLegBtm.svg'
import darkKnightRightLegTop from '../../svgs/female/clothes/advanced/darkKnight-RightLeg.svg'
import darkKnightRightLegBottom from '../../svgs/female/clothes/advanced/darkKnight-RightLegBtm.svg'

import summonerLeftLegTop from '../../svgs/female/clothes/advanced/summoner-LeftLeg.svg'
import summonerLeftLegBottom from '../../svgs/female/clothes/advanced/summoner-LeftLegBtm.svg'
import summonerRightLegTop from '../../svgs/female/clothes/advanced/summoner-RightLeg.svg'
import summonerRightLegBottom from '../../svgs/female/clothes/advanced/summoner-RightLegBtm.svg'

import ninjaLeftLegTop from '../../svgs/female/clothes/advanced/ninja-LeftLeg.svg'
import ninjaLeftLegBottom from '../../svgs/female/clothes/advanced/ninja-LeftLegBtm.svg'
import ninjaRightLegTop from '../../svgs/female/clothes/advanced/ninja-RightLeg.svg'
import ninjaRightLegBottom from '../../svgs/female/clothes/advanced/ninja-RightLegBtm.svg'

/* ELITE HEROES */
import dragoonLeftLegTop from '../../svgs/female/clothes/elite/dragoon-LeftLeg.svg'
import dragoonLeftLegBottom from '../../svgs/female/clothes/elite/dragoon-LeftLegBtm.svg'
import dragoonRightLegTop from '../../svgs/female/clothes/elite/dragoon-RightLeg.svg'
import dragoonRightLegBottom from '../../svgs/female/clothes/elite/dragoon-RightLegBtm.svg'

import sageLeftLegTop from '../../svgs/female/clothes/elite/sage-LeftLeg.svg'
import sageLeftLegBottom from '../../svgs/female/clothes/elite/sage-LeftLegBtm.svg'
import sageRightLegTop from '../../svgs/female/clothes/elite/sage-RightLeg.svg'
import sageRightLegBottom from '../../svgs/female/clothes/elite/sage-RightLegBtm.svg'

/* LEGENDARY HEROES */
import dreadKnightLeftLegTop from '../../svgs/female/clothes/legendary/dreadknight-LeftLeg.svg'
import dreadKnightLeftLegBottom from '../../svgs/female/clothes/legendary/dreadknight-LeftLegBtm.svg'
import dreadKnightRightLegTop from '../../svgs/female/clothes/legendary/dreadknight-RightLeg.svg'
import dreadKnightRightLegBottom from '../../svgs/female/clothes/legendary/dreadknight-RightLegBtm.svg'

const getClassInfo = (mainClass) => {
  switch (mainClass) {
    case 'archer': {
      return {
        leftLegTop: archerLeftLegTop,
        leftLegBottom: archerLeftLegBottom,
        rightLegTop: archerRightLegTop,
        rightLegBottom: archerRightLegBottom,
      }
    }
    case 'knight': {
      return {
        leftLegTop: knightLeftLegTop,
        leftLegBottom: knightLeftLegBottom,
        rightLegTop: knightRightLegTop,
        rightLegBottom: knightRightLegBottom,
      }
    }
    case 'monk': {
      return {
        leftLegTop: monkLeftLegTop,
        leftLegBottom: monkLeftLegBottom,
        rightLegTop: monkRightLegTop,
        rightLegBottom: monkRightLegBottom,
      }
    }
    case 'pirate': {
      return {
        leftLegTop: pirateLeftLegTop,
        leftLegBottom: pirateLeftLegBottom,
        rightLegTop: pirateRightLegTop,
        rightLegBottom: pirateRightLegBottom,
      }
    }
    case 'priest': {
      return {
        leftLegTop: priestLeftLegTop,
        leftLegBottom: priestLeftLegBottom,
        rightLegTop: priestRightLegTop,
        rightLegBottom: priestRightLegBottom,
      }
    }
    case 'thief': {
      return {
        leftLegTop: thiefLeftLegTop,
        leftLegBottom: thiefLeftLegBottom,
        rightLegTop: thiefRightLegTop,
        rightLegBottom: thiefRightLegBottom,
      }
    }
    case 'warrior': {
      return {
        leftLegTop: warriorLeftLegTop,
        leftLegBottom: warriorLeftLegBottom,
        rightLegTop: warriorRightLegTop,
        rightLegBottom: warriorRightLegBottom,
      }
    }
    case 'wizard': {
      return {
        leftLegTop: wizardLeftLegTop,
        leftLegBottom: wizardLeftLegBottom,
        rightLegTop: wizardRightLegTop,
        rightLegBottom: wizardRightLegBottom,
      }
    }
    case 'paladin': {
      return {
        leftLegTop: paladinLeftLegTop,
        leftLegBottom: paladinLeftLegBottom,
        rightLegTop: paladinRightLegTop,
        rightLegBottom: paladinRightLegBottom,
      }
    }
    case 'darkKnight': {
      return {
        leftLegTop: darkKnightLeftLegTop,
        leftLegBottom: darkKnightLeftLegBottom,
        rightLegTop: darkKnightRightLegTop,
        rightLegBottom: darkKnightRightLegBottom,
      }
    }
    case 'summoner': {
      return {
        leftLegTop: summonerLeftLegTop,
        leftLegBottom: summonerLeftLegBottom,
        rightLegTop: summonerRightLegTop,
        rightLegBottom: summonerRightLegBottom,
      }
    }
    case 'ninja': {
      return {
        leftLegTop: ninjaLeftLegTop,
        leftLegBottom: ninjaLeftLegBottom,
        rightLegTop: ninjaRightLegTop,
        rightLegBottom: ninjaRightLegBottom,
      }
    }
    case 'dragoon': {
      return {
        leftLegTop: dragoonLeftLegTop,
        leftLegBottom: dragoonLeftLegBottom,
        rightLegTop: dragoonRightLegTop,
        rightLegBottom: dragoonRightLegBottom,
      }
    }
    case 'sage': {
      return {
        leftLegTop: sageLeftLegTop,
        leftLegBottom: sageLeftLegBottom,
        rightLegTop: sageRightLegTop,
        rightLegBottom: sageRightLegBottom,
      }
    }
    case 'dreadKnight': {
      return {
        leftLegTop: dreadKnightLeftLegTop,
        leftLegBottom: dreadKnightLeftLegBottom,
        rightLegTop: dreadKnightRightLegTop,
        rightLegBottom: dreadKnightRightLegBottom,
      }
    }
    default: {
      return {}
    }
  }
}

const LeftLegFemale = ({ legTop, legTopHighlight, legTopShadow, stroke }) => (
  <React.Fragment>
    <img src={legTop} className={styles.clothing} />
    <img src={legTopHighlight} className={styles.highlight} />
    <img src={legTopShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path
        stroke={stroke}
        d='M16 29h2M14 30h5M13 31h6M13 32h6M13 33h7M14 34h6M15 35h5M15 36h5M16 37h4'
      />
    </svg>
  </React.Fragment>
)

const RightLegFemale = ({ legTop, legTopHighlight, legTopShadow, stroke }) => (
  <React.Fragment>
    <img src={legTop} className={styles.clothing} />
    <img src={legTopHighlight} className={styles.highlight} />
    <img src={legTopShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path
        stroke={stroke}
        d='M10 30h4M9 31h5M9 32h5M9 33h5M9 34h5M9 35h5M10 36h4M10 37h4'
      />
    </svg>
  </React.Fragment>
)

const LeftLegBtmFemale = ({
  legBottom,
  legBottomHighlight,
  legBottomShadow,
  stroke,
}) => (
  <React.Fragment>
    <img src={legBottom} className={styles.clothing} />
    <img src={legBottomHighlight} className={styles.highlight} />
    <img src={legBottomShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path stroke={stroke} d='M17 38h4M17 39h4M18 40h3M18 41h4M19 42h3' />
    </svg>
  </React.Fragment>
)

const RightLegBtmFemale = ({
  legBottom,
  legBottomHighlight,
  legBottomShadow,
  stroke,
}) => (
  <React.Fragment>
    <img src={legBottom} className={styles.clothing} />
    <img src={legBottomHighlight} className={styles.highlight} />
    <img src={legBottomShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path stroke={stroke} d='M11 38h4M11 39h4M12 40h3M12 41h3M12 42h3' />
    </svg>
  </React.Fragment>
)

const FemaleLegs = ({ mainClass, stroke }) => {
  const classInfo = getClassInfo(mainClass)
  return (
    <>
      <div className={`${styles.heroLegLeft} ${styles.bodyPart}`}>
        <LeftLegFemale
          legTop={classInfo.leftLegTop}
          legTopShadow={FemaleLeftLegShadow}
          legTopHighlight={FemaleLeftLegHighlight}
          stroke={stroke}
        />
      </div>
      <div className={`${styles.heroLegRight} ${styles.bodyPart}`}>
        <RightLegFemale
          legTop={classInfo.rightLegTop}
          legTopShadow={FemaleRightLegShadow}
          legTopHighlight={FemaleRightLegHighlight}
          stroke={stroke}
        />
      </div>
      <div className={`${styles.heroLegLeftBtm} ${styles.bodyPart}`}>
        <LeftLegBtmFemale
          legBottom={classInfo.leftLegBottom}
          legBottomShadow={FemaleLeftLegBtmShadow}
          legBottomHighlight={FemaleLeftLegBtmHighlight}
          stroke={stroke}
        />
      </div>
      <div className={`${styles.heroLegRightBtm} ${styles.bodyPart}`}>
        <RightLegBtmFemale
          legBottom={classInfo.rightLegBottom}
          legBottomShadow={FemaleRightLegBtmShadow}
          legBottomHighlight={FemaleRightLegBtmHighlight}
          stroke={stroke}
        />
      </div>
    </>
  )
}

export default FemaleLegs
