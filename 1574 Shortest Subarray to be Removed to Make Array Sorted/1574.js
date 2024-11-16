/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
    if (arr.length === 1) return 0;
    if (arr.length === 2) return arr[1] >= arr[0] ? 0 : 1;

    let i = 1;

    for (; i < arr.length; i++) {
        if (arr[i] < arr[i - 1])
            break;
    }
    if (i > arr.length - 2) {
        if (i === arr.length) return 0;
        return 1;
    }

    const firstLen = i;

    let j = arr.length - 2;
    for (; j >= i; j--) {
        //console.log({j})
        if (arr[j] > arr[j + 1])
            break;
    }
    //console.log({j}, arr.length)
    let lastLen = arr.length - j - 1;
    //console.log({firstLen, lastLen})

    if (arr[firstLen - 1] <= arr.at(-lastLen)) {
        return arr.length - firstLen - lastLen;
    }

    let max = Math.max(firstLen, lastLen);
    if (arr.at(-1) >= arr[0]) {
        //let c2 = lastLen;
        for (let w = 0; w < firstLen; w++) {
            //console.log(w, arr[w])
            //console.log("arr.at(-lastLen)",arr.at(-lastLen))
            if (arr[w] > arr.at(-lastLen)) {
                //console.log({max, w, lastLen}, arr[w], arr.at(-lastLen));
                //c2--;
                while (arr.at(-lastLen) < arr[w]) {
                    lastLen--;
                }
            }
            max = Math.max(max, w + 1 + lastLen);
        }
    }
    /*
        // if elements in the middle are not enough to surpass max
        if (arr.length - firstLen - lastLen < max)
            return arr.length - max;
    
        // verify the middle elements
        let count = 1;
        i++;
        for (; i<=j; i++) {
            if (arr[i] >= arr[i-1]) {
                count++;
            }
            else {
                if (count > max) {
                    max = count;
                }
                count = 1;
            }
        }
        */
    return arr.length - max;
};
