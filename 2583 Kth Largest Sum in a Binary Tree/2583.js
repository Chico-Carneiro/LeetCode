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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
    let stack1 = [root, 0];
    //let stack1 = [root];
    //let stack2 = [];
    //const sums = [0];
    const sums = [];
    //let lvl = 0;
    //let max = 0;

    while (stack1.length !== 0) {
        /*
        [stack2, stack1] = [stack1, stack2];
        while (stack2.length !== 0) {
            const el = stack2.pop();
            sums[lvl] = sums[lvl] ? sums[lvl] + el.val : el.val;
            if (el.left) stack1.push(el.left);
            if (el.right) stack1.push(el.right);
        }
        //max = Math.max(max,sums[lvl]);
        */
        while (stack1.length !== 0) {
            let lvl = stack1.pop();
            const el = stack1.pop();
            sums[lvl] = sums[lvl] ? sums[lvl] + el.val : el.val;
            lvl++;
            if (el.left) stack1.push(el.left, lvl);
            if (el.right) stack1.push(el.right, lvl);
        }
    }
    if (k > sums.length) return -1;
    //if (k === 1) return max;
    return sums.sort((a, b) => b - a)[k - 1];

    //using a heap
    let heap;
    if (k <= sums.length / 2) {
        heap = Heap.heapify(sums, (a, b) => b - a);
    }
    else {
        heap = Heap.heapify(sums, (a, b) => a - b);
        k = sums.length - k + 1;
    }
    while (1 < k--) {
        heap.pop();
    }
    return heap.peek();

};

class Heap {
    constructor(comparator = (a, b) => a - b) {
        this.heap = [];
        this.comparator = comparator;
    }
    peek() {
        return this.heap[0];
    }
    // Push a new element into the heap
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    // Pop the smallest element from the heap
    pop() {
        if (this.heap.length === 0) return null;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return root;
    }

    // Push and pop in one operation
    pushPop(value) {
        if (this.heap.length === 0) {
            this.push(value);
            return value;
        }
        if (this.comparator(value, this.heap[0]) > 0) {
            const root = this.heap[0];
            this.heap[0] = value;
            this.bubbleDown();
            return root;
        }
        return value;
    }

    // Bubble up the last element to maintain heap property
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[index], this.heap[parentIndex]) >= 0) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Bubble down the root element to maintain heap property
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < length && this.comparator(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.comparator(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }

    // Create a heap from an array in O(n) time
    static heapify(array, comparator) {
        const heap = new Heap(comparator);
        heap.heap = array.slice(); // Copy the array
        const start = Math.floor(heap.heap.length / 2) - 1; // Last non-leaf node
        for (let i = start; i >= 0; i--) {
            heap.bubbleDownFromIndex(i);
        }
        return heap;
    }

    // Bubble down from a specific index
    bubbleDownFromIndex(index) {
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < length && this.comparator(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.comparator(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }

}

// Example usage:
