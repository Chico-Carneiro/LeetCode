/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */

var helper = function(edge, dict, accum) {
    if(dict[edge] !== undefined) {
        if (dict[edge].visited)
            return dict[edge].anc;
        dict[edge].anc.forEach(e=>{
            accum.add(e);
            setUnion(accum, helper(e, dict, new Set()));
            
            
        });
        dict[edge].anc = accum;
        dict[edge].visited = true;
    }
        
    return accum;

}

var setUnion = function(set, ...iterables) {
    for (const iterable of iterables) {
        for (const item of iterable) {
            set.add(item);
        }
    }
}

var getAncestors = function(n, edges) {
    let edgeList = [];

    let ancestors = {};

    for ( let i=0; i<edges.length; i++) {
        if (ancestors[edges[i][1]] === undefined)
            ancestors[edges[i][1]] = {visited: false, anc: new Set()};
        ancestors[edges[i][1]].anc.add(edges[i][0]);
    }
    //return ancestors;
    for (let i=0; i<n; i++) {
        let arr = [...(helper(i, ancestors, new Set()))].sort((a,b)=> a-b);
        edgeList[i] = arr;
    }

    return edgeList;

};
