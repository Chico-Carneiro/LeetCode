/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    // sum % k == 0: not enough
    // (sum / (len(arr)/2)) % k == 0 : not enough
    //    example:
    //        arr = [1,1,1,1,2,24], k = 5
    //        sum = 30 , % k = 0
    //        (30 / len/2) = 10, % k = 0
    //
    // sorting and checking if arr[i]+arr[i+len(arr)/2] % k == 0
    // looks like this would work O(nlogn + n/2), no extra space if mutable
    // What if we can skip sorting?
    // When we find a number x, we check x%k.
    // Store it in a list/stack (no, just a counter) with x%k as key (or should it be k - x%k ?)
    // When we find some number y, we check y%k, and if y%k == k - x%k, we match x and y
    // Remove x and y
    // If the data structure is empty (how do we check this?), all pairs were done. return true

    // Oh, there's negative numbers too. Weird. (I should have read Constraints first)
    // I immediately feel this is a problem. Why? Let me see.
    // [ -5, 5 ] k=5. Is 0 divisible by k? According to the definition, yes.
    // [ -5, 0, 0, 5 ] k=5. All of them are 0mod5. Does the previous strategy still holds?
    // It depends. Is [0,0,0,0] k=5 supposed to return true? If so, the strategy seems to hold.
    // I'm assuming this is it. Acceptance Rate is 42% for some reason anyways.
    // 
    // If the map holds key -> list, how do we check if the map itself is empty?
    // Should we keep creating and deleting sets or can I keep an external counter?
    // The map will have at most 10e5 elements.
    // For speed, maybe just having an Array. But we have the negatives. We can't use abs
    // Example: [-4, 1] k=5, if we use abs, 4+1=5, %0 = 0. But (-4+1)%5 = -3
    // Correction: the map will have at most 20e5 + 1 elements, if not maintained
    if (k === 1) return true;
    let counter = 0;
    const map = {};

    for (let i of arr) {
        const mod = i%k;
        if (map[-mod] > 0) {
            map[-mod]--;
            counter--;
            continue;
        }
        if (mod === 0) {
            map[0] = map[0] + 1 || 1;
            counter++;
            continue;
        }

        let inv;
        if (mod > 0) {
            inv = k-mod;
        }
        else {
            inv = -k-mod;
        }

        if (map[inv] > 0) {
            map[inv]--;
            counter--;
        }
        else {
            map[mod] = map[mod] + 1 || 1;
            counter++;
        }
    }
    return counter === 0;

};
