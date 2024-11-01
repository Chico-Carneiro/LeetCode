/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    if (s.length < 3) return s;

    const ans = [s[0]];
    let c = 1;
    let j = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ans[j]) {
            if (c < 2) {
                ans.push(s[i]);
                j++;
                c++;
            }
        }
        else {
            ans.push(s[i]);
            j++;
            c = 1;
        }
    }
    return ans.join('');
};
