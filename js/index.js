import {characterData} from '../js/data.js'
import { Character } from './character.js'



function attack(){
   wizard.getDiceHtml()
   orc.getDiceHtml()
   wizard.takeDamage(orc.currentDiceScore)
   orc.takeDamage(wizard.currentDiceScore)
   render()
   if(wizard.isDead || orc.isDead){
      endGame()
      }
   
}


function endGame(){
   const endMessage = wizard.health === 0 && orc.health === 0 ? 'All the creatures are dead'
   : orc.health === 0 ? 'The Wizard is victorious' 
   : 'The Orc is victorious'
   const endEmoji =  wizard.health === 0 && orc.health === 0 ? '☠️'
   : orc.health === 0 ? '🔮' 
   : '☠️'
   document.body.innerHTML = `
   <div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
   </div>` 
}

document.querySelector('#attack-button').addEventListener('click',attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function render(){
   document.querySelector('#hero').innerHTML = wizard.getCharacterHtml()  
   document.querySelector('#monster').innerHTML = orc.getCharacterHtml()
}

render()

