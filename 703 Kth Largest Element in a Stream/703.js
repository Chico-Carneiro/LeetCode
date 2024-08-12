/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    for (let i = nums.length; i < k; i++ ) {
        nums.push(Number.NEGATIVE_INFINITY);
    }
    for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
        let z = i;
        let leftChild = 2 * z + 1;
        while (leftChild < k) {
            let minIdx = z;
            if (nums[leftChild] < nums[minIdx]) {
                minIdx = leftChild;
            }
            let rightChild = 2 * z + 2;
            if (nums[rightChild] && nums[rightChild] < nums[minIdx]) {
                minIdx = rightChild;
            }
            if (nums[z] === nums[minIdx]) break;

            const aux = nums[z];
            nums[z] = nums[minIdx];
            nums[minIdx] = aux;
            z = minIdx;
            leftChild = 2 * z + 1;
        }
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > nums[0]) {
            nums[0] = nums[k-1];
            nums[k-1] = nums[i];

            let z = 0;
            let leftChild = 2 * z + 1;
            while (leftChild < k) {
                let minIdx = z;
                if (nums[leftChild] < nums[minIdx]) {
                    minIdx = leftChild;
                }
                let rightChild = 2 * z + 2;
                if (nums[rightChild] && nums[rightChild] < nums[minIdx]) {
                    minIdx = rightChild;
                }
                if (nums[z] === nums[minIdx]) break;

                const aux = nums[z];
                nums[z] = nums[minIdx];
                nums[minIdx] = aux;
                z = minIdx;
                leftChild = 2 * z + 1;
            }
        }
    }

    this.k = k;
    this.nums = nums;
    return null;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (val > this.nums[0]) {
        this.nums[0] = this.nums[this.k-1];
        this.nums[this.k-1] = val;

        let z = 0;
        let leftChild = 2 * z + 1;
        while (leftChild < this.k) {
            let minIdx = z;
            if (this.nums[leftChild] < this.nums[minIdx]) {
                minIdx = leftChild;
            }
            let rightChild = 2 * z + 2;
            if (this.nums[rightChild] && this.nums[rightChild] < this.nums[minIdx]) {
                minIdx = rightChild;
            }
            if (this.nums[z] === this.nums[minIdx]) break;

            const aux = this.nums[z];
            this.nums[z] = this.nums[minIdx];
            this.nums[minIdx] = aux;
            z = minIdx;
            leftChild = 2 * z + 1;
        }
    }
    return this.nums[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
