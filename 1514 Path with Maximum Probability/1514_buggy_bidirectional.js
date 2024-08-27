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

    const step = (frontierToEval, g, visited, visitedFromOtherSide, max, side) => {
        console.log("\n@@@ side: ", side);
        console.log("#################################");
        console.log("frontierToEval",frontierToEval);
        const nextFrontier = new Set();
        for (const currNode of frontierToEval.values()) {
            console.log("currNode, g[currNode] (neighbors)", currNode, g[currNode])
            for (let neighbor of g[currNode]) {
                console.log("neighbor",neighbor)
                if (visitedFromOtherSide.has(neighbor[0])) {
                    console.log("##### found an intersection")
                    let prob = visitedFromOtherSide.get(neighbor[0]);
                    if (prob !== 1) {
                        prob *= visited.get(currNode)*neighbor[1];
                    }
                    else {
                        prob = visited.get(currNode)*neighbor[1];
                    }
                    if (prob > max) {
                        console.log("updating max (currMax, prob)", max, prob)
                        max = prob;
                    }
                    continue;
                }
                const prob = visited.get(currNode) * neighbor[1];
                console.log("prob", prob)
                if (visited.has(neighbor[0])) {
                    if (visited.get(neighbor[0]) < prob) {
                        visited.set(neighbor[0], prob);
                        if (neighbor[0] !== end)
                            nextFrontier.add(neighbor[0]);
                    }
                }
                else {
                    visited.set(neighbor[0], prob);
                    if (neighbor[0] !== end)
                        nextFrontier.add(neighbor[0]);
                }
                /*if(neighbor[0] !== end) {
                    nextFrontier.push(neighbor[0]);
                    console.log("nextFrontier", nextFrontier)
                }*/
                // check if found end
                // or check if node is in visitedFromEnd
            }
        }
        //frontierToEval = nextFrontier;
        return [max, nextFrontier];
    }

    const visitedFromStart = new Map();
    let frontierToEvalStart = new Set();
    visitedFromStart.set(start, 1);
    frontierToEvalStart.add(start);

    const visitedFromEnd = new Map();
    //const nodesToEvalEnd = [];
    let frontierToEvalEnd = new Set();
    visitedFromEnd.set(end, 1);
    frontierToEvalEnd.add(end);

    let max = 0;

    //for (let i = 0; i < 10; i++) {
    while (frontierToEvalStart.size > 0 || frontierToEvalEnd.size > 0) {
        [max, frontierToEvalStart] = step(frontierToEvalStart, g, visitedFromStart, visitedFromEnd, max, "START");
        [max, frontierToEvalEnd] = step(frontierToEvalEnd, g, visitedFromEnd, visitedFromStart, max, "END");
        
    }

    console.log(g)
    //if (visitedFromStart.get(end) === undefined) { return 0};

    //console.log("res",visitedFromStart.get(end));
    console.log("res",max);
    return max;
};

/*###########################################################################################################*/

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

    const step = (frontierToEval, g, visited, visitedFromOtherSide, max) => {
        const nextFrontier = new Set();
        for (const currNode of frontierToEval.values()) {
            for (let neighbor of g[currNode]) {
                if (neighbor[1] === 0) continue;
                if (visitedFromOtherSide.has(neighbor[0])) {
                    const prob = visitedFromOtherSide.get(neighbor[0]) * visited.get(currNode) * neighbor[1];
                    if (prob > max) {
                        max = Math.round(prob*1e5)/1e5;
                    }
                    continue;
                }
                const prob = Math.round((visited.get(currNode) * neighbor[1])*1e5)/1e5;
                if (visited.has(neighbor[0])) {
                    if (prob > visited.get(neighbor[0])) {
                        visited.set(neighbor[0], prob);
                        nextFrontier.add(neighbor[0]);
                    }
                }
                else {
                    visited.set(neighbor[0], prob);
                    nextFrontier.add(neighbor[0]);
                }
            }
        }
        return [max, nextFrontier];
    }

    const visitedFromStart = new Map();
    let frontierToEvalStart = new Set();
    visitedFromStart.set(start, 1);
    frontierToEvalStart.add(start);

    const visitedFromEnd = new Map();
    let frontierToEvalEnd = new Set();
    visitedFromEnd.set(end, 1);
    frontierToEvalEnd.add(end);

    let max = 0;

    while (frontierToEvalStart.size > 0 || frontierToEvalEnd.size > 0) {
        [max, frontierToEvalStart] = step(frontierToEvalStart, g, visitedFromStart, visitedFromEnd, max);
        [max, frontierToEvalEnd] = step(frontierToEvalEnd, g, visitedFromEnd, visitedFromStart, max);
        
    }

    return max;
};


/*###########################################################################################################*/



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

    const step = (frontierToEval, g, visited, visitedFromOtherSide, max) => {
        const nextFrontier = new Set();
        for (const currNode of frontierToEval.values()) {
            for (let neighbor of g[currNode]) {
                if (visitedFromOtherSide.has(neighbor[0])) {
                    let prob = visitedFromOtherSide.get(neighbor[0]);
                    if (prob !== 1) {
                        prob *= visited.get(currNode)*neighbor[1];
                    }
                    else {
                        prob = visited.get(currNode)*neighbor[1];
                    }
                    if (prob > max) {
                        max = Math.round(prob*1e5)/1e5;
                    }
                    continue;
                }
                const prob = Math.round((visited.get(currNode) * neighbor[1])*1e5)/1e5;
                if (visited.has(neighbor[0])) {
                    if (visited.get(neighbor[0]) < prob) {
                        visited.set(neighbor[0], prob);
                        if (neighbor[0] !== end)
                            nextFrontier.add(neighbor[0]);
                    }
                }
                else {
                    visited.set(neighbor[0], prob);
                    if (neighbor[0] !== end)
                        nextFrontier.add(neighbor[0]);
                }
            }
        }
        return [max, nextFrontier];
    }

    const visitedFromStart = new Map();
    let frontierToEvalStart = new Set();
    visitedFromStart.set(start, 1);
    frontierToEvalStart.add(start);

    const visitedFromEnd = new Map();
    let frontierToEvalEnd = new Set();
    visitedFromEnd.set(end, 1);
    frontierToEvalEnd.add(end);

    let max = 0;

    while (frontierToEvalStart.size > 0 || frontierToEvalEnd.size > 0) {
        [max, frontierToEvalStart] = step(frontierToEvalStart, g, visitedFromStart, visitedFromEnd, max);
        [max, frontierToEvalEnd] = step(frontierToEvalEnd, g, visitedFromEnd, visitedFromStart, max);
        
    }

    return max;
};



/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability2 = function (n, edges, succProb, start, end) {
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

    const step = (frontierToEval, g, visited, visitedFromOtherSide, max) => {
        const nextFrontier = new Set();
        for (const currNode of frontierToEval.values()) {
            for (let neighbor of g[currNode]) {
                if (neighbor[1] === 0) continue;
                if (visitedFromOtherSide.has(neighbor[0])) {
                    const prob = visitedFromOtherSide.get(neighbor[0]) * visited.get(currNode) * neighbor[1];
                    if (prob > max) {
                    console.log(prob, neighbor[0], neighbor[1], currNode)
                        max = Math.round(prob*1e5)/1e5;
                    }
                    continue;
                }
                const prob = Math.round((visited.get(currNode) * neighbor[1])*1e5)/1e5;
                if (visited.has(neighbor[0])) {
                    if (prob > visited.get(neighbor[0])) {
                        visited.set(neighbor[0], prob);
                        nextFrontier.add(neighbor[0]);
                    }
                }
                else {
                    visited.set(neighbor[0], prob);
                    nextFrontier.add(neighbor[0]);
                }
            }
        }
        return [max, nextFrontier];
    }

    const visitedFromStart = new Map();
    let frontierToEvalStart = new Set();
    visitedFromStart.set(start, 1);
    frontierToEvalStart.add(start);

    const visitedFromEnd = new Map();
    let frontierToEvalEnd = new Set();
    visitedFromEnd.set(end, 1);
    frontierToEvalEnd.add(end);

    let max = 0;

    while (frontierToEvalStart.size > 0 || frontierToEvalEnd.size > 0) {
        [max, frontierToEvalStart] = step(frontierToEvalStart, g, visitedFromStart, visitedFromEnd, max);
        [max, frontierToEvalEnd] = step(frontierToEvalEnd, g, visitedFromEnd, visitedFromStart, max);
        
    }

    return max;
};

var maxProbability3 = function (n, edges, succProb, start, end) {
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
    let count = 0;
    for (let key in g) {
    	if (count < 10) {
      
      
    	console.log(`\nNode ${key} makes an edge with\n`);
      for (let nei of g[key]) {
      	console.log(`        Node ${nei[0]} with edge weight = ${nei[1]}\n`);
      }
      }
      else {
      break;
      }
      count++;
    }
    return 1;
}


const res = maxProbability3(n, edges, succProb, start_node, end_node);
console.log(res)
