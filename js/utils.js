export function getDiceRollArray (diceCount) {
   return new Array(diceCount).fill(0).map(function () {
       return Math.floor(Math.random() * 6) + 1
   });
}
export function getDicePlaceholderHtml(diceCount){
   return diceCount = new Array(diceCount).fill('').map(function(){
     return `<div class="placeholder-dice"></div>`
   }).join('')
}
