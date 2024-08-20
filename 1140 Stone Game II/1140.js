/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    if (piles.length < 3) {
        return (piles[0] + (piles[1] || 0))
    }
    let curr = 0;
    let M = 1;

    let a = 0;
    let b = 0;

    const root = new Node(0, false);
    const mapper = new Map();
    buildTree(piles, curr, M, a, b, true, root, mapper);
    calculateOrPostOrderTraversal(root);
    return root.a;

};




function buildTree(piles, curr, M, a, b, isAlice, parent, mapper) {
    const maxX = 2 * M;
    let pilesTakenThisTurn = 0;
    if (curr > piles.length - 1) return null;
    else if (curr + maxX - 1 >= piles.length - 1) {
        const key = "end_"+isAlice+"_"+curr;
        if (mapper.has(key)){
            parent.children.push(mapper.get(key));
        }
        else {
            for (let i = curr; i < piles.length; i++) {
                pilesTakenThisTurn += piles[i];
            }

            let node;
            if (isAlice) {
                node = new Node(pilesTakenThisTurn, true);
                node.a = pilesTakenThisTurn;
                parent.children.push(node);

            }
            else {
                //node = new Node(pilesTakenThisTurn, false, parent, a, b + pilesTakenThisTurn);
                node = new Node(pilesTakenThisTurn, false);
                node.b = pilesTakenThisTurn;
                parent.children.push(node);
            }
            mapper.set(key, node);
        }
    }
    else {
        const key = ''+isAlice+curr+M;
        if (mapper.has(key)) {
            parent.children = mapper.get(key);
        }
        else {
            for (let i = 1; i <= maxX; i++) {
                pilesTakenThisTurn += piles[curr + i - 1];
                if (isAlice) {
                    //const node = new Node(pilesTakenThisTurn, isAlice, parent, a + pilesTakenThisTurn, b);
                    const node = new Node(pilesTakenThisTurn, isAlice);
                    parent.children.push(node);
                    buildTree(piles, curr + i, Math.max(M, i), a + pilesTakenThisTurn, b, false, node, mapper);

                }
                else {
                    //const node = new Node(pilesTakenThisTurn, isAlice, parent, a, b + pilesTakenThisTurn);
                    const node = new Node(pilesTakenThisTurn, isAlice);
                    parent.children.push(node);
                    buildTree(piles, curr + i, Math.max(M, i), a, b + pilesTakenThisTurn, true, node, mapper);
                }
            }
            mapper.set(key, parent.children);
        }
    }
}
//isAlice_curr_M_i
//end_true_5
//function Node(value, isAlice, parent, a, b) {
function Node(value, isAlice) {
    //this.parent = parent;
    this.isAlice = isAlice;
    this.value = value;
    //this.a = a;
    this.a = 0;
    //this.b = b;
    this.b = 0;
    //this.last = last;
    this.children = [];
}

function toStringa(tree, arr, sep = " + ", lvl = 0) {
   
    const t = new Array();
    arr.push(sep + " node " + tree.value)
    tree.children?.forEach(el => t.push(el.value))
    arr.push(t);
    if (lvl > 2) {
        //arr.push("end level");
        return;
    }
    tree.children?.forEach(el => {
        if (el.children.length > 0)
            toStringa(el, arr, sep+" + ", lvl+1);
    });
    return arr;
}

function calculateOrPostOrderTraversal(root) {
    if (root.children.length === 0) {
        return;
    }
    for (let i = 0; i < root.children.length; i++) {
        calculateOrPostOrderTraversal(root.children[i]);
    }
    let bestA = root.children[0].a;
    let bestB = root.children[0].b;
    //let bestDif = root.isAlice ? bestB - bestA : bestA - bestB;

    for (let i = 1; i < root.children.length; i++) {
        if (root.isAlice) {
            //const dif = root.children[i].b - root.children[i].a;
            //if (dif > bestDif) {
            if (root.children[i].b > bestB) {
                bestA = root.children[i].a;
                bestB = root.children[i].b;
                //bestDiff = dif;
            }
        }
        else {
            //const dif = root.children[i].a - root.children[i].b;
            //if (dif > bestDif) {
            if (root.children[i].a > bestA) {
                bestA = root.children[i].a;
                bestB = root.children[i].b;
                //bestDiff = dif;
            }
        }
    }
        
    if (root.isAlice){
        root.a = root.value + bestA;
        root.b = bestB;
    }
    else {
        root.a = bestA;
        root.b = root.value + bestB;
    }
}
