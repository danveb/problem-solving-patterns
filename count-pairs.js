/* Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array. */ 

const countPairs = (array, num) => {
    // initialize count, start/end pointers
    let count = 0
    let start = 0
    let end = array.length - 1

    // array sort? 
    array.sort((a, b) => a - b)

    // while loop
    while(start < end) {
        // create var for sum 
        let sum = array[start] + array[end] 
        // check if sum === target num 
        if(sum === num) {
            // we found it so we can move start + 1 and end - 1
            count++
            start++
            end--
        } else if(sum < num) {
            start++
            // else sum can be greater than num 
        } else {
            end--
        }
    }
    return count; 
}

console.log(countPairs([3,1,5,4,2], 6))
console.log(countPairs([10,4,8,2,6,0], 10)) 
console.log(countPairs([4,6,2,7], 10))
console.log(countPairs([1,2,3,4,5], 10)) 
console.log(countPairs([1,2,3,4,5], -3)) 
console.log(countPairs([0,-4],-4)) 
console.log(countPairs([1,2,3,0,-1,-2],0))

module.exports = countPairs; 