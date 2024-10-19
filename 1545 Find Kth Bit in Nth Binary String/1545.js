/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
    if (n === 1) return '0';

    let str = [0];
    for (let i = 2; i<=n; i++) {
        str = [...str, 1, ...str.reverse().map(a => Math.abs(a-1))];
        if (str.length >= k) {
            return ""+str[k-1];
        }
    }
};
