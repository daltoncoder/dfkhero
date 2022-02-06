import React from 'react'
import styled from 'styled-components'
import darkIcon from '../../svgs/icons/element-dark.png'
import earthIcon from '../../svgs/icons/element-earth.png'
import fireIcon from '../../svgs/icons/element-fire.png'
import iceIcon from '../../svgs/icons/element-ice.png'
import lightIcon from '../../svgs/icons/element-light.png'
import lightningIcon from '../../svgs/icons/element-lightning.png'
import waterIcon from '../../svgs/icons/element-water.png'
import windIcon from '../../svgs/icons/element-wind.png'
import arcticIcon from '../../svgs/icons/icon-arctic.png'
import cityIcon from '../../svgs/icons/icon-city.png'
import desertIcon from '../../svgs/icons/icon-desert.png'
import femaleIcon from '../../svgs/icons/icon-female.png'
import forestIcon from '../../svgs/icons/icon-forest.png'
import healthIcon from '../../svgs/icons/icon-health.png'
import islandIcon from '../../svgs/icons/icon-island.png'
import maleIcon from '../../svgs/icons/icon-male.png'
import manaIcon from '../../svgs/icons/icon-mana.png'
import mountainIcon from '../../svgs/icons/icon-mountains.png'
import plainsIcon from '../../svgs/icons/icon-plains.png'
import swampIcon from '../../svgs/icons/icon-swamp.png'
import commonIcon from '../../svgs/icons/rarity-common.png'
import legendaryIcon from '../../svgs/icons/rarity-legendary.png'
import mythicIcon from '../../svgs/icons/rarity-mythic.png'
import rareIcon from '../../svgs/icons/rarity-rare.png'
import uncommonIcon from '../../svgs/icons/rarity-uncommon.png'
import Hero from '../HeroSprite'
import HeroInfo from '../HeroInfo'
import HeroStatsSkills from '../HeroStatsSkills'
import styles from '../../styles.module.css'

// Styled Components
const CardContainer = styled.div.attrs((props) => ({
  className: 'cardContainer',
}))`
  perspective: 1000px;
  width: 300px;
  height: 430px;
  margin: 0 auto;
`

/* exported component */
const HeroCard = ({ isFlipped, hero, isAnimated }) => {
  console.log(hero)
  return (
    <>
      {hero && (
        <CardContainer key={hero.id}>
          <div
            className={`
          ${styles.heroCard}
          ${isAnimated && styles.animate}
          ${hero.shiny ? styles.shiny : ''}
          ${hero.shiny ? styles[`shiny${hero.shinyStyle}`] : ''}
          ${styles[`${hero.element}`]}
          ${styles[`${hero.rarity}`]}
          ${isFlipped ? styles.flipped : ''}
          `}
          >
            <div className={styles.heroCardFront}>
              <div className={styles.heroID}>#{hero.id}</div>
              <div className={styles.heroHealth}>
                <img src={healthIcon} />
                {hero.stats.hp}
                <span className={styles.tooltip}>Health</span>
              </div>
              <div className={styles.heroMana}>
                <img src={manaIcon} />
                {hero.stats.mp}
                <span className={styles.tooltip}>Mana</span>
              </div>
              <div className={styles.heroCardFrame}>
                <div className={`${styles.specials} ${styles.row}`}>
                  <div className={styles.icon}>
                    {hero.element == 'fire' && <img src={fireIcon} />}
                    {hero.element == 'water' && <img src={waterIcon} />}
                    {hero.element == 'earth' && <img src={earthIcon} />}
                    {hero.element == 'wind' && <img src={windIcon} />}
                    {hero.element == 'lightning' && <img src={lightningIcon} />}
                    {hero.element == 'ice' && <img src={iceIcon} />}
                    {hero.element == 'light' && <img src={lightIcon} />}
                    {hero.element == 'dark' && <img src={darkIcon} />}
                    <span className={styles.tooltip}>{hero.element}</span>
                  </div>
                  <div className={styles.icon}>
                    {hero.visualGenes.background == 'arctic' && (
                      <img src={arcticIcon} />
                    )}
                    {hero.visualGenes.background == 'city' && (
                      <img src={cityIcon} />
                    )}
                    {hero.visualGenes.background == 'desert' && (
                      <img src={desertIcon} />
                    )}
                    {hero.visualGenes.background == 'forest' && (
                      <img src={forestIcon} />
                    )}
                    {hero.visualGenes.background == 'island' && (
                      <img src={islandIcon} />
                    )}
                    {hero.visualGenes.background == 'mountains' && (
                      <img src={mountainIcon} />
                    )}
                    {hero.visualGenes.background == 'plains' && (
                      <img src={plainsIcon} />
                    )}
                    {hero.visualGenes.background == 'swamp' && (
                      <img src={swampIcon} />
                    )}
                    <span className={styles.tooltip}>{hero.background}</span>
                  </div>
                  <div className={styles.icon}>
                    <img
                      src={hero.gender == 'female' ? femaleIcon : maleIcon}
                    />
                    <span className={styles.tooltip}>{hero.gender}</span>
                  </div>
                </div>

                <div className={styles.heroName}>
                  <span>{hero.name}</span>
                </div>

                <div className={styles.heroPreview}>
                  <div className={styles.heroGlow} />
                  <Hero hero={hero} />
                </div>

                <div className={styles.heroInfo}>
                  <div className={styles.class}>
                    {hero.class}
                    <span className={styles.subClass}>{hero.subClass}</span>
                  </div>
                  <div className={styles.cardRarity}>
                    <div className={styles.icon}>
                      {hero.rarity == 'common' && <img src={commonIcon} />}
                      {hero.rarity == 'uncommon' && <img src={uncommonIcon} />}
                      {hero.rarity == 'rare' && <img src={rareIcon} />}
                      {hero.rarity == 'legendary' && (
                        <img src={legendaryIcon} />
                      )}
                      {hero.rarity == 'mythic' && <img src={mythicIcon} />}
                      <span className={styles.tooltip}>{hero.rarity}</span>
                    </div>
                  </div>
                  <div className={styles.level}>
                    Level {hero.level}
                    <span className={styles.subClass}>
                      Gen {hero.generation}
                    </span>
                  </div>
                </div>

                <HeroInfo hero={hero} />
              </div>
            </div>
            <div className={styles.heroCardBack}>
              <div className={styles.heroCardFrame}>
                <div className={`${styles.specials} ${styles.row}`}>
                  <div className={styles.icon}>
                    {hero.element == 'fire' && <img src={fireIcon} />}
                    {hero.element == 'water' && <img src={waterIcon} />}
                    {hero.element == 'earth' && <img src={earthIcon} />}
                    {hero.element == 'wind' && <img src={windIcon} />}
                    {hero.element == 'lightning' && <img src={lightningIcon} />}
                    {hero.element == 'ice' && <img src={iceIcon} />}
                    {hero.element == 'light' && <img src={lightIcon} />}
                    {hero.element == 'dark' && <img src={darkIcon} />}
                    <span className={styles.tooltip}>{hero.element}</span>
                  </div>
                  <div className={styles.icon}>
                    {hero.visualGenes.background == 'arctic' && (
                      <img src={arcticIcon} />
                    )}
                    {hero.visualGenes.background == 'city' && (
                      <img src={cityIcon} />
                    )}
                    {hero.visualGenes.background == 'desert' && (
                      <img src={desertIcon} />
                    )}
                    {hero.visualGenes.background == 'forest' && (
                      <img src={forestIcon} />
                    )}
                    {hero.visualGenes.background == 'island' && (
                      <img src={islandIcon} />
                    )}
                    {hero.visualGenes.background == 'mountains' && (
                      <img src={mountainIcon} />
                    )}
                    {hero.visualGenes.background == 'plains' && (
                      <img src={plainsIcon} />
                    )}
                    {hero.visualGenes.background == 'swamp' && (
                      <img src={swampIcon} />
                    )}
                    <span className={styles.tooltip}>{hero.background}</span>
                  </div>
                  <div className={styles.icon}>
                    <img
                      src={hero.gender == 'female' ? femaleIcon : maleIcon}
                    />
                    <span className={styles.tooltip}>{hero.gender}</span>
                  </div>
                </div>

                <div className={styles.heroStats}>
                  <div className={styles.heroFrame}>
                    <HeroStatsSkills hero={hero} />

                    {hero && hero.owner.name ? (
                      <div className={styles.heroOwner}>
                        Owned by: {hero.owner.name}
                      </div>
                    ) : null}
                    {hero && hero.owner.owner ? (
                      <div className={styles.heroHash}>{hero.owner.owner}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContainer>
      )}
    </>
  )
}

export default React.memo(HeroCard)
