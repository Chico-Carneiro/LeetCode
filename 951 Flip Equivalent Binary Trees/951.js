/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} r1
 * @param {TreeNode} r2
 * @return {boolean}
 */
var flipEquiv = function (r1, r2) {
    if (r1 === null) return r2 === null;
    if (r2 === null) return false;

    if (r1.val !== r2.val) return false;

    if (r1.left?.val === r2.left?.val && r1.right?.val === r2.right?.val) {
        return flipEquiv(r1.left, r2.left) && flipEquiv(r1.right, r2.right);
    }
    if (r1.left?.val === r2.right?.val && r1.right?.val === r2.left?.val) {
        return flipEquiv(r1.left, r2.right) && flipEquiv(r1.right, r2.left);
    }
    return false;
};
