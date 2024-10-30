/**
 * @param {number[]} nums
 * @return {number}
 */

// this is not a solution, just something I started coding
var minimumMountainRemovals = function(nums) {
    let sortedIndices = nums.map((n, i) => [n, i]).sort((a,b) => b[0]-a[0]);

    const dp = Array(nums.length);

    let max = 0;
    for (let i = 0; i<nums.length; i++) {
        const [val, idx] = sortedIndices[i];
        const search = findMax(nums, val, idx, dp);

        max = Math.max(max, search);
        if (max === nums.length) return 0;
        nums[idx] = 0;
        //dp[idx] = [maxInc, maxDec];
    }

    return nums.length - max;
};

function findMax (nums, val, idx, dp) {
    let max = 0;
    const maxInc = findMaxInc(nums, val, idx, dp);
    const maxDec = findMaxDec(nums, val, idx, dp);
    max = Math.max(max, maxInc + maxDec);
    dp[idx] = [maxInc, maxDec];
}

function findMaxInc(nums, val, idx, dp) {
    if (dp[idx]) return dp[idx][0];

}

function findMaxDec(nums, val, idx, dp) {
    if (dp[idx]) return dp[idx][0];
    
}
