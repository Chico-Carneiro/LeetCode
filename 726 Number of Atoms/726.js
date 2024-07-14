/**
 * @param {string} formula
 * @return {string}
 */

//I gave up after more than 2 hours. No more time today.
//I'm still reading the Editorial and checking Solutions

var countOfAtoms = function(formula) {
    let counter = {};

    //console.log( countOnSimpleFormula(formula, 2, counter));


    let final = [];
    let stack = [];
    let nums = "0123456789";

    let elName = "";
    let multiplier = "1";

    for (let i = 0; i < formula.length; i++) {
        if (formula[i] !== '(' && formula[i] !== ')' ) {
            elName += formula[i]; 
        }
        else if (formula[i] === '(') {
            if (formula[i-1] === '(') continue;
            if (elName !== "") {
                stack.push([elName, multiplier]);
                elName = "";
                multiplier = "1";
            }
        }
        else if (formula[i] === ')') {
            while (i+1 < formula.length && nums.include(formula[i+1])) {
                multiplier += formula[i+1];
                i++;
            }
            stack[stack.length-1].push([elName, multiplier])
                elName = "";
                multiplier = "1";
        }
    }


    return "H";
};

const countOnSimpleFormula = function(form, multiplier, counter) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";

    let elName = "";
    let elCount = "";
    for (let i = 0; i < form.length; i++) {
        if (upper.includes(form[i])) {
            if(elName !== "") {
                if(elCount === "") {
                    counter[elName] = (counter[elName] || 0) + multiplier;
                }
                else {
                    counter[elName] = (counter[elName] || 0) + (+elCount)*multiplier;
                }
                elName = "";
                elCount = "";
            }
            elName += form[i];
        }
        else if (lower.includes(form[i])) {
            elName += form[i];
        }
        else if (nums.includes(form[i])) {
            elCount += form[i];
        }
    }

    if(elName !== "") {
        if(elCount === "") {
            counter[elName] = (counter[elName] || 0) + multiplier;
        }
        else {
            counter[elName] = (counter[elName] || 0) + (+elCount)*multiplier;
        }
    }

    return counter;
}

    /*
    let final = {};

    let stack = [];
    let temp = "";
    for (let i = 0; i < formula.length; i++) {
        if (formula[i] === '(') {
            stack.push(temp);
            temp = "";
        }
        else if (formula[i] === ')') {

        }
    }
    */
