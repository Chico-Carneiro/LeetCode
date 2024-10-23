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
var replaceValueInTree = function (root) {
    let s1 = [root, root.val];
    //let s1 = [[root, root.val]];
    let s2 = [];

    while (s1.length !== 0) {
        let lvlSum = 0;
        for (let i = 0; i < s1.length; i+=2) {
            const el = s1[i];
            //const el = s1[i][0];
            lvlSum += el.val;
            const leftChild = el.left;
            const rightChild = el.right;
            const childrenSum = (leftChild?.val || 0) + (rightChild?.val || 0);
            if (leftChild) s2.push(leftChild, childrenSum);
            //if (leftChild) s2.push([leftChild, childrenSum]);
            if (rightChild) s2.push(rightChild, childrenSum);
            //if (rightChild) s2.push([rightChild, childrenSum]);

        }
        while (s1.length !== 0) {
            const sibSum = s1.pop();
            const el = s1.pop();
            //const [el, sibSum] = s1.pop();
            el.val = lvlSum - sibSum;
        }
        [s1, s2] = [s2, s1];
    }
    return root;
};
