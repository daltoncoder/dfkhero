import React from 'react'
import { ReactComponent as EyesBase } from '../../svgs/eyes-color.svg'
import EyesHighlight from '../../svgs/eyes-highlight.svg'
import EyesShadow from '../../svgs/eyes-shadow.svg'
import styles from '../../styles.module.css'

const HeroEyes = ({ eyeColor }) => {
  return (
    <>
      <img src={EyesHighlight} className={styles.highlight} />
      <img src={EyesShadow} className={styles.shadow} />
      <EyesBase stroke={`#${eyeColor}`} className={styles.color} />
    </>
  )
}

export default HeroEyes
