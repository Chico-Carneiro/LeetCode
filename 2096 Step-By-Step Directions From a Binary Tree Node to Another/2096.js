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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */

 //today I just couldn't focus. I had to give up.
var getDirections = function(root, startValue, destValue) {
    let foundDest = null;
    let foundStart = null;
    let lifo = [];
    root["parent"] = null;
    lifo.push(root);

    while ( foundDest === null || foundStart === null ) {

        let curNode = lifo.pop();

        if (curNode.val === startValue) {
            foundStart = curNode;
        }
        else if ( curNode.val === destValue ) {
            foundDest = curNode;
        }
        if (curNode.right !== null) {
            curNode.right["parent"] = curNode;
            lifo.push(curNode.right);
        }
        if (curNode.left !== null) {
            curNode.left["parent"] = curNode;
            lifo.push(curNode.left);
        }
    }

    let cursor = foundStart;
    let startPathToRoot = [];
    startPathToRoot.push(cursor.val);
    while (cursor["parent"] !== null) {
        cursor = cursor["parent"];
        startPathToRoot.push(cursor);
    }

    cursor = foundDest;
    let destPathToRoot = [];
    destPathToRoot.push(cursor.val);
    while (cursor["parent"] !== null) {
        cursor = cursor["parent"];
        destPathToRoot.push(cursor);
    }

    //find first common ancestor
    let i = 0;
    while (startPathToRoot[startPathToRoot.length-1-i].val === destPathToRoot[destPathToRoot.length-1-i].val ) {
        i++;
    }
    i -= 1;
    let commonRoot = startPathToRoot[startPathToRoot.length-1-i].val;

    let path = "";
    if (startPathToRoot[startPathToRoot.length-1-i] === startPathToRoot[0]) {
        //if the common root is startValue, go down
        let cursor = destPathToRoot[destPathToRoot.length-1-i];
        let next = destPathToRoot[destPathToRoot.length-2-i].val;
        while (cursor.val !== destPathToRoot[0].val) {
            if (cursor.left && cursor.left.val === next) {
                path += 'L';
                cursor = cursor.left;
            }
            else if (cursor.right && cursor.right.val === next) {
                path += 'R';
                cursor = cursor.right;
            }
        }
    }
    else if(destPathToRoot[destPathToRoot.length-1-i] === destPathToRoot[0]) {
        //if the common root is destValue, just go up
        for (let j = 0; j < startPathToRoot.length-i; j++ ) {
            path += 'U';
        }
    }
    else {
        //go up, then down
        for (let j = 0; j < startPathToRoot.length-i; j++ ) {
            path += 'U';
        }

        let cursor = destPathToRoot[destPathToRoot.length-1-i];
        let next = destPathToRoot[destPathToRoot.length-2-i].val;
        while (cursor.val !== destPathToRoot[0].val) {
            if (cursor.left && cursor.left.val === next) {
                path += 'L';
                cursor = cursor.left;
            }
            else if (cursor.right && cursor.right.val === next) {
                path += 'R';
                cursor = cursor.right;
            }
        }

    }

    return path;

};

