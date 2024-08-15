/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++;
        }
        else if (bills[i] === 10) {
            if (five === 0) return false;
            five--;
            ten++;
        }
        else {
            if (ten === 0) {
                if (five < 3) return false;
                five -= 3;
            }
            else {
                if (five === 0) return false;
                ten--;
                five--;
            }
        }
    }
    return true;
};
