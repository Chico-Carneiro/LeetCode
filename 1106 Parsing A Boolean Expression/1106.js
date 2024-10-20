/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
    if (expression.length === 1) return expression === "t" ? true : false;

    const stack = [];
    const opsStack = [];

    for (let char of expression) {
        switch (char) {
            case ',':
                break;
            case 't':
                stack.push(true);
                break;
            case 'f':
                stack.push(false);
                break;
            case '(':
                stack.push(char);
                break;
            case ')':
                const op = opsStack.pop();
                if (op === '!') {
                    const exp = stack.pop();
                    stack.pop();
                    stack.push(!exp);
                    break;
                }
                let ch = stack.pop();
                let exp;
                if (op === '|') {
                    exp = false;
                    while (ch !== '(') {
                        exp = exp | ch;
                        ch = stack.pop();
                    }
                }
                else {
                    exp = true;
                    while (ch !== '(') {
                        exp = exp & ch;
                        ch = stack.pop();
                    }
                }
                stack.push(exp);
                break;
            default:
                opsStack.push(char);
        }
    }

    return stack[0];

};
