/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
    let ans = 0;
    let countZeroes = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") countZeroes++;
    }
    let left = countZeroes - 1;
    while (left >= 0) {
        if (s[left] === "0") left--;
        else {
            while (s[countZeroes] === "1") {
                countZeroes++;
            }
            if (countZeroes < s.length) {
                ans += countZeroes - left;
                left--;
                countZeroes++;
            }
        }
    }
    return ans;
};
