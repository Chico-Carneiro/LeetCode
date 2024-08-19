/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    const primes = 
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let res = 0;
let z = n;
let sroot = Math.sqrt(n);
for (let i = 0; i<primes.length; i++) {
    if (primes[i] > sroot) break;
    const prime = primes[i];
    while (z%prime === 0) {
        res += prime;
        z /= prime;
    }
}
if (z > 1) res+= z;
return res;
};
