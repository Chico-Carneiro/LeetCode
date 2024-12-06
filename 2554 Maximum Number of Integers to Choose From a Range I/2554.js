/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
    const arr = Array(n + 1).fill(1);

    for (let ban of banned) {
        arr[ban] = 0;
    }

    let sum = 0;
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        const add = sum + i;
        if (add > maxSum) return count;
        if (arr[i] > 0) {
            count++;
            sum = add;
        }
    }
    return count;
};
