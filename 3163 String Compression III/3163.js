/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    //if (word.length === 1) return "1" + word;

    let comp = "";
    let cur = 0;
    for (let i = 1; i <= word.length; i++) {
        if (word[i] !== word[cur]) {
            let count = i - cur;
            while (count > 9) {
                comp += `9${word[cur]}`;
                count -= 9;
            }
            comp += `${count}${word[cur]}`;
            cur = i;
        }
    }
    return comp;
};

var compressedString1 = function (word) {
    if (word.length === 1) return "1" + word;

    let comp = [];
    let cur = 0;
    for (let i = 1; i <= word.length; i++) {
        if (word[i] !== word[cur]) {
            let count = i - cur;
            while (count > 9) {
                comp.push(9, word[cur])
                count -= 9;
            }
            comp.push(count, word[cur]);
            cur = i;
        }
    }
    return comp.join("")
};
