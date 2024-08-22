/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let srev = "";
    for (let c of num.toString(2))
        srev += (c === "0" ? "1" : "0")
    return parseInt(srev, 2)
};
