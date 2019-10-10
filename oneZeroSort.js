let arr = [1, 0, 0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0]

function oneZeroSort(array) { //O(2n)
    let zeroCount = 0;
    let oneCount = 0;
    let output = []
    for (let i=0; i < array.length; i++) {
        if (array[i] === 0) {
            zeroCount++
        }
        else {
            oneCount++
        }
    }
    for (let i=0; i< zeroCount; i++) {
        output.push(0)
    }
    for (let i=0; i< oneCount; i++) {
        output.push(1)
    }
    return output
}