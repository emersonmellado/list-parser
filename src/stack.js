"use strict"
let _ = require('lodash');

class Stack {
    constructor() {
        this.timeline = [];
    }
    addHeap(heap) {
        this.timeline = _.concat(this.timeline, this.sortByDate(heap.piles));
    }
    getTimeline() {
        return this.sortByDate(this.timeline);
    }
    getByWhat(what) {
        return _.find(this.getTimeline(), function (pile) {
            return pile.what == what;
        });
    }
    sortByDate(arr) {
        return _.sortBy(arr, [function (a) {
            return a.date;
        }]);
    }
}

module.exports = Stack;