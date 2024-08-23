/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(s) {
    let val = [];
    let prev = [];
    let negate = false;
    let start = 0;
    if (s[0] === '-') {
        negate = true;
        start++;
    }
     
    for (let i = start; i < s.length;) {
        if (s[i] === '-') {
            negate = true;
            i++;
        }
        else if (s[i] === '+') {
            i++;
        }
        if (s[i+1] === '/') {
            val[0] = parseInt(s[i]);
            i++;
        }
        else {
            val[0] = 10;
            i+=2;
        }
        i++;

        if (negate) {
            val[0] *= -1;
            negate = false;
        }        
        if (s[i+1] === "0"){
            val[1] = 10;
            i+=2;
        }
        else {
            val[1] = parseInt(s[i]);
            i++;
        }
        if (prev.length > 0) {
            if (val[1] === prev[1]) {
                prev[0] = prev[0]+val[0];
            }
            else {
                prev[0] = prev[0] * val[1] + val[0] * prev[1];
                prev[1] = prev[1] * val[1];
            }
            const div = gcd(prev[0], prev[1]);
            prev[1] = prev[1]/div;
            prev[0] = prev[0]/div;
        }
        else {
            prev = [...val];
        }

    }
    return prev[0].toString()+"/"+prev[1].toString();
};

function gcd(A,B) {
    a = Math.abs(A);
    b = Math.abs(B);
    if (b > a) {const temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}
