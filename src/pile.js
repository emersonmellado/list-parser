"use strict"
let _ = require('lodash');
let moment = require('moment');

class Pile {
    constructor(pile) {
        this.setDate(pile.date);
        this.setWhat(pile.what);
        this.where = pile.where;
        this.how = pile.how;
        this.createdAt = new Date().getTime();
    }
    setDate(date){
        if (!moment(date, moment.ISO_8601).isValid()){
            throw `Invalid date ${date}`;
        }
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