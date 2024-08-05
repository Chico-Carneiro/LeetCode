/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const distinct = new Set();
    const multiple = new Set();
    for (let i = 0; i<arr.length; i++) {
        let str = arr[i];
        if(multiple.has(str))
            continue;
        if(distinct.has(str)) {
            multiple.add(str);
            distinct.delete(str);
        }
        else
            distinct.add(str);
    }
    if (distinct.size < k)
        return "";
    let counter = 0;
    for (let val of distinct.values()) {
        counter++;
        if (counter === k)
            return val;
    }
};
