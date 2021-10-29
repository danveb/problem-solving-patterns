/* Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array). */ 

const separatePositive = (nums) => {
    // initialize left to start at 0
    // initialize right to start at end of nums array
    let left = 0
    let right = nums.length - 1

    // while loop
    while(left < right) {
        // check if numbers to left is greater than 0
        if(nums[left] > 0) {
            // move left pointer + 1
            left++
        } else if(nums[right] < 0) {
            // move right pointer - 1
            right--
        } else {
            // swap 
            [nums[left], nums[right]] = [nums[right], nums[left]]
            // left pointer + 1; right pointer - 1
            left++
            right--
        }
    }
    return nums; 
}

module.exports = separatePositive; 