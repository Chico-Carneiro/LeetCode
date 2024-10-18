/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {

    if (nums.length === 1) return 1;
    const fifo = new Queue();
    let maxOr = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxOr = maxOr | nums[i];
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === maxOr) {
            count += 2 ** (nums.length - i - 1);
            //console.log("a: ",count)
        }
        else {
            fifo.enqueue(new Node(i, nums[i], 1));
        }
    }

    while (!fifo.isEmpty()) {
        const node = fifo.dequeue();
        for (let i = node.idx + 1; i < nums.length; i++) {
            const cum = node.cum | nums[i];
            if (cum === maxOr) {
                if (i === nums.length - 1) {
                    count += 1;
                    //console.log("single: ", count)
                }
                else {
                    count += 2 ** (nums.length - i - 1);
                    //console.log("b:", count)
                };
            }
            else {
                fifo.enqueue(new Node(i, cum, node.turn + 1));
            }
        }
    }
    return count;

};

function Node(idx, cum, turn) {
    this.idx = idx;
    this.cum = cum;
    this.turn = turn;
    this.next = null;
}

function Queue() {
    this.front = null; // Points to the front of the queue
    this.rear = null;  // Points to the rear of the queue
    this.length = 0;   // Keeps track of the size of the queue

    this.enqueue = value => {
        const newNode = value;
        if (this.rear) {
            this.rear.next = newNode; // Link the old rear to the new node
        }
        this.rear = newNode; // Update the rear to the new node
        if (!this.front) {
            this.front = newNode; // If the queue was empty, front is also the new node
        }
        this.length++;
    }

    // Remove and return the item at the front of the queue
    this.dequeue = () => {
        if (this.isEmpty()) {
            return null; // or throw an error
        }
        const dequeuedValue = this.front; // Get the value to return
        this.front = this.front.next; // Move front to the next node
        if (!this.front) {
            this.rear = null; // If the queue is now empty, set rear to null
        }
        this.length--;
        return dequeuedValue;
    }

    // Check if the queue is empty
    this.isEmpty = () => {
        return this.length === 0;
    }

}
