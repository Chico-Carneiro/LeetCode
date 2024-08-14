/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    let arr = [];
    
    for (let i = 0; i<nums.length - 1; i++) {
        for (let j = i + 1; j<nums.length; j++) {
            const dif = Math.abs(nums[i] - nums[j]);
            arr[dif] = (arr[dif] + 1) || 1;
        }
    }
    for (let i = 0; i<arr.length; i++) {
        k = k - (arr[i] || 0);
        if (k <= 0) return i;
    }

};
