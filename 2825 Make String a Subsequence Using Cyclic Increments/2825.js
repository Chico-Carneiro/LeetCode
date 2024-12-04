/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
    if (str2.length > str1.length) return false;

    let c = 0;
    //let char = str2[c].charCodeAt(0) % 97;
    //let char = str2.charCodeAt(c) % 97;
    for (let i = 0; i < str1.length; i++) {
        const str1char = str1[i].charCodeAt(0) % 97;
        const char = str2[c].charCodeAt(0) % 97;
        //const str1char = str1.charCodeAt(i) % 97;
        if (str1char == char || (str1char + 1) % 26 == char) {
            c++;
            if (c == str2.length) return true;
            //char = str2[c].charCodeAt(0) % 97;
            //char = str2.charCodeAt(c) % 97;
        }
    }
    return false;
    //return c == str2.length;
};
