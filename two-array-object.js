/* Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values. */

// add whatever parameters you deem necessary
// - accepts array1 (keys), array2 (values) of varying lengths

const twoArrayObject = (arr1, arr2) => {
    // initialize empty obj
    let obj = {} 
    // initialize index at 0
    let i = 0 

    // for of loop
    for(let key of arr1) {
        if(arr2[i]) {
            obj[key] = arr2[i]
        } else {
            obj[key] = null 
        }
        i++
    }
    return obj; 
}

console.log(twoArrayObject(['a','b','c','d'], [1,2,3]))

module.exports = twoArrayObject; 