/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
    const m = box.length;
    const n = box[0].length;
    const res = Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = Array(m).fill('.');
    }

    const lastDestinationColumn = m - 1;

    for (let i = 0; i < m; i++) {
        let left = 0;
        let dc = lastDestinationColumn - i; // destinationColumn
        for (let j = 0; j < n; j++) {
            const char = box[i][j];
            //obstacle
            if (char === '*') {
                res[j][dc] = char;
                for (let w = left; w < j; w++) {
                    res[w][dc] = '#';
                }
                left = j + 1;
            }
            //empty
            else if (char === '.') {
                left++;
            }
            //stone, do nothing
            //if (char === '#') {}
        }
        for (let w = left; w < n; w++) {
            res[w][dc] = '#';
        }
    }
    return res;
};
