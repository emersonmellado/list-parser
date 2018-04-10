let firebase = require('./config/firebase');
let SmpCore = require('./smpcore')

const heap1 = require("./tests/data/heap1.json")
const heap2 = require("./tests/data/heap2.json")

let stack = new SmpCore.stack();
stack.addHeap(heap1);
stack.addHeap(heap2);
console.log(stack.getTimeline());

// saveStack(stack);

// function saveStack(stack) {
//     let incidentsRef = firebase.database().ref("stacks");
//     incidentsRef
//         .push(stack)
//         .then(a => {
//             console.log("Stack saved: ", a.key)
//         })
//         .catch(function (error) {
//             console.error(
//                 "There was an error uploading a file to Cloud Storage:",
//                 error
//             );
//         });
// }

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