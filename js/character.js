import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'



 
export function Character(data) {
   Object.assign(this, data)
    
   if(document.querySelector('#attack-button').addEventListener('click', function(){})){
    this.diceArray = this.getDiceHtml
}else{
    this.diceArray = getDicePlaceholderHtml(this.diceCount)
}
    

   this.getDiceHtml = function (diceCount) {
    
    this.currentDiceScore = getDiceRollArray(this.diceCount).map(function(num){
        `<div class="dice">${num}</div>`
    })
 }
    
    console.log(this.getDiceHtml)

   


   this.getCharacterHtml = function(){
      const {name, avatar, health, diceCount, diceArray } = this;

      return `<div class="character-card">
              <h4 class="name"> ${name} </h4>
              <img class="avatar" src="${avatar}" />
              <div class="health">health: <b> ${health} </b></div>
              <div class="dice-container">    
                  ${diceArray}
              </div>
          </div>`;
   }
}



