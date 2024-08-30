/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function(n, edges, source, destination, target) {
    const negatives = []; //store indexes of negative edges in the path
    for ([v1,v2,w] of edges) {
    }
};

/*
Although I find this problem interesting, today I'm not in good shape so I will not even give this a try
and I'll be moving on to other more urgent things.
I still took some time thinking about a strategy.
I think this requires a K-shortest Dijkstras algorithm (maybe Eppstein's algorithm, from what I explored).
But we don't know K, so we should be able to iteratively get the next shortest paths with sum <= target.

We build the graph from the edges, replacing -1 weights with 0, so we give them priority.
We find the shortest path between source and destination.
If its sum is > target, we return [] (the task is impossible)
If its sum is == target
  If the path doesn't include 0-weighted edges, return that path.
  Else return [] 
If its sum is < target
  If the path doesn't include 0-weighted edges, look for the next shortest path.
  If the path includes at least one 0-weighted edge,
    compute the diff = target - sum
    If diff < #0-weighted edges in that path, look for the next shortest path 
    If diff >= #0-weighted edges
      distribute that diff across the 0-weighted edges,
      and return that path.

I'm confident I'm missing some cases but today is not the day.
I'm going to read the Editorial, either later today or tomorrow after a good night's sleep.

*/
