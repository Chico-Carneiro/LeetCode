/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    if (matrix.length === 1) {
        return matrix[0].reduce((acc, val) => acc+val, 0);
    }
    if (matrix[0].length === 1) {
        return matrix.reduce((acc, val) => acc+val[0], 0);
    }

    let rows = matrix.length;
    let cols = matrix[0].length;

    let count = 0;
     for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            count += matrix[i][j];
        }
     }

    while (rows > 1 && cols > 1) {
        for (let i = 0; i < rows-1; i++) {
            for (let j = 0; j < cols-1; j++) {
                if (matrix[i+1][j+1] === 0 || matrix[i][j+1] === 0) {
                    matrix[i][j] = 0;
                    j++;
                    matrix[i][j] = 0;
                    continue;
                }
                if (matrix[i][j] === 0 || matrix[i+1][j] === 0) {
                    matrix[i][j] = 0;
                    continue;
                }
                /*let sum = 0;
                matrix[i][j]
                    + matrix[i+1][j]
                    + matrix[i][j+1]
                    + matrix[i+1][j+1];
                count += (sum === 4) ? 1: 0;
                matrix[i][j] = (sum === 4) ? 1: 0;
                */
                count++;
                matrix[i][j] = 1;
            }
        }
        rows--;
        cols--;
    }
    return count;
    
}

var countSquares1 = function(matrix) {
    if (matrix.length === 1) {
        return matrix[0].reduce((val, acc) => acc+val, 0);
    }
    //const memo = new Map();
    const memo = Array(300000000);

    const rows = matrix.length;
    const cols = matrix[0].length;
    //if (rows === 265) return
    const size = Math.min(rows, cols);
    
    let count = [0];

    for (let i = 0; i <= rows-size; i++) {
        for (let j = 0; j <= cols-size; j++) {
            scan(matrix, i, j, size, memo, count)
        }
    }
    count = count[0];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            count+=matrix[i][j];
        }
    }
    return count;



};

function scan(m, row, col, size, memo, acc) {
    if (size === 1) {
        return m[row][col];
    }
    const hash = row + 1000*col + 1000000*size;
    if (memo[hash]) return memo[hash];
    //if (memo.has(hash)) return memo.get(hash);

    size--;
    let sum = 0;
    for (let i = 0; i<1; i++) {
        sum += scan(m, row, col, size, memo, acc);
        //if (sum === 0) break;
        sum += scan(m, row, col+1, size, memo, acc);
        //if (sum === 1) break;
        sum += scan(m, row+1, col, size, memo, acc);
        //if (sum === 2) break;
        sum += scan(m, row+1, col+1, size, memo, acc);
    }
    const res = sum === 4;
    memo[hash] = res;
    //memo.set(hash, res);
    acc[0] += res;
    return res;

}
