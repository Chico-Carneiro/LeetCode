/**
 * @param {string} s
 * @return {boolean}
 */
var isCircularSentence = function (s) {
    if (s[0] !== s[s.length - 1]) return false;

    const arr = s.split(' ');
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] !== arr[i - 1][arr[i - 1].length - 1]) return false;
    }

    return true;
};
