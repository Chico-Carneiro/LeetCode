/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.capacity = maxSize;
    this.size = 0;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.size !== this.capacity) {
        this.size++;
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.size === 0) return -1;
    else {
        this.size--;
        return this.stack.pop();
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    const min = Math.min(k, this.size);
    for (let i = 0; i<min; i++) {
        this.stack[i] += val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
