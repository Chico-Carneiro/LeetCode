/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */

const acc = Array(26);

var repeatLimitedString = function (s, repeatLimit) {
    acc.fill(0);
    for (let c of s) {
        acc[c.charCodeAt(0) - 97]++;
    }

    for (let el of acc) {
        if (el === s.length) {
            if (s.length === repeatLimit) return s;
            return s.substring(0, repeatLimit);
        }
    }

    const res = [];
    const A = 97;

    let j = 24;
    for (let i = 25; i >= 0; i--) {
        while (acc[i] > 0) {
            if (acc[i] <= repeatLimit) {
                res.push(String.fromCharCode(i + A).repeat(acc[i]));
                acc[i] = 0;
            }
            else {
                res.push(String.fromCharCode(i + A).repeat(repeatLimit));
                acc[i] -= repeatLimit;
                while (acc[j] === 0 || j >= i) {
                    //console.log(j,String.fromCharCode(i+A))
                    j--;
                }
                if (j < 0) {
                    //console.log("early", {res})
                    return res.join('');
                }
                res.push(String.fromCharCode(j + A));
                acc[j]--;
            }
        }
    }
    //console.log("end", { res })
    return res.join('');
};
