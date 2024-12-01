/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    const map = [];
    for (let n of arr) {
        map[n] = (map[n] | 0) + 1;
    }
    for (let n of arr) {
        if (map[n + n] > 0)
            if (n !== 0) return true;
            else if (map[n] > 1) return true;
    }
    return false;
};
