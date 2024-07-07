/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drunk = numBottles;
    let empty = numBottles;
    let rest;
    while(empty >= numExchange) {
        rest = empty % numExchange;
        empty = (empty - rest) / numExchange;
        drunk += empty;
        empty += rest;
    }

    return drunk;
};
