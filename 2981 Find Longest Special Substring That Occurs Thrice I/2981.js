/**
 * @param {string} s
 * @return {number}
 */
const map = Array(26);
var maximumLength = function (s) {
    for (let i = 0; i < map.length; i++) {
        map[i] = Array(51).fill(0);
    }

    let max = -1;
    let count = 1;
    let prev = s[0];

    for (let i = 1; i <= s.length; i++) {
        //console.log(s[i]);
        if (s[i] === prev) {
            //console.log("equal")
            count++;
        }
        else {
            //console.log("different")
            if (count <= max) {
                prev = s[i];
                count = 1;
                continue;
            }
            //console.log({count, max})

            const id = prev.charCodeAt(0) - 97;
            //console.log({prev, id})
            const lim = Math.min(count, 3);
            //console.log({count, lim})
            for (let j = 0; j < lim; j++) {
                const k = count - j;
                //console.log({k})
                map[id][k] += j + 1;
                if (map[id][k] >= 3 && k > max) {
                    //console.log("update max", {k, max})
                    max = k;
                }
            }

            prev = s[i];
            count = 1;
        }
    }
    return max;
};
