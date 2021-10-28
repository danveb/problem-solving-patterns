// add whatever parameters you deem necessary
// - accept message, letters
// - function returns true if message can be built with given letters 
// - otherwise returns false 

function constructNote(message, letters) {
    // initialize frequencyCounter helper function
    const frequencyCounter = (str) => {
        // intialize empty Map
        let frequencies = new Map() 
        for(let val of str) {
            let valCount = frequencies.get(val) || 0
            frequencies.set(val, valCount + 1) 
        }
        return frequencies; 
    }

    if(letters === '') return false 
    let msgFreq = frequencyCounter(message) 
    let lettersFreq = frequencyCounter(letters) 
    // console.log(msgFreq, lettersFreq)

    if(lettersFreq.size < msgFreq.size) return false 

    for(let char of msgFreq.keys()) {
        if(!lettersFreq.has(char) || msgFreq.get(char) > lettersFreq.get(char)) {
            return false 
        }
    }
    return true; 
}

console.log(constructNote('abc', 'abcd')) 
console.log(constructNote('aabbcc', 'bcabcaddff'))
console.log(constructNote('aa', 'abc'))

module.exports = constructNote;