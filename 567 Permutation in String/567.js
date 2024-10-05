/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const originalMap = new Map();
    for (let c of s1) {
        originalMap.set(c, 1 + (originalMap.get(c) || 0));
    }

    let size = s1.length;
    let map = new Map(originalMap);
    for (let i = 0; i <= s2.length - s1.length; i++) {
        if (size !== s1.length) {
            map = new Map(originalMap);
            size = s1.length;
        }
        const limit = i + s1.length;
        for (let j = i; j < limit; j++) {
            if (map.has(s2[j])) {
                const freq = map.get(s2[j]);
                if (freq > 0) {
                    map.set(s2[j], freq - 1);
                    size--;
                }
                else {
                    break;
                }
            }
            else {
                break;
            }
        }
        if (size === 0) return true;
    }

    return false;



};
