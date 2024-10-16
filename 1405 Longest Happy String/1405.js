/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const freqs = [[a, 'a'], [b, 'b'], [c, 'c']];
    const string = [];
    freqs.sort((a, b) => b[0] - a[0]);

    while (freqs[1][0] !== 0) {
        console.log(freqs)
        if (freqs[0][0] > freqs[1][0] + 1) {
            string.push(freqs[0][1]);
            freqs[0][0]--;
        }
        string.push(freqs[0][1]);
        string.push(freqs[1][1]);
        freqs[0][0]--;
        freqs[1][0]--;

        freqs.sort((a, b) => b[0] - a[0]);

    }
    if (freqs[0][0] > 1) {
        string.push(freqs[0][1]);
        string.push(freqs[0][1]);
    }
    else if (freqs[0][0] === 1) {
        string.push(freqs[0][1]);
    }
    return string.join('');
};
