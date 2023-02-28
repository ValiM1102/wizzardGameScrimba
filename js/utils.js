 export const getDiceRollArray = (diceCount) => {
   return new Array(diceCount).fill(0).map(() => {
       return Math.floor(Math.random() * 6) + 1
   })
}
export const getDicePlaceholderHtml = (diceCount) => {
   return new Array(diceCount).fill('').map(() => {
     return `<div class="placeholder-dice"></div>`
   }).join('')
}
export const getPercentage = (maxHealth, remainingHealth) => (100 * remainingHealth) / maxHealth
