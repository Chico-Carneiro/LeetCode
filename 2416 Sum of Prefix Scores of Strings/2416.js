/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
    let trie = new Map();
    let res = Array(words.length);


    for (let word of words) {
        let curr = trie;

        for (let c of word) {
            if (!curr.has(c)) {
                curr.set(c, [new Map(), 0]);
            }
            let [map, count] = curr.get(c);
            curr.set(c, [map, count + 1])
            curr = map;
        }
    }

    for (let i = 0; i < words.length; i++) {
        let curr = trie;
        let cumulativeCount = 0;
        for (let c of words[i]) {
            let [map, count] = curr.get(c);
            cumulativeCount += count;
            curr = map;
        }

        res[i] = cumulativeCount;
    }

    return res;
};
