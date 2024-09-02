/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum = 0;
    for (let i = 0; i< chalk.length; i++) {
        sum+=chalk[i];
    }
    sum = k % sum;

    let i = 0;
    for ( ; sum >= 0; i++) {
        sum -= chalk[i];
    }
    return i - 1;
};
