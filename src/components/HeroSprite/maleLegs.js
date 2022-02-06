import React from 'react' // useState
import styles from '../../styles.module.css'

import MaleLeftLegHighlight from '../../svgs/male/LeftLeg-highlight.svg'
import MaleLeftLegShadow from '../../svgs/male/LeftLeg-shadow.svg'
import MaleRightLegHighlight from '../../svgs/male/RightLeg-highlight.svg'
import MaleRightLegShadow from '../../svgs/male/RightLeg-shadow.svg'
import MaleLeftLegBtmHighlight from '../../svgs/male/LeftLegBtm-highlight.svg'
import MaleLeftLegBtmShadow from '../../svgs/male/LeftLegBtm-shadow.svg'
import MaleRightLegBtmHighlight from '../../svgs/male/RightLegBtm-highlight.svg'
import MaleRightLegBtmShadow from '../../svgs/male/RightLegBtm-shadow.svg'

import archerLeftLegTop from '../../svgs/male/clothes/archer-LeftLeg.svg'
import archerLeftLegBottom from '../../svgs/male/clothes/archer-LeftLegBtm.svg'
import archerRightLegTop from '../../svgs/male/clothes/archer-RightLeg.svg'
import archerRightLegBottom from '../../svgs/male/clothes/archer-RightLegBtm.svg'

import knightLeftLegTop from '../../svgs/male/clothes/knight-LeftLeg.svg'
import knightLeftLegBottom from '../../svgs/male/clothes/knight-LeftLegBtm.svg'
import knightRightLegTop from '../../svgs/male/clothes/knight-RightLeg.svg'
import knightRightLegBottom from '../../svgs/male/clothes/knight-RightLegBtm.svg'

import monkLeftLegTop from '../../svgs/male/clothes/monk-LeftLeg.svg'
import monkLeftLegBottom from '../../svgs/male/clothes/monk-LeftLegBtm.svg'
import monkRightLegTop from '../../svgs/male/clothes/monk-RightLeg.svg'
import monkRightLegBottom from '../../svgs/male/clothes/monk-RightLegBtm.svg'

import pirateLeftLegTop from '../../svgs/male/clothes/pirate-LeftLeg.svg'
import pirateLeftLegBottom from '../../svgs/male/clothes/pirate-LeftLegBtm.svg'
import pirateRightLegTop from '../../svgs/male/clothes/pirate-RightLeg.svg'
import pirateRightLegBottom from '../../svgs/male/clothes/pirate-RightLegBtm.svg'

import priestLeftLegTop from '../../svgs/male/clothes/priest-LeftLeg.svg'
import priestLeftLegBottom from '../../svgs/male/clothes/priest-LeftLegBtm.svg'
import priestRightLegTop from '../../svgs/male/clothes/priest-RightLeg.svg'
import priestRightLegBottom from '../../svgs/male/clothes/priest-RightLegBtm.svg'

import thiefLeftLegTop from '../../svgs/male/clothes/thief-LeftLeg.svg'
import thiefLeftLegBottom from '../../svgs/male/clothes/thief-LeftLegBtm.svg'
import thiefRightLegTop from '../../svgs/male/clothes/thief-RightLeg.svg'
import thiefRightLegBottom from '../../svgs/male/clothes/thief-RightLegBtm.svg'

import warriorLeftLegTop from '../../svgs/male/clothes/warrior-LeftLeg.svg'
import warriorLeftLegBottom from '../../svgs/male/clothes/warrior-LeftLegBtm.svg'
import warriorRightLegTop from '../../svgs/male/clothes/warrior-RightLeg.svg'
import warriorRightLegBottom from '../../svgs/male/clothes/warrior-RightLegBtm.svg'

import wizardLeftLegTop from '../../svgs/male/clothes/wizard-LeftLeg.svg'
import wizardLeftLegBottom from '../../svgs/male/clothes/wizard-LeftLegBtm.svg'
import wizardRightLegTop from '../../svgs/male/clothes/wizard-RightLeg.svg'
import wizardRightLegBottom from '../../svgs/male/clothes/wizard-RightLegBtm.svg'

/* ADVANCED HEROES */
import paladinLeftLegTop from '../../svgs/male/clothes/advanced/paladin-LeftLeg.svg'
import paladinLeftLegBottom from '../../svgs/male/clothes/advanced/paladin-LeftLegBtm.svg'
import paladinRightLegTop from '../../svgs/male/clothes/advanced/paladin-RightLeg.svg'
import paladinRightLegBottom from '../../svgs/male/clothes/advanced/paladin-RightLegBtm.svg'

import darkKnightLeftLegTop from '../../svgs/male/clothes/advanced/darkKnight-LeftLeg.svg'
import darkKnightLeftLegBottom from '../../svgs/male/clothes/advanced/darkKnight-LeftLegBtm.svg'
import darkKnightRightLegTop from '../../svgs/male/clothes/advanced/darkKnight-RightLeg.svg'
import darkKnightRightLegBottom from '../../svgs/male/clothes/advanced/darkKnight-RightLegBtm.svg'

import summonerLeftLegTop from '../../svgs/male/clothes/advanced/summoner-LeftLeg.svg'
import summonerLeftLegBottom from '../../svgs/male/clothes/advanced/summoner-LeftLegBtm.svg'
import summonerRightLegTop from '../../svgs/male/clothes/advanced/summoner-RightLeg.svg'
import summonerRightLegBottom from '../../svgs/male/clothes/advanced/summoner-RightLegBtm.svg'

import ninjaLeftLegTop from '../../svgs/male/clothes/advanced/ninja-LeftLeg.svg'
import ninjaLeftLegBottom from '../../svgs/male/clothes/advanced/ninja-LeftLegBtm.svg'
import ninjaRightLegTop from '../../svgs/male/clothes/advanced/ninja-RightLeg.svg'
import ninjaRightLegBottom from '../../svgs/male/clothes/advanced/ninja-RightLegBtm.svg'

/* ELITE HEROES */
import dragoonLeftLegTop from '../../svgs/male/clothes/elite/dragoon-LeftLeg.svg'
import dragoonLeftLegBottom from '../../svgs/male/clothes/elite/dragoon-LeftLegBtm.svg'
import dragoonRightLegTop from '../../svgs/male/clothes/elite/dragoon-RightLeg.svg'
import dragoonRightLegBottom from '../../svgs/male/clothes/elite/dragoon-RightLegBtm.svg'

import sageLeftLegTop from '../../svgs/male/clothes/elite/sage-LeftLeg.svg'
import sageLeftLegBottom from '../../svgs/male/clothes/elite/sage-LeftLegBtm.svg'
import sageRightLegTop from '../../svgs/male/clothes/elite/sage-RightLeg.svg'
import sageRightLegBottom from '../../svgs/male/clothes/elite/sage-RightLegBtm.svg'

/* LEGENDARY HEROES */
import dreadKnightLeftLegTop from '../../svgs/male/clothes/legendary/dreadknight-LeftLeg.svg'
import dreadKnightLeftLegBottom from '../../svgs/male/clothes/legendary/dreadknight-LeftLegBtm.svg'
import dreadKnightRightLegTop from '../../svgs/male/clothes/legendary/dreadknight-RightLeg.svg'
import dreadKnightRightLegBottom from '../../svgs/male/clothes/legendary/dreadknight-RightLegBtm.svg'

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

const LeftLegMale = ({ legTop, legTopHighlight, legTopShadow, stroke }) => (
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
        d='M17 31h3M16 32h5M15 33h6M15 34h6M15 35h6M15 36h6M16 37h5'
      />
    </svg>
  </React.Fragment>
)

const RightLegMale = ({ legTop, legTopHighlight, legTopShadow, stroke }) => (
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
        d='M10 32h4M10 33h5M10 34h5M10 35h5M10 36h5M10 37h5'
      />
    </svg>
  </React.Fragment>
)

const LeftLegBtmMale = ({
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

const RightLegBtmMale = ({
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
      <path stroke={stroke} d='M11 38h5M11 39h5M12 40h4M12 41h4M12 42h3' />
    </svg>
  </React.Fragment>
)

const MaleLegs = ({ mainClass, stroke }) => {
  const classInfo = getClassInfo(mainClass)
  return (
    <>
      <div className={`${styles.heroLegLeft} ${styles.bodyPart}`}>
        <LeftLegMale
          legTop={classInfo.leftLegTop}
          legTopShadow={MaleLeftLegShadow}
          legTopHighlight={MaleLeftLegHighlight}
          stroke={stroke}
        />
      </div>
      <div className={`${styles.heroLegRight} ${styles.bodyPart}`}>
        <RightLegMale
          legTop={classInfo.rightLegTop}
          legTopShadow={MaleRightLegShadow}
          legTopHighlight={MaleRightLegHighlight}
          stroke={stroke}
        />
      </div>
      <div className={`${styles.heroLegLeftBtm} ${styles.bodyPart}`}>
        <LeftLegBtmMale
          legBottom={classInfo.leftLegBottom}
          legBottomShadow={MaleLeftLegBtmShadow}
          legBottomHighlight={MaleLeftLegBtmHighlight}
          stroke={stroke}
        />
      </div>
      <div className={`${styles.heroLegRightBtm} ${styles.bodyPart}`}>
        <RightLegBtmMale
          legBottom={classInfo.rightLegBottom}
          legBottomShadow={MaleRightLegBtmShadow}
          legBottomHighlight={MaleRightLegBtmHighlight}
          stroke={stroke}
        />
      </div>
    </>
  )
}

export default MaleLegs
