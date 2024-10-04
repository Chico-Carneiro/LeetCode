/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let sum = 0;
    for (let i = 0; i<nums.length; i++) {
        const mod = nums[i]%p;
        nums[i] = mod;
        sum+=mod;
    }
    sum = sum%p;
    if (sum === 0) return 0;

    const set = new Set(nums);
    if (set.has(sum)) return 1;

    set.clear();
    const map1 = new Map();
    const RANGE = 10000;

    for (let i = 0; i < nums.length-1; i++) {
        const partSum = (nums[i] + nums[i+1]) % p;
        if (partSum === sum) return 2;
        map1.set(i+RANGE, partSum);
    }
    const map2 = new Map();
    let currMap = map2;
    let prevMap = map1;
    let prevRange = RANGE;

    for (let j = 2; j < nums.length-1; j++) {
        const newRange = prevRange + RANGE;
        for (let i = 0; i < nums.length-j; i++) {
            const partSum = (prevMap.get(i+prevRange) + nums[i+j]) % p;
            if (partSum === sum) return j+1;
            currMap.set(i+newRange, partSum);
        }
        prevMap.clear();
        [prevMap, currMap] = [currMap, prevMap];
        prevRange = newRange;
    }
    return -1;
};
