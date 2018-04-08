"use strict"
let test = require('tape');
let Heap = require('../src/heap')
let Access = require('../src/enums/access')

const assertHeap = (assert, heap, expectedHeap) => {
    assert.equal(typeof heap.metadata.id, "string");
    assert.equal(heap.metadata.id.length, 36);
    assert.equal(heap.metadata.name, expectedHeap.name);
    assert.equal(heap.metadata.description, expectedHeap.description);
    assert.equal(heap.metadata.access, (expectedHeap.access) ? expectedHeap.access : Access.Public);
    assert.equal(heap.metadata.userId, expectedHeap.userId);
    assert.equal(heap.piles.length, 0);
    assert.end();
}

const assertPile = (assert, pile, expectedPile) => {
    assert.equal(pile.length, expectedPile.length);
    assert.equal(pile.date, expectedPile.date);
    assert.equal(pile.what, expectedPile.what);
    assert.equal(pile.where, expectedPile.where);
    assert.equal(pile.how, expectedPile.how);
}

test('Create a heap successfully', (assert) => {
    const expectedHeap = {
        userId: 1,
        startDate: "2017-01-01",
        endDate: "2018-01-01",
        name: "New Heap",
        description: "With Description"
    }
    let heap = new Heap(expectedHeap);

    assertHeap(assert, heap, expectedHeap);
});

test('Create a private heap successfully', (assert) => {
    const expectedHeap = {
        userId: 1,
        access: Access.Private,
        startDate: "2017-01-01",
        endDate: "2018-01-01",
        name: "New private heap",
        description: "With private Description"
    }
    let heap = new Heap(expectedHeap);

    assertHeap(assert, heap, expectedHeap);
});

test('Create a heap and add piles', (assert) => {
    const expectedHeap = {
        userId: 1,
        startDate: "2017-01-01",
        endDate: "2018-01-01",
        name: "New Heap",
        description: "With Description"
    }
    let heap = new Heap(expectedHeap);
    assert.equal(heap.piles.length, 0);

    var newPile = {
        date: "2018-01-01",
        what: "What",
        where: "Where",
        how: "How"
    };
    heap.addPile(newPile);
    assert.isEqual(heap.piles.length, 1);
    assertPile(assert, heap.piles[0], newPile);

    let newPile_1 = {
        date: "2018-02-02",
        what: "What 2",
        where: "Where 2",
        how: "How 2"
    };
    heap.addPile(newPile_1);
    assert.isEqual(heap.piles.length, 2);
    assertPile(assert, heap.piles[1], newPile_1);

    let newPile_2 = {
        date: "2018-03-03",
        what: "What 3",
        where: "Where 3",
        how: "How 3"
    };
    heap.addPile(newPile_2);
    assert.isEqual(heap.piles.length, 3);
    assertPile(assert, heap.piles[2], newPile_2);    

    assert.end();
});