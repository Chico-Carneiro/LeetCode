
var MyCalendar = function () {
    this.tree = new AVLTree();
    this.tree.insert(Infinity, Infinity);
    this.tree.insert(-1,-1);
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    if (this.tree.range(start, end)) {
        return false;
    }
    this.tree.insert(start, end);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

function rotateLeft(node) {
    var rightNode = node.right;
    node.right = rightNode.left;

    if (rightNode.left) rightNode.left.parent = node;

    rightNode.parent = node.parent;
    if (rightNode.parent) {
        if (rightNode.parent.left === node) {
            rightNode.parent.left = rightNode;
        } else {
            rightNode.parent.right = rightNode;
        }
    }

    node.parent = rightNode;
    rightNode.left = node;

    node.balanceFactor += 1;
    if (rightNode.balanceFactor < 0) {
        node.balanceFactor -= rightNode.balanceFactor;
    }

    rightNode.balanceFactor += 1;
    if (node.balanceFactor > 0) {
        rightNode.balanceFactor += node.balanceFactor;
    }
    return rightNode;
}

function rotateRight(node) {
    var leftNode = node.left;
    node.left = leftNode.right;
    if (node.left) node.left.parent = node;

    leftNode.parent = node.parent;
    if (leftNode.parent) {
        if (leftNode.parent.left === node) {
            leftNode.parent.left = leftNode;
        } else {
            leftNode.parent.right = leftNode;
        }
    }

    node.parent = leftNode;
    leftNode.right = node;

    node.balanceFactor -= 1;
    if (leftNode.balanceFactor > 0) {
        node.balanceFactor -= leftNode.balanceFactor;
    }

    leftNode.balanceFactor -= 1;
    if (node.balanceFactor < 0) {
        leftNode.balanceFactor += node.balanceFactor;
    }

    return leftNode;
}

class AVLTree {
    constructor(comparator, noDuplicates = false) {
        this._comparator = (a, b) => { return a > b ? 1 : a < b ? -1 : 0; }
        this._root = null;
        this._size = 0;
        this._noDuplicates = !!noDuplicates;
    }
    get size() {
        return this._size;
    }

    range(low, high) {
        let cur = this._root;
        while (cur) {            
            if (cur.key < high && low < cur.val) {
                return true;
            }
            if (cur.key === low) {
                return true;
            }
            cur = (low < cur.key) ? cur.left : cur.right;
        }
        return false;
    }

    insert(key, data) {
        if (!this._root) {
            this._root = {
                parent: null, left: null, right: null, balanceFactor: 0,
                key, data
            };
            this._size++;
            return this._root;
        }
        var compare = this._comparator;
        var node = this._root;
        var parent = null;
        var cmp = 0;
        if (this._noDuplicates) {
            while (node) {
                cmp = compare(key, node.key);
                parent = node;
                if (cmp === 0) return null;
                else if (cmp < 0) node = node.left;
                else node = node.right;
            }
        } else {
            while (node) {
                cmp = compare(key, node.key);
                parent = node;
                if (cmp <= 0) node = node.left; //return null;
                else node = node.right;
            }
        }
        var newNode = {
            left: null,
            right: null,
            balanceFactor: 0,
            parent, key, data
        };
        var newRoot;
        if (cmp <= 0) parent.left = newNode;
        else parent.right = newNode;
        while (parent) {
            cmp = compare(parent.key, key);
            if (cmp < 0) parent.balanceFactor -= 1;
            else parent.balanceFactor += 1;
            if (parent.balanceFactor === 0) break;
            else if (parent.balanceFactor < -1) {
                // inlined
                //var newRoot = rightBalance(parent);
                if (parent.right.balanceFactor === 1) rotateRight(parent.right);
                newRoot = rotateLeft(parent);
                if (parent === this._root) this._root = newRoot;
                break;
            } else if (parent.balanceFactor > 1) {
                // inlined
                // var newRoot = leftBalance(parent);
                if (parent.left.balanceFactor === -1) rotateLeft(parent.left);
                newRoot = rotateRight(parent);
                if (parent === this._root) this._root = newRoot;
                break;
            }
            parent = parent.parent;
        }
        this._size++;
        return newNode;
    }

    isBalanced() {
        return isBalanced(this._root);
    }

}

function isBalanced(root) {
    if (root === null) return true; // If node is empty then return true
    // Get the height of left and right sub trees
    var lh = height(root.left);
    var rh = height(root.right);
    if (Math.abs(lh - rh) <= 1 &&
        isBalanced(root.left) &&
        isBalanced(root.right)) return true;
    // If we reach here then tree is not height-balanced
    return false;
}

function height(node) {
    return node ? (1 + Math.max(height(node.left), height(node.right))) : 0;
}
