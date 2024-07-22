/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return heights.map((h,i) => [h, names[i]]).sort((a,b) => b[0] - a[0]).map(x=>x[1]);
};
