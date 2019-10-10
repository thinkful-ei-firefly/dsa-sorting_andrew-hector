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
    let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    console.log(quickSort(array))
}

function main4() {
    let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    console.log(mergeSort(array))
}

function main7() {
    function shuffle(array, count) {
        var count = count === undefined ? 0 : count;
        const randomX = Math.floor(Math.random() * Math.floor(array.length));
        const randomY = Math.floor(Math.random() * Math.floor(array.length));
        if (randomX !== randomY) {
            const x = array[randomX]
            const y = array[randomY]
            array[randomX] = y
            array[randomY] = x
        }
        if (count > 0) {
            return shuffle(array, count - 1)
        }
        else {
            return array
        }
    }

    let myArray = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    myArray = mergeSort(myArray)
    console.log(shuffle(myArray, 500))
}

function main8() {
    books = ['p57pb7jmca2vupf7vyf1','ojb4v58aqawzndcf0dp9','ltvwfuvxvo6qw8y6v98h','qtxo5mhilnpzn5psp8eb','1j8ybg5d3z324sbjw36h','1mbetraz2dkswvbxk669','29o1tp60pxgce0d7ld72','fij3og78gcl1dth6bf0v','a92ay2hw67uf3upfr3o3','5sdz0mifj8l7tebjjub0','j7nhmpsfwnzaie3trk2v','4jnh6yzfq4rkjiqha2gh','1sj59lh2zugh9nt3cv1p','j8vvdof1lhj8hne4r40s','zn7om5s49ct2an9bfvor','cqv2x5nsmlqry97mye95','hgrlka7dn1da29meqoap','8dwvvu6g8z2pfuwgdujj','ikbkz2ku4iwlu8dpxrfm','c0r6eteec4m1qcpgsxm5']
    console.log(quickSort(books))
}

main8()