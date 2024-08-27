/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
    let g = {};
    for (let i = 0; i < edges.length; i++) {
        if (g[edges[i][0]]) {
            g[edges[i][0]].push([edges[i][1], succProb[i]]);
        }
        else {
            g[edges[i][0]] = [[edges[i][1], succProb[i]]];
        }
        if (g[edges[i][1]]) {
            g[edges[i][1]].push([edges[i][0], succProb[i]]);
        }
        else {
            g[edges[i][1]] = [[edges[i][0], succProb[i]]];
        }
    }
    if ( !g[start] || !g[end] ) {
        return 0;
    }


    const visitedFromStart = new Map();
    let frontierToEvalStart = new Set();
    visitedFromStart.set(start, 1);
    frontierToEvalStart.add(start);

    while (frontierToEvalStart.size > 0) {
        const nextFrontier = new Set();
        for (const currNode of frontierToEvalStart.values()) {
            for (let neighbor of g[currNode]) {

                const prob = visitedFromStart.get(currNode) * neighbor[1];
                if (visitedFromStart.has(neighbor[0])) {
                    if (visitedFromStart.get(neighbor[0]) < prob) {
                        visitedFromStart.set(neighbor[0], prob);
                        if (neighbor[0] !== end)
                            nextFrontier.add(neighbor[0]);
                    }
                }
                else {
                    visitedFromStart.set(neighbor[0], prob);
                    if (neighbor[0] !== end)
                        nextFrontier.add(neighbor[0]);
                }
            }
        }
        frontierToEvalStart = nextFrontier;
    }
    if (visitedFromStart.get(end) === undefined) return 0;
    return visitedFromStart.get(end) ;
};

