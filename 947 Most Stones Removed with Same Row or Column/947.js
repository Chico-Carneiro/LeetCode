/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    //stones = [[0,0], [0,2], [1,2], [2,1], [3,1], [2,0]]

    const rootCount = new Map();
    const rowToRoot = new Map();
    const colToRoot = new Map();

    const rootToChild = new Map();

    const childrenUpdate = (origin, destiny, newRoot, c2root, r2root) => {
        origin.forEach(([type, coord]) => {
            destiny.push([type, coord]);
            if (type === 0) { //col
                c2root.set(coord, newRoot);
            }
            else {
                r2root.set(coord, newRoot);
            }
        });
    }

    for (let i = 0; i < stones.length; i++) {
        const row = stones[i][0];
        const col = stones[i][1];

        if (!rowToRoot.has(row) && !colToRoot.has(col)) {
            rowToRoot.set(row, i);
            colToRoot.set(col, i);
            rootCount.set(i, 1);

            rootToChild.set(i, [[0, col], [1, row]]);
        }
        else if (rowToRoot.has(row) && colToRoot.has(col)) {
            const rowRoot = rowToRoot.get(row);
            const colRoot = colToRoot.get(col);
            if (rowRoot !== colRoot) {
                // V1: we will keep the rowRoot
                // V2: maybe keep the one with more children instead
                const rrc = rootToChild.get(rowRoot).length;
                const crc = rootToChild.get(colRoot).length;
                let toKeep = rowRoot;
                let toChange = colRoot;
                if (crc > rrc) {
                    toKeep = colRoot;
                    toChange = rowRoot;
                }
                rootCount.set(toKeep, rootCount.get(rowRoot) + rootCount.get(colRoot) + 1);
                rootCount.delete(toChange);

                //colToRoot.set(colRoot, rowRoot);

                const destination = rootToChild.get(toKeep);
                //destination.push([0,colRoot]);


                const origin = rootToChild.get(toChange);

                childrenUpdate(
                    origin,
                    destination,
                    toKeep,
                    colToRoot,
                    rowToRoot
                );

                rootToChild.delete(toChange)
            }

            else {
                rootCount.set(rowRoot, rootCount.get(rowRoot) + 1);
            }
        }
        else if (rowToRoot.has(row)) {
            const rowRoot = rowToRoot.get(row);
            colToRoot.set(col, rowRoot);
            rootToChild.get(rowRoot).push([0, col]); // 0 represents its a column in colToRoot
            rootCount.set(rowRoot, rootCount.get(rowRoot) + 1);
        }
        else if (colToRoot.has(col)) {
            const colRoot = colToRoot.get(col);
            rowToRoot.set(row, colRoot);
            rootToChild.get(colRoot).push([1, row]); // 1 represents its a row in rowToRoot
            rootCount.set(colRoot, rootCount.get(colRoot) + 1);
        }

    }

    let count = 0;
    for (let val of rootCount.values()) {
        count += val - 1;
    }
    return count;
};
