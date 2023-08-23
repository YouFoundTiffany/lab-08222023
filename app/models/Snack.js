
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
     get cardTemplate() {
        // TODO CREATE CARD TEMPLATE
     }   
}