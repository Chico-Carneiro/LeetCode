/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
    const map = Array(n).fill(0);

    for (let edge of edges) {
        map[edge[1]] = 1;
    }

    let count = 0;
    let champion = -1;
    for (let i = 0; i < n; i++) {
        if (map[i] == 0) {
            count++;
            champion = i;
        }
    }
    return (count > 1) ? -1 : champion;

};
