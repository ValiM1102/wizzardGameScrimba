import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'



 
export function Character(data) {
   Object.assign(this, data)

    this.maxHealth = this.health

    this.diceHtml = getDicePlaceholderHtml(this.diceCount)

    this.setDiceHtml = () => {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.takeDamage = (damageArray) => {
        this.totalDamage = damageArray.reduce((total, currentElement) => {
            return total + currentElement
        }) 
        this.health -= this.totalDamage
        if(this.health <= 0){
            this.health = 0
            this.isDead = true
        }
    } 
    this.getHealthBarHtml = () => {
        const percent = getPercentage(this.maxHealth, this.health)

        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                style="width: ${percent}%;">
            </div>
        </div>`

    }

         

   this.getCharacterHtml = () => {
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






