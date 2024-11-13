/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    /*
    nums = [1,2,3,4,5,6,7,8];
    lower = 3;
    upper = 12;
    */
    const LEN = nums.length;
    if (LEN === 1) return 0;
    if (LEN === 2) {
        const pair = nums[0] + nums[1];
        if (pair >= lower && pair <= upper) return 1;
        return 0;
    }

    //nums.map((val, idx) => [val,idx]).sort((a,b) => a[0]-b[0]);
    nums.sort((a, b) => a - b);

    const LENm1 = LEN - 1;
    const LAST_ELEM = nums.at(- 1);

    if ((LAST_ELEM + nums.at(-2)) < lower || (nums[0] + nums[1]) > upper)
        return 0;

    if (nums[0] === LAST_ELEM) {
        return LENm1 / 2 * LEN;
    }
    let count = 0;

    if (lower === upper) {
        //console.log("entering side quest")
        let a = 0;
        let b = LENm1;
        while (a < b) {
            const sum = nums[a] + nums[b];
            if (sum > upper) {
                b--;
            }
            else if (sum < lower) {
                a++;
            }
            else {
                if (nums[a] === nums[b]) {
                    const n = b - a;
                    count += n / 2 * (n + 1);
                    return count;
                }
                else {
                    let countLeft = 1;
                    let countRight = 1;
                    const left = nums[a];
                    const right = nums[b];
                    a++;
                    b--;
                    while (nums[a] === left) {
                        countLeft++;
                        a++;
                    }
                    while (nums[b] === right) {
                        countRight++;
                        b--;
                    }
                    count += countLeft * countRight;
                }
            }
        }
        return count;
    }

    //console.log(...nums) 
    for (let i = 0; i < LENm1; i++) {
        const num = nums[i];
        const i2 = i + 1;
        const sumNumWithNext = num + nums[i2];
        const sumNumWithLast = num + LAST_ELEM
        if (sumNumWithNext > upper) {
            //console.log("let's STOP here", {i, num})
            break;
        }
        if (sumNumWithLast < lower) {
            //console.log("continuing")
            continue;
        }
        //console.log(`FOR nums[${i}] =`, num)

        let newUpper, newLower;
        if (sumNumWithLast <= upper) {
            newUpper = LENm1;
            //console.log("UPPER immediate: ", newUpper);
        }
        else {
            //console.log("find UPPER");
            newUpper = binSearchUpper(nums, upper - num, i2, LENm1);
        }
        if (sumNumWithNext >= lower) {
            newLower = i2;
            //console.log("LOWER immediate: ", newLower);
        }
        else {
            //console.log("find LOWER");
            newLower = binSearchLower(nums, lower - num, i2, newUpper);
        }
        count += newUpper - newLower + 1;
        //console.log({count})
    }
    return count;
};
function binSearchLower(arr, val, a, b) {
    //console.log("BIN", {val})
    //let mid;
    let other = -1;
    //console.log({ a, b })
    while (a <= b) {
        //mid = Math.trunc((a + b) / 2);
        const mid = (a + b) >> 1;
        //console.log({ mid}, "arr[mid]:", arr[mid])
        /*
        if (arr[mid] === val) {
            //console.log("return equal", { mid })
            return mid;
        }
        */
        if (arr[mid] < val) {
            other = mid;
            a = mid + 1;
        }
        else {
            b = mid - 1;
        }
        //console.log({a,b})
    }
    //console.log("return", { mid },"arr[mid]:",arr[mid] )
    //if (val < 0) mid++;
    //console.log("REAL return", { mid }, "arr[mid]:", arr[mid] )
    //console.log({other})
    return other + 1;
}
function binSearchUpper(arr, val, a, b) {
    //console.log("BIN", {val})
    //let mid;
    let other = -1;
    //console.log({ a, b })
    while (a <= b) {
        //mid = Math.trunc((a + b) / 2);
        const mid = (a + b) >> 1;
        //console.log({ mid}, "arr[mid]:", arr[mid])
        /*
        if (arr[mid] === val) {
            //console.log("return equal", { mid })
            return mid;
        }
        */
        if (arr[mid] <= val) {
            a = mid + 1;
        }
        else {
            other = mid;
            b = mid - 1;
        }
        //console.log({a,b})
    }
    //console.log("return", { mid },"arr[mid]:",arr[mid] )
    //if (val < 0) mid++;
    //console.log("REAL return", { mid }, "arr[mid]:", arr[mid] )
    //console.log({other})
    return other - 1;
}
