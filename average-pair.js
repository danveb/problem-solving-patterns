// add whatever parameters you deem necessary
// - accept "sorted" array, target
// - average of pairs in sorted array must equal to the target; return true
// - return false if it can't be found
// - implement multiple pointers: left at 0 and right at length -1 

const averagePair= (array, target) => {
    // left pointer at 0; right pointer at length - 1
    let left = 0
    let right = array.length - 1 

    // while loop: left < right
    while(left < right) {
        // initialize avg
        let avg = (array[left] + array[right]) / 2
        if(avg === target) {
            return true 
        }
        if(avg < target) {
            // increase left by one
            left++
        } else {
            // decrease right by one
            right--
        }

    }
    return false 
}

console.log(averagePair([1,2,3], 2.5))
console.log(averagePair([1,2,3,4], 3.5)) 
console.log(averagePair([], 4))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))

module.exports = averagePair; 