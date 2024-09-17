/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const setSingle = new Set();
    const setDouble = new Set();
    s1.split(" ").forEach(s => {
        if (setSingle.has(s)) {
            setDouble.add(s);
            setSingle.delete(s);
        }
        else {
            if (!setDouble.has(s))
                setSingle.add(s);
        }
    });
    s2.split(" ").forEach(s => {
        if (setSingle.has(s)) {
            setDouble.add(s);
            setSingle.delete(s);
        }
        else {
            if (!setDouble.has(s))
                setSingle.add(s);
        }
    });
    return Array.from(setSingle);

};
