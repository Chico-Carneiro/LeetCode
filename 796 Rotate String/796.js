/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false;
    s = s + s;
    return s.indexOf(goal) !== -1;
}
var rotateString1 = function (s, goal) {
    s = "bbbacddceeb";
    goal = "ceebbbbacdd";
    if (s.length !== goal.length) return false;
    if (s.length === 1) return s === goal;
    let prefix = Array(s.length);
    let suffix = Array(s.length);
    prefix[0] = 0;
    let ptr = 0;
    for (let i = 1; i < prefix.length; i++) {
        while (ptr > 0 && s[i] !== s[ptr]) {
            ptr = prefix[ptr];
        }

        prefix[i] = ptr;
        if (s[i] === s[ptr]) {
            suffix[ptr] = i;
            ptr++;
        }
    }
    console.log({ prefix });

    console.log({ suffix });

    let gap = 0;
    for (; gap < goal.length; gap++) {
        if (goal[gap] === s[0]) {
            break;
        }
    }
    console.log({ gap })
    if (gap === goal.length) return false;

    let start = 0;
    //let end = s.length;
    let jump = 0;
    //let trying = 0;
    for (let i = 1; i < goal.length; i++) {
        let cur = (start + i) % s.length;
        const gt = (gap + i) % s.length;
        console.log({ cur }, { gt })
        while (s[cur] !== goal[gt]) {
            console.log("yo", { cur }, { gt })
            const trying = (cur - 1) % s.length;
            const newIdx = suffix[trying];
            console.log("yoyo", { trying }, { newIdx })
            if (newIdx === undefined) {
                return false;
            }
            jump += newIdx - trying;
            cur = (cur + newIdx - trying) % s.length;
        }
        if (jump > 0) {
            start = (start + jump) % s.length;
            jump = 0;
        }
    }
    return true;

};
