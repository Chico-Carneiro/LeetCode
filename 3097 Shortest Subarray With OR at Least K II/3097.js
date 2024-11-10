/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
    if (k === 0) return 1;
    if (nums.length === 1) return (nums[0] >= k) ? 1 : -1;
    const freq = Array(30).fill(0);
    let front = 0;
    let back = 0;
    let windowOr = 0;
    let min = Infinity;
    for (let num of nums) {
        if (num >= k) return 1;
        front++;
        addBits(num, freq);
        /*
        if (front - back >= min) {
            removeBits(nums[back], freq);
            back++;
            windowOr = freqToNumber(freq);
            //min = Math.min(min, front-back+1);

            continue;
        }
        */

        windowOr = windowOr | num;
        //console.log({windowOr})
        while (windowOr >= k) {
            //console.log("here")
            //console.log({front, back})
            min = Math.min(min, front - back);
            //console.log({min})
            removeBits(nums[back], freq);
            back++;
            windowOr = freqToNumber(freq);
            //console.log({windowOr})

        }
    }
    return (min === Infinity) ? -1 : min;
};

function addBits(num, arr) {
    //console.log("addBits START", num, arr)
    for (let i = 0; i < arr.length; i++) {
        if (1 << i & num) {
            //console.log(i)
            arr[i]++;
        }
    }
    //console.log("addBits END", num, arr)

}

function removeBits(num, arr) {
    //console.log("removeBits START", num, arr)

    for (let i = arr.length - 1; i >= 0; i--) {
        if (1 << i & num) {
            arr[i]--;
        }
    }
    //console.log("removeBits END", num, arr)

}

function freqToNumber(arr) {
    //console.log("freqToNumber START array", arr)

    let number = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > 0) number += (1 << i);
    }

    //console.log("freqToNumber END number", number)

    return number;
}
