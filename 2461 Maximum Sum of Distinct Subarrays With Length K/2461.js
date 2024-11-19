/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    if (k === 1) return Math.max(...nums);

    let max = 0;
    let sum = 0;
    const freq = Array(10e5 + 1).fill(0);
    const repeatedSet = new Set();
    //let valid = true;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
        /*
        if (freq[nums[i]] > 0) {
            valid = false;
            //console.log(valid, i)
        }
        */
        if (freq[nums[i]] === 1) {
            repeatedSet.add(nums[i]);
        }
        freq[nums[i]]++;

    }
    if (repeatedSet.size === 0) {
        if (sum > max) max = sum;
    }
    const limit = nums.length - k;
    for (let i = 0; i < limit; i++) {
        const next = nums[i + k];
        //console.log(nums[i], nums[i+k])
        //console.log(freq[nums[i]])
        if (freq[nums[i]] === 2)
            repeatedSet.delete(nums[i]);
        freq[nums[i]]--;
        /*
        if (freq[nums[i]] < 2) {
            valid = true;
        }
        if (freq[nums[i+k]] > 0) {
            valid = false;
            //console.log(valid, i)

        }
        */
        if (freq[next] === 1)
            repeatedSet.add(next);
        freq[next]++;
        sum += next - nums[i];
        if (repeatedSet.size === 0) {
            if (sum > max) max = sum;
        }
    }

    return max;

};
