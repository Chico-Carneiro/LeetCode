/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXorV1 = function(nums, mB) {
    const res = Array(nums.length);

    //let xor = (1<<mB) - 1;
    let xor = 0;
    let i = nums.length-1;
    //for (let i = 0; i < nums.length; i++) {
    for (let num of nums) {
        xor ^= num;
        //let pow = 1;
        let k = 0;
        for (let bit = 0; bit < mB; bit++) {
            //if (! (xor & pow)) k += 1<<bit;
            const pow = 1<<bit;
            if (! (xor & pow)) k += pow;
            //pow <<= 1;
        }
        res[i] = k;
        i--;
    }
    return res;
};

// ##############################################

/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXorV2 = function (nums, mB) {
    const res = Array(nums.length);

    //let xor = (1<<mB) - 1;
    let xor = 0;
    let i = nums.length - 1;
    //for (let i = 0; i < nums.length; i++) {
    for (let num of nums) {
        xor ^= num;
        //let pow = 1;
        //let k = 0;
        res[i] = xor ^ ((1 << mB) - 1);
        /*
        for (let bit = 0; bit < mB; bit++) {
            //if (! (xor & pow)) k += 1<<bit;
            const pow = 1 << bit;
            if (!(xor & pow)) k += pow;
            //pow <<= 1;
        }
        */
        //res[i] = k;
        i--;
    }
    return res;
};
