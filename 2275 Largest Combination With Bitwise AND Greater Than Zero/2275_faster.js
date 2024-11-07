/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
    const buck = Array(24).fill(0);

    for (n of candidates) {
        let pow = 1;
        for (let i = 0; i < 24; i++) {
            if (n & pow) buck[i]++;
            pow <<= 1;

        }
    }
    /*
    let max = 0;
    for (let b of buck) {
        if (b > max) max = b;
    }
    return max;
    */
    return Math.max(...buck);
};
