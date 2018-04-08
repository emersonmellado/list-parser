"use strict"
var test = require('tape');
var Heap = require('../src/heap')

const setup = () => {
    return new Heap("New Heap", "With Description");
};

test('Create a heap successfully', (assert) => {
    let newHeap = setup();

    assert.equal(newHeap.metadata.name, "New Heap");
    assert.equal(newHeap.metadata.description, "With Description");
    assert.equal(newHeap.piles.length, 0);

    assert.end();
});

test('Create a heap and add piles', (assert) => {
    let newHeap = setup();
    assert.equal(newHeap.piles.length, 0);
    var newPile = {
        date: "2018-01-01",
        what: "What",
        where: "Where",
        how: "How"
    };
    newHeap.addPile(newPile);

    assert.equal(newHeap.piles.length, 1);
    assert.equal(newHeap.piles[0].date, newPile.date);
    assert.equal(newHeap.piles[0].what, newPile.what);
    assert.equal(newHeap.piles[0].where, newPile.where);
    assert.equal(newHeap.piles[0].how, newPile.how);

    var newPile_2 = {
        date: "2018-02-02",
        what: "What 2",
        where: "Where 2",
        how: "How 2"
    };
    newHeap.addPile(newPile_2);

    assert.equal(newHeap.piles.length, 2);
    assert.equal(newHeap.piles[1].date, newPile_2.date);
    assert.equal(newHeap.piles[1].what, newPile_2.what);
    assert.equal(newHeap.piles[1].where, newPile_2.where);
    assert.equal(newHeap.piles[1].how, newPile_2.how);

    assert.end();
});