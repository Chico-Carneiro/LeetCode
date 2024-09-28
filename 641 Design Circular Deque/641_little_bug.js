/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.MAX_SIZE = k;
    this.dq = new Array(k);
    this.front = k - 1;
    this.last = 0;
    this.count = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) {
        return false;
    }
    this.front = (this.front + 1) % this.MAX_SIZE;
    this.dq[this.front] = value;
    this.count++;
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) {
        return false;
    }
    this.last = (this.last - 1 + this.MAX_SIZE) % this.MAX_SIZE;
    this.dq[this.last] = value;
    this.count++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) {
        return false;
    }
    this.dq[this.front] = undefined;
    this.front = (this.front - 1 + this.MAX_SIZE) % this.MAX_SIZE;
    this.count--;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) {
        return false;
    }
    this.dq[this.last] = undefined;
    this.last = (this.last + 1) % this.MAX_SIZE;
    this.count--;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.isEmpty()) return -1;
    return this.dq[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.isEmpty()) return -1;
    return this.dq[this.last];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.count === this.MAX_SIZE;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
