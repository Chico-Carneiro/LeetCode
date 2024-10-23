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
    root.val = 0;
    let s1 = [root, 0];
    //let s1 = [[root, root.val]];
    let s2 = [];
    let nextLvl = 0;
    while (s1.length !== 0) {
        let lvlSum = nextLvl;
        nextLvl = 0;
        for (let i = 0; i < s1.length; i++) {
            const el = s1[i++];
            const sibSum = s1[i];
            el.val = lvlSum - sibSum;
            //const el = s1[i][0];
            //lvlSum += el.val;
            const leftChild = el.left;
            const rightChild = el.right;
            const childrenSum = (leftChild?.val || 0) + (rightChild?.val || 0);
            nextLvl += childrenSum;
            if (leftChild) s2.push(leftChild, childrenSum);
            //if (leftChild) s2.push([leftChild, childrenSum]);
            if (rightChild) s2.push(rightChild, childrenSum);
            //if (rightChild) s2.push([rightChild, childrenSum]);

        }
        s1 = s2;
        s2 = [];
        //[s1, s2] = [s2, s1];
    }
    return root;
};
