/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const changes = [];
    const ch = s[0];
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i<s.length; i++) {
        if (s[i] === ch) {
            count1++;
            if (count2>0) {
                changes.push(count2);
                count2 = 0;
            }
        }
        else {
            count2++;
            if (count1>0) {
                changes.push(count1);
                count1 = 0;
            }
        }
    }
    changes.push(count1+count2);
    
    if (changes.length === 1) {
        return 0;
    }
    if (changes.length === 2) {
        if (ch === "a") return 0;
        else return Math.min(...changes);
    }

    let finalCount = 0;
    let sumA = 0;
    let sumB = 0;
    if (ch === "a") {
        for (let i = 2; i<changes.length; i+=2) {
            sumA+= changes[i];
        }
        finalCount = sumA;
        for (let i = 2; i<changes.length; i+=2) {
            sumB+= changes[i-1];
            sumA-= changes[i];
            finalCount = Math.min(finalCount, sumB+sumA);
            
        }
    }
    else {
        for (let i = 1; i<changes.length; i+=2) {
            sumA+= changes[i];
        }
        finalCount = sumA;
        for (let i = 2; i<=changes.length; i+=2) {
            sumB+= changes[i-2];
            sumA-= changes[i-1];
            finalCount = Math.min(finalCount, sumB+sumA);
            
        }
    }
    return finalCount;
};
