/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
    //if (nums.length === 1) return nums;
    if (k === 1) return nums;

    let res = [];

    //build the window
    let remainingNegatives = 0;
    for (let i = 1; i < k; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            remainingNegatives = i;
        }
    }
    if (remainingNegatives > 0) {
        res.push(-1);
        remainingNegatives--;
    }
    else {
        res.push(nums[k - 1]);
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            res.push(-1);
            remainingNegatives = k - 2;
            continue;
        }
        if (remainingNegatives > 0) {
            res.push(-1);
            remainingNegatives--;
        }
        else {
            res.push(nums[i]);
        }
    }
    return res;
};
