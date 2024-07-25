/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    heapify(nums);    
    let range = nums.length;
    while (range > 1) {
        let aux = nums[0];
        nums[0] = nums[range-1];
        nums[range-1] = aux;
        range--;
        siftDown(0, nums, range);
    }
    return nums;

};

function heapify(heap) {
    let start = (heap.length - 1)/2 >> 0;
    while (start >= 0) {
        siftDown(start, heap, heap.length);
        start--;
    }

}

function siftDown(i, heap, range) {
    let child = i*2+1;
    let aux;
    while (child < range) {
        if (child+1 < range) {
            if (heap[child+1] > heap[child])
                child++;
        }
        if (heap[child] > heap[i]) {
            aux = heap[i];
            heap[i] = heap[child];
            heap[child] = aux;
        }
        i = child;
        child = i*2+1;
    }
}
