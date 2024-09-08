/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    if (!head) return Array(k).fill(head)
    let counter = 1;
    let cur = head;
    while (cur.next) {
        counter++;
        cur = cur.next;
    }

    const len = Math.floor(counter / k);
    const mod = counter % k;


    cur = head;

    const res = Array(k);
    for (let i = 0; i < mod; i++) {
        for (let j = 0; j < len; j++) {
            cur = cur.next;
        }

        res[i] = head;
        head = cur.next;
        cur.next = null;
        cur = head;
    }

    for (let i = mod; i < k; i++) {
        if (len === 0) {
            res[i] = head;
        }
        else {
            for (let j = 0; j < len - 1; j++) {
                cur = cur.next;
            }
            res[i] = head;
            head = cur.next;
            cur.next = null;
            cur = head;
        }
    }
    return res;
};
