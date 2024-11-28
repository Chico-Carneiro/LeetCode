/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
    const q = queries.length;
    const res = Array(q);
    const last = n - 1;
    const track = Array(last);
    for (let i = 0; i < last; i++) {
        const arr = Array(n).fill(false);
        arr[i + 1] = true;
        track[i] = arr;
    }
    //console.log(track)
    const path = Array(n);
    for (let i = 0; i < n; i++) {
        path[i] = last - i;
    }

    let cur = 0;
    while (path[0] > 1 && cur < q) {
        //console.log("NEW Q ==================")
        const [from, to] = queries[cur];
        track[from][to] = true;
        let dist = from - to - 1;
        let fromy = from;
        //while (from >= 0 && path[from] > dist) {
        while (fromy >= 0) {
            //console.log("NEW ITER", {fromy})
            if (track[fromy][from]) {
                //console.log("TRACK has it", {fromy, to}, track[fromy][from])
                dist = path[from] + 1;
            }

            //console.log({fromy,to,dist})

            if (path[fromy] > dist) {
                //console.log("update");
                path[fromy] = dist;
            }
            else {
                //console.log("NOT update");
            }
            //console.log({path});
            fromy--;
            dist++;
        }
        res[cur] = path[0];
        cur++;
    }

    for (; cur < q; cur++) {
        res[cur] = 1;
    }
    //console.log(track)

    return res;


};
