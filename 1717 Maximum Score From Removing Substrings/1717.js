/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//I gave up










var maximumGain3 = function(s, x, y) {
    
    let preference = "ab";
    let secondary = "ba";
    let prefScore = x;
    let secScore = y;

    if (y > x) {
        preference = "ba";
        secondary = "ab";
        prefScore = y;
        secScore = x;
    }

    let points = 0;

    let split = [];
    let scoreChanged = true;
    let jumpOver = false;
    while(scoreChanged) {
        scoreChanged = false;

        split = s.split(preference);
        if (!jumpOver) {
            while (split.length > 1) {
                points += prefScore*(split.length - 1);
                scoreChanged = true;
                s = split.join('');
                split = s.split(preference);
            }

        }

        split = s.split(secondary);
        if (split.length > 1) {
            points += secScore*(split.length - 1);
            scoreChanged = true;
            jumpover = true;
            for (let i = 0; i<split.length-1; i++) {
                let isPref = split[i].slice(-1) + split[i+1].slice(0,1);
                if (isPref === preference) {
                    jumpOver = false;
                    break;
                }
            }
        }
        s = split.join('');
        
    }

    return points;

}



var maximumGain2 = function(s, x, y) {
    let preference = "ab";
    let secondary = "ba";
    let prefScore = x;
    let secScore = y;

    if (y > x) {
        preference = "ba";
        secondary = "ab";
        prefScore = y;
        secScore = x;
    }

    let points = 0;

    let start = -1;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "b") {
            if (start === -1)
                start = i;
        }
        else {
            if (start !== -1 && i - 1 - start > 0) {
                points += calculate(s.substring(start, i), prefScore, secScore, preference, secondary);
            }
            start = -1;
        }
    }
    if (start !== -1 && s.length - 1 - start > 0) {
        points += calculate(s.substring(start, s.length), prefScore, secScore, preference, secondary);
    }
    return points;
};

var calculate = function (s, prefScore, secScore, preference, secondary) {
    let points = 0;

    let prefIdx = s.indexOf(preference);
    if(prefIdx !== -1) {
        points += prefScore;
        
        s = s.slice(0, prefIdx) + s.slice(prefIdx+2);
        points += calculate(s, prefScore, secScore, preference, secondary)
    }
    else {
        let secIdx = s.indexOf(secondary);
        if(secIdx !== -1) {
            points += secScore;
                    
            s = s.slice(0, secIdx) + s.slice(secIdx+2);
            points += calculate(s, prefScore, secScore, preference, secondary)
        }
        else {
                    
            return points;
        }
    }

    return points;

}
