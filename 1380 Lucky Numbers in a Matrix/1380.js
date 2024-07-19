/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 /*  Initially missed the insight that there's only 1 lucky number at most so I rewrote it */
var luckyNumbers  = function(matrix) {
    let rowsMin = 10e6;
    let minIsSet = false;
    const colMaxs = new Array(matrix[0].length);
    for (let i=0; i<matrix[0].length; ++i) colMaxs[i] = 0;

    for (let i = 0; i<matrix.length; i++) {
        let min = 10e6;
        let row = matrix[i];
        for (let j = 0; j<matrix[0].length; j++) {
            if (row[j] < min) {
                min = row[j];
            }
            if (row[j] > colMaxs[j]) {
                colMaxs[j] = row[j];
            }
        }
        if (!minIsSet) {
            rowsMin = min;
            minIsSet = true;
        }
        else if(min > rowsMin) rowsMin = min;
    }
    if (colMaxs.includes(rowsMin)) return [rowsMin];
    return [];
};
/*
var luckyNumbers  = function(matrix) {
    const rowMins = new Array(matrix.length);
    const colMaxs = new Array(matrix[0].length);
    for (let i=0; i<matrix[0].length; ++i) colMaxs[i] = 0;

    for (let i = 0; i<matrix.length; i++) {
        let min = 10e6;
        let row = matrix[i];
        for (let j = 0; j<matrix[0].length; j++) {
            if (row[j] < min) {
                min = row[j];
            }
            if (row[j] > colMaxs[j]) {
                colMaxs[j] = row[j];
            }
        }
        rowMins.push(min);
    }

    const res = [];
    let possible = Math.min(matrix.length, matrix[0].length);
    for (let i = 0; i<rowMins.length; i++) {
        if (colMaxs.includes(rowMins[i])) {
            res.push(rowMins[i]);
            possible--;
            if(!possible) return res;
        }
    }
    return res;
};
*/
