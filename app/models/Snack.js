import { AppState } from "../AppState.js"

/** class creates a blueprint for a data object */
export class Snack {
  
    // console.log('building a snack'),//paste console log into console
    // constructor(newName, newRole, newHealth)//old way to do this. we don't have to put these in the parameters.
    // we can just put in the constructor itself.
        constructor ({name, picture, money}){ 
            // debugger
            this.name = name
            this.picture = picture
            this.money = money
        }

        // Naming conventions are important 
     get SnacksTemplate() {
        // TODO CREATE CARD TEMPLATE
        return `
        <div onclick="app.SnackController.buySnack()">${this.name}</div>
        `
     }   
}