/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
    const m = matrix.length;
    if (m === 1) return 1;

    const n = matrix[0].length;
    if (n === 1) return m; //what a silly mistake

    const map = new Map();
    const upper = 1n << BigInt(n);

    for (let arr of matrix) {
        let num = BigInt(`0b${arr.join("")}`);
        //let num = parseInt(arr.join(""), 2);
        //let num = arr.reduce((acc,val) => (acc << 1) | val);
        //above line gets problems with overflow because of 32 bit JS
        if (num < upper >> 1n) {
            map.set(num, map.get(num) + 1 || 1);
        }
        else {
            num = upper - num - 1n;
            map.set(num, map.get(num) + 1 || 1);
        }
    }

    let max = 1;
    for (let val of map.values()) {
        if (val > max) max = val;
    }

    return max;
};
