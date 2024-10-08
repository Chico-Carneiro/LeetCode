/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {

    /*
    let swaps = 0;
    s = s.split("");
    let l = 0, r = s.length-1;
    while (l < r) {
        console.log(s.join(""))
        console.log("012345678901234567890")
        if (s[l] === '[' || (s[l] === ']' && s[l-1] === '[')) {
            l++;
            continue;
        }
        if (s[r] === ']' || (s[r] === '[' && s[r+1] === ']')) {
            r--;
            continue;
        }
        if (s[l] === ']' && s[r] === '[') {
            swaps++;
            console.log("swap", l, r);
            [s[l], s[r]] = [s[r], s[l]];
            l++;
            r--;
            continue;
        }
    }
    console.log(s.join(""))
        console.log("012345678901234567890")
*/
    s = s.split("");
    let open = 0;
    let swaps = 0;
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l] === '[') {
            open--;
        }
        else if (s[l] === ']') {
            if (open === 0) {
                while (s[r] === ']') {
                    r--;
                }
                [s[l], s[r]] = [s[r], s[l]];
                swaps++;
                open--;
            }
            else {
                open++;
            }
        }

        l++;
    }
    return swaps;
};
