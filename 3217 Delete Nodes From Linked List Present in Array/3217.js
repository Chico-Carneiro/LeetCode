/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    const set = new Set(nums);
    const node = new ListNode(0, head);
    let curr = node;
    while (curr.next) {
        if (set.has(curr.next.val)) {
            curr.next = curr.next.next;
        }
        else {
            curr = curr.next;
        }
    }
    return node.next;
};
