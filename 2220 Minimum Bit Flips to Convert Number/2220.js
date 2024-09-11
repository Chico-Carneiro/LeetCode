/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    //return (start^goal).toString(2).split("").reduce((acc, cur) => +cur+acc, 0);
    // Above: better Time, worse Space
    // Below: worse Time, better Space
    //just because I didn't immediately thought about XOR and while still reading
    //the Discussion someone inadvertently mentioned it, I'm trying something else.
    start = start.toString(2);
    goal = goal.toString(2);
    let count = 0;
    if (start.length >= goal.length) {
        const dif = start.length - goal.length;
        for (let i = goal.length - 1; i >= 0; i--) {
            if (start[i + dif] !== goal[i]) count++;
        }
        for (let i = 0; i < dif; i++) {
            if (start[i] === '1') count++;
        }
    }
    else {
        const dif = goal.length - start.length;
        for (let i = start.length - 1; i >= 0; i--) {
            if (start[i] !== goal[i + dif]) count++;
        }
        for (let i = 0; i < dif; i++) {
            if (goal[i] === '1') count++;
        }
    }
    return count;
};
