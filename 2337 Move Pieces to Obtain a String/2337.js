/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
    let c = 0;
    for (let i = 0; i < start.length; i++) {
        if (start[i] === '_') {
            continue;
        }
        if (start[i] === 'L') {
            while (target[c] === '_') {
                c++;
            }
            if (c === target.length) return false;
            if (target[c] === 'R') return false;
            if (c > i) return false;
        }
        else {
            while (target[c] === '_') {
                c++;
            }
            if (c === target.length) return false;
            if (target[c] === 'L') return false;
            if (c < i) return false;
        }
        c++;
    }
    for (let i = c; i < target.length; i++) {
        if (target[i] !== '_') return false;
    }
    return true;
};

var canChange2 = function (start, target) {
    //brilliant!
    let r = 0, l = 0;

    for (let i = 0; i < start.length; i++) {
        if (start[i] == 'R') r++;
        if (target[i] == 'L') l--;
        if (r != 0 && l != 0) return false;
        if (target[i] == 'R') {
            r--;
            if (r < 0) return false;
        }
        if (start[i] == 'L') {
            l++;
            if (l > 0) return false;
        }
    }

    return r == 0 && l == 0;
};
