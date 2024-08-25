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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return [];
    const stack = [];
    const res = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack[stack.length - 1];
        let pop = true;
        if (node.right) {
            stack.push(node.right);
            node.right = null;
            pop = false;
        }
        if (node.left) {
            stack.push(node.left);
            node.left = null;
            pop = false;
        }
        if (pop) {
            res.push(stack.pop().val);
        }
    }
    return res;


};
