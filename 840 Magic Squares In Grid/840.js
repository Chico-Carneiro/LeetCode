/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    const cols = grid[0].length;
    const rows = grid.length;
    if (cols < 3 || rows < 3) return 0;

    const mapper = {
        "492357816": true,
        "294753618": true,
        "276951438": true,
        "672159834": true,
        "618753294": true,
        "816357492": true,
        "834159672": true,
        "438951276": true,
    }
    let count = 0;
    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            if (grid[i][j] === 5) {
                const str1 = '' + grid[i - 1][j - 1] + grid[i - 1][j] + grid[i - 1][j + 1] + grid[i][j - 1] + grid[i][j] + grid[i][j + 1] + grid[i + 1][j - 1] + grid[i + 1][j] + grid[i + 1][j + 1];
                if (str1 in mapper) {
                    count++;
                }
                j++;
            }
        }
    }
    return count;
};
