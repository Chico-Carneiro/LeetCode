/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let countOnes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1)
            countOnes++;
    }
    let countOnesPartial = 0;
    for (let i = 0; i<countOnes; i++) {
        if (nums[i] === 1)
            countOnesPartial++;
    }
    let maxCount = countOnesPartial
    for (let i = 0; i < nums.length; i++) {
        countOnesPartial = countOnesPartial - nums[0+i] + nums[(countOnes+i)%nums.length];
        maxCount = Math.max(maxCount, countOnesPartial);
    }
    return countOnes-maxCount;
};
