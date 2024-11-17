/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
    //nums  = [1,2,5,5,10,1,1,1];
    //nums  = [1,2,5,1,1,1,10,5,1,1];
    //k = 12;
    if (nums.length === 1) return (nums[0] < k) ? -1 : 1;
    let min = Infinity;
    let a = 0;
    let sum = 0;

    /*
    for (let i = 1; i<nums.length; i++) {
        nums[i] = nums[i] + nums[i-1];
    }
    console.log(nums);
    */

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= k) return 1;

        sum += nums[i];
        const left = a;
        /*
        if (sum >= k) {
            let right = i - 1;
            let backSum = nums[i];
            //while (right > a) 
        }
        */
        while (sum >= k) {
            console.log(i, a, sum)
            sum -= nums[a];
            a++;

        }
        if (left !== a) {
            min = Math.min(min, i - a + 1);
        }
    }
    return (min === Infinity) ? -1 : min + 1;

};
