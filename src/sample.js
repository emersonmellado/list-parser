let Stack = require('./stack')

const heap1 = require("../tests/data/heap1.json")
const heap2 = require("../tests/data/heap2.json")

let stack = new Stack();
stack.addHeap(heap1);
stack.addHeap(heap2);
console.log(stack.getTimeline());


/**
 * 
 * Questions to drive the user to have a first heap:
 * 
 * What was the most interesting year of your life?
 * Do you remember the month?
 * Day?
 * What happened that day?
 * Did you went in a trip? (Where)
 * How you did it or why you did it?
 * 
 * 
 * What was your first year of college?
 * What month?
 * 
 * 
 */