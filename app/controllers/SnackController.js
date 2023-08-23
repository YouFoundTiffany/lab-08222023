// import { AppState } from "../AppState.js";
// import {snack service}

import { AppState } from "../AppState.js";

export class SnackController{
 constructor(){
    //  console.log('snack controller loaded')
     console.log('Snacks:', AppState.snacks);
 }
//  TODO NEXT, BUT SHOULD ACTUALLY CREATE THE ARRAY OF ITEMS AND DRAW TO SCREEN FIRST. 
// function drawMoney(){

drawSnacks (){
    // needs the characters,
    // generate content (html) to display
    // inject html to page
let content = ''
AppState.snacks.forEach(snack => {
    content += character.cardTemplate  
})
}
}


