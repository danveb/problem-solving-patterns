/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. */ 

// initialize frequencyCounter helper function 
const frequencyCounter = (num) => {
    // initialize a new object
    let frequencies = {}
    // for each value
    for(let val of num) {
        // initial value is 0 or whatever value
        let valCount = frequencies[val] || 0
        frequencies[val] = valCount + 1 
    }
    return frequencies; 
}

const sameFrequency = (num1, num2) => {
    // check if length of num1 !== num2
    if(num1.length !== num2.length) return false 

    // initialize frequency for num1 and num2
    // - convert to string here so that we can use frequencyCounter helper
    let num1Freq = frequencyCounter(String(num1)) 
    let num2Freq = frequencyCounter(String(num2)) 

    // for loop
    for(let key of Object.keys(num1Freq)) {
        if(num2Freq[key] === false) {
            return false 
        }
        if(num2Freq[key] !== num1Freq[key]) {
            return false 
        }
    }
    return true; 

}

// console.log(frequencyCounter(1))
console.log(sameFrequency(16, 16)) 
console.log(sameFrequency(14, 16)) 

module.exports = sameFrequency; 