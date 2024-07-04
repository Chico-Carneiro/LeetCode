/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let cursor = head.next;
    let cursorZero = head;

    let sum = 0;
    while (cursor !== null) {
        if (cursor.val !== 0) {
            sum+=cursor.val;
        }
        else {
            cursorZero.val = sum;
            sum = 0;
            if (cursor.next === null) {
                cursorZero.next = null;
            }
            else{
                cursorZero.next = cursor;
                cursorZero = cursor;
            }
        }
        cursor = cursor.next;
    }

return head;
