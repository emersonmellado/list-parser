let Stack = require('./stack')

const heap1 = require("../tests/data/heap1.json")
const heap2 = require("../tests/data/heap2.json")

let stack = new Stack();
stack.addHeap(heap1);
stack.addHeap(heap2);
console.log(stack.getTimeline());