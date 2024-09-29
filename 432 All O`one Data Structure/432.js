
var AllOne = function() {
    this.keyToCount = new Map();
    this.sortedSets = new Linked();

};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if(!this.keyToCount.has(key)) {
        this.keyToCount.set(key, 1);
        if (this.sortedSets.hasSet(1)) {
            this.sortedSets.getSet(1).add(key);
        }
        else {
            this.sortedSets.addFront(new Set([key]))
        }
    }
    else {
        const prevCount = this.keyToCount.get(key);
        const count = prevCount+1;
        this.keyToCount.set(key, count);
        
        this.sortedSets.add(count, key, true);
        this.sortedSets.remove(prevCount, key);
    }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    const prevCount = this.keyToCount.get(key);
    const count = prevCount - 1;
    if (count === 0) {
        this.keyToCount.delete(key);
        this.sortedSets.remove(prevCount, key);
    }
    else {
        this.keyToCount.set(key, count);
        this.sortedSets.add(count, key, false);
        this.sortedSets.remove(prevCount, key);
    }

};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    return this.sortedSets.getMax();
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    return this.sortedSets.getMin();
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

function Linked() {
    // head is a linked list of Sets(), ordered by their sizes
    this.countToNode = new Map(); //holds count -> NodeSet()
    this.head = null; // holds minimum
    this.tail = null; //holds maximum

/*
    this.setHead = (node) => {
        console.log(node);
    }
*/
    
    this.isEmpty = () => this.countToNode.size === 0;

    this.getNode = (count) => this.countToNode.get(count);

    this.getSet = (count) => this.getNode(count).val;

    this.hasSet = (count) => this.countToNode.has(count);

    this.getMax = () => this.tail?.val.values().next().value || "";

    this.getMin = () => this.head?.val.values().next().value || "";

    this.addFront = (set) => {
        const node = new NodeSet(set, this.head, null);
        this.addNodeToFront(node);
        this.countToNode.set(1, node);
    }

    this.remove = (count, key) => {
        const node = this.getNode(count);
        node.val.delete(key);
        if (node.val.size === 0) {
            this.removeNode(node);
            this.countToNode.delete(count);
        }
    }

    this.add = (count, key, inc = true) => {
        if (this.hasSet(count)) {
            this.getSet(count).add(key);
        }
        else {
            if (inc) {
                if (count === 1) {
                    this.addFront(new Set([key]));
                }
                else {
                    const nextNode = this.addNextNode(this.getNode(count-1), new Set([key]));
                    this.countToNode.set(count, nextNode);
                }
            }
            else {
                if (count === 0) {
                    // do nothing, rigth?
                }
                else {
                    const prevNode = this.addPrevNode(this.getNode(count+1), new Set([key]));
                    this.countToNode.set(count, prevNode);
                }
            }
        }
    }

    this.addNextNode = (node, set) => {
        const nextNode = new NodeSet(set, node.next, node);
        if (node.next !== null) {
            node.next.prev = nextNode;
        }
        else {
            this.tail = nextNode;
        }
        node.next = nextNode;
        return nextNode;
    }

    this.addPrevNode = (node, set) => {
        const prevNode = new NodeSet(set, node, node.prev);
        if (node.prev !== null) {
            node.prev.next = prevNode;
        }
        else {
            this.head = prevNode;
        }
        node.prev = prevNode;
        return prevNode;
    }

    this.removeNode = (node) => {
        if (node.prev === null) { // node is head
            this.head = node.next;
            if (node.next) {
                node.next.prev = null;
            }
            else {
                this.tail = null;
            }
        }
        else if (node.next === null) { // node is tail
            this.tail = node.prev;
            if (node.prev) {
                node.prev.next = null;
            }
            else {
                this.head = null;
            }
        }
        else {
            node.next.prev = node.prev;
            node.prev.next = node.next;
        }

        delete node;
    } 

    this.addNodeToFront = (node) => {
        if (this.head !== null) {
            this.head.prev = node;
            this.head = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
    }


}

function NodeSet(val, next=null, prev=null,) {
    // val is a Set();
    this.val = val;
    this.next = next;
    this.prev = prev;
}
