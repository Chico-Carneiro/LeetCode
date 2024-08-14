/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const res = [];
    const path = [];
    candidates.sort((a, b) => a - b);
    back(candidates, target, 0, path, res);
    return res;
};

function back(candidates, target, totalIdx, path, res) {
    if (target < 0) return;
    if (target === 0) {
        res.push(path);
        return;
    }
    for (let i = totalIdx; i < candidates.length; i++) {
        if ( i > totalIdx && candidates[i] === candidates[i-1])
            continue;
        if (candidates[i] > target) break;
        path.push(candidates[i]);
        back(
            candidates,
            target - candidates[i],
            i+1,
            [...path],
            res
        );
        path.pop();
    }
}
