/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    const n1 = num.toString().split('')
    const n2 = n1.map((v, i) => [v, i]);
    n2.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < n1.length; i++) {
        if (n1[i] !== n2[i][0]) {
            let swapWith = n2[i][1];
            for (let j = i + 1; j < n1.length; j++) {
                if (n2[j][0] === n2[i][0]) {
                    swapWith = n2[j][1];
                }
                else break;
            }
            const aux = n1[i];
            n1[i] = n1[swapWith];
            n1[swapWith] = aux;
            return 1 * n1.join('');
        }

    }
    return num;
};
