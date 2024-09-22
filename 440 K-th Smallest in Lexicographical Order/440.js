/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
//this is not working
var findKthNumber = function (n, k) {
    if (k > 10000000) {
        /*
        const map = new Map(
            [
                [5, 111111],
                [6, 1111111],
                [7, 11111111],
                [8, 111111111],
                [9, 1111111111],

            ]
        );
        */
        const map = [0, 0, 0, 0, 0, 111111, 1111111, 11111111, 111111111, 1111111111];
        let N = n;
        let count = 0;
        while (N > 9) {
            N = Math.floor(N / 10);
            count++;
        }

        //const value = map.get(count);
        const value = map[count];

        let K = k;
        let anotherCount = 0;
        while (K > value) {
            K -= value;
            anotherCount++;
        }

        let cur = anotherCount + 1;
        for (let i = anotherCount * value + 1; i < k; i++) {
            if (cur * 10 <= n) {
                cur *= 10;
            }
            else {
                while (cur >= n || cur % 10 === 9) {
                    cur = Math.floor(cur / 10);
                }
                cur++;
            }
        }

        return cur;
    }




    let cur = 1;
    for (let i = 1; i < k; i++) {
        if (cur * 10 <= n) {
            cur *= 10;
        }
        else {
            while (cur >= n || cur % 10 === 9) {
                cur = Math.floor(cur / 10);
            }
            cur++;
        }
    }
    return cur;
};
