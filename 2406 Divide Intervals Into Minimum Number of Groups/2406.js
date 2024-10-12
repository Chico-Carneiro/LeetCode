/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
    const leftArr = [];
    const rightArr = [];
    for (let i = 0; i < intervals.length; i++) {
        leftArr.push(intervals[i][0]);
        rightArr.push(intervals[i][1]);
    }

    leftArr.sort((a, b) => a - b);
    rightArr.sort((a, b) => a - b);

    let maxCount = 0;
    let count = 0;
    let left = 0;
    let right = 0;

    while (left < intervals.length) {

        while (rightArr[right] < leftArr[left]) {
            count--;
            right++;
        }
        count++;
        maxCount = Math.max(maxCount, count)
        left++;
    }

    return maxCount;
};
