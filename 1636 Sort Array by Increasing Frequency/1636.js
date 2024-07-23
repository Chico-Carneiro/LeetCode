/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    if (nums.length < 2) return nums;

    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i]))
            map.set(nums[i], 1);
        else
            map.set(nums[i], map.get(nums[i])+1);
    }
    const sorted = Array.from(map).sort((a,b) => a[1]-b[1] || b[0] - a[0]);
    const res = [];
    for (let i = 0; i<sorted.length; i++) {
        for (let j = 0; j<sorted[i][1]; j++) {
            res.push(sorted[i][0]);
        }
    }
    return res;
    
};
