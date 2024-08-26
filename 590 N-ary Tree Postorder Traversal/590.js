/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return [];
    const stack = [root];
    const res = [];
    while (stack.length > 0) {
        const node = stack[stack.length-1];
        if (node.children.length === 0 || node.childrenDone) {
            res.push(stack.pop().val);
            if (node.parent) {
                node.parent.childrenDone = true;
                //delete node.parent;
            }
            /*
            if (node.childrenDone) {
                delete node.childrenDone
            }
            */
        }
        else {
            node.childrenDone = false;
            node.children[node.children.length-1].parent = node;
            for (let i = node.children.length-1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
    }
    return res;

};
