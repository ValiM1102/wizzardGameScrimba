import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'



 
export function Character(data) {
   Object.assign(this, data)

   this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.takeDamage = function(damageArray){
        this.totalDamage = damageArray.reduce(function(total, currentElement){
            return total + currentElement
        }) 
        this.health -= this.totalDamage
        if(this.health <= 0){
            this.health = 0
            this.isDead = true
        }
    } 

   this.getCharacterHtml = function(){
      const {name, avatar, health,diceArray } = this;

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



