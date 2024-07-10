/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let dist = 0;
    for (let i = 0; i<logs.length; i++) {
        if (logs[i] === "./")
            continue;
        else if (logs[i] === "../")
            dist = Math.max(0, dist-1);
        else {
            dist++;
        }
    }
    return dist;
};
