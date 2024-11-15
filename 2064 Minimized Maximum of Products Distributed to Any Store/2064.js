/**
 * @param {number} n
 * @param {number[]} q
 * @return {number}
 */
// This implementation doesn't solve the Problem
var minimizedMaximum = function (n, q) {

    //n = 11;
    //q = [2,4,7,10,20,24,92];
    //q = [2,4,7,7,10,20,20,20];

    if (q.length === n) {
        let max = q[0];
        for (let i = 1; i < q.length; i++) {
            if (q[i] > max) max = q[i];
        }
        return max;
        //return Math.max(...q);
    }

    const heap = Heap.heapify(q, (a, b) => b - a);


    while (heap.size() < n) {
        const max = heap.pop();
        const second = heap.peek();
        const iter = n - heap.size();
        const divide = Math.max(2, Math.min(Math.ceil(max / second), iter));
        const toTake = Math.floor(max / divide)
        const rest = max % divide;
        console.log({ iter, max, second, divide, toTake, rest })
        for (let i = 0; i < rest; i++) {
            heap.push(toTake + 1);
        }
        for (let i = 0; i < divide - rest; i++) {
            heap.push(toTake);
        }
    }
    return heap.peek();

    /*
        q.sort((a, b) => a - b);
    
        if (q[0] === q.at(-1)) {
            return q[0] / Math.floor(n / q.length)
        }
    
        let sums = Array(q.length);
        sums[q.length - 1] = q.at(-1);
        //let sum = q[0];
        for (let i = q.length - 2; i >= 0; i--) {
            sums[i] = q[i] + sums[i + 1];
        }
        // average quantity per store
        //let avg = sum / n;
        console.log(sums)
        return 0;
        let storesDone = 0;
        while (storesDone < n) {
            const avg = sums[storesDone]/(n-storesDone);
            if (q[storesDone] === avg) return avg;
            if (q[storesDone] < avg)
                storesDone = bin(q, avg, storesDone);
            else {
                let storesToDo = n - q.length;
                const heap = Heap.heapify(q.slice(storesDone), (a,b)=>b-a);
                /*
                // start with the largest
                q[-1];
                // divide it by the avg, take the floor of it
                stores = Math.floor(q[-1] / avg)
                // distribute it by that many stores
                val = Math.ceil(q[-1]/stores);
                // other stores will have either val or val-1
                // go to the next
                q[-2];
                // if there's stores available
                // if it is smaller or equal 
                
            }
            
    
    
            //const doneThisRound = count(q, avg, ?);
        }
        */
};

function count(arr, avg, WHATELSE) {

}

function bin(arr, val, a) {
    let b = arr.length;
    let mid;
    while (a <= b) {
        mid = (a + b) >> 1;
        if (arr[mid] <= val) {
            a = mid + 1;
        }
        else {
            b = mid - 1;
        }
    }
    return a;
}

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

