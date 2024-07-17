/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let idx = [];
    for (const i of to_delete) {
        idx[i] = i;
    }
    let fifo = [];
    fifo.push(root);
    let countDeletions = 0;
    let forests = new Map();
    forests.set(root.val, root);
    while (countDeletions < to_delete.length) {
        let cur = fifo.pop();
        if (cur === null) continue;
        else {
            if (cur.right) {
                cur.right["parent"] = cur;
                cur.right["side"] = true;
                fifo.push(cur.right);
            } 
            if (cur.left) {
                cur.left["parent"] = cur;
                cur.left["side"] = false;
                fifo.push(cur.left);
            }
            if (idx[cur.val] !== undefined) {
                forests.delete(cur.val);
                if (cur.left)
                    forests.set(cur.left.val, cur.left);
                if (cur.right)
                    forests.set(cur.right.val, cur.right);
                if (cur["parent"]) {
                    if (cur["side"])
                        cur["parent"].right = null;
                    else
                        cur["parent"].left = null;
                }
                cur = null;
                countDeletions++;
            }
        }
    }
    return Array.from(forests.values());

};
