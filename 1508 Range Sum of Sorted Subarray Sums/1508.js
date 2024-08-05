/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let levels = new Array(n);
    let sorted = nums.map((a,i)=>[a,i]).sort((a,b)=>a[0]-b[0]).map(a=>a[1]);
    levels[0] = [-1,0];
    for (let i = 1; i<n; i++)
        levels[i] = [i-1,0];

    var startingLevel = {val: 0};
    for (let i = 0; i<left-1; i++) {
        let choice = choose(nums, sorted, levels, startingLevel);
        console.log("===================================")
        console.log("not", choice);
        console.log("===================================")
        
    }

    let sum = 0;
    for (let i = left-1; i<right; i++) {
        let choice = choose(nums, sorted, levels, startingLevel);
        console.log("===================================")
        console.log("yes", choice);
        console.log("===================================")



        sum+=choice;
    }


    return sum;
};

var choose = function(nums, sorted, levels, startingLevel) {
    let min = Infinity;
    console.log("***************start choosing******************")
    let minLevel = 0;
    let prevLevel = Infinity;
    for (let i = startingLevel.val; i < levels.length; i++) {
        console.log("levels",levels);
        if (levels[i][0] >= prevLevel) {
            console.log("breaking")
            break;
        }
        prevLevel = levels[i][0];
        console.log("setted prevLevel", prevLevel);

        let evaluating = levels[i][1];
        console.log("evaluating", evaluating);

        console.log("sera que? levels[i][0] === i-1", levels[i][0], i-1)
        if (levels[i][0] === i-1) {
            console.log("entering levels[i][0] === i-1")
            
            for (let j = 0; j <= i; j++) {
                evaluating += nums[sorted[j]];
            }
            levels[i][0]+= 1;
            levels[i][1] = evaluating;
            console.log("levels[i]", levels[i]);
        }
        
        if (evaluating < min) {
            min = evaluating;
            minLevel = i;
        }
        
    }

    console.log("minLevel", minLevel);
    console.log("1) levels[minLevel][1]", levels[minLevel][1])
    console.log("2) nums[sorted[levels[minLevel][0]-minLevel]]", nums[sorted[levels[minLevel][0]-minLevel]]);
    console.log("3) nums[sorted[levels[minLevel][0]]]", nums[sorted[levels[minLevel][0]]]);
    levels[minLevel][1] = levels[minLevel][1] - nums[sorted[levels[minLevel][0]-minLevel]] + nums[sorted[levels[minLevel][0]+1]];
    levels[minLevel][0] += 1;
    console.log("levels[minLevel][0]", levels[minLevel][0]);

    if ( levels[minLevel][0] >= nums.length) startingLevel.val++;
    console.log("min",min);
    return min;
}
