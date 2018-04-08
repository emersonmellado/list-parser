"use strict"
let _ = require('lodash')
let Pile = require('./pile')

class Heap {
    constructor(name, description) {
        this.metadata = {
            name: name,
            description: description,
            createdAt: new Date().getTime()
        };

        this.piles = [];
    }
    addPile(pile){
        this.piles.push(new Pile(pile));
    }
    getHeap(){
        return {
            metadata: this.metadata,
            piles: this.piles
        };
    }
}

module.exports = Heap;