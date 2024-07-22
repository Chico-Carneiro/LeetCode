/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
    const mx = Array.from({length: k});
    for (let i = 0; i < k; i++) {
        mx[i] = Array.from({length: k}, i => 0);
    }

    const aboveRoots = new Map();
    const aboveNodes = new Map();

    for (let i = 0; i < rowConditions.length; i++) {
        const cond = rowConditions[i];
        let main = aboveNodes.get(cond[1]);
        let above = aboveNodes.get(cond[0]);
        if (main === undefined) {
            main = new Node(cond[1]);
            aboveNodes.set(cond[1], main);
            aboveRoots.set(cond[1], main);
        }
        if (above === undefined) {
            above = new Node(cond[0]);
            aboveNodes.set(cond[0], above);
        }
        main.nextDict.set(cond[0], above);
        above.prevDict.set(cond[1], main);
        aboveRoots.delete(cond[0]);
    }
    if (aboveRoots.size === 0) return [];

    const leftRoots = new Map();
    const leftNodes = new Map();

    for (let i = 0; i < colConditions.length; i++) {
        const cond = colConditions[i];
        let main = leftNodes.get(cond[1]);
        let left = leftNodes.get(cond[0]);
        if (main === undefined) {
            main = new Node(cond[1]);
            leftNodes.set(cond[1], main);
            leftRoots.set(cond[1], main);
        }
        if (left === undefined) {
            left = new Node(cond[0]);
            leftNodes.set(cond[0], left);
        }
        main.nextDict.set(cond[0], left);
        left.prevDict.set(cond[1], main);
        leftRoots.delete(cond[0]);
    }
    if (leftRoots.size === 0) return [];

    // ########## define a bottom to top order

    const finalCoordinates = new Map();
    let i = 0;
    while (aboveRoots.size > 0) {
        aboveRoots.forEach((v,k) => {
            finalCoordinates.set(k, {"row": i, "col": -1});
            i++;
            v.nextDict.forEach((v2,k2) => {
                v2.prevDict.delete(k);
                if (v2.prevDict.size === 0) {
                    aboveRoots.set(k2, v2);
                }
            });
            aboveRoots.delete(k);
        });
    }
    if(i < aboveNodes.size) return [];

    // ########## define a right to left order

    let j = 0;
    while (leftRoots.size > 0) {
        leftRoots.forEach((v,k) => {
            let temp = finalCoordinates.get(k);
            if (temp === undefined)
                finalCoordinates.set(k, {"row": -1, "col": j});
            else {
                temp["col"] = j;
                finalCoordinates.set(k, temp);
            }
            j++;
            v.nextDict.forEach((v2,k2) => {
                v2.prevDict.delete(k);
                if (v2.prevDict.size === 0) {
                    leftRoots.set(k2, v2);
                }
            });
            leftRoots.delete(k);
        });
    }
    if (j < leftNodes.size) return [];

    let free = 0;
    let freeRow = finalCoordinates.size;
    let freeCol = finalCoordinates.size;
    for (let i = 1; i<=k; i++) {
        if (!finalCoordinates.has(i)) {
            mx[free][free] = i;
            free++;
        }
        else {
            let entry = finalCoordinates.get(i);
            if (entry["row"] !== -1 && entry["col"] !== -1) {
                mx[k-1-entry["row"]][k-1-entry["col"]] = i;
            }
            else {
                if (entry["row"] === -1) {
                    mx[k-freeRow][k-1-entry["col"]] = i;
                    freeRow--;
                }
                else {
                    mx[k-1-entry["row"]][k-freeCol] = i;
                    freeCol--;
                }
            }
        }
    }
    return mx;

};

function Node(val) {
    this.val = val;
    this.prevDict = new Map();
    this.nextDict = new Map();

}
