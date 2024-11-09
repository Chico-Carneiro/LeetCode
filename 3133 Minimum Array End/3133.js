/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function (n, x) {
    if (n === 1) return x;
    // n, x < 2^27
    // count the number of zero bits at the right of x
    const last = Math.floor(Math.log2(x)) + 1;
    let count = 0;
    const arr = [];
    for (let i = 0; i < last; i++) {
        if ((1 << i & x) !== 1 << i) {
            count++;
            arr.push(i);
        }
    }
    // count #combinations of those zeroes
    const rightZeroComb = (1 << count) - 1;
    let toFill = n - 1;
    if (rightZeroComb === toFill) {
        return (1 << last) - 1;
    }
    // if #combinations > n
    else if (toFill < rightZeroComb) {
        //   look for the nth combination

        const xx = parseInt(fillRight(x, arr, toFill), 2);
        return xx
    }

    // if #combinations >= n
    else {
        //   find the (n-#combinations)_th combination of
        //   the zeroes on the left
        //return parseInt((toFill-comb).toString(2)+x.toString(2), 2);

        let left;
        let right;
        if (rightZeroComb === 0) {
            left = toFill;
            right = 0;
        }
        else {
            left = Math.floor(toFill / (rightZeroComb + 1));
            right = toFill % (rightZeroComb + 1);
        }
        let r = "";
        if (left) {
            r += left.toString(2);
        }
        if (right > 0) {
            r += fillRight(x, arr, right);
        }
        else {
            r += x.toString(2);
        }
        const xxxddfsdf = parseInt(r, 2);

        return xxxddfsdf

    }
};
function fillRight(x, arr, toFill) {
    const arr2 = x.toString(2).split('');
    const rightComb = toFill.toString(2).split('');
    const arr2len = arr2.length - 1;
    for (let i = 0; i < rightComb.length; i++) {
        arr2[arr2len - arr[i]] = rightComb.at(-i - 1);
    }
    return arr2.join('');
}
var minEnd2 = function (n, x) {
    // n, x < 2^27
    // count the number of zero bits at the right of x
    const last = Math.floor(Math.log2(x)) + 1;
    let count = 0;
    const arr = [];
    for (let i = 0; i < last; i++) {
        if ((1 << i & x) !== 1 << i) {
            count++;
            arr.push(i);
        }
    }
    // count #combinations of those zeroes
    const comb = (1 << count) - 1;
    let toFill = n - 1;
    if (comb === toFill) {
        return (1 << last) - 1;
    }
    // if #combinations > n
    else if (toFill < comb) {
        //   look for the nth combination
        const rightComb = toFill.toString(2).split('');
        const arr2 = x.toString(2).split('');
        const arr2len = arr2.length - 1;
        for (let i = 0; i < rightComb.length; i++) {
            arr2[arr2len - arr[i]] = rightComb.at(-i - 1);
        }
        return parseInt(arr2.join(''), 2);
    }

    // if #combinations >= n
    else {
        //   find the (n-#combinations)_th combination of
        //   the zeroes on the left
        //return parseInt((toFill-comb).toString(2)+x.toString(2), 2);
        toFill = toFill - arr.length;

    }
};
