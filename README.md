# Hero svg component for react to show your DFK NFTs

working on the readme will update soon
Going to rollup this as an npm package soon

entry.js is where you should export the component from there are 4 functions in there

getApiHero(heroId)

- this takes any hero id and returns a promise that will resolve into an object containing all your heros information with his genes decoded. This is the hero data you will need to generate the svg

buildApiHero(rawHero)

- this takes raw hero info and decodes his genes and give you back the hero object you need to generate the svg. Use this instead of getApiHero if you are already querying the blockchain for raw heroData.

-DfkHeroCard

- this is the react component to display the card, Takes 3 properties hero, isAnimated, isFlipped. Hero is the only required property just make sure its an ApiHero from one of the other functions. if isFlipped is toggled it will be animated flip

-DfkHeroSprite

- this a react component to display a hero sprite without its card. Currently only takes on property which is the heroApi object

app.js is currently an ugly example of using this

Made with the help of Kalash#2298 in gathering all the svgs needed for this
