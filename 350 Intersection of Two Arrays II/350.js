/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    const res = [];
    nums1.forEach(x=> map.set(x, (map.get(x) || 0) + 1));
    
    nums2.forEach(x=> {
        let value = map.get(x);
        if(value) {
            res.push(x);
            map.set(x, value - 1);
        }
    });
    return res;
};
