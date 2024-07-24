/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
// map algarisms to their mapping (keep reference)
// join mapped algarisms into numbers
// sort mapped numbers, preserving order
// rearrange nums accordingly

var sortJumbled = function(mapping, nums) {
    return nums.map((n,i) => [ n.toString().split('').reduce((acc,cur,idx,arr) => acc+mapping[cur]*10**(arr.length-1-idx),0), n ]).sort((a,b)=>a[0]-b[0]).map(a=>a[1]);
};
