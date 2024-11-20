/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
    if (k === 0) return 0;

    let counter = k * 3;
    if (s.length < counter) return -1;

    let right = s.length;
    let left = 0;
    const map = [0, 0, 0];

    //first window - take everything from the left;
    while (counter > 0 && left < right) {
        const char = s[left].charCodeAt(0) - 97;
        if (map[char] < k) {
            counter--;
        }
        map[char] += 1;
        left++;
    }

    if (counter > 0) return -1;

    let min = left;
    left--;
    while (left >= 0) {
        const char = s[left].charCodeAt(0) - 97;
        left--;
        map[char] -= 1;
        while (map[char] < k) {
            right--;
            const charRight = s[right].charCodeAt(0) - 97;
            map[charRight] += 1;
        }
        min = Math.min(min, 1 + left - right + s.length);
    }
    return min;


}
var takeCharacters1 = function (s, k) {
    if (k === 0) return 0;

    let counter = k * 3;
    if (s.length < counter) return -1;
    /*
    const map = {
        'a': [0, 0, 0], // [count, maxLeft, minRight]
        'b': [0, 0, 0],
        'c': [0, 0, 0],
    }
    */
    const map = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]


    const limit = (s.length) >> 1;
    for (let i = 0, j = s.length - 1, ipp = 1; i < limit; i++, j--, ipp++) {
        const char = s[i].charCodeAt(0) - 97;
        if (map[char][0] < k) {
            map[char][0] += 1;
            map[char][1] = ipp;
            counter--;
        }
        const char2 = s[j].charCodeAt(0) - 97;
        if (map[char2][0] < k) {
            map[char2][0] += 1;
            map[char2][2] = ipp;
            counter--;
        }
    }

    if (s.length % 2 === 1) {
        // check the middle element
        const char = s[limit].charCodeAt(0) - 97;
        if (map[char][0] < k) {
            map[char][0] += 1;
            map[char][1] = limit + 1;
            counter--;
        }
    }

    // final check
    if (counter < 1) {
        return Math.max(
            map[0][1],
            map[1][1],
            map[2][1]
        ) + Math.max(
            map[0][2],
            map[1][2],
            map[2][2],
        );
    }

    return -1;
};
