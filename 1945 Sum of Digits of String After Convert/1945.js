/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    const firstTransformation = {
        "a":1,
        "b":2,
        "c":3,
        "d":4,
        "e":5,
        "f":6,
        "g":7,
        "h":8,
        "i":9,
        "j":1,
        "k":2,
        "l":3,
        "m":4,
        "n":5,
        "o":6,
        "p":7,
        "q":8,
        "r":9,
        "s":10,
        "t":2,
        "u":3,
        "v":4,
        "w":5,
        "x":6,
        "y":7,
        "z":8,
    }
    let sum = 0;
    for (let i = 0; i<s.length; i++) {
        sum += firstTransformation[s[i]];
    }
    for (let i = 2; i<=k; i++) {
        if (sum < 10) return sum;
        sum = sum.toString().split("").reduce((acc,c) => acc += parseInt(c), 0);
    }
    return sum;
};
