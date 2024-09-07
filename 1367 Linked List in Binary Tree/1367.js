/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    // worst case: list is full of 1, tree is almost full of 1 but the list isn't contained
    // (as testcase 44 ended up showing)
    // pre-order / depth first
    // or preparse the tree and list, and start scanning from the leafs and end of the list.
    // if current treeNode.val === current listNode.val && current listNode.next === null return true
    let ctree;
    let clist;

    const visited = new Set();
    const stack = [[root, head]];

    while (stack.length > 0) {
        [ctree, clist] = stack.pop();
        if (ctree.val === clist.val) {
            if (clist.next === null) return true;
            clist = clist.next;
        }
        else {
            clist = head;
        }

        if (ctree.right) {
            stack.push([ctree.right, clist]);
            if(!visited.has(ctree.right) && ctree.right.val === head.val)
                stack.push([ctree.right, head]);
            visited.add(ctree.right);
        }
        if (ctree.left) {
            stack.push([ctree.left, clist]);
            if(!visited.has(ctree.left) && ctree.left.val === head.val)
                stack.push([ctree.left, head]);
            visited.add(ctree.left);
        }
    }

    return false;

};
