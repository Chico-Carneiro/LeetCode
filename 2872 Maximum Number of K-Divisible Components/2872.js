/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
//const customComparator = (a, b) => a[1].length - b[1].length;
const customComparator = (a, b) => a[2] - b[2];

var maxKDivisibleComponents = function (n, edges, values, k) {

    const arr = Array(n);
    const ref = Array(n);
    for (let i = 0; i < n; i++) {
        //arr[i]=[i,[]];
        const obj = [i, [], 0, i];
        arr[i] = obj;
        ref[i] = obj;
    }

    for (let [v1, v2] of edges) {
        arr[v1][1].push(v2);
        arr[v1][2]++;
        arr[v2][1].push(v1);
        arr[v2][2]++;

    }


    const heap = Heap.heapify(arr, customComparator);

    let count = 1;

    while (n > 1) {
        const [i, neighbors, c] = heap.peek();
        //console.log({i,neighbors,c}, values[i])
        //console.log(i)
        const val = values[i];
        let nei;
        for (nei of neighbors) {
            if (values[nei] !== -1) {
                break;
            }
        }
        if (val % k === 0) {
            //if ( val !== 0 && val % k === 0) {
            count++;
        }
        else {
            values[nei] += val;
        }

        values[i] = -1;
        ref[nei][2]--;
        heap.bubbleUpFromIndex(ref[nei][3]);
        n--;
        heap.pop();
    }

    return count;

};

class Heap {
    constructor(comparator = (a, b) => a - b) {
        this.heap = [];
        this.comparator = comparator;
    }
    size() {
        return this.heap.length;
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
            //this.push(value);
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
            [this.heap[index][3], this.heap[parentIndex][3]] = [parentIndex, index];
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
            [this.heap[index][3], this.heap[smallestIndex][3]] = [smallestIndex, index];
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }

    // Create a heap from an array in O(n) time
    static heapify(array, comparator) {
        const heap = new Heap(comparator);
        heap.heap = array; // Copy the array
        //heap.heap = array.slice(); // Copy the array
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
            [this.heap[index][3], this.heap[smallestIndex][3]] = [smallestIndex, index];
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
    // Bubble up from a specific index
    bubbleUpFromIndex(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[index], this.heap[parentIndex]) >= 0) break;
            [this.heap[index][3], this.heap[parentIndex][3]] = [parentIndex, index];
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }


}
