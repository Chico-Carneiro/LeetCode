/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function (root, queries) {
    //const map = new Map();
    //const map = [];
    const map = Array(10000);
    let maxDepth = parseTree(root, map);

    //const cache = new Map();
    const res = [];
    for (let q of queries) {
        /*if (cache.has(q)) {
            res.push(cache.get(q));
            continue;
        }*/
        let node = map[q];
        //let node = map.get(q);
        if (node[3] < maxDepth) {
            res.push(maxDepth);
            continue;
        }
        let newMaxDepth;
        if (node[1] === undefined) newMaxDepth = node[2] - 1;
        else newMaxDepth = map[node[1]][3];
        //else newMaxDepth = map.get(node[1])[3];
        node = map[node[0]];
        //node = map.get(node[0]);
        
        while (node[0] !== 0) {
            if (node[1] !== undefined) newMaxDepth = Math.max(newMaxDepth, map[node[1]][3]);
            //if (node[1] !== undefined) newMaxDepth = Math.max(newMaxDepth, map.get(node[1])[3]);
            node = map[node[0]];
            //node = map.get(node[0]);
        }
        
        res.push(newMaxDepth);
        //cache.set(q, newMaxDepth);
    }
    return res;
};

function parseTree(node, map, parent = 0, sibling = null, lvl = -1) {
    if (node === null) return lvl;
    lvl++;
    const depth = Math.max(
        parseTree(node.left, map, node.val, node.right, lvl),
        parseTree(node.right, map, node.val, node.left, lvl)
    );
    map[node.val] = [parent, sibling?.val, lvl, depth];
    //map.set(node.val, [parent, sibling?.val, lvl, depth]);
    return depth;

}
