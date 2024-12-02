/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let word = 1;
    let c1 = 0, c2 = 0;
    while (c1 < sentence.length) {
        if (sentence[c1] == searchWord[c2]) {
            c1++;
            c2++;
            if (c2 == searchWord.length) return word;
            continue;
        }
        else if (sentence[c1] == ' ') {
            c2 = 0;
            c1++;
            word++;
        }
        else {
            c1++;
            while (c1 < sentence.length && sentence[c1] != ' ')
                c1++;
        }
    }
    return -1;
};
