/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    if (Math.floor(((time-1)/(n-1))%2))
        return n-1-(time-1)%(n-1);
    return (time-1)%(n-1) + 2;
};
