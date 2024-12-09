/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
    //nums = [0,1,0,1,1,0,1,1,1,0,1];
    const lenq = queries.length;
    const disc = [-1];
    let prev = nums[0] % 2;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 !== prev) {
            prev = (prev + 1) % 2;
        }
        else {
            disc.push(i);
        }
    }


    const res = Array(lenq);

    if (disc.length < 2) {
        return res.fill(true);
    }

    const discLast = disc.length - 1;

    for (let i = 0; i < lenq; i++) {

        if (queries[i][0] < disc[binSearch(queries[i][1], disc, 0, discLast)]) {
            res[i] = false;
        }
        else {
            res[i] = true;
        }
    }

    return res;

};

function binSearch(val, arr, a, b) {
    while (a < b) {
        const mid = 1 + (a + b) >> 1;
        if (arr[mid] > val) {
            b = mid - 1;
        }
        else {
            a = mid;
        }

    }
    return a;
}
