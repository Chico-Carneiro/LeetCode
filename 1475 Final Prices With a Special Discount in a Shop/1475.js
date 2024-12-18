/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    const len = prices.length;
    const ans = Array(len);
    const stack = [[prices.at(-1), len - 1]];
    ans[len - 1] = prices.at(-1);

    for (let i = len - 2; i >= 0; i--) {
        while (stack.length > 0 && prices[i] < stack.at(-1)[0]) {
            stack.pop();
        }
        if (stack.length === 0) {
            ans[i] = prices[i];
            stack.push([prices[i], i]);
        }
        else if (prices[i] === stack.at(-1)[0]) {
            ans[i] = 0;
            stack[stack.length - 1][1] = i;
        }
        else if (prices[i] > stack.at(-1)[0]) {
            ans[i] = prices[i] - stack.at(-1)[0];
            stack.push([prices[i], i]);
        }
    }

    return ans;
};
