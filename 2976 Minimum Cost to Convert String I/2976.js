/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const mtx = {};
    for (const i of abc) {
        mtx[i] = {};
        for (let j of abc) {
            mtx[i][j] = Infinity;
        }
        mtx[i][i] = 0;
    }
    const nodes = new Set();
    const costLen = cost.length;
    for (let i = 0; i < costLen; i++) {
        if (cost[i] < mtx[original[i]][changed[i]]) {
            mtx[original[i]][changed[i]] = cost[i];
            nodes.add(original[i]);
            nodes.add(changed[i]);
        }
    }
    for (const k of nodes) {
        for (const i of nodes) {
            for (const j of nodes) {
                if (mtx[i][j] > mtx[i][k] + mtx[k][j])
                    mtx[i][j] = mtx[i][k] + mtx[k][j];
            }
        }
    }
    let minCost = 0;
    const sourceLen = source.length;
    for (let i = 0; i<sourceLen; i++) {
        if (mtx[source[i]][target[i]] === Infinity) return -1;
        minCost += mtx[source[i]][target[i]];
    }
    return minCost;
};
