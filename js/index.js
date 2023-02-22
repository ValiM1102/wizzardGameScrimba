import {avatarsData} from '../js/data.js'
const attackBtn = document.querySelector('#attack-button')

function render(){
   avatarsData.forEach(function(avatar){
      const {id, name, avatarImg, health, diceCount} = avatar
// random numbers for the players
      function getDiceRollArray(diceCount){
         const newDiceRolls = []
         for(let i = 0; i<diceCount; i++){
            newDiceRolls.push(Math.floor(Math.random()*6)+1)
         }
         return newDiceRolls
      }
// sets up the html to render the random numbers
      function getDiceHtml(){
         return getDiceRollArray(diceCount).map(function(num){
            return `<div class="dice">${num}</div>`
         }).join(' ')
      }
     
// injecting the html to display the card games
      document.querySelector(`#${id}`).innerHTML = `
      <div class="character-card">
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatarImg}">
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container">
         ${getDiceHtml()}
         </div>
      </div>
   ` 
   })
}
render()

