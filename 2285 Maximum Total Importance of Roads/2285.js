/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

/** */
var maximumImportance = function(n, roads) {
    let maxImportance = 0;
    let cityCounter = []; // [[city, count]]
    for (let i = 0; i < roads.length; i++) {
        let first = roads[i][0];
        let second = roads[i][1];
        cityCounter[first] = cityCounter[first] || [];
        cityCounter[first] = [first, Math.max(1, cityCounter[first][1] + 1 || 0)];
        cityCounter[second] = cityCounter[second] || [];
        cityCounter[second] = [second, Math.max(1, cityCounter[second][1] + 1 || 0)];

    }

    cityCounter.sort((a,b) => b[1] - a[1]);
    let i = 0;
    cityCounter.forEach( a => {
        maxImportance+= (n-i) * cityCounter[i][1];
        i++;
    })


    return maxImportance;

};
