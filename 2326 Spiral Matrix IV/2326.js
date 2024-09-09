/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    const matrix = new Array(m);
    for (let i = 0; i<m; i++) matrix[i] = new Array(n).fill(-1);
    const x = m*n;
    let curr = head;
    let val = curr.val;
    let c = [0, 0];
    let dir = 0;
    let countHor = n;
    m--;
    let countVer = m;
    for (let i = 0; i < x; i++) {
        matrix[c[0]][c[1]] = val;
        if (dir === 0) { //right
            countHor--;
            if (countHor === 0) {
                dir = (dir + 1) % 4;
                c[0]++;
                n--;
                countHor = n;
                //countVer--;
            }
            else {
                c[1]++;
            }
        }
        else if (dir === 1) { //down
            countVer--;
            if (countVer === 0) {
                dir = (dir + 1) % 4;
                c[1]--;
                m--;
                countVer = m;
                //countHor--;
            }
            else {
                c[0]++;
            }
        }
        else if (dir === 2) { //left
            countHor--;
            if (countHor === 0) {
                dir = (dir + 1) % 4;
                c[0]--;
                n--;
                countHor = n;
                //countVer--;
            }
            else {
                c[1]--;
            }
        }
        else if (dir === 3) { //up
            countVer--;
            if (countVer === 0) {
                dir = (dir + 1) % 4;
                c[1]++;
                m--;
                countVer = m;
                //countHor--;
            }
            else {
                c[0]--;
            }
        }

        if (curr.next) {
            curr = curr.next;
            val = curr.val;
        }
        else {
            return matrix;
        }

    }
    return matrix;
};
