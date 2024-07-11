/**
 * @param {string} s
 * @return {string}
 */

//Naive
var reverseParentheses = function(s) {
    s = '(' + s + ')';
    let i = 0;
    let final = helper(s, i, false);
    return final[0];

}

const helper = function(s, i, isRev2) {
    i++;

    let isRev = isRev2;
    let final = "";
    let partial = "";
    while (s[i] !== ')') {
        if (s[i] !== '(') {
            if (isRev) {
                partial = s[i] + partial;
            }
            else {
                partial = partial + s[i];
            }
        }
        else {
            res = helper(s, i, !isRev);
            if (isRev) {
                partial = res[0] + partial;
            }
            else {
                partial = partial + res[0];
            }
            i = res[1];
        }
        i++;

    }
    return [partial, i];
}
