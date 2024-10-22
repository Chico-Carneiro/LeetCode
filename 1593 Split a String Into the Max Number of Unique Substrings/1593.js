/**
 * @param {string} s
 * @return {number}
 */
 var maxUniqueSplit = function(s) {
    let max = [0];
    let set = new Set();
    back(s, 0, 1, set, max);
    return max[0];
};

function back(s, start, end, set, max) {
    if (start === s.length) {
        max[0] = Math.max(max, set.size);
        return;
    }
    if (max >= set.size + s.length - start) {
        return;
    }
    for (let i = end; i <= s.length; i++) {
        const sub = s.slice(start, i);
        if (!set.has(sub)) {
            set.add(sub);
            back(s, i, i+1, set, max);
            set.delete(sub);
        }
    }
}
/*
var maxUniqueSplit = function(s) {
    //s = "wwwzfvedwfvhsww"
    if (s.length === 1) return 1;

    const set = new Set();
    let max = 1;
    split(s, 0, 1, set, max);
    return set.size;
};

function split(string, start, end, set, max) {
    const slice = string.slice(start, end);
    console.log(slice);
    console.log("max",max);
    if (set.has(slice)) {
        if (end < string.length) {
            const res = split(string, start, end+1, set, max);
            if (res === -1) {
                return -1;
            }
        }
        else {
            return -1;
        }
    }
    else {
        if (end === string.length) {
            set.add(slice);
            return max+1;
        }
        else {
            set.add(slice);
            const res = split(string, end, end+1, set, max+1);
            if (res === -1) {
                set.delete(slice);
                split(string, start-1, end+1, set, max)
            }
        }
    }
}
*/
