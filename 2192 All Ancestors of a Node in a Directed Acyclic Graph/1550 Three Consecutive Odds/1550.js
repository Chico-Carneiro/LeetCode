/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for (let i=2; i<arr.length; i+=3) {
        if (arr[i] % 2) {
            if (arr[i-1] % 2) {
                if (arr[i-2] % 2) return true;
                if (i+1 < arr.length && arr[i+1] % 2) return true;
                else { i++; continue; }
            }
            if (i+2 < arr.length && arr[i+1] % 2) {
                if (arr[i+2] % 2) return true;
                else {i+=2; continue;}
            }
            else { i++; continue;}
        }
    }
    return false;
};
