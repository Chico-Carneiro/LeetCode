/**
 * @param {number[]} nums
 * @return {string}
 */
// wrong answer
var largestNumber = function (nums) {
    return nums.sort((a, b) => {
        let A = String(a);
        let B = String(b);
        console.log(A, B)
        if (A === B) return 0;
        if (A > B) {
            if (A.length > B.length) {
                console.log("yo")
                let i = 0;
                for (; i < B.length; i++) {
                    if (A[i] > B[i]) {
                        return 1;
                    }
                }
                if (A[i] <= B[0]) {
                    console.log("yoyo")
                    if (A[i] > A[i - 1]) {
                        return 1
                    };
                    console.log("yoyoyo")

                    return 1;
                }
                else {
                    return 1;
                }
            }
            return -1;
        }
        if (B > A) {
            if (B.length > A.length) {
                let i = 0;
                for (; i < A.length; i++) {
                    if (B[i] > A[i]) {
                        return -1;
                    }
                }
                if (B[i] <= A[0]) {
                    if (B[i] > B[i - 1]) {
                        return -1
                    };
                    return 1;
                }
                else {
                    return -1;
                }
            }
            return 1;
        }
    }).join('');
};
