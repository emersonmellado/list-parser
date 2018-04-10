let firebase = require('./config/firebase');
let SmpCore = require('./smpcore')
let Access = require('./src/enums/access')

const heap1 = require("./tests/data/heap1.json")
const heap2 = require("./tests/data/heap2.json")

const expectedHeap = {
    userId: 1,
    access: Access.Private,
    startDate: "2017-01-01",
    endDate: "2018-01-01",
    name: "New private heap",
    description: "With private Description"
}

let heap = new SmpCore.heap(expectedHeap);

var newPile = {
    date: "2018-01-01",
    what: "What",
    where: "Where",
    how: "How"
};
heap.addPile(newPile);
console.log(heap);

save(heap);

function save(heap) {
    let incidentsRef = firebase.database().ref("heaps");
    // var newKey = ref.push().key();
    //https://stackoverflow.com/questions/38768576/in-firebase-when-using-push-how-do-i-get-the-unique-id-and-store-in-my-databas#38768630
    incidentsRef
        .push(heap)
        .then(a => {
            console.log("Data saved: ", a.key)
        })
        .catch(function (error) {
            console.error(
                "There was an error uploading a file to Cloud Storage:",
                error
            );
        });
}

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