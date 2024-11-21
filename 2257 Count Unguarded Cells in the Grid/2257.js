/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {

    /*
    map of guards
    row => {
        cols: [],
        min: ,
        max:
    }
    */
    /*
    const mapRows = {}
    const mapCols = {}
    for (let [r,c] of guards) {
        if (mapRows.has(r)) {

        }
    }
    */
    /* grid approach
    0 = free
    1 = wall
    2 = guard
    3 = guarded
    */

    const grid = Array(m);
    const map = new Map();
    /*
    key = r*10000 + c => [0,0,0,0]
    This means the guard at [r,c] was visited by other guard from the
        [North, East, South, West]
    when that other guard was covering ground from the opposite direction.

    Ex: [1,0,0,0] some other guard went South and reached this guard,
    so this guard was visited from the North.

    So if arr[i] not zero, that was already covered, we don't need to go there
    again.
    */
    for (let i = 0; i < m; i++) {
        grid[i] = Array(n).fill(0);
    }

    for (let [r, c] of walls) {
        grid[r][c] = 1;
    }

    for (let [r, c] of guards) {
        grid[r][c] = 2;
    }

    let res = m * n - guards.length - walls.length;

    for (let [r, c] of guards) {
        const hash = r * 10000 + c;
        const arr = map.get(hash);
        //console.log(arr, r,c)
        //check North
        if (arr?.[0] !== 1) {
            let rn = r - 1;
            while (rn >= 0) {
                const cell = grid[rn][c];
                if (cell == 0) { //empty
                    grid[rn][c] = 3;
                    res--;
                }
                else if (cell == 1) { //a wall
                    break;
                }
                else if (cell == 2) { //another guard
                    const othersHash = rn * 10000 + c;
                    if (map.has(othersHash)) {
                        map.get(othersHash)[2] = 1;
                    }
                    else {
                        map.set(othersHash, [0, 0, 1, 0]);
                    }
                    break;
                }
                rn--;
                // do nothing if cell === 3
            }
        }

        //check South
        if (arr?.[2] !== 1) {
            let rs = r + 1;
            while (rs < m) {
                const cell = grid[rs][c];
                if (cell == 0) { //empty
                    grid[rs][c] = 3;
                    res--;
                }
                else if (cell == 1) { //a wall
                    break;
                }
                else if (cell == 2) { //another guard
                    const othersHash = rs * 10000 + c;
                    if (map.has(othersHash)) {
                        map.get(othersHash)[0] = 1;
                    }
                    else {
                        map.set(othersHash, [1, 0, 0, 0]);
                    }
                    break;
                }
                // do nothing if cell === 3
                rs++;
            }
        }

        //check East
        if (arr?.[1] !== 1) {
            let ce = c + 1;
            while (ce < n) {
                const cell = grid[r][ce];
                if (cell == 0) { //empty
                    grid[r][ce] = 3;
                    res--;
                }
                else if (cell == 1) { //a wall
                    break;
                }
                else if (cell == 2) { //another guard
                    const othersHash = r * 10000 + ce;
                    if (map.has(othersHash)) {
                        map.get(othersHash)[3] = 1;
                    }
                    else {
                        map.set(othersHash, [0, 0, 0, 1]);
                    }
                    break;
                }
                // do nothing if cell === 3
                ce++;
            }
        }
        //check West
        if (arr?.[3] !== 1) {
            let cw = c - 1;
            while (cw >= 0) {
                const cell = grid[r][cw];
                if (cell == 0) { //empty
                    grid[r][cw] = 3;
                    res--;
                }
                else if (cell == 1) { //a wall
                    break;
                }
                else if (cell == 2) { //another guard
                    const othersHash = r * 10000 + cw;
                    if (map.has(othersHash)) {
                        map.get(othersHash)[1] = 1;
                    }
                    else {
                        map.set(othersHash, [0, 1, 0, 0]);
                    }
                    break;
                }
                // do nothing if cell === 3
                cw--;
            }
        }
    }
    //console.log(grid)
    return res
};
