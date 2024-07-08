/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let head = [1, [null]];
    let cursor = head;
    for (let i = 1; i <n; i++) {
        cursor[1] = [i+1,[null]];
        cursor = cursor[1];
    }
    cursor[1] = head;
    cursor = cursor[1];
    let prev = cursor;
    for (let i = 1; i < n; i++) {
    	for (let j = 1; j < k; j++) {
      	prev = cursor;
      	cursor = cursor[1];
      }
      prev[1] = cursor[1];
      cursor = cursor[1];
    }
    return cursor[0];
};
