/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const startColor = image[sr][sc];
    if (startColor === color) return image;
    const m = image.length;
    const n = image[0].length;
    image[sr][sc] = color;

    const q = [[sr,sc]];
    while (q.length > 0) {
        const [i,j] = q.pop();
        const down = i+1;
        const up = i-1;
        const right = j+1;
        const left = j-1;
        if (down < m && image[down][j] === startColor) {
            image[down][j] = color;
            q.push([down,j]);
        }
        if (up >= 0 && image[up][j] === startColor) {
            image[up][j] = color;
            q.push([up,j]);
        }
        if (right < n && image[i][right] === startColor) {
            image[i][right] = color;
            q.push([i,right]);
        }
        if (left >= 0 && image[i][left] === startColor) {
            image[i][left] = color;
            q.push([i,left]);
        }
    }
    return image;

};
