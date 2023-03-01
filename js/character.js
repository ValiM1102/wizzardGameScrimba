import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'



 
export class Character {
    constructor(data){
        Object.assign(this, data)
        this.maxHealth = this.health
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    }
   
    setDiceHtml () {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    takeDamage (damageArray)  {
        this.totalDamage = damageArray.reduce((total, currentElement) => {
            return total + currentElement
        }) 
        this.health -= this.totalDamage
        if(this.health <= 0){
            this.health = 0
            this.isDead = true
        }
    } 
    getHealthBarHtml () {
        const percent = getPercentage(this.maxHealth, this.health)

        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                style="width: ${percent}%;">
            </div>
        </div>`

    }


   getCharacterHtml ()  {
      const {name, avatar, health,diceHtml} = this;

    const healthBar = this.getHealthBarHtml()

      return `<div class="character-card">
              <h4 class="name"> ${name} </h4>
              <img class="avatar" src="${avatar}" />
              <div class="health">health: <b> ${health} </b></div>
              ${healthBar}
              <div class="dice-container">    
                  ${diceHtml}
              </div>
          </div>`;
   }
}






