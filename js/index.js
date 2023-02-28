import {characterData} from '../js/data.js'
import { Character } from './character.js'

let monstersArray = ["orc", "goblin", "demon"]
let dellay = false
const getNewMonster = () => {
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : {}
}



const attack = () => {
   if(!dellay){

      wizard.setDiceHtml()
      monster.setDiceHtml()
      wizard.takeDamage(monster.currentDiceScore)
      monster.takeDamage(wizard.currentDiceScore)
      render()
      
      if(wizard.isDead){
         endGame()
      } else if(monster.isDead){
         dellay = true
         if (monstersArray.length > 0){
            monster = getNewMonster()
            setTimeout(() => render(), 1500)
            dellay = false
         }else{
            endGame()
         }
      }
      
   }
}
   
   
const endGame = () => {
   dellay = true
   const endMessage = wizard.health === 0 && monster.health === 0 ? 'All the creatures are dead'
   : monster.health === 0 ? 'The Wizard is victorious' 
   : `The ${monster.name} is victorious`
   const endEmoji =  wizard.health === 0 && monster.health === 0 ? '☠️'
   : monster.health === 0 ? '🔮' 
   : '☠️'

   setTimeout(() => {
      document.body.innerHTML = `
      <div class="end-game">
         <h2>Game Over</h2>
         <h3>${endMessage}</h3>
         <p class="end-emoji">${endEmoji}</p>
      </div>` 
      
   }, 1500)

}
   
document.querySelector('#attack-button').addEventListener('click',attack)


const wizard = new Character(characterData.hero)
let monster = getNewMonster()

function render(){
   document.querySelector('#hero').innerHTML = wizard.getCharacterHtml()
   document.querySelector('#monster').innerHTML = monster.getCharacterHtml()  

}


render()

