/**
 * @param {number[][]} customers
 * @return {number}
 */


var averageWaitingTime = function(customers) {
    let avg = customers[0][1];

    let chefsTime = customers[0][0] + customers[0][1];

    for (let i = 1; i < customers.length; i++) {

        if (chefsTime < customers[i][0])
                chefsTime = customers[i][0];
        let delay = chefsTime - customers[i][0] + customers[i][1];
        chefsTime+=customers[i][1];
        avg = (delay + i * avg) / (i+1);
    }



    return avg;
};
/*
var averageWaitingTime = function(customers) {
    let cmdelay = customers[0][1];
    let chefsTime = customers[0][0] + customers[0][1];

    for (let i = 1; i < customers.length; i++) {

        if (chefsTime < customers[i][0])
                chefsTime = customers[i][0];
        cmdelay+= chefsTime - customers[i][0] + customers[i][1];
        chefsTime+=customers[i][1];
    }



    return cmdelay/customers.length;
};
*/
/*
var cumulativeAverage « function(currentAvg, nextX, n) {
    return (nextX+n*currentAvg) / (n+1);
}
*/
