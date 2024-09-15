/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    const arr = Array(s.length);
    let mask = 0b11111;
    const map = new Map([
        ['a', 0b00001 ],
        ['e', 0b00010 ],
        ['i', 0b00100 ],
        ['o', 0b01000 ],
        ['u', 0b10000 ]
    ]);
    console.log(mask)
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            mask = mask^map.get(s[j]);  
        }
    }
    console.log(mask.toString(2))
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            arr[j] = mask^map.get(s[j]);  
        }
        //arr[j] = mask;
    }
    console.log(arr)
};
