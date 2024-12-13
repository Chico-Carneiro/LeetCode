/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
    const len = nums.length;
    if (len < 3) return Math.min(...nums);
    const ns = Array(len);
    const idxs = Array(len);

    for (let i = 0; i < len; i++) {
        ns[i] = [nums[i], 0];
        idxs[i] = [nums[i], i];
    }

    idxs.sort((a, b) => a[0] - b[0]);

    let score = 0;
    //const lim = nums.length >> 1; 
    for (let i = 0; i < idxs.length; i++) {
        const el = idxs[i];
        if (ns[el[1]][1] === 0) {
            score += el[0];
            el[2] = 1;
            if (ns[el[1] - 1]?.[1] === 0) {
                ns[el[1] - 1][1] = 1;
            }
            if (ns[el[1] + 1]?.[1] === 0) {
                ns[el[1] + 1][1] = 1;
            }
        }
    }

    return score;



};
