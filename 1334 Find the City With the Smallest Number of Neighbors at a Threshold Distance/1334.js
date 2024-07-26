/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    if (edges.length < n-1) {
        let nodes = new Set();
        for (let i = 0; i<edges.length; i++) {
            nodes.add(edges[i][0]);
            nodes.add(edges[i][1]);
        }
        for (let i = n-1; i>=0; i--) {
            if(!nodes.has(i))
                return i;
        }
    }

    let nodes = new Map();
    let counter = new Set();
    edges.forEach(e => {
        if(e[2] <= distanceThreshold) {
            if (!nodes.has(e[0]))
                nodes.set(e[0], new Map().set(e[0],0))
            if (!nodes.has(e[1]))
                nodes.set(e[1], new Map().set(e[1],0));
            
            nodes.get(e[0]).set(e[1],e[2]);
            nodes.get(e[1]).set(e[0],e[2]);
        }
        counter.add(e[0]);
        counter.add(e[1]);
    });
    if (counter.size < n || nodes.size < n) {
        for (let i = n-1; i>=0; i--) {
            if(!nodes.has(i))
                return i;
        }
    }
    nodes.forEach((v,k) => {
        nodes.forEach((v1,i) => {
            nodes.forEach((v2,j) => {
                let sum = nodes.get(i).get(k) + nodes.get(k).get(j);
                if(sum && sum <= distanceThreshold && (nodes.get(i).get(j) !==undefined ? nodes.get(i).get(j) : Infinity) > sum)
                    {

                        nodes.get(i).set(j, sum)
                    }
            })
        })
    })

    let minKey = Infinity;
    let minValue = Infinity;
    nodes.forEach((m,k)=>{
        if (m.size < minValue) {
            minValue = m.size;
            minKey = k;
        }
        else if(m.size === minValue) {
            if (k > minKey)
                minKey = k;
        }
    });
    return minKey;
};
