/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    nums.sort((a,b)=> b-a);
    const map = new Map();
    let max = 1;
    for (let num of nums) {
        const square = num*num;
        if (map.has(square)) {
            const inc = map.get(square) + 1;
            map.set(num, inc);
            if (inc > max) max = inc;
        }
        else map.set(num, 1);

    }

    return max > 1 ? max : -1;
};
