/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let countOpen = 0;
    let countClose = 0;
    for (let c of s) {
        if (c === ')') {
            if (countOpen === 0) {
                countClose++;
            }
            else {
                countOpen--;
            }
        }
        else {
            countOpen++;
        }
    }
    return countOpen + countClose;
};
