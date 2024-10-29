/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {

    let memo = Array(grid[0].length * 1000);
    let max = 0;
    for (let i = 0; i<grid.length; i++) {
        max = Math.max(max, search(grid, i, 0, memo));
        if (max === grid[0].length) return max-1;
    }
    return max-1;
};

function search(grid, row, col, memo) {
    if (col === grid[0].length-1) return grid[0].length;

    const hash = row+1000*col;
    if (memo[hash] !== undefined) {
        return memo[hash];
    }
    
    let max = 0;
    if (row !== 0) {
        if (grid[row-1][col+1] > grid[row][col]) {
            const res = search(grid, row-1, col+1, memo);
            if (res === grid[0].length) return res;
            max = Math.max(max, res);
        }
    }
    if (grid[row][col+1] > grid[row][col]) {
        const res = search(grid, row, col+1, memo);
        if (res === grid[0].length) return res;
        max = Math.max(max, res);

    }
    if(row !== grid.length-1) {
        if (grid[row+1][col+1] > grid[row][col]){
            const res = search(grid, row+1, col+1, memo);
            if (res === grid[0].length) return res;
            max = Math.max(max, res);
        }
    }

    memo[hash] = max+1;
    return max+1;
}
