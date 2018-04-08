"use strict"
let _ = require('lodash');

class Stack {
    constructor() {
        this.timeline = [];
    }
    add(pile){
        this.timeline = _.concat(this.timeline, this.sortByDate(pile));
    }
    getTimeline(){
        return this.sortByDate(this.timeline);
    }
    sortByDate(arr) {
        return _.sortBy(arr, [function (a) { 
            return a.date;
        }]);
    }
}

module.exports = Stack;