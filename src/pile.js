"use strict"
let Helper = require('./helper/helper')

class Pile {
    constructor(pile) {
        this.id = Helper.newGuid(),
        this.setDate(pile.date);
        this.setWhat(pile.what);
        this.where = pile.where;
        this.how = pile.how;
        this.createdAt = new Date().getTime();
    }
    setDate(date){
        Helper.validateDate(date);
        this.date = date;
    }
    setWhat(what){
        if (!what){
            throw `Empty what ${what}`;
        }
        this.what = what;
    }
}

module.exports = Pile;