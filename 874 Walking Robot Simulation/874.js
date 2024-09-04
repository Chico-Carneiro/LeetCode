/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    let direction = 0; // 0 N, 1 E, 2 S, 3 W
    let pos = [0, 0];
    let max = 0;

    const xMap = new Map();
    const yMap = new Map();
    //if (commands > ?? && || obstacles > ??) {
    for (let [x, y] of obstacles) {
        if (!xMap.has(x)) {
            xMap.set(x, new Set([y]));
        }
        else {
            xMap.get(x).add(y);
        }
        if (!yMap.has(y)) {
            yMap.set(y, new Set([x]));
        }
        else {
            yMap.get(y).add(x);
        }
    }

    function hasObstacle(position, direction, command, xMap, yMap) {
        if (direction === 0) {
            const ysSet = xMap.get(position[0]);
            if (!ysSet) return command;
            for (let i = 1; i <= command; i++) {
                if (ysSet.has(position[1]+i)) return i - 1;
            }
        }
        else if (direction === 1) {
            const xsSet = yMap.get(position[1]);
            if (!xsSet) return command;
            for (let i = 1; i <= command; i++) {
                if (xsSet.has(position[0]+i)) return i - 1;
            }
        }
        else if (direction === 2) {
            const ysSet = xMap.get(position[0]);
            if (!ysSet) return command;
            for (let i = 1; i <= command; i++) {
                if (ysSet.has(position[1]-i)) return i - 1;
            }
        }
        else if (direction === 3) {
            const xsSet = yMap.get(position[1]);
            if (!xsSet) return command;
            for (let i = 1; i <= command; i++) {
                if (xsSet.has(position[0]-i)) return i - 1;
            }
        }
        return command;
    }

    for (let com of commands) {
        if (com === -1) direction = (direction + 1) % 4;
        else if (com === -2) direction = (direction + 3) % 4;
        else {
            const step = hasObstacle(pos, direction, com, xMap, yMap);
            if (step > 0) {
                if (direction === 0) pos[1] += step;
                else if (direction === 1) pos[0] += step;
                else if (direction === 2) pos[1] -= step;
                else if (direction === 3) pos[0] -= step;
            }
            max = Math.max(max, pos[0] * pos[0] + pos[1] * pos[1]);
        }
    }
    return max;
};
