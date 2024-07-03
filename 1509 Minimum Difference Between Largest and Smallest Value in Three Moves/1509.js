/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length < 5) return 0;
    nums.sort((a,b) => a-b);
    let min = nums[nums.length-4] - nums[0];
    for (let i = 1; i < 4; i++) {
        if (nums[nums.length-4+i] - nums[i] < min) {
            min = nums[nums.length-4+i] - nums[i];
        }
    }
    return min;
};
