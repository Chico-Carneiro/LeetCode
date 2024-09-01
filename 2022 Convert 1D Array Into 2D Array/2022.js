/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m*n) return [];
    const arr = new Array(m);
    for (let i = 0; i<m; i++) {
        arr[i] = original.slice(0+i*n, (i+1)*n);
    }
    return arr;
};
