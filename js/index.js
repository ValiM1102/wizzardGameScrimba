import {characterData} from '../js/data.js'
import { Character } from './character.js'



function attack(){
   wizard.getDiceHtml()
   orc.getDiceHtml()
   wizard.takeDamage(orc.currentDiceScore)
   orc.takeDamage(wizard.currentDiceScore)
   render()
}
document.querySelector('#attack-button').addEventListener('click',attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function render(){
   document.querySelector('#hero').innerHTML = wizard.getCharacterHtml()  
   document.querySelector('#monster').innerHTML = orc.getCharacterHtml()
}

render()

