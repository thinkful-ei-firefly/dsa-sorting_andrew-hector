const bubbleSort = require('./bubble')
const mergeSort = require('./merge')
const quickSort = require('./quick')

let testArray =  []

for (let i = 0; i < 5000; i++) {
    testArray.push(Math.floor(Math.random() * Math.floor(10000)))
}

let start = new Date().getTime();
bubbleSort(testArray)
let elapsed = new Date().getTime() - start;
console.log(`bubbleSort finished in: ${elapsed} miliseconds`)
start = new Date().getTime();
mergeSort(testArray)
elapsed = new Date().getTime() - start;
console.log(`mergeSort finished in: ${elapsed} miliseconds`)
start = new Date().getTime();
quickSort(testArray)
elapsed = new Date().getTime() - start;
console.log(`quickSort finished in: ${elapsed} miliseconds`)