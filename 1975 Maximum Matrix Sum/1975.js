/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
    const n = matrix.length;
    let sum = 0;
    //let countNeg = 0;
    let oddNeg = false;
    let min = 100000;

    for (let row of matrix) {
        for (let el of row) {
            if (el < 0) {
                //countNeg--;
                oddNeg = !oddNeg;
                el -= el;
            }
            sum += el;
            if (el < min) min = el;
        }
    }

    return oddNeg ? sum - 2 * min : sum;
    /*
    for (let i = 0; i<n; i++) {
        const row = matrix[i];
        for (let j = 0; j<n; j++) {
            if (row[j])
            row[j]
        }
    }
    */
};
