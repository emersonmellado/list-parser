"use strict"
var test = require('tape');
var Pile = require('../src/pile')

test('Create a pile successfully', (assert) => {
    let pile = {
        date: "2018-01-01",
        what: "What",
        where: "Where",
        how: "How"
    }
    let newPile = new Pile(pile);
    assert.equal(newPile.date, pile.date);
    assert.equal(newPile.what, pile.what);
    assert.equal(newPile.where, pile.where);
    assert.equal(newPile.how, pile.how);    
    assert.equal(typeof newPile.createdAt, 'number');
    assert.end();
});

test('Create a pile will throw with invalid date', (assert) => {
    let pile = {
        date: "2018-01-01X"
    }
    assert.throws(() => new Pile(pile), `Invalid date ${pile.date}`);
    assert.end();
});

test('Create a pile will throw with empty what', (assert) => {
    let pile = {
        date: "2018-01-01",
        what: null
    }
    assert.throws(() => new Pile(pile), `Empty what ${pile.what}`);
    assert.end();
});