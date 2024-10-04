/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    let half = skill.length / 2;
    skill.sort((a, b) => a - b);
    const last = skill.length - 1;
    const ref = skill[0] + skill[last];
    let sumChem = 0;
    for (let i = 0, j = last; i < half; i++, j--) {
        if (skill[i] + skill[j] !== ref) return -1;
        sumChem += skill[i] * skill[j];
    }

    return sumChem;
};
