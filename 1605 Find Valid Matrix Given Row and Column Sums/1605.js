/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
// This solution seems to be on the lower end of performance.
// I'm going to check the Editorial and other solutions.
var restoreMatrix = function(rowSum, colSum) {
    let sortedIdxRowSum = Array.from({length: rowSum.length}, (_, i) => i).sort((a,b) => rowSum[b] - rowSum[a]);
    let sortedIdxColSum = Array.from({length: colSum.length}, (_, i) => i).sort((a,b) => colSum[b] - colSum[a]);

    const mx = Array.from({length: rowSum.length});
    for (let i = 0; i < rowSum.length; i++) {
        mx[i] = Array.from({length: colSum.length}, i => 0);
    }

    while (sortedIdxRowSum.length > 0 && sortedIdxColSum.length > 0) {
        const ri = sortedIdxRowSum.pop();
        const ci = sortedIdxColSum.pop();
        const r = rowSum[ri];
        const c = colSum[ci];

        const min = Math.min(r,c);

        mx[ri][ci] = min;

        if (r-min > 0) {
            rowSum[ri] = r-min;
            sortedIdxRowSum.push(ri);
        }
        if (c-min > 0) {
            colSum[ci] = c-min;
            sortedIdxColSum.push(ci);
        }

    }
    return mx;
};
