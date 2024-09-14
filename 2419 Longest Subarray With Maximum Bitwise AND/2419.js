/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let max = nums[0];
    let streak = 1;
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            streak = 1;
            count = 1;
        }
        else if (nums[i] === max) {
            streak++;
        }
        else {
            if (streak > count)
                count = streak;
            streak = 0;
        }
    }
    return Math.max(count, streak);
};
