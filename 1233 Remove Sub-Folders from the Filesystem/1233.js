/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    if (folder.length === 1) return folder;
    folder.sort();
    const res = [folder[0]];
    let curr = 0;
    let check = 1;
    while (check < folder.length) {
        if (folder[check].slice(0, folder[curr].length) !== folder[curr]) {
            res.push(folder[check]);
            curr = check;
        }
        else {
            if (folder[check][folder[curr].length] !== '/') {
                res.push(folder[check]);
                curr = check;
            }
        }
        check++;
    }
    return res;
}
var removeSubfolders1 = function (folder) {
    const set = new Set();
    const map = new Map();

    for (f of folder) {
        if (set.has(f)) continue;
        const arr = f.split('/');
        //console.log(arr)
        let flag = true;
        for (let i = 1; i < arr.length - 1; i++) {
            const sub = arr.slice(0, i + 1).join('/');
            //console.log("sub", sub)
            if (set.has(sub)) {
                flag = false;
                break;
            }
            if (map.has(sub)) {
                map.get(sub).add(f);
            }
            else {
                map.set(sub, new Set([f]));
            }
        }
        if (flag) {
            if (map.has(f)) {
                map.get(f).forEach(a => set.delete(a));
            }
            set.add(f);
        }
        //console.log(map)
        //console.log(set)
    }

    return Array.from(set.values())
};
