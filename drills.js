const bubbleSort = require('./bubble')
const mergeSort = require('./merge')
const quickSort = require('./quick')

function main1() {
    let array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
    mergeSort(array)
    //3 recursize list = [21, 1]
    //16 recursize list = [16, 49, 39, 27, 43, 34, 46, 40]
    //First 2 to merge are [21] and [1]
    //List that are merged 7th time merge() is called are [1, 21, 26, 45] and [2, 9, 28, 29]
}

function main2() {
    let firstPartitionStepArray = [3, 9, 1, 14, 17, 24, 22, 20] //pivot could've been 14 or 17
    //
    let array = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
    //if end is pivot, array after 2 partitions will look like this [9, 3, 13, 15, 19, 10, 17, 16, 14, 12]
    //if beginning is pivor, array after 2 partitions will look like this [14, 12, 13, 9, 19, 10, 3, 16, 15, 17]
}

function main3() {
    let array = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]
    console.log(quickSort(array))
}

function main4() {
    let array = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]
    console.log(mergeSort(array))
}