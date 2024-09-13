/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    const res = Array(queries.length);
    for (let [i, q] of queries.entries()) {
        let xor = 0;
        for (let j = q[0]; j <= q[1]; j++)
            xor ^= arr[j];
        res[i] = xor;
    }
    return res;
};
