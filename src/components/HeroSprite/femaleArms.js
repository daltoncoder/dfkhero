import React from 'react'
import styles from '../../styles.module.css'

/* FEMALE ARMS */
import femaleLeftarmbtmhighlight from '../../svgs/female/LeftArmBtm-highlight.svg'
import femaleLeftarmbtmshadow from '../../svgs/female/LeftArmBtm-shadow.svg'
// import femaleLeftarmbtm from '../../svgs/female/LeftArmBtm.svg'
import femaleLeftarmtophighlight from '../../svgs/female/LeftArmTop-highlight.svg'
import femaleLeftarmtopshadow from '../../svgs/female/LeftArmTop-shadow.svg'
// import femaleLeftarmtop from '../../svgs/female/LeftArmTop.svg'
import femaleRightarmbtmhighlight from '../../svgs/female/RightArmBtm-highlight.svg'
import femaleRightarmbtmshadow from '../../svgs/female/RightArmBtm-shadow.svg'
// import femaleRightarmbtm from '../../svgs/female/RightArmBtm.svg'
import femaleRightarmtophighlight from '../../svgs/female/RightArmTop-highlight.svg'
import femaleRightarmtopshadow from '../../svgs/female/RightArmTop-shadow.svg'
// import femaleRightarmtop from '../../svgs/female/RightArmTop.svg'
import archerLeftArmTop from '../../svgs/female/clothes/archer-LeftArmTop.svg'
import archerLeftArmBottom from '../../svgs/female/clothes/archer-LeftArmBtm.svg'
import archerRightArmTop from '../../svgs/female/clothes/archer-RightArmTop.svg'
import archerRightArmBottom from '../../svgs/female/clothes/archer-RightArmBtm.svg'
import knightLeftArmTop from '../../svgs/female/clothes/knight-LeftArmTop.svg'
import knightLeftArmBottom from '../../svgs/female/clothes/knight-LeftArmBtm.svg'
import knightRightArmTop from '../../svgs/female/clothes/knight-RightArmTop.svg'
import knightRightArmBottom from '../../svgs/female/clothes/knight-RightArmBtm.svg'
import monkLeftArmTop from '../../svgs/female/clothes/monk-LeftArmTop.svg'
import monkLeftArmBottom from '../../svgs/female/clothes/monk-LeftArmBtm.svg'
import monkRightArmTop from '../../svgs/female/clothes/monk-RightArmTop.svg'
import monkRightArmBottom from '../../svgs/female/clothes/monk-RightArmBtm.svg'
import pirateLeftArmTop from '../../svgs/female/clothes/pirate-LeftArmTop.svg'
import pirateLeftArmBottom from '../../svgs/female/clothes/pirate-LeftArmBtm.svg'
import pirateRightArmTop from '../../svgs/female/clothes/pirate-RightArmTop.svg'
import pirateRightArmBottom from '../../svgs/female/clothes/pirate-RightArmBtm.svg'
import priestLeftArmTop from '../../svgs/female/clothes/priest-LeftArmTop.svg'
import priestLeftArmBottom from '../../svgs/female/clothes/priest-LeftArmBtm.svg'
import priestRightArmTop from '../../svgs/female/clothes/priest-RightArmTop.svg'
import priestRightArmBottom from '../../svgs/female/clothes/priest-RightArmBtm.svg'
import thiefLeftArmTop from '../../svgs/female/clothes/thief-LeftArmTop.svg'
import thiefLeftArmBottom from '../../svgs/female/clothes/thief-LeftArmBtm.svg'
import thiefRightArmTop from '../../svgs/female/clothes/thief-RightArmTop.svg'
import thiefRightArmBottom from '../../svgs/female/clothes/thief-RightArmBtm.svg'
import warriorLeftArmTop from '../../svgs/female/clothes/warrior-LeftArmTop.svg'
import warriorLeftArmBottom from '../../svgs/female/clothes/warrior-LeftArmBtm.svg'
import warriorRightArmTop from '../../svgs/female/clothes/warrior-RightArmTop.svg'
import warriorRightArmBottom from '../../svgs/female/clothes/warrior-RightArmBtm.svg'
import wizardLeftArmTop from '../../svgs/female/clothes/wizard-LeftArmTop.svg'
import wizardLeftArmBottom from '../../svgs/female/clothes/wizard-LeftArmBtm.svg'
import wizardRightArmTop from '../../svgs/female/clothes/wizard-RightArmTop.svg'
import wizardRightArmBottom from '../../svgs/female/clothes/wizard-RightArmBtm.svg'
import archerWeapon from '../../svgs/female/weapons/archer-weapon.svg'
import knightWeapon from '../../svgs/female/weapons/knight-weapon.svg'
import monkWeapon from '../../svgs/female/weapons/monk-weapon.svg'
import pirateWeapon from '../../svgs/female/weapons/pirate-weapon.svg'
import priestWeapon from '../../svgs/female/weapons/priest-weapon.svg'
import thiefWeapon from '../../svgs/female/weapons/thief-weapon.svg'
import warriorWeapon from '../../svgs/female/weapons/warrior-weapon.svg'
import wizardWeapon from '../../svgs/female/weapons/wizard-weapon.svg'

/* ADVANCED HEROES */
import paladinLeftArmTop from '../../svgs/female/clothes/advanced/paladin-LeftArmTop.svg'
import paladinLeftArmBottom from '../../svgs/female/clothes/advanced/paladin-LeftArmBtm.svg'
import paladinRightArmTop from '../../svgs/female/clothes/advanced/paladin-RightArmTop.svg'
import paladinRightArmBottom from '../../svgs/female/clothes/advanced/paladin-RightArmBtm.svg'
import darkKnightLeftArmTop from '../../svgs/female/clothes/advanced/darkKnight-LeftArmTop.svg'
import darkKnightLeftArmBottom from '../../svgs/female/clothes/advanced/darkKnight-LeftArmBtm.svg'
import darkKnightRightArmTop from '../../svgs/female/clothes/advanced/darkKnight-RightArmTop.svg'
import darkKnightRightArmBottom from '../../svgs/female/clothes/advanced/darkKnight-RightArmBtm.svg'
import summonerLeftArmTop from '../../svgs/female/clothes/advanced/summoner-LeftArmTop.svg'
import summonerLeftArmBottom from '../../svgs/female/clothes/advanced/summoner-LeftArmBtm.svg'
import summonerRightArmTop from '../../svgs/female/clothes/advanced/summoner-RightArmTop.svg'
import summonerRightArmBottom from '../../svgs/female/clothes/advanced/summoner-RightArmBtm.svg'
import ninjaLeftArmTop from '../../svgs/female/clothes/advanced/ninja-LeftArmTop.svg'
import ninjaLeftArmBottom from '../../svgs/female/clothes/advanced/ninja-LeftArmBtm.svg'
import ninjaRightArmTop from '../../svgs/female/clothes/advanced/ninja-RightArmTop.svg'
import ninjaRightArmBottom from '../../svgs/female/clothes/advanced/ninja-RightArmBtm.svg'

/* ELITE HEROES */
import dragoonLeftArmTop from '../../svgs/female/clothes/elite/dragoon-LeftArmTop.svg'
import dragoonLeftArmBottom from '../../svgs/female/clothes/elite/dragoon-LeftArmBtm.svg'
import dragoonRightArmTop from '../../svgs/female/clothes/elite/dragoon-RightArmTop.svg'
import dragoonRightArmBottom from '../../svgs/female/clothes/elite/dragoon-RightArmBtm.svg'
import sageLeftArmTop from '../../svgs/female/clothes/elite/sage-LeftArmTop.svg'
import sageLeftArmBottom from '../../svgs/female/clothes/elite/sage-LeftArmBtm.svg'
import sageRightArmTop from '../../svgs/female/clothes/elite/sage-RightArmTop.svg'
import sageRightArmBottom from '../../svgs/female/clothes/elite/sage-RightArmBtm.svg'

/* LEGENDARY HEROES */
import dreadKnightLeftArmTop from '../../svgs/female/clothes/legendary/dreadknight-LeftArmTop.svg'
import dreadKnightLeftArmBottom from '../../svgs/female/clothes/legendary/dreadknight-LeftArmBtm.svg'
import dreadKnightRightArmTop from '../../svgs/female/clothes/legendary/dreadknight-RightArmTop.svg'
import dreadKnightRightArmBottom from '../../svgs/female/clothes/legendary/dreadknight-RightArmBtm.svg'
import paladinWeapon from '../../svgs/female/weapons/paladin-weapon.svg'
import darkKnightWeapon from '../../svgs/female/weapons/darkKnight-weapon.svg'
import summonerWeapon from '../../svgs/female/weapons/summoner-weapon.svg'
import ninjaWeapon from '../../svgs/female/weapons/ninja-weapon.svg'
import dragoonWeapon from '../../svgs/female/weapons/dragoon-weapon.svg'
import sageWeapon from '../../svgs/female/weapons/sage-weapon.svg'
import dreadKnightWeapon from '../../svgs/female/weapons/dreadknight-weapon.svg'

const getClassInfo = (mainClass) => {
  switch (mainClass) {
    case 'archer': {
      return {
        classWeapon: archerWeapon,
        rightArmTop: archerRightArmTop,
        rightArmBottom: archerRightArmBottom,
        leftArmTop: archerLeftArmTop,
        leftArmBotttom: archerLeftArmBottom,
      }
    }
    case 'knight': {
      return {
        classWeapon: knightWeapon,
        rightArmTop: knightRightArmTop,
        rightArmBottom: knightRightArmBottom,
        leftArmTop: knightLeftArmTop,
        leftArmBotttom: knightLeftArmBottom,
      }
    }
    case 'monk': {
      return {
        classWeapon: monkWeapon,
        rightArmTop: monkRightArmTop,
        rightArmBottom: monkRightArmBottom,
        leftArmTop: monkLeftArmTop,
        leftArmBotttom: monkLeftArmBottom,
      }
    }
    case 'pirate': {
      return {
        classWeapon: pirateWeapon,
        rightArmTop: pirateRightArmTop,
        rightArmBottom: pirateRightArmBottom,
        leftArmTop: pirateLeftArmTop,
        leftArmBotttom: pirateLeftArmBottom,
      }
    }
    case 'priest': {
      return {
        classWeapon: priestWeapon,
        rightArmTop: priestRightArmTop,
        rightArmBottom: priestRightArmBottom,
        leftArmTop: priestLeftArmTop,
        leftArmBotttom: priestLeftArmBottom,
      }
    }
    case 'thief': {
      return {
        classWeapon: thiefWeapon,
        rightArmTop: thiefRightArmTop,
        rightArmBottom: thiefRightArmBottom,
        leftArmTop: thiefLeftArmTop,
        leftArmBotttom: thiefLeftArmBottom,
      }
    }
    case 'warrior': {
      return {
        classWeapon: warriorWeapon,
        rightArmTop: warriorRightArmTop,
        rightArmBottom: warriorRightArmBottom,
        leftArmTop: warriorLeftArmTop,
        leftArmBotttom: warriorLeftArmBottom,
      }
    }
    case 'wizard': {
      return {
        classWeapon: wizardWeapon,
        rightArmTop: wizardRightArmTop,
        rightArmBottom: wizardRightArmBottom,
        leftArmTop: wizardLeftArmTop,
        leftArmBotttom: wizardLeftArmBottom,
      }
    }
    case 'paladin': {
      return {
        classWeapon: paladinWeapon,
        rightArmTop: paladinRightArmTop,
        rightArmBottom: paladinRightArmBottom,
        leftArmTop: paladinLeftArmTop,
        leftArmBotttom: paladinLeftArmBottom,
      }
    }
    case 'darkKnight': {
      return {
        classWeapon: darkKnightWeapon,
        rightArmTop: darkKnightRightArmTop,
        rightArmBottom: darkKnightRightArmBottom,
        leftArmTop: darkKnightLeftArmTop,
        leftArmBotttom: darkKnightLeftArmBottom,
      }
    }
    case 'summoner': {
      return {
        classWeapon: summonerWeapon,
        rightArmTop: summonerRightArmTop,
        rightArmBottom: summonerRightArmBottom,
        leftArmTop: summonerLeftArmTop,
        leftArmBotttom: summonerLeftArmBottom,
      }
    }
    case 'ninja': {
      return {
        classWeapon: ninjaWeapon,
        rightArmTop: ninjaRightArmTop,
        rightArmBottom: ninjaRightArmBottom,
        leftArmTop: ninjaLeftArmTop,
        leftArmBotttom: ninjaLeftArmBottom,
      }
    }
    case 'dragoon': {
      return {
        classWeapon: dragoonWeapon,
        rightArmTop: dragoonRightArmTop,
        rightArmBottom: dragoonRightArmBottom,
        leftArmTop: dragoonLeftArmTop,
        leftArmBotttom: dragoonLeftArmBottom,
      }
    }
    case 'sage': {
      return {
        classWeapon: sageWeapon,
        rightArmTop: sageRightArmTop,
        rightArmBottom: sageRightArmBottom,
        leftArmTop: sageLeftArmTop,
        leftArmBotttom: sageLeftArmBottom,
      }
    }
    case 'dreadKnight': {
      return {
        classWeapon: dreadKnightWeapon,
        rightArmTop: dreadKnightRightArmTop,
        rightArmBottom: dreadKnightRightArmBottom,
        leftArmTop: dreadKnightLeftArmTop,
        leftArmBotttom: dreadKnightLeftArmBottom,
      }
    }
    default: {
      return {}
    }
  }
}

const RightArmTopFemale = ({
  armTop,
  armTopHighlight,
  armTopShadow,
  stroke,
}) => (
  <React.Fragment>
    <img src={armTop} className={styles.clothing} />
    <img src={armTopHighlight} className={styles.highlight} />
    <img src={armTopShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path
        stroke={stroke}
        d='M12 21h2M11 22h3M10 23h4M10 24h4M10 25h3M9 26h4M9 27h4M10 28h2'
      />
    </svg>
  </React.Fragment>
)

const RightArmBtmFemale = ({
  armBtm,
  armBtmHighlight,
  armBtmShadow,
  stroke,
}) => (
  <React.Fragment>
    <img src={armBtm} className={styles.clothing} />
    <img src={armBtmHighlight} className={styles.highlight} />
    <img src={armBtmShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path
        stroke={stroke}
        d='M9 26h3M9 27h3M8 28h4M8 29h4M7 30h4M6 31h5M6 32h4M7 33h2'
      />
    </svg>
  </React.Fragment>
)

const LeftArmTopFemale = ({
  armTop,
  armTopHighlight,
  armTopShadow,
  stroke,
}) => (
  <React.Fragment>
    <img src={armTop} className={styles.clothing} />
    <img src={armTopHighlight} className={styles.highlight} />
    <img src={armTopShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path
        stroke={stroke}
        d='M18 21h2M18 22h3M18 23h4M18 24h4M19 25h4M19 26h4M19 27h4M19 28h4'
      />
    </svg>
  </React.Fragment>
)

const LeftArmBtmFemale = ({
  armBtm,
  armBtmHighlight,
  armBtmShadow,
  stroke,
}) => (
  <React.Fragment>
    <img src={armBtm} className={styles.clothing} />
    <img src={armBtmHighlight} className={styles.highlight} />
    <img src={armBtmShadow} className={styles.shadow} />
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -0.5 30 45'
      shapeRendering='crispEdges'
      className={styles.color}
    >
      <path
        stroke={stroke}
        d='M19 28h4M19 29h4M19 30h4M18 31h5M18 32h5M18 33h4M18 34h3'
      />
    </svg>
  </React.Fragment>
)

const FemaleArms = ({ mainClass, stroke }) => {
  const classInfo = getClassInfo(mainClass)
  return (
    <>
      <div className={`${styles.heroRightArm} ${styles.bodyPart}`}>
        <div className={`${styles.heroArmRightTop} ${styles.bodyPart}`}>
          <RightArmTopFemale
            armTop={classInfo.rightArmTop}
            armTopShadow={femaleRightarmtopshadow}
            armTopHighlight={femaleRightarmtophighlight}
            stroke={stroke}
          />
        </div>
        <div className={`${styles.heroArmRightBtm} ${styles.bodyPart}`}>
          <RightArmBtmFemale
            armBtm={classInfo.rightArmBottom}
            armBtmShadow={femaleRightarmbtmshadow}
            armBtmHighlight={femaleRightarmbtmhighlight}
            stroke={stroke}
          />
          {mainClass != 'monk' && (
            <div className={styles.heroWeapon}>
              <img src={classInfo.classWeapon} className={styles.clothing} />
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.heroLeftArm} ${styles.bodyPart}`}>
        <div className={`${styles.heroArmLeftTop} ${styles.bodyPart}`}>
          <LeftArmTopFemale
            armTop={classInfo.leftArmTop}
            armTopShadow={femaleLeftarmtopshadow}
            armTopHighlight={femaleLeftarmtophighlight}
            stroke={stroke}
          />
        </div>
        <div className={`${styles.heroArmLeftBtm} ${styles.bodyPart}`}>
          <LeftArmBtmFemale
            armBtm={classInfo.leftArmBotttom}
            armBtmShadow={femaleLeftarmbtmshadow}
            armBtmHighlight={femaleLeftarmbtmhighlight}
            stroke={stroke}
          />
          {mainClass == 'monk' && (
            <div className={styles.heroWeapon}>
              <img src={classInfo.classWeapon} className={styles.clothing} />
            </div>
          )}
        </div>
      </div>
      {/* <div className={`${styles.heroRightArm} ${styles.bodyPart}`}>
          <div className={`${styles.heroArmRightTop} ${styles.bodyPart}`}>
  
          </div>
          <div className={`${styles.heroArmRightBtm} ${styles.bodyPart}`}>
  
            {mainClass !== 'monk' && (
              <div className={styles.heroWeapon}>
                <img src={currentWeapon} className={styles.clothing} />
              </div>
            )}
          </div>
        </div> */}
      {/* <div className={`${styles.heroLeftArm} ${styles.bodyPart}`}>
          <div className={`${styles.heroArmLeftTop} ${styles.bodyPart}`}>
            <LeftArmTopFemale stroke={stroke} />
          </div>
          <div className={`${styles.heroArmLeftBtm} ${styles.bodyPart}`}>
            <LeftArmBtmFemale stroke={stroke} />
            {mainClass === 'monk' && (
              <div className={styles.heroWeapon}>
                <img src={currentWeapon} className={styles.clothing} />
              </div>
            )}
          </div>
        </div> */}
    </>
  )
}

export default FemaleArms
