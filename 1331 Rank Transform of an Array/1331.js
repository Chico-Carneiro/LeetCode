/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    if (arr.length === 0) return arr;

    const sorted = arr.map((num, i) => [num,i]).sort((a,b) => a[0] - b[0]);
    const res = Array(arr.length);

    let val = sorted[0][0];
    let rank = 1;
    res[sorted[0][1]] = rank;

    for (let i = 1; i<sorted.length; i++) {
        if(sorted[i][0] > val) {
            rank++;
            val = sorted[i][0];
        }

        res[sorted[i][1]] = rank;
    }
    return res;
};
