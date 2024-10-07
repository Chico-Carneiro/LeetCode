/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [];
    let count = 0;
    for (let char of s) {
        if (char !== 'B' && char !== 'D') stack.push(char);
        else {
            if (char === 'B') {
                if (stack[stack.length - 1] === 'A') {
                    stack.pop();
                    count++;
                }
                else {
                    stack.push(char);
                }
            }
            else {
                if (stack[stack.length - 1] === 'C') {
                    stack.pop();
                    count++;
                }
                else {
                    stack.push(char);
                }
            }
        }    
    }
    return s.length - count * 2;
};
