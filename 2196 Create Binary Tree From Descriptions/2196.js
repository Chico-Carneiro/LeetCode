/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let index = new Map();
    let root = null;

    for (let i = 0; i<descriptions.length; i++){
        let child;
        if (index.get(descriptions[i][1]) === undefined) {
            child = new TreeNode(descriptions[i][1], null, null);
            index.set(descriptions[i][1], child);
        }
        else {
            child = index.get(descriptions[i][1]);
        }

        let parent;
        if (index.get(descriptions[i][0]) === undefined) {
            parent = new TreeNode(descriptions[i][0], null, null);
            index.set(descriptions[i][0], parent);
        }
        else {
            parent = index.get(descriptions[i][0]);
        }
        //set child
        if (descriptions[i][2] === 1) {
            parent["left"] = child;
        }
        else {
            parent.right = child;
        }
        //set parent
        parent["parent"] = parent["parent"] || null;
        child["parent"] = parent;
        root = parent;
        
    }

    while (root["parent"] !== null) {
        root = root["parent"];
    }
    //console.log(root);
    //console.log("final map", index);
    return root;
};
