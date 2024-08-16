/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
    let largest = Number.NEGATIVE_INFINITY;
    let largest2 = Number.NEGATIVE_INFINITY;
    let smallest = Number.POSITIVE_INFINITY;
    let smallest2 = Number.POSITIVE_INFINITY;
    let li = null;
    let li2 = null;
    let si = null;
    let si2 = null;

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i][0] < smallest) {
            smallest2 = smallest; si2 = si;
            smallest = arrays[i][0]; si = i;
        }
        else if (arrays[i][0] < smallest2) { smallest2 = arrays[i][0]; si2 = i; }
        if (arrays[i][arrays[i].length - 1] > largest) {
            largest2 = largest; li2 = li;
            largest = arrays[i][arrays[i].length - 1]; li = i;
        }
        else if (arrays[i][arrays[i].length - 1] > largest2) { largest2 = arrays[i][arrays[i].length - 1]; li2 = i; }
    }
    if (si !== li) return Math.abs(largest - smallest);
    return Math.max(Math.abs(largest2 - smallest), Math.abs(largest - smallest2));
};
