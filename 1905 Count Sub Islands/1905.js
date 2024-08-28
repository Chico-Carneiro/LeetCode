/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let counter = 0;
    const m = grid2.length;
    const n = grid2[0].length;
    for (let x = 0; x < grid2.length; x++) {
        for (let y = 0; y < grid2[0].length; y++) {
            if (grid2[x][y] === 1) {
                const q = [[x,y]];
                pleaseCount = true;
                while (q.length > 0) {
                    const [i,j] = q.pop();
                    if (pleaseCount && grid1[i][j] === 0) {
                        pleaseCount = false;
                    }
                    const down = i+1;
                    const up = i-1;
                    const right = j+1;
                    const left = j-1;
                    if (down < m && grid2[down][j] === 1) {
                        grid2[down][j] = 0;
                        q.push([down,j]);
                    }
                    if (up >= 0 && grid2[up][j] === 1) {
                        grid2[up][j] = 0;
                        q.push([up,j]);
                    }
                    if (right < n && grid2[i][right] === 1) {
                        grid2[i][right] = 0;
                        q.push([i,right]);
                    }
                    if (left >= 0 && grid2[i][left] === 1) {
                        grid2[i][left] = 0;
                        q.push([i,left]);
                    }
                }
                if (pleaseCount) counter++;
            } 
        }
    }
    return counter;
};
