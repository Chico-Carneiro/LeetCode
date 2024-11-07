/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
    const buck = Array(24).fill(0);

    for (n of candidates) {
        let b = 0;
        while (n > 0) {
            if (n & 1) buck[b]++;
            n >>= 1;
            b++;
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
