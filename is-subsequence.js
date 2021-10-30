/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. */

const isSubsequence = (str1, str2) => {
    // check if there are no strings then returns false 
    if(!str1 || !str2) return false 

    // left and right pointers for both strings
    let leftStr1 = 0
    let rightStr1 = str1.length - 1
    let leftStr2 = 0
    let rightStr2 = str2.length - 1

    // while loop: left2 <= right2
    while(leftStr2 <= rightStr2) {
        // check if str1(left) is equal to str2(left) 
        // - and check if str1(right) is equal to str2(right) 
        if(str1[leftStr1] === str2[leftStr2] && str1[rightStr1] === str2[rightStr2]) {
            console.log(leftStr1, leftStr2, rightStr1, rightStr2)
            if(leftStr1 === rightStr1 || leftStr1 === rightStr1 -1) {
                // it matches
                console.log('Done') 
                return true 
            }
            // move pointers
            leftStr1++
            rightStr1--
            leftStr2++
            rightStr2--
        } else if(str1[leftStr1] !== str2[leftStr2]) {
            console.log(leftStr1, leftStr2)
            leftStr2++ 
        } else if(str1[rightStr1] !== str2[rightStr2]) {
            console.log(rightStr1, rightStr2)
            rightStr2-- 
        }
    }
    return false; 

}

// console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'acb'))

module.exports = isSubsequence; 