/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    const sortedIndexes = nums.map((num, i) => i).sort((a, b) => nums[a] - nums[b]);
    let minIdx = nums.length;
    let maxSize = 0;
    for (let i of sortedIndexes) {
        maxSize = Math.max(maxSize, i - minIdx);
        minIdx = Math.min(minIdx, i);
    }
    return maxSize;
};
