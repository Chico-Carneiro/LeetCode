/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    if (positions.length < 2) return healths;

    let p = [];
    for (let i = 0; i < positions.length; i++) {
        p[i] = [i, positions[i]];
    }
    p.sort((a,b) => a[1]-b[1]);

    let prevR = [];
    for (let i = 0; i < p.length; i++) {
        if (directions[p[i][0]] === 'L') {
            if (prevR.length === 0) {
                continue;
            }
            while (prevR.length > 0 && healths[p[i][0]] > 0) {
                let dif = healths[p[i][0]] - healths[prevR[prevR.length-1]];
                if (dif === 0) {
                    healths[p[i][0]] = 0;
                    healths[prevR[prevR.length-1]] = 0;
                    prevR.pop();
                }
                else if (dif > 0) {
                    healths[p[i][0]]--;
                    healths[prevR[prevR.length-1]] = 0;
                    prevR.pop();
                }
                else {
                    healths[prevR[prevR.length-1]]--;
                    healths[p[i][0]] = 0;
                }
            }
        }
        else {
            prevR.push(p[i][0]);
        }
    }
    return healths.filter(a => a>0);
};
