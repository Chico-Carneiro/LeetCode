/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    const res = []; // Array(s.length+spaces.length)

    let c1 = 0;
    for (let i = 0; i < spaces.length; i++) {
        const spidx = spaces[i];
        while (c1 < spidx) {
            res.push(s[c1]);
            c1++;
        }
        res.push(' ');
    }
    while (c1 < s.length) {
        res.push(s[c1]);
        c1++;
    }
    return res.join('');


};
