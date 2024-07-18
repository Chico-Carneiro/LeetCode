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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    if (distance < 2) return 0;
    
    let total = 0;

    const helper = function(cur) {
        //if (!cur) return null;
        if ( !cur.left && !cur.right) {
            const m = new Map();
            m.set(0,1);
            return m;
        }
        const curMap = new Map();
        let leftMap = null;
        let rightMap = null;
        if (cur.left) {
            leftMap = helper(cur.left);
            if (leftMap.size > 0) {
                leftMap.forEach((v,k) => {
                    if (k+1 > distance) {}
                    else {
                        curMap.set(k+1, v);
                    }
                });
            }
        } 
        if (cur.right) {
          rightMap = helper(cur.right);
            if (rightMap.size > 0) {
                if (curMap.size > 0) {
                    rightMap.forEach((v,k) => {
                        curMap.forEach((val,key) => {
                            if(k+1+key > distance) {}
                            else {
                                total+= (v*val);
                            }
                        })
                    }); 
                }
                rightMap.forEach((v,k) => {
                        if (k+1 > distance) {}
                        else {
                            const aux = curMap.get(k+1) || 0;
                            curMap.set(k+1, v+aux);
                        }
                    });
            }
        }

        return curMap;

    }
    helper(root);
    return total;
};
