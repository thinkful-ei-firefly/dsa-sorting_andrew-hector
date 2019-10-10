function bubbleSort (array, end) {
    var end = end === undefined ? array.length : end;
    let newArr = array

    if(end === 0) {
        return array
    }

    for (let i=1; i<end; i++) {
        let prev = newArr[i-1]
        let curr = newArr[i]
        if (prev > curr) {
            newArr[i-1] = curr
            newArr[i] = prev
        }
    }

    return bubbleSort(newArr, end-1)
}

module.exports = bubbleSort