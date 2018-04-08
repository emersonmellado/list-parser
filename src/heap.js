"use strict"
let Pile = require('./pile')
let Helper = require('./helper/helper')
/**
 * Collections should be described so that a user can discover characteristics of the collection, 
 * including scope, format, restrictions on access, ownership, and any information significant for 
 * determining the collection’s authenticity, integrity, and interpretation. 
 */

class Heap {
    constructor(heap) {
        this.metadata = {
            id: (heap.id) ? heap.id : Helper.newGuid(),
            userId: heap.userId,
            name: heap.name,
            description: heap.description,
            createdAt: new Date().getTime(),
        };

        this.setStartDate(heap.startDate);
        this.setEndDate(heap.endDate);
        this.setAccess(Helper.getDefaultAccess(heap.access));

        this.piles = [];
    }
    setAccess(access) {
        Helper.validateAccess(access);
        this.metadata.access = access;
    }
    setStartDate(date) {
        Helper.validateDate(date);
        this.metadata.startdate = date;
    }
    setEndDate(date) {
        Helper.validateDate(date);
        this.metadata.endDate = date;
    }
    addPile(pile) {
        this.piles.push(new Pile(pile));
    }
    getHeap() {
        return {
            metadata: this.metadata,
            piles: this.piles
        };
    }
}

module.exports = Heap;