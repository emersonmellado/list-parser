var test = require('tape');
var Stack = require('../src/stack')

const setup = () => {
    const heap1 = require("./data/heap1.json")
    const heap2 = require("./data/heap2.json")

    let stack = new Stack();
    stack.add(heap1.piles);
    stack.add(heap2.piles);

    return stack;
};

test('Stack should generate correct timeline', (assert) => {
    const stack = setup();
    var timeline = stack.getTimeline();

    assert.equal(timeline.length, 7);
    assert.equal(timeline[0].date, '2018-01-01');
    assert.equal(timeline[1].date, '2018-01-02');
    assert.equal(timeline[2].date, '2018-02-01');
    assert.equal(timeline[3].date, '2018-02-01');
    assert.equal(timeline[4].date, '2018-02-02');
    assert.end();
});