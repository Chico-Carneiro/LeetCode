/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k === 0) return Array(code.length).fill(0);
    if (code.length === 1) return code;

    let res = [];
    let sum = 0;

    if (k > 0) {
        let i = 1;
        for (; i <= k; i++) {
            sum += code[i];
        }
        res.push(sum);
        for (let j = 1; j < code.length; j++, i++) {
            sum += code[i % code.length] - code[j];
            res.push(sum);
        }

    }
    else {
        let i = code.length - 1;
        for (; i >= code.length + k; i--) {
            sum += code[i];
        }
        res.push(sum);

        i++;
        for (let j = 0; j < code.length - 1; j++, i++) {
            sum += code[j] - code[i % code.length];
            res.push(sum);
        }
    }


    return res;

};
