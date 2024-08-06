/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const map = Array(26);
    
    for (let i = 0; i<26; i++)
        map[i] = 0;
        
    for (let ch of word) {
        map[ch.charCodeAt(0)-97] += 1;
        //console.log(ch-97)
    }
    console.log(map.sort((a,b)=>b-a))
    //console.log(map)
    let pushes = 0;
    for (let i = 0; i<8; i++)
        pushes += map[i]
    for (let i = 8; i<16; i++)
        pushes += map[i] * 2;
    for (let i = 16; i<24; i++)
        pushes += map[i] * 3;
    for (let i = 24; i<26; i++)
        pushes += map[i] * 4;
    return pushes;
};
