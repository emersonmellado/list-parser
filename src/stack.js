"use strict"
let _ = require('lodash');

class Stack {
    constructor() {
        this.timeline = [];
    }
    addHeap(heap) {
        var piles = _.concat(this.timeline, this.sortByDate(heap.piles));
        this.timeline = _.uniqBy(piles, (o) => o.id);
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