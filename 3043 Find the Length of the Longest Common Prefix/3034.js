/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    const t1 = buildTrie(arr1);
    const t2 = buildTrie(arr2);

    let max = 0;

    for (let word1 of arr1) {
        max = Math.max(max, findDepth(word1, t2));
    }

    for (let word2 of arr2) {
        max = Math.max(max, findDepth(word2, t1));
    }

    return max;

};

function buildTrie(arr) {
    const trie = new Nodi();
    for (let [index, num] of arr.entries()) {
        const sNum = num.toString();
        arr[index] = sNum;
        let curr = trie;
        for (let i = 0; i < sNum.length; i++) {
            if (curr.alpha[sNum[i]] === null) {
                curr.alpha[sNum[i]] = new Nodi();
            }
            curr = curr.alpha[sNum[i]];
        }
    }
    return trie;
}

function Nodi() {
    this.alpha = new Array(10).fill(null);
}

function findDepth(word, trie) {
    let count = 0;
    let curr = trie;
    for (let i = 0; i < word.length && curr !== undefined; i++) {
        if (curr.alpha[word[i]] === null) {
            return count;
        };
        count++;
        curr = curr.alpha[word[i]];
    }
    return count;
}
