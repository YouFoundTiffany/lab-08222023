import { AppState } from "../AppState.js";


class SnacksService {

    addMoney(){
        // test - is this talking to my controller?
        console.log('adding money from the service');

        // grab money straight from the appstate and do math to it
        AppState.money = AppState.money + 0.25
        console.log('adding money', AppState.money);
    }
    
    selectSnack(snackName){
        const selectedSnack = AppState.snacks.find(snack => snack.name == snackName);
        AppState
    }
}

export const snacksService = new SnacksService()