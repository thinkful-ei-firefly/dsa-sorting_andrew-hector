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

main2()