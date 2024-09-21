/**
 * @param {number} n
 * @return {number[]}
 */
/*
This code doesn't work as intended.
*/
var lexicalOrder = function(n) {
    let res = [[],[],[],[],[],[],[],[],[],[]];

    let div = 1;
    let mod = 10;
    for (let i = 1; i <= n; i++) {
        if (i%mod === 0) {
            div = mod;
            mod*=10;
        }
        res[Math.floor(i/div)].push(i);
    }
    res = res.flat()
    return res;
};
