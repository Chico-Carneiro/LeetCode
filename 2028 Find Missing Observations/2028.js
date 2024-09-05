/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    let sum = 0;
    for (let roll of rolls) {
        sum += roll;
    }
    const sum2 = mean * (rolls.length + n) - sum;

    if (sum2 < n || sum2 > 6 * n) return [];
    const res = Array(n);
    const avg2 = sum2 / n;
    const down = Math.floor(avg2);
    if (avg2 === down) return res.fill(avg2);

    const rest = sum2 % n;

    res.fill(down + 1, 0, rest);
    return res.fill(down, rest, n);

};
