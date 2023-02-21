import {avatarsData} from '../js/data.js'


function render(){
   avatarsData.forEach(function(avatar){
      const {id, name, avatarImg, health, diceScore, diceCount} = avatar
      let diceHtml = ''
      for(let i = 0; i<diceCount; i++){
            diceScore.push(Math.floor(Math.random()*5)+1)
            diceHtml += `<div class="dice">${diceScore[i]}</div>`     
      }

      document.querySelector(`#${id}`).innerHTML = `
      <div class="character-card">
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatarImg}">
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container">
         ${diceHtml}
         </div>
      </div>
   ` 
  
   })
}
render()
