
import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML, setText } from "../utils/Writer.js";

export class SnackController{
    // NOTE everything that lives here will load on the page immediately 
 constructor(){
    //  console.log('snack controller loaded')
     console.log('Snacks:', AppState.snacks);
    //  this.drawMoney()

    // NOTE using a listener is similar to just calling a function we want to happen on page load BUT we are specifically looking at 'WATCHING' the appState and drawing changes based on our AppState updating

    // call the appState, 'on' is JS black magic (just a keyword that JS wants us to use), 'money' is the collection in the appstate, call our draw function that is DOING the drawing to the page
    AppState.on('money', this.drawMoney)

    this.drawSnacks()

 }
//  TODO NEXT, BUT SHOULD ACTUALLY CREATE THE ARRAY OF ITEMS AND DRAW TO SCREEN FIRST. 
 addMoney(){
    // test does this even do anything?
    // console.log('adding money');

    // we are doing some math (adding to money) so send it to the service
    snacksService.addMoney()
}

drawMoney(){
    let money = AppState.money
    setHTML('totalMoney', money)
}

drawSnacks (){
    // needs the characters,
    // generate content (html) to display
    // inject html to page

    // you can use 'content' or 'template'
    // content is just an empty string that we are holding the forEach info 
let template = ''
AppState.snacks.forEach(snack => {
    template += snack.SnacksTemplate  
})
setHTML('snack-list', template)
}

// TODO this function is going to let me click on a snack and 'purchase' it and also subtract the snack amount from the total money
buySnack(){
snackService.selectSnack(snack)
    // check - is this button hooked up properly
    // console.log('buying a snack');

    // how do I know what snack Im getting?

    // where do I do the math to subtract the total from the money i.e SEND IT TO DA SERVICE
}

}
