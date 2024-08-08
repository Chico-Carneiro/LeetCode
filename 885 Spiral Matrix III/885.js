/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const cellsCount = rows * cols;
    const output = [[rStart, cStart]];
    let count = 1;
    let direction = 0;
    let radius = 0;
    let i = rStart;
    let j = cStart;
    while (count < cellsCount) {
        if (direction === 0) {
            radius++;
            if (i >= 0) {
                const limit = Math.min(cols-1, j + radius);
                for (let k = Math.max(0, j + 1); k <= limit; k++) {
                    output.push([i, k]);
                    count++;
                }
            }
            j += radius;
        }
        else if (direction === 1) {
            if (j < cols) {
                const limit = Math.min(rows-1, i + radius);
                for (let k = Math.max(0, i + 1); k <= limit; k++) {
                    output.push([k, j]);
                    count++;
                }
            }
            i += radius;
        }
        else if (direction === 2) {
            radius++;
            if (i < rows) {
                const limit = Math.max(0, j - radius);
                for (let k = Math.min(j - 1, cols - 1); k >= limit; k--) {
                    output.push([i, k]);
                    count++;
                }
            }
            j -= radius;
        }
        else if (direction === 3) {
            if (j >= 0) {
                const limit = Math.max(0, i - radius);
                for (let k = Math.min(i - 1, rows - 1); k >= limit; k--) {
                    output.push([k, j]);
                    count++;
                }
            }
            i -= radius;
        }
        direction = (direction + 1) % 4;
    }
    return output;
};
