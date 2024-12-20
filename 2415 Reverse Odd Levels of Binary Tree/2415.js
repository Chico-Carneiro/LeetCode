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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
    if (!root.left) return root;

    [root.left.val, root.right.val] = [root.right.val, root.left.val];
    let s1 = [root.left, root.right];
    let s2 = [];
    let shift = false;

    while (s1.at(0).left) {
        if (shift) {
            const len = s1.length >> 1
            for (let i = 0; i < len; i++) {
                const n1 = s1.at(i);
                const n2 = s1.at(-i - 1);
                [n1.left.val, n2.right.val] = [n2.right.val, n1.left.val];
                [n1.right.val, n2.left.val] = [n2.left.val, n1.right.val];
            }
        }
        if (!s1.at(0).left.left) return root;
        shift = !shift;
        for (let el of s1) {
            s2.push(el.left, el.right);
        }
        //console.log({s1, s2})
        s1 = s2;
        s2 = [];
        //console.log({s1, s2})
    }

    return root;

};
