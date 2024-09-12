/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let count = 0;
    const set = new Set();

    for (let word of words) {
        let flag = true;
        for (let char of word) {
            if (allowed.indexOf(char) < 0) {
                flag = false;
                break;
            };
        }
        if (flag) count++;
    }
    return count;
};
