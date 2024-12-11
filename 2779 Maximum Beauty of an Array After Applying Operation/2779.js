/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
    nums.sort((a, b) => a - b);
    nums.push(Infinity);
    let max = 1;
    let seq = 0;
    nums[seq] += k;
    for (let i = 1; i < nums.length; i++) {
        const high = nums[i] - k;
        //const low = nums[seq]+k;
        if (high > nums[seq]) {
            max = Math.max(max, i - seq);
            seq++;
            while (high > nums[seq]) {
                seq++;
            }
        }
        nums[i] += k;

    }
    return max;
};
