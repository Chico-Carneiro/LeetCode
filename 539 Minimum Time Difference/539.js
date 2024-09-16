/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    function minutes(time) {
        return parseInt(time[0] + time[1]) * 60 + parseInt(time[3] + time[4])
    }

    let min = Infinity;
    timePoints.sort();
    timePoints[0] = minutes(timePoints[0]);
    for (let i = 1; i < timePoints.length; i++) {
        timePoints[i] = minutes(timePoints[i]);
        if (timePoints[i] - timePoints[i - 1] < min) {
            min = timePoints[i] - timePoints[i - 1];
        }
        if (min === 0) return 0;
    }
    if (timePoints[0] + 24 * 60 - timePoints[timePoints.length - 1] < min) {
        return timePoints[0] + 24 * 60 - timePoints[timePoints.length - 1];
    }

    return min;

};
