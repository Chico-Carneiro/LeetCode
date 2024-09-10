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
var insertGreatestCommonDivisors = function (head) {
    function gcd(a, b) {
        while (b !== 0) {
            const c = b;
            b = a % b;
            a = c;
        }
        return a;
    }

    let cur = head;
    let next = head.next;
    while (next) {
        cur.next = new ListNode(gcd(cur.val, next.val), next);
        cur = next;
        next = cur.next;
    }

    return head;
};
