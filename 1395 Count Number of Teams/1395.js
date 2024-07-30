/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let count = 0;
    const I = rating.length-2;
    const J = I + 1;
    const K = J + 1;
    for (let i = 0; i<I; i++) {
        for (let j = i+1; j<J; j++) {
            if (rating[i] < rating[j]) {
                for (let k = j+1; k<K; k++) {
                    if (rating[j] < rating[k])
                        count++;
                }
            }
            else if (rating[i] > rating[j]){
                for (let k = j+1; k<K; k++) {
                    if (rating[j] > rating[k])
                        count++;
                }
            }
        }
    }
    return count;
};
