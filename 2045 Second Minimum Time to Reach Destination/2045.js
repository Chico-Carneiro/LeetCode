/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function(n, edges, time, change) {
    const graph = new Map();
    for (let i = 0; i < edges.length; i++) {
        const o = edges[i][0];
        const d = edges[i][1];
        if (!graph.has(o))
            graph.set(o, new Set());
        if (!graph.has(d))
            graph.set(d,new Set());
        graph.get(o).add(d);
        graph.get(d).add(o);
    }

    //const parent = new Map(); 
    const res = BFS(graph, n);
    /*
    const shortestPathNodes = new Set();
    shortestPathNodes.add(1).add(n);
    let p = parent.get(n);
    while (p !== 1) {
        shortestPathNodes.add(p);
        p = parent.get(p);
    }
    */
    const toAdd = (res[1]-res[0] === 1) ? 1 : 2;
    //const toAdd = hasCycle(graph, shortestPathNodes, n) ? 1 : 2;
    const N = res[0]+toAdd;

    if (time === change) {
        return N * (time + change) - change;
    }
    else if (change < time) {
        const mod = time%change;
        if (((time-mod)/change)%2 === 0) {
            if (mod === 0) {
                return N * time;
            }
            else {
                if (N%2 === 0) {
                    return N*time + (N/2-1)*(change-((2*time)%change));
                }
                else {
                    //return (numEdgesPath+toAdd)*(time+time+change-(2*time)%change)-(time+change-(2*time)%change);         
                    return N*time + ((N+1)/2-1)*(change-((2*time)%change));
                }
            }
        }
        else {
                if(mod === 0) {
                    return N * time + (N-1) * change;
                }
                else {
                    return N * time + (N-1)*(change-mod);
                }
        }
    }
    else {
        const mod = change%time;
        if (mod === 0) {
            const div = (change-mod)/time;
            const nMod = N%div;
            const mul = (N - nMod) / div;
            if (nMod === 0)
                return div*time*mul+change*(mul-1);
            else
                return div*time*mul+change*mul + nMod*time;
        }
        else {
            const div = (change-mod)/time + 1;
            const nMod = N%div;
            const mul = (N - nMod) / div;
            if (nMod === 0) {
                return mul * time * div + (mul-1) * (change-time+mod);
            }
            else {
                return mul * (div * time + (change-time+mod)) + nMod * time; 
                //return mul * time * div + mul * (change-time+mod) + nMod * time; 
            }


        }
    }



};
function hasCycle(graph, shortestPathNodes, n) {
    if (shortestPathNodes.size < graph.size - shortestPathNodes) {
        const notInPathNeighbors = new Set();
        for (const nodeInPath of shortestPathNodes) {
            for (const neighbor of graph.get(nodeInPath)) {
                if (!shortestPathNodes.has(neighbor) && notInPathNeighbors.has(neighbor))
                    return true;
                else
                    notInPathNeighbours.add(neighbor);
            }
        }
    }
    else {
        const inPathNeighbors = new Set();
        for (let i = 1; i <= n; i++) {
            if (!shortestPathNodes.has(i)) {
                let count = 0;
                for (const neighbor of graph.get(i)) {
                    if (shortestPathNodes.has(neighbor)) {
                        if (count > 0)
                            return true;
                        count++;
                    }
                }
            }
        }
    }
    return false;

}

function BFS(g, n) {
    const q = new Queue();
    const res = [-1,-1];
    const explored = new Set();
    explored.add([1,0].toString());
    q.add(1,0);
    while(q.head) {
        const v = q.remove();
        if (res[0] >= 0 && v.lvl > res[0] + 1)
            return res;
        if (v.val === n) {
            if (res[0] < 0) {
                res[0] = v.lvl;
            }
            else {
                if (v.lvl !== res[0]) {
                    res[1] = v.lvl;
                }
                return res;
            }
        }
        else {
            for (const w of g.get(v.val)) {
                const keyOfSet = [w,v.lvl+1].toString();
                if (explored.has([w,v.lvl-1].toString())) {
                    continue;
                }
                if (!explored.has(keyOfSet)) {
                    explored.add(keyOfSet);
                    q.add(w,v.lvl+1);
                }
            }
        }
    }
    return res;
}

function Queue() {
  this.head = null;
  this.tail = null;
}
Queue.prototype.add = function(val, lvl) {
  const node = new Node(val, lvl)
  if (!this.head)
    this.head = node;
  else
    this.tail.next = node;
  this.tail = node;
}
Queue.prototype.remove = function() {
  const node = this.head;
  this.head = node?.next ?? null;
  if (this.head === null)
    this.tail = null;
  return node;
}
function Node(val, lvl) {
  this.val = val;
  this.next = null;
  this.lvl = lvl;
}
